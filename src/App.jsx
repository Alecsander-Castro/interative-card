import { useState } from "react";

import "./App.css";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);
  };

  const handleCardNumber = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCardNumber(value);
  };

  const handleCardCVC = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setCardCVC(value);
  };

  const handleCardMonth = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setCardMonth(value);
  };
  const handleCardYear = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setCardYear(value);
  };

  return (
    <div className="container">
      <div className="cards">
        <div className="card-front">
          <img src="bg-card-front.png" alt="" />
          <p className="cardNumber">{cardNumber}</p>
          <p className="cardName">{cardName}</p>
          <p className="cardDate">
            {cardMonth} / {cardYear}
          </p>
        </div>
        <div className="card-back">
          <img src="bg-card-back.png" alt="" />
          <p className="cardCVC">{cardCVC}</p>
        </div>
      </div>
      {isSubmited ? (
        <div className="forms thanks">
          <img src="icon-complete.svg" alt="" />
          <h1>Obrigado!</h1>
          <p>Você adicionou o seu cartão</p>
          <button onClick={() => window.location.reload(false)}>
            Continuar
          </button>
        </div>
      ) : (
        <div className="forms">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome impresso no cartão: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={cardName}
              placeholder="e.x Maria Aparecida"
              required
              onChange={(e) => setCardName(e.target.value)}
            />
            <label htmlFor="numberCard">Número do cartão: </label>
            <input
              type="text"
              name="numberCard"
              id="numberCard"
              value={cardNumber}
              placeholder="e.x 1234 5678 9123 0000"
              required
              onChange={handleCardNumber}
              maxLength={19}
            />
            <div className="divisior">
              <div className="expiration-card">
                <div className="expiration-date">
                  <label>Data de Validade(MM / AA): </label>
                </div>
                <input
                  type="text"
                  placeholder="MM"
                  value={cardMonth}
                  maxLength={2}
                  required
                  id="cardMonth"
                  onChange={handleCardMonth}
                />
                <input
                  type="text"
                  placeholder="AA"
                  value={cardYear}
                  maxLength={2}
                  required
                  id="cardYear"
                  onChange={handleCardYear}
                />
              </div>

              <div className="cvc-card">
                <div className="cvc-code">
                  <label>CVC: </label>
                </div>
                <input
                  type="text"
                  id="cardCVC"
                  placeholder="e.x 555"
                  value={cardCVC}
                  maxLength={3}
                  required
                  onChange={handleCardCVC}
                />
              </div>
            </div>

            <input type="submit" value="Confirmar" />
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
