import { useEffect, useState } from "react";
import API_BASE from "../api/config";

export default function Admin() {
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  // Fetch contact form data
  useEffect(() => {
    fetch(`${API_BASE}/contact`)
      .then((res) => res.json())
      .then((data) => setContacts(data));

    fetch(`${API_BASE}/subscribe`)
      .then((res) => res.json())
      .then((data) => setSubscribers(data));
  }, []);

  // Add project
  const addProject = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    await fetch(`${API_BASE}/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Project added");
    e.target.reset();
  };

  // Add client
  const addClient = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    await fetch(`${API_BASE}/clients`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Client added");
    e.target.reset();
  };

  return (
    <section>
      <h2>Admin Panel</h2>

      {/* ADD PROJECT */}
      <h3>Add Project</h3>
      <form onSubmit={addProject}>
        <input name="image" placeholder="Project Image URL" required />
        <input name="name" placeholder="Project Name" required />
        <input name="description" placeholder="Project Description" required />
        <button>Add Project</button>
      </form>

      <br />

      {/* ADD CLIENT */}
      <h3>Add Client</h3>
      <form onSubmit={addClient}>
        <input name="image" placeholder="Client Image URL" required />
        <input name="name" placeholder="Client Name" required />
        <input
          name="description"
          placeholder="Client Description"
          required
        />
        <input
          name="designation"
          placeholder="Designation (CEO, Designer)"
          required
        />
        <button>Add Client</button>
      </form>

      <br />

      {/* CONTACT DATA */}
      <h3>Contact Form Submissions</h3>
      {contacts.map((c, i) => (
        <div key={i} className="card">
          <p><b>Name:</b> {c.name}</p>
          <p><b>Email:</b> {c.email}</p>
          <p><b>Mobile:</b> {c.mobile}</p>
          <p><b>City:</b> {c.city}</p>
        </div>
      ))}

      <br />

      {/* SUBSCRIBERS */}
      <h3>Newsletter Subscribers</h3>
      {subscribers.map((s, i) => (
        <div key={i} className="card">
          <p>{s.email}</p>
        </div>
      ))}
    </section>
  );
}
