// import Head from 'next/head';
// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';

// const Navbar = dynamic(() => import('../../components/Navbar.js'));
// const Footer = dynamic(() => import('../../components/Footer.js'));
// import JobDetailsComponent from '../../components/JobDetails.js';
// import CONFIG from '../../config.js';
// import LatestJobs from '../../components/LatestJobs.js';

// const JobDetails = () => {
//     const API_URL = CONFIG.BACKEND_URL; 
//     const router = useRouter();
//     const { id } = router.query;

//     const [job, setJob] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [timer, setTimer] = useState(4); 
//     const [canProceed, setCanProceed] = useState(false);

//     useEffect(() => {
//         const fetchJob = async () => {
//             if (id) {
//                 try {
//                     const res = await fetch(`${API_URL}/api/jobs?id=${id}`);
//                     if (!res.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     const data = await res.json();
//                     setJob(data.jobs[0]);
//                 } catch (error) {
//                     setError(error.message);
//                 } finally {
//                     setLoading(false);
//                 }
//             }
//         };

//         fetchJob();
//     }, [id]);

//     // Timer Logic
//     useEffect(() => {
//         if (timer > 0) {
//             const countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
//             return () => clearTimeout(countdown);
//         } else {
//             setCanProceed(true); 
//         }
//     }, [timer]);

//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
//         script.async = true;
//         script.setAttribute('data-ad-client', 'ca-pub-1862946013812607');
//         document.head.appendChild(script);

//         return () => {
//             document.head.removeChild(script); 
//         };
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;
//     if (!job) return <p>Job not found</p>;

//     return (
//         <div>
//             <Head>
//                 <title>{job.positionName} | {job.company}</title>
//                 <meta
//                     name="description"
//                     content={`Apply for the position of ${job.positionName} at ${job.company}. Location: ${job.location}. Salary: ${job.salary}`}
//                 />
//                 <meta
//                     name="keywords"
//                     content={`Jobs, ${job.positionName}, ${job.company}, Careers`}
//                 />
//                 <meta property="og:title" content={`${job.positionName} | {job.company}`} />
//                 <meta property="og:description" content={`Apply for the position of ${job.positionName} at ${job.company}.`} />
//                 <meta property="og:image" content={`${job.logo}`} />
//                 <meta property="og:url" content={`${CONFIG.FRONTEND_URL}/jobs/${id}`} />
//                 <meta name="twitter:card" content="summary_large_image" />
//                 <meta name="twitter:image" content={`${job.logo}`} />
//             </Head>
//             <Navbar />

//             <main>
//                 {!canProceed ? (
//                     <div
//                         style={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             height: '300px',
//                             backgroundColor: '#f8f9fa',
//                             borderRadius: '8px',
//                             border: '1px solid #dee2e6',
//                             color: '#6c757d',
//                             fontSize: '18px',
//                             fontWeight: 'bold',
//                         }}
//                     >
//                         Please wait {timer} seconds to view the content...
//                     </div>
//                 ) : (
//                     <>
//                         <div className="ad-wrapper">
//                             <ins
//                                 className="adsbygoogle"
//                                 style={{ display: 'block' }}
//                                 data-ad-client="ca-pub-1862946013812607"
//                                 data-ad-slot="2123663121"
//                                 data-ad-format="auto"
//                                 data-full-width-responsive="true"
//                             ></ins>
//                         </div>

//                         <JobDetailsComponent job={job} />

//                         <div className="ad-wrapper mobile-ad">
//                             <ins
//                                 className="adsbygoogle"
//                                 style={{ display: 'block' }}
//                                 data-ad-client="ca-pub-1862946013812607"
//                                 data-ad-slot="8776703987"
//                                 data-ad-format="rectangle"
//                                 data-full-width-responsive="true"
//                             ></ins>
//                         </div>

//                         <LatestJobs departmentId={job.department} />

//                         <div className="ad-wrapper mobile-ad">
//                             <ins
//                                 className="adsbygoogle"
//                                 style={{ display: 'block' }}
//                                 data-ad-client="ca-pub-1862946013812607"
//                                 data-ad-slot="3543991351"
//                                 data-ad-format="link"
//                                 data-full-width-responsive="true"
//                             ></ins>
//                         </div>

//                         <Footer />
//                     </>
//                 )}
//             </main>

//             <style jsx>{`
//                 .ad-wrapper {
//                     margin: 20px 0;
//                     text-align: center;
//                 }
//                 .mobile-ad {
//                     display: none;
//                 }
//                 @media (max-width: 768px) {
//                     .mobile-ad {
//                         display: block;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default JobDetails;

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../../components/Navbar.js'));
const Footer = dynamic(() => import('../../components/Footer.js'));
import JobDetailsComponent from '../../components/JobDetails.js';
import CONFIG from '../../config.js';
import LatestJobs from '../../components/LatestJobs.js';

const JobDetails = () => {
    const API_URL = CONFIG.BACKEND_URL;
    const router = useRouter();
    const { id } = router.query;

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [timer, setTimer] = useState(5);
    const [canProceed, setCanProceed] = useState(false);
    const [showPopup, setShowPopup] = useState(true);

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

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
            return () => clearTimeout(countdown);
        } else {
            setCanProceed(true);
        }
    }, [timer]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.setAttribute('data-ad-client', 'ca-pub-1862946013812607');
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!job) return <p>Job not found</p>;

    return (
        <div>
            <Head>
                <title>{job.positionName} | {job.company}</title>
                <meta name="description" content={`Apply for the position of ${job.positionName} at ${job.company}. Location: ${job.location}. Salary: ${job.salary}`} />
            </Head>
            <Navbar />
            <main>
               
            {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <div className="ad-container">
                            <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-1862946013812607" data-ad-slot="8776703987" data-ad-format="rectangle" data-full-width-responsive="true"></ins>
                            </div>
                            <p>Please wait {timer} seconds to proceed...</p>
                            <div className="ad-container">
                            <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-1862946013812607" data-ad-slot="2123663121" data-ad-format="auto" data-full-width-responsive="true"></ins>
                            </div>
                            {canProceed && <button onClick={() => setShowPopup(false)}>Close</button>}
                        </div>
                    </div>
                )}

                {!showPopup && (
                    <>
                        <div className="ad-wrapper">
                            <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-1862946013812607" data-ad-slot="4267938756" data-ad-format="auto" data-full-width-responsive="true"></ins>
                        </div>
                        <JobDetailsComponent job={job} />
                        <div className="ad-wrapper">
                            <ins className="adsbygoogle" style={{ display: 'inline-block', width: '300px', height: '250px' }} data-ad-client="ca-pub-1862946013812607" data-ad-slot="3543991351"></ins>
                        </div>
                        <LatestJobs departmentId={job.department} />
                        <Footer />
                    </>
                )}
            </main>
            <style jsx>{`
                .popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .popup-content {
                    background: white;
                    padding: 20px;
                    text-align: center;
                    border-radius: 10px;
                    max-width: 400px;
                    width: 100%;
                }
                .ad-container {
                    margin: 20px 0;
                }
                .ad-wrapper {
                    margin: 20px 0;
                    text-align: center;
                }
                button {
                    background: #ff5722;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                }
                button:hover {
                    background: #e64a19;
                }
            `}</style>
        </div>
    );
};

export default JobDetails;
