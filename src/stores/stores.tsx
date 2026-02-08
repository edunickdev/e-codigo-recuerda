import { create } from "zustand";
import menuInterface from "../data/interfaces/generalInterfaces";
import { Project, Projects, ProjectsActions } from "./store_types";
import axios from "axios";

export const useNavMenu = create<menuInterface>((set) => ({
  title: "",
  route: "",
  changeTitle: (menu: string) => set({ title: menu }),
  changeRoute: (route: string) => set({ route: route }),
}));

// Theme store for dark/light mode
interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  initTheme: () => void;
}

export const useTheme = create<ThemeState>((set) => ({
  isDark: false,
  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.isDark;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      if (newTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return { isDark: newTheme };
    }),
  initTheme: () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
    set({ isDark });
  },
}));

export const useProjects = create<Projects & ProjectsActions>((set, get) => ({
  cv_link: "",
  projects: [],
  selected_project: 0,
  platzi_courses: [],
  other_courses: [],
  apiKey: "",
  baseUrl: "https://ecrprojects.cdn.prismic.io/api/v2",
  loading: false,
  fetchProjects: async () => {
    if (get().platzi_courses.length > 0) {
      return;
    }

    await get().fetchAPIKey();

    const currentKey = get().apiKey;

    if (!currentKey) {
      return;
    }

    const response = await axios.get(
      `${get().baseUrl}/documents/search?ref=${currentKey}`,
    );

    const cv_link = response.data.results.filter(
      (project: { type: string }) => project.type === "cv",
    );

    set({ cv_link: cv_link[0].data.cv_link.url });

    const filteredProjects = response.data.results.filter(
      (project: { type: string }) => project.type === "project",
    );

    const filteredCourses = response.data.results.filter(
      (project: { type: string }) => project.type === "platzicourses",
    );

    const otherCourses = response.data.results.filter(
      (project: { type: string }) => project.type === "others-platform",
    );

    const others = otherCourses.map((course: any) => {
      const newCourse = {
        id_course: course.id,
        title: course.data.title_course[0].text,
        image_url: course.data.logo_course.url,
        alt_data: course.data.alt_data[0].text,
      };
      return newCourse;
    });

    const courses = filteredCourses.map((course: any) => {
      const newCourse = {
        id_course: course.id,
        title: course.data.title_course[0].text,
        image_url: course.data.logo_course.url,
        alt_data: course.data.alt_data[0].text,
      };
      return newCourse;
    });

    const projects = filteredProjects.map((project: any) => {
      const techs = [];
      for (let i = 1; i < 7; i++) {
        if (project.data.technologies[0][`tech${i}`][0] === undefined) {
          break;
        } else {
          techs.push(project.data.technologies[0][`tech${i}`][0].text);
        }
      }

      const newProject: Project = {
        id_project: project.id,
        title: project.data.title[0].text,
        link_repo: project.data.link_repo.url,
        main_image: project.data.main_image.url,
        other_images: [
          project.data.other_images[0].first_img.url,
          project.data.other_images[0].second_image.url,
          project.data.other_images[0].third_image.url,
          project.data.other_images[0].fourty_image.url,
          project.data.other_images[0].five_image.url,
        ],
        technologies: techs,
        name: project.data.title[0].text,
        description: project.data.desciption[0].text,
        deploy: project.data.deploy?.[0]?.text ?? "Sin información",
        learned: project.data.learned[0].text,
        strength: project.data.strength[0].text,
        status: project.data.status[0].text,
      };

      return newProject;
    });

    set({ other_courses: others });
    set({ platzi_courses: courses });
    set({ projects });
    set({ loading: true });
  },
  fetchAPIKey: async () => {
    let response = await axios.get(`${get().baseUrl}`);

    set({ apiKey: response.data.refs[0].ref });
  },
  selectProject: (index: number) => {
    set({ selected_project: index });
  },
}));
