import React, { useState } from "react";
import axios from "axios";
import "./JobApply.css";

const JobApply = () => {
    const [formData, setFormData] = useState({
        jobId: "",
        candidateName: "",
        contact: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/apply", formData);
            setMessage(response.data.message || "Application submitted successfully!");
        } catch (error) {
            setMessage("Failed to submit application.");
        }
    };

    return (
        <div className="apply-job-container">
            <h2>Apply for a Job</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="jobId"
                    placeholder="Job ID"
                    value={formData.jobId}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="candidateName"
                    placeholder="Your Name"
                    value={formData.candidateName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact Details"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
};

export default JobApply;
