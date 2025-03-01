import React, { useState } from "react";
import "./DashBoardSupportTicket.css";
import { AiFillBank } from "react-icons/ai";

const DashBoardSupportTicket = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Ticket Submitted", form);
        alert("Your support ticket has been submitted.");
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="DashBoardSupportTicket-container">
            <div className="card">
                <AiFillBank className="icon-main" />
                <h2 className="title">Submit a Support Ticket</h2>
                <form onSubmit={handleSubmit} className="form">
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <div className="input-wrapper">
                            <AiFillBank className="icon" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-wrapper">
                            <AiFillBank className="icon" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="subject">Subject</label>
                        <div className="input-wrapper">
                            <AiFillBank className="icon" />
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <div className="input-wrapper">
                            <AiFillBank className="icon" />
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">
                        Submit Ticket
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DashBoardSupportTicket;
