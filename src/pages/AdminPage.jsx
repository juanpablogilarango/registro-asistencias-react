/*Se importa el hook useNavigate para poder redirigir al usuario a otra ruta, como al login.
useEffect: permite ejecutar algo cuando el componente se monta.
useState: define variables de estado, en este caso, las asistencias.
Se importan los dos componentes que se van a usar dentro de esta página:
AttendanceForm: para registrar nuevas asistencias.
AttendanceList: para mostrar la lista y marcar la salida.*/
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";
/*asistencias contiene la lista de registros.
Se inicializa desde el localStorage (si ya hay datos guardados).
Si no hay nada, se inicia como un arreglo vacío.
*/
function AdminPage() {
  const navigate = useNavigate();
  const [asistencias, setAsistencias] = useState(() => {
    const data = localStorage.getItem("asistencias");
    return data ? JSON.parse(data) : [];
  });
/*Este efecto se ejecuta cuando carga el componente.
Si no hay token en el localStorage, redirige al usuario al login.*/
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
/*Elimina el token y nombre de usuario del localStorage.
Luego redirige al login.*/
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };
/*Agrega una nueva asistencia al arreglo actual.
Luego guarda la lista actualizada en localStorage.*/
  const registrarAsistencia = (nueva) => {
    const actualizadas = [...asistencias, nueva];
    setAsistencias(actualizadas);
    localStorage.setItem("asistencias", JSON.stringify(actualizadas));
  };
/*Usa la fecha actual para generar la hora de salida.
Busca el elemento correspondiente en el arreglo y le añade esa hora.
Luego actualiza el estado y el localStorage.*/
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
/*Pregunta al usuario si quiere borrar todo.
Si confirma, borra la lista de asistencias y limpia el localStorage.*/
  const borrarAsistencias = () => {
    const confirmacion = window.confirm("¿Estás seguro de que quieres eliminar todas las asistencias?");
    if (confirmacion) {
      setAsistencias([]);
      localStorage.removeItem("asistencias");
    }
  };
/*Muestra el título y el nombre del usuario logueado.
Botones para cerrar sesión y eliminar los datos.
Muestra la lista de asistencias.
Le pasa por props:
asistencias: los datos.
onMarcarSalida: función para actualizar la salida.
Muestra el formulario para registrar una nueva asistencia.
Le pasa la función que guarda ese nuevo dato.*/
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
/*exporta*/
export default AdminPage;
