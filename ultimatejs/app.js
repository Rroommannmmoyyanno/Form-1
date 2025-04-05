import { useState } from "react";
import "./App.css";

function App() {
  const [mensaje, setMensaje] = useState("¡Hola desde React!");

  return (
    <div className="app-container">
      <h1>Mi primera página con React</h1>
      <p>{mensaje}</p>
      <button onClick={() => setMensaje("¡Cambiaste el mensaje!")}>
        Cambiar mensaje
      </button>
    </div>
  );
}

export default App;
