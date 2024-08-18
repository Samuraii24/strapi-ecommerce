module.exports = {
  settings: {
    logger: {
      enabled: true,
      level: "info", // Puedes ajustar el nivel de logging según sea necesario
    },
    errors: {
      enabled: true,
    },
    security: {
      enabled: true,
      // Configura las políticas de seguridad según tus necesidades
    },
    cors: {
      enabled: true,
      // Configura las opciones de CORS si es necesario
      origin: "*", // Permite todas las orígenes; ajusta según tu seguridad
    },
    poweredBy: {
      enabled: true,
    },
    query: {
      enabled: true,
      // Configura las opciones de consulta si es necesario
    },
    body: {
      enabled: true,
      // Asegúrate de que el cuerpo de las solicitudes esté habilitado
      // Puedes agregar más opciones si es necesario
    },
    session: {
      enabled: true,
      // Configura las opciones de sesión si es necesario
    },
    favicon: {
      enabled: true,
      // Configura el favicon si es necesario
    },
    public: {
      enabled: true,
    },
  },
};
