import { useEffect, useState } from "react";
import "./App.css";
const BASE_URL = "https://localhost:8000/cards";

function App() {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState("");
  async function getCards() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    if (data) {
      setCards(data);
    }
  }
  useEffect(() => {
    getCards();
  }, []);

  async function handleDelete(id) {
    await fetch(BASE_URL + `/${id}`, {
      method: "DELETE",
    });
    getCards();
  }

  async function handleCreateCard() {
    await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    setName("");
    getCards();
  }
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <br />
      <button onClick={handleCreateCard}>create</button>
      {cards.map((card) => {
        return (
          <div key={card._id} className="card">
            <h2>{card.name}</h2>
            <button onClick={() => handleDelete(card._id)}>x</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
