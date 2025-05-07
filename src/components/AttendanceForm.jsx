import { useState } from "react";
/* esto de aqui controla los campos del formulario usando usestate y onregister*/
function AttendanceForm({ onRegister }) {
  const [nombre, setNombre] = useState("");
  const [hora, setHora] = useState("");
  const [motivo, setMotivo] = useState("");
  const [mensaje, setMensaje] = useState("");
/*evite el comportamiento default del formulario al recargar pagina*/
  const handleSubmit = (e) => {
    e.preventDefault();
/*Validación: si algún campo está vacío, muestra un mensaje de error.*/
    if (!nombre.trim() || !hora.trim() || !motivo.trim()) {
      setMensaje("Por favor completa todos los campos.");
      return;
    }
/*Crea un objeto con los datos ingresados y lo envía al componente padre mediante onRegister.*/
    const nuevaAsistencia = { nombre, hora, motivo };
    onRegister(nuevaAsistencia);
/*Limpia los campos, muestra mensaje de éxito, y lo borra automáticamente después de 3 segundos.*/
    setMensaje("Asistencia registrada con éxito.");
    setNombre("");
    setHora("");
    setMotivo("");

    setTimeout(() => setMensaje(""), 3000);
  };
/*Encabezado del formulario y vínculo con handleSubmit.
Input controlado para el nombre.
Input de tipo time para capturar la hora de llegada.
Campo para ingresar el motivo de la visita.
Botón que envía el formulario.
Si existe algún mensaje, se muestra al usuario.*/
  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Asistencia</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />
      <input
        type="text"
        placeholder="Motivo"
        value={motivo}
        onChange={(e) => setMotivo(e.target.value)}
      />
      <button type="submit">Registrar</button>

      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}
/* exportacion*/
export default AttendanceForm;
