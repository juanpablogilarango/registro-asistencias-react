import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";

function AdminPage() {
  const navigate = useNavigate();
  const [asistencias, setAsistencias] = useState(() => {
    const data = localStorage.getItem("asistencias");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const registrarAsistencia = (nueva) => {
    const actualizadas = [...asistencias, nueva];
    setAsistencias(actualizadas);
    localStorage.setItem("asistencias", JSON.stringify(actualizadas));
  };

  const marcarHoraSalida = (index) => {
    const ahora = new Date();
    const horaSalida = ahora.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const actualizadas = asistencias.map((item, i) =>
      i === index ? { ...item, horaSalida } : item
    );

    setAsistencias(actualizadas);
    localStorage.setItem("asistencias", JSON.stringify(actualizadas));
  };

  const borrarAsistencias = () => {
    const confirmacion = window.confirm("¿Estás seguro de que quieres eliminar todas las asistencias?");
    if (confirmacion) {
      setAsistencias([]);
      localStorage.removeItem("asistencias");
    }
  };

  return (
    <div>
      <h1>Panel de Administración</h1>
      <p>Bienvenido, {localStorage.getItem("username")}.</p>

      <button onClick={handleLogout}>Cerrar sesión</button>
      <button onClick={borrarAsistencias}>Borrar todas las asistencias</button>

      <hr />

      <AttendanceList
        asistencias={asistencias}
        onMarcarSalida={marcarHoraSalida}
      />

      <hr />

      <AttendanceForm onRegister={registrarAsistencia} />
    </div>
  );
}

export default AdminPage;
