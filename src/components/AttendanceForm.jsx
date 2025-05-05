import { useState } from "react";

function AttendanceForm({ onRegister }) {
  const [nombre, setNombre] = useState("");
  const [hora, setHora] = useState("");
  const [motivo, setMotivo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !hora.trim() || !motivo.trim()) {
      setMensaje("Por favor completa todos los campos.");
      return;
    }

    const nuevaAsistencia = { nombre, hora, motivo };
    onRegister(nuevaAsistencia);

    setMensaje("Asistencia registrada con éxito.");
    setNombre("");
    setHora("");
    setMotivo("");

    setTimeout(() => setMensaje(""), 3000);
  };

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

export default AttendanceForm;
