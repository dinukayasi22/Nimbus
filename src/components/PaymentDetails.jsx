import React, { useState } from "react";

const PaymentDetails = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardType, setCardType] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [error, setError] = useState("");

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Basic card type validation based on card number
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const masterCardRegex = /^5[1-5][0-9]{14}$/;
    const amexRegex = /^3[47][0-9]{13}$/;

    if (visaRegex.test(cardNumber) && cardType !== "Visa") {
      setError("Card number does not match selected card type.");
      return;
    } else if (masterCardRegex.test(cardNumber) && cardType !== "MasterCard") {
      setError("Card number does not match selected card type.");
      return;
    } else if (amexRegex.test(cardNumber) && cardType !== "American Express") {
      setError("Card number does not match selected card type.");
      return;
    } else if (!visaRegex.test(cardNumber) && !masterCardRegex.test(cardNumber) && !amexRegex.test(cardNumber)) {
      setError("Invalid card number.");
      return;
    } else {
      setError("");
    }

    // Process payment or send data to backend
    console.log({
      cardNumber,
      expiryDate,
      cvv,
      cardHolderName,
      cardType,
      saveCard,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Card Type</label>
          <div className="flex items-center">
            <label className="flex items-center mr-4">
              <input
                type="radio"
                name="cardType"
                value="Visa"
                checked={cardType === "Visa"}
                onChange={(e) => setCardType(e.target.value)}
                className="mr-2"
                required
              />
              <img src="src\components\visa.png" alt="Visa" className="h-8" />
            </label>
            <label className="flex items-center mr-4">
              <input
                type="radio"
                name="cardType"
                value="MasterCard"
                checked={cardType === "MasterCard"}
                onChange={(e) => setCardType(e.target.value)}
                className="mr-2"
              />
              <img src="src\components\mastercard.png" alt="MasterCard" className="h-8" />
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="cardType"
                value="American Express"
                checked={cardType === "American Express"}
                onChange={(e) => setCardType(e.target.value)}
                className="mr-2"
              />
              <img src="src\components\amex.png" alt="American Express" className="h-8" />
            </label>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="expiryDate">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="cvv">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="123"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="cardHolderName">
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardHolderName"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            <input
              type="checkbox"
              checked={saveCard}
              onChange={(e) => setSaveCard(e.target.checked)}
              className="mr-2"
            />
            Save this card for future payments
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentDetails;
