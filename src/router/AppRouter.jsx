import { Layouyt } from "../Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import { Cola, CrearTicket, Escritorio, Ingresar } from "../pages";
export const AppRouter = () => {
  return (
    <Layouyt>
      <Routes>
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/cola" element={<Cola />} />
        <Route path="/crear" element={<CrearTicket />} />
        <Route path="/escritorio" element={<Escritorio />} />
        <Route path="/*" element={<Navigate to="/ingresar" />} />
      </Routes>
    </Layouyt>
  );
};
