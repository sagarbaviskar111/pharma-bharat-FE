// pages/jobs/[id].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('../../components/Navbar.js'));
const Footer = dynamic(() => import('../../components/Footer.js'));
import JobDeatils from '../../components/JobDetails.js';
import CONFIG from '../../config.js';
import LatestJobs from '../../components/LatestJobs.js';
import { SEO, JobSchema, BreadcrumbSchema, FAQSchema } from '../../components/SEO';

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

    // FAQ data for job page
    const jobFAQs = [
        {
            question: `What are the requirements for ${job.positionName}?`,
            answer: `This position requires ${job.qualification} with ${job.experience} of experience in the pharmaceutical industry.`
        },
        {
            question: `What is the salary for ${job.positionName} at ${job.company}?`,
            answer: `The salary range for this position is ${job.salary}.`
        },
        {
            question: `Where is this ${job.positionName} job located?`,
            answer: `This position is located in ${job.location}.`
        },
        {
            question: `How do I apply for this job?`,
            answer: `You can apply for this position by clicking the "Apply Here" button on this page.`
        }
    ];

    return (
        <div>
            <SEO
                title={`${job.positionName} in ${job.location} | Apply Now`}
                description={`Apply for ${job.positionName} at ${job.company} in ${job.location}. Salary: ${job.salary}. Experience: ${job.experience}. Apply online at Pharma Talent Hub.`}
                canonical={`https://pharmatalenthub.in/jobs/${id}`}
                keywords={`${job.positionName}, ${job.company} jobs, pharma jobs in ${job.location}, pharmaceutical jobs, ${job.qualification} jobs, pharma careers`}
            />

            <JobSchema job={{
                ...job,
                datePosted: job.createdAt,
                description: job.companyOverview || job.positionName,
                employmentType: 'FULL_TIME',
                hiringOrganization: {
                    name: job.company,
                    sameAs: 'https://pharmatalenthub.in'
                },
                jobLocation: {
                    address: {
                        addressLocality: job.location,
                        addressCountry: 'IN'
                    }
                },
                baseSalary: job.salary,
                validThrough: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
            }} />

            <BreadcrumbSchema
                items={[
                    { name: 'Home', url: 'https://pharmatalenthub.in' },
                    { name: 'Jobs', url: 'https://pharmatalenthub.in' },
                    { name: job.positionName, url: `https://pharmatalenthub.in/jobs/${id}` }
                ]}
            />

            <FAQSchema faqs={jobFAQs} />

            <Navbar />

            <main>
                <JobDeatils job={job} />
                <LatestJobs departmentId={job.department} />


            </main>

            <Footer />
        </div>
    );
};

export default JobDetails;
