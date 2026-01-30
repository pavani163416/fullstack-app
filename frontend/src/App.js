import { BrowserRouter, Routes, Route } from "react-router-dom";

import Projects from "./components/Projects";
import Clients from "./components/Clients";
import ContactForm from "./components/ContactForm";
import Newsletter from "./components/Newsletter";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Projects />
              <Clients />
              <ContactForm />
              <Newsletter />
            </>
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
