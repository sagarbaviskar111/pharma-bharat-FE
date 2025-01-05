// pages/jobs/[id].js
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
// import Navbar from '../../components/Navbar';
const Navbar = dynamic(() => import('../../../components/Navbar.js'));
// import Footer from '../../components/Footer';
const Footer = dynamic(() => import('../../../components/Footer.js'));
import JobDeatils from '../../../components/JobDetails.js';
import CONFIG from '../../../config.js';
import LatestJobs from '../../../components/LatestJobs.js';

const JobDetails = () => {
    const API_URL = CONFIG.BACKEND_URL; // Use environment variable for API URL

    const router = useRouter();
    const { id } = router.query;

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            if (id) {
                try {
                    const res = await fetch(`${API_URL}/api/jobs?id=${id}`);
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await res.json();
                    
                    setJob(data.jobs[0]);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchJob();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!job) return <p>Job not found</p>;


   

    return (
        <div>
            <Head>
        <title>{job.positionName} | {job.company}</title>
        <meta
          name="description"
          content={`Apply for the position of ${job.positionName} at ${job.company}. Location: ${job.location}. Salary: ${job.salary}`}
        />
        <meta
          name="keywords"
          content={`Pharmacy Jobs, ${job.positionName}, ${job.company}, Healthcare Careers`}
        />
      </Head>
            <Navbar />
            <main>
<JobDeatils job={job}/>
<LatestJobs departmentId={job.department} />


            </main>
            <Footer />
        </div>
    );
};

export default JobDetails;
