// components/LatestJobs.js
import { useState, useEffect } from 'react';
import CONFIG from '../config';
import styles from './LatestJobs.module.css';  // Import the CSS Module
import { useRouter } from 'next/router';
import Image from 'next/image';

const LatestJobs = ({ departmentId }) => {
    const API_URL = CONFIG.BACKEND_URL;
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLatestJobs = async () => {
            try {
                let apiUrl = `${API_URL}/api/jobs?page=1&limit=5`; // Fetch latest 5 jobs
                if (departmentId) {
                    apiUrl += `&departmentId=${departmentId}`;
                }
                const res = await fetch(apiUrl);
                if (!res.ok) {
                    throw new Error('Failed to fetch latest jobs');
                }
                const data = await res.json();
                setJobs(data.jobs);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (departmentId) {
            fetchLatestJobs();
        }
    }, [departmentId]);
    const router = useRouter(); // Initialize the router

    const handleViewDetails = (id) => {
        router.push(`/jobs/${id}`); // Navigate to the job details page
    };
    if (loading) return <p>Loading latest jobs...</p>;
    if (error) return <p></p>;
    if (jobs.length === 0) return <p>No latest jobs available</p>;

    function createSlug(position, company) {
        return `${position}-${company}`.toLowerCase().replace(/\s+/g, '-');
      }

    return (
        <div className={styles.latestJobs}>
            <h3>Latest Jobs in This Department</h3>
            <div className={styles.jobsContainer}>
                {jobs.map((job) => (
                    <div key={job.id} className={styles.jobCard} onClick={() => handleViewDetails(`${job._id}/${createSlug(job.positionName, job.company)}`)}>
                        {/* <img  /> */}
                        <Image src={`${job.imageUrl}`} width={500} height={500}/>
                        <div className={styles.jobDetails}>
                            <h4>{job.positionName}</h4>
                            <p>{job.company}</p>
                            <p>{job.location}</p>
                            <button onClick={() => handleViewDetails(`${job._id}/${createSlug(job.positionName, job.company)}`)}>View Details</button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestJobs;
