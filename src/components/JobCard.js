import React, {  useRef } from 'react';
import './JobCard.css';

const JobCard = ({ job }) => {
    const cardRef = useRef(null);

    return (
        <div className="job-card" ref={cardRef}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> Rs {job.salary}</p>
            <p><strong>Contact:</strong> {job.contact_email}</p>
        </div>
    );
};

export default JobCard;
