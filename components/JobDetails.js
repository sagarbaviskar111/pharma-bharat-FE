// import React, { useEffect, useState } from 'react';
// import styles from '../styles/jobDetails.module.css';
// import CONFIG from '../config';
// import Image from 'next/image';

// const API_URL = CONFIG.BACKEND_URL; // Use environment variable for API URL

// const JobDeatils = ({ job }) => {
//   const [latestJobs, setLatestJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const departmentId = job?.department; // Get departmentId from job prop

//   // Fetch the latest jobs when the component mounts
//   useEffect(() => {
//     const fetchLatestJobs = async () => {
//       setLoading(true);
//       try {
//         let currentPage = 1; // You can add pagination logic here if needed
//         let limit = 5; // Fetch 5 jobs
//         let apiUrl = `${API_URL}/api/jobs?page=${currentPage}&limit=${limit}`;

//         if (departmentId) {
//           apiUrl += `&departmentId=${departmentId}`;
//         }

//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         if (data && data.jobs) {
//           setLatestJobs(data.jobs); // Set the latest jobs data
//         }
//       } catch (error) {
//         console.error("Error fetching latest jobs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (departmentId) {
//       fetchLatestJobs(); // Only fetch if departmentId exists
//     }
//   }, [departmentId]);

//   return (
//     <div className={styles.jobCard}>
//       <div className={styles.jobHeader}>
//         {/* <img/> */}

//         <Image
//           src={`${job.logo}`}
//           alt={job.company}
//           className={styles.authorPhoto}
//           width={500} height={500}
//         />

//         <div className={styles.jobDetails}>
//           <h1>{job.company} Hiring For {job.positionName} </h1>
//           <p>
//             <strong>Position Name:</strong> {job.positionName}
//           </p>
//           <p>
//             <strong>Organization:</strong> {job.company}
//           </p>
//           <p>
//             <strong>Qualification:</strong> {job.qualification}
//           </p>
//           <p>
//             <strong>Experience:</strong> {job.experience}
//           </p>
//           <p>
//             <strong>Salary:</strong> {job.salary}
//           </p>
//           <p>
//             <strong>Location:</strong> {job.location}
//           </p>
//           {job.email && <p>
//             <strong>Email:</strong> {job.email}
//           </p>}
//         </div>
//       </div>
//       <div className={styles.jobDescription}>
//         {job?.responsibilities[0] && <h2>Responsibilities</h2>}
//         <ul>
//           {job?.responsibilities?.map((responsibility, index) => (
//             <li key={index}>{responsibility}</li>
//           ))}
//         </ul>

//         {job?.skills[0] && <h2>Skills</h2>}
//         <ul>
//           {job?.skills?.map((skill, index) => (
//             <li key={index}>{skill}</li>
//           ))}
//         </ul>
//         <h2>Company Overview</h2>
//         <p>{job.companyOverview}</p>
//         <br />
//         {/* <h2>Tags</h2> */}
//         <p>{job.tags}</p>

//       </div>
//       <div className={styles.jobFooter}>
//         <h2>Apply For Job</h2>
//         <div className={styles.socialIcons}>
//           {/* Add social media icons here if needed */}
//         </div>
//         <div className={styles.applicationLinks}>
//           <a href={job?.applylink} target="_blank" rel="noopener noreferrer" >
//             Apply Here
//           </a>

//         </div>
//       </div>


//     </div>
//   );
// };

// export default JobDeatils;

import React, { useEffect, useState } from 'react';
import styles from '../styles/jobDetails.module.css';
import CONFIG from '../config';
import Image from 'next/image';

const API_URL = CONFIG.BACKEND_URL; // Use environment variable for API URL

const JobDetails = ({ job }) => {
  const [latestJobs, setLatestJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const departmentId = job?.department; // Get departmentId from job prop

  // Fetch the latest jobs when the component mounts
  useEffect(() => {
    const fetchLatestJobs = async () => {
      setLoading(true);
      try {
        let currentPage = 1; // You can add pagination logic here if needed
        let limit = 5; // Fetch 5 jobs
        let apiUrl = `${API_URL}/api/jobs?page=${currentPage}&limit=${limit}`;

        if (departmentId) {
          apiUrl += `&departmentId=${departmentId}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data && data.jobs) {
          setLatestJobs(data.jobs); // Set the latest jobs data
        }
      } catch (error) {
        console.error("Error fetching latest jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    if (departmentId) {
      fetchLatestJobs(); // Only fetch if departmentId exists
    }
  }, [departmentId]);

  return (
    <div className={styles.jobCard}>
      <div className={styles.jobHeader}>
        <Image
          src={`${job.logo}`}
          alt={job.company}
          className={styles.authorPhoto}
          width={500}
          height={500}
        />

        <div className={styles.jobDetails}>
          <h1>
            {job.company} Hiring For {job.positionName}
          </h1>
          <p>
            <strong>Position Name:</strong> {job.positionName}
          </p>
          <p>
            <strong>Organization:</strong> {job.company}
          </p>
          <p>
            <strong>Qualification:</strong> {job.qualification}
          </p>
          <p>
            <strong>Experience:</strong> {job.experience}
          </p>
          <p>
            <strong>Salary:</strong> {job.salary}
          </p>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          {job.email && (
            <p>
              <strong>Email:</strong> {job.email}
            </p>
          )}
        </div>
      </div>
      <div className={styles.jobDescription}>
        {job?.responsibilities[0] && <h2>Responsibilities</h2>}
        <ul>
          {job?.responsibilities?.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>

        {job?.skills[0] && <h2>Skills</h2>}
        <ul>
          {job?.skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h2>Company Overview</h2>
        <p>{job.companyOverview}</p>
        <br />
        <p>{job.tags}</p>
      </div>

      {/* Standard Google Ad */}
      <div>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-1862946013812607"
          data-ad-slot="7168701749"
          data-ad-format="fluid"
          data-ad-layout-key="-6p+ea+1p-66+9c"
        ></ins>
        <script>
          {`
            (adsbygoogle = window.adsbygoogle || []).push({});
          `}
        </script>
      </div>

      {/* AMP Ad */}
      <div>
        <amp-ad
          width="100vw"
          height="320"
          type="adsense"
          data-ad-client="ca-pub-1862946013812607"
          data-ad-slot="4267938756"
          data-auto-format="rspv"
          data-full-width=""
        >
          <div overflow=""></div>
        </amp-ad>
      </div>

      <div className={styles.jobFooter}>
        <h2>Apply For Job</h2>
        <div className={styles.applicationLinks}>
          <a href={job?.applylink} target="_blank" rel="noopener noreferrer">
            Apply Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

