import React, { useState } from "react";

function AttendanceList({ asistencias, onMarcarSalida }) {
  const [filter, setFilter] = useState("");

  const filteredAttendance = asistencias.filter((item) => {
    const name = item.nombre?.toLowerCase() || "";
    const hora = item.hora || "";
    return (
      name.includes(filter.toLowerCase()) ||
      hora.includes(filter)
    );
  });

  return (
    <div>
      <h2>Lista de Asistencias</h2>

      <input
        type="text"
        placeholder="Filtrar por nombre u hora"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: "1rem", display: "block" }}
      />

      {filteredAttendance.length === 0 ? (
        <p>No hay asistencias que coincidan.</p>
      ) : (
        <ul>
          {filteredAttendance.map((entry, index) => (
            <li key={index}>
              <strong>{entry.nombre}</strong> – Entrada: {entry.hora}
              {entry.motivo && <> – Motivo: {entry.motivo}</>}
              {entry.horaSalida ? (
                <> – Salida: {entry.horaSalida}</>
              ) : (
                <button
                  onClick={() => onMarcarSalida(index)}
                  style={{ marginLeft: "1rem" }}
                >
                  Marcar salida
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AttendanceList;
