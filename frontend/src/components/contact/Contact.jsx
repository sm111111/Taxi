import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccessToast, showErrorToast } from "../assets/utils/toastNotifications";


const Contact = () => {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: "",
    });



    const handleUPdateContact = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/contact", contactData);
            showSuccessToast("Success! Message sent successfully.");
            setContactData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending contact data", error);
            showErrorToast("Error submitting form. Try again later!");
        }
    };

    return (
        <div className="contact-container">
            <ToastContainer />
            <div className="contact-form">
                <h2>Contact Us</h2>

                <form onSubmit={handleUPdateContact}>
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={contactData.name}
                            onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={contactData.email}
                            onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            name="message"
                            value={contactData.message}
                            onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>

            <div className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093654!2d144.95373531550458!3d-37.81720974202188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1df49d7%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614970538690!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
