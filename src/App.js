import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import JobList from './components/JobList';
import JobApply from './components/JobApply';
import AddJob from './components/AddJob';
import Chatbot from './components/Chatbot';
import './App.css';


const fetchJobs = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/jobs'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

function App() {
    const [refreshJobs, setRefreshJobs] = useState(false);

    return (
        <Router>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<JobList />} />
                    <Route path="/apply" element={<JobApply />} />
                    <Route path="/admin" element={<AddJob refreshJobs={fetchJobs} />} />
                    <Route path="/chat" element={<Chatbot />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
