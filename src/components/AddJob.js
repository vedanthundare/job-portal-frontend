import React, { useState } from 'react';
import axios from 'axios';
import './AddJob.css';

const AddJob = ({ refreshJobs }) => {
    const [jobTitle, setJobTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/add-job', {
                title: jobTitle,
                description,
                location,
                salary,
                contact_email: contactEmail,
            });
            setMessage(response.data.message);
            setJobTitle('');
            setDescription('');
            setLocation('');
            setSalary('');
            setContactEmail('');
            refreshJobs();
        } catch (error) {
            console.error('Error adding job:', error);
            setMessage('Error adding job. Please try again.');
        }
    };

    return (
        <div className="add-job-container">
            <h2>Add New Job</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Job Title <br />
                    <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Description <br />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Location <br />
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Salary <br />
                    <input
                        type="number"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Contact Email <br />
                    <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Job</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddJob;
