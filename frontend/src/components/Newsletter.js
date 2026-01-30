import API_BASE from "../api/config";

export default function Newsletter() {
  const subscribe = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    await fetch(`${API_BASE}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    alert("Subscribed successfully!");
    e.target.reset();
  };

  return (
    <section>
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={subscribe}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}
