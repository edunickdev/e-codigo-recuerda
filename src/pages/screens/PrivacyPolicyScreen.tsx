const PrivacyPolicyScreen = () => {
  return (
    <div className="flex flex-col w-full h-auto py-20 px-8 md:py-14 md:px- md:p-32 text-darkblue">
      <h1 className="text-center font-semibold text-2xl">
        Política de Privacidad
      </h1>
      <h3 className="text-end text-xl py-7">
        Última actualización: 29/12/2025
      </h3>
      <h3 className="py-5">
        <b className="text-lg">Focus App,</b> creada y mantenida por{" "}
        <b className="text-lg">Entra. ,</b> respeta la privacidad de sus
        usuarios y se compromete a protegerla. Esta política de privacidad
        explica cómo manejamos los datos en nuestra aplicación.
      </h3>
      <ol className="flex flex-col gap-y-5">
        <li>
          <h2 className="font-semibold">1. Recolección de datos</h2>
          <span>
            Esta aplicación no recopila ni almacena datos personales de los
            usuarios. Toda la información, configuraciones o preferencias que el
            usuario establece en la aplicación se guarda únicamente en el
            dispositivo local. No se realiza ninguna transmisión de datos a
            servidores externos ni se conecta a internet.
          </span>
        </li>
        <li>
          <h2 className="font-semibold">2. Uso de datos</h2>
          <span>
            Dado que no se recopilan datos personales, no hay uso de estos. Las
            configuraciones guardadas por el usuario (como tiempos de descanso y
            ejercicio) son manejadas localmente dentro del dispositivo.
          </span>
        </li>
        <li>
          <h2 className="font-semibold">
            3. Publicidad y servicios de terceros
          </h2>
          <span>
            Esta aplicación no contiene publicidad ni utiliza servicios de
            terceros que puedan recopilar información del usuario.
          </span>
        </li>
        <li>
          <h2 className="font-semibold">4. Permisos</h2>
          <span>
            La aplicación no requiere permisos adicionales más allá de los
            necesarios para su funcionamiento básico.
          </span>
        </li>
        <li>
          <h2 className="font-semibold">5. Cambios en esta política</h2>
          <span>
            Nos reservamos el derecho de actualizar esta política de privacidad
            en cualquier momento. Si realizamos cambios, actualizaremos la fecha
            de esta política. Se recomienda revisar periódicamente esta política
            para estar informado sobre posibles actualizaciones.
          </span>
        </li>
        <li>
          <h2 className="font-semibold">6. Contacto</h2>
          <span>
            Si tienes alguna pregunta o inquietud sobre esta política de
            privacidad, puedes ponerte en contacto con nosotros en:{" "}
            <b>nicolas.sarmiento@entra.com.co</b>
          </span>
        </li>
      </ol>
    </div>
  );
};

export default PrivacyPolicyScreen;
