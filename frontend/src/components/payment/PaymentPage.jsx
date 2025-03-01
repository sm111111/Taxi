import React, { useState } from "react";
import { SiVisa, SiMastercard, SiGooglepay, SiPhonepe } from "react-icons/si";
import "./PaymentPage.css";

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [paymentDetails, setPaymentDetails] = useState({ name: "John Doe", card: "", cvv: "", upi: "" });

    const handleChange = (e) => {
        setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Payment Successful");
    };

    return (
        <div className="payment-container">
            <h2>Payment Page</h2>
            <h3>{paymentDetails.name}</h3>

            <div className="payment-methods">
                <button onClick={() => setPaymentMethod("visa")} className={paymentMethod === "visa" ? "active" : ""}><SiVisa size={20} /> Visa</button>
                <button onClick={() => setPaymentMethod("mastercard")} className={paymentMethod === "mastercard" ? "active" : ""}><SiMastercard size={20} /> MasterCard</button>
                <button onClick={() => setPaymentMethod("googlepay")} className={paymentMethod === "googlepay" ? "active" : ""}><SiGooglepay size={20} /> Google Pay</button>
                <button onClick={() => setPaymentMethod("phonepe")} className={paymentMethod === "phonepe" ? "active" : ""}><SiPhonepe size={20} /> PhonePe</button>
            </div>

            {paymentMethod === "visa" || paymentMethod === "mastercard" ? (
                <form className="payment-form" onSubmit={handleSubmit}>
                    <label>Card Number</label>
                    <input type="text" name="card" value={paymentDetails.card} onChange={handleChange} required />

                    <label>CVV</label>
                    <input type="text" name="cvv" value={paymentDetails.cvv} onChange={handleChange} required />

                    <button type="submit" className="pay-btn">Pay Now</button>
                </form>
            ) : null}

            {paymentMethod === "googlepay" || paymentMethod === "phonepe" ? (
                <form className="payment-form" onSubmit={handleSubmit}>
                    <label>UPI ID</label>
                    <input type="text" name="upi" value={paymentDetails.upi} onChange={handleChange} required />

                    <button type="submit" className="pay-btn">Pay Now</button>
                </form>
            ) : null}
        </div>
    );
};

export default PaymentPage;
