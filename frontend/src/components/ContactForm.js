import API_BASE from "../api/config";

export default function ContactForm() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    await fetch(`${API_BASE}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Form submitted");
    e.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Get a Free Consultation</h2>
      <input name="name" placeholder="Full Name" required />
      <input name="email" placeholder="Email" required />
      <input name="mobile" placeholder="Mobile Number" required />
      <input name="city" placeholder="City" required />
      <button type="submit">Submit</button>
    </form>
  );
}
