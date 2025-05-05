import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AttendanceList from "../components/AttendanceList";

function PublicPage() {
  const [asistencias, setAsistencias] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("asistencias");
    if (data) {
      setAsistencias(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <h1>Página pública</h1>
      <p>Bienvenido al sistema de registro de visitas.</p>

      <Link to="/login">
        <button>Iniciar sesión como administrador</button>
      </Link>

      <hr />

      <h2>Asistencias registradas</h2>
      <AttendanceList asistencias={asistencias} />
    </div>
  );
}

export default PublicPage;
