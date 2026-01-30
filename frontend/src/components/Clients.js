import { useEffect, useState } from "react";
import API_BASE from "../api/config";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/clients`)
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  return (
    <section>
      <h2>Happy Clients</h2>
      <div className="card-grid">
        {clients.map((client, index) => (
          <div className="card" key={index}>
            <img src={client.image} alt="client" />
            <p>{client.description}</p>
            <h4>{client.name}</h4>
            <small>{client.designation}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
