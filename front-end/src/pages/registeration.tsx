import { useState } from "react";
import {  Link } from "react-router-dom";

export default function RegistrationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
        e.preventDefault();
        alert(`Գրանցված է\nԱնուն: ${form.name}\nԷլ. փոստ: ${form.email}`);
        fetch('http://localhost:3000/client',{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({...form})

        })
        .then (json => json.json())
        .then (data => {
            console.log(data.user);
            console.log(data.message);
            
        })
  };

  return (
    <div style={{ position: "relative" }}>
      <Link 
        to="/" 
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 100,
          borderRadius: "50%",
          overflow: "hidden",
          width: "90px",
          height: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1e1e1e",
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
          transition: "transform 0.2s ease",
          
          
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <img 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEUAAABLAA3QACbZACdyABUpAAccAAXbACjjACkQAAM7AAugAB25ACHdACjYACfhACkzAAmQABq8ACItAAiVABtWABCCABffACheABHFACSoAB5rABOaAByeAB0WAARjABKvACCBABd8ABYkAAbDGkhDAAABBElEQVR4Aa2RBXbDQAwFZSuJTPoyh/n+d+x2/awydx4szIKA/ock5cX7ZrmiVDjLqXjryqwiBaxusqp+qRJWaUmC7HoVe/H4YAx2CWQjOd2agXU1ySZDsBuXWwluR1EWNBrAPLu9BXegWca19jTRMnhLLomO6ldPBtgQJSOrKbAG1tOv5zU4jbNDZm2cXATaxNl1DblQZLOnyKjQnc9KesHNz/tNx2/6n86LP1cGWOLCo/U8pX3uDgqW5xVqyDkboIfntbWjhxocSz4v6zUDml5rovtiuwaQncnZZMGymoqt+dE1L7otCkeyG73gdMmUEWDN2oJeU/fbtdk6LRN6n/uSvs0Dq+EScqFlP+MAAAAASUVORK5CYII=" 
          alt="Home"
          style={{
            width: "30px",
            height: "30px",
            objectFit: "contain",
          }}
        />
      </Link>

      <div
        style={{
          backgroundColor: "#121212",
          color: "#eee",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#1e1e1e",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.7)",
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <h2 style={{ textAlign: "center", margin: "0 0 10px 0" }}>Գրանցում</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="name" style={{ fontSize: "14px", color: "#aaa" }}>
              Անուն
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Մուտքագրեք ձեր անունը"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #333",
                backgroundColor: "#252525",
                color: "#eee",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="email" style={{ fontSize: "14px", color: "#aaa" }}>
              Էլ. փոստ
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Մուտքագրեք ձեր էլ. փոստը"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #333",
                backgroundColor: "#252525",
                color: "#eee",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="password" style={{ fontSize: "14px", color: "#aaa" }}>
              Գաղտնաբառ
            </label>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Մուտքագրեք գաղտնաբառը"
                value={form.password}
                onChange={handleChange}
                required
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #333",
                  backgroundColor: "#252525",
                  color: "#eee",
                  fontSize: "16px",
                  width: "100%",
                  outline: "none",
                  paddingRight: "40px",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  background: "transparent",
                  border: "none",
                  color: "#aaa",
                  cursor: "pointer",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.backgroundColor = "#333";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#aaa";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#e00b0b",
              color: "#fff",
              padding: "14px",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b00909")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e00b0b")}
          >
            Գրանցվել
          </button>
        </form>
      </div>
    </div>
  );
}