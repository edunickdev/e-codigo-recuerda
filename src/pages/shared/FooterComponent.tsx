import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-light dark:bg-bg-dark border-t border-border-color">
      <div className="container mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="font-bold text-lg text-accent dark:text-accent-dark">
              El Código Recuerda
            </span>
            <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-1">
              © {currentYear} Eduard Nicolás Sarmiento Herrera
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/edunickdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-text-secondary dark:text-text-secondary-dark
                hover:text-accent dark:hover:text-accent-dark hover:bg-accent/10 dark:hover:bg-accent-dark/10
                transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/eduard-nicolas-sarmiento-herrera"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-text-secondary dark:text-text-secondary-dark
                hover:text-accent dark:hover:text-accent-dark hover:bg-accent/10 dark:hover:bg-accent-dark/10
                transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:edunickdev@gmail.com"
              className="p-2 rounded-full text-text-secondary dark:text-text-secondary-dark
                hover:text-accent dark:hover:text-accent-dark hover:bg-accent/10 dark:hover:bg-accent-dark/10
                transition-all duration-300"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
