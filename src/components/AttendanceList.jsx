import React, { useState } from "react";
/*filter guarda el texto que el usuario escribe para buscar en la lista.
setFilter actualiza ese valor cuando se escribe en el input.*/
function AttendanceList({ asistencias, onMarcarSalida }) {
  const [filter, setFilter] = useState("");
/*Se aplica un filtro a la lista original de asistencias.
Si el nombre incluye el texto buscado o si la hora de entrada coincide con lo buscado, se incluye en la lista filtrada.
Se hace toLowerCase() para que la búsqueda no sea sensible a mayúsculas/minúsculas.*/
  const filteredAttendance = asistencias.filter((item) => {
    const name = item.nombre?.toLowerCase() || "";
    const hora = item.hora || "";
    return (
      name.includes(filter.toLowerCase()) ||
      hora.includes(filter)
    );
  });
/*Es un input controlado. Lo que el usuario escriba, se guarda en filter.

Ese valor sirve para filtrar los resultados en tiempo real.
Si no hay asistencias que coincidan con el filtro, se muestra un mensaje.
Se recorre el array filteredAttendance y se muestra cada entrada.
Se muestra el nombre, hora de entrada, y si existe, el motivo.
Si el objeto entry ya tiene una propiedad horaSalida, se muestra esa hora.
Si no la tiene, se muestra un botón "Marcar salida" que al presionar llama a la función onMarcarSalida, indicando al padre cuál entrada debe actualizarse.*/
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
/*Se exporta el componente para usarlo desde otras páginas*/
export default AttendanceList;
