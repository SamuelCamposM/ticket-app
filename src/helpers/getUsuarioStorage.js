export const getUsuarioStorage = () => {
  const agente = localStorage.getItem("agente");
  const escritorio = localStorage.getItem("escritorio");

  return { agente, escritorio };
};
