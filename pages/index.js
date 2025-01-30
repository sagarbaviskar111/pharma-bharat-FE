import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import JobCard from '../components/JobCard';
import dynamic from 'next/dynamic';
import AdUnit from '../components/AdUnit';  // Import AdUnit component
import Pagination from '../components/Pagination';
import CONFIG from '../config';
import styles from '../styles/Home.module.css'; 

const API_URL = CONFIG.BACKEND_URL; // API URL from the config

const Navbar = dynamic(() => import('../components/Navbar'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      const { departmentId } = router.query;
      let apiUrl = `${API_URL}/api/jobs?page=${currentPage}&limit=${limit}`;
      if (departmentId) {
        apiUrl += `&departmentId=${departmentId}`;
      }
      if (searchQuery) {
        apiUrl += `&query=${encodeURIComponent(searchQuery)}`;
      }

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data.jobs || []);
        setTotalPages(data.totalPages || 0);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, [router.query, currentPage, limit, searchQuery]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = () => {
    setSearchQuery(searchInput.trim());
    setCurrentPage(1);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleHomeClick = () => {
    setSearchInput('');
    setSearchQuery('');
    setCurrentPage(1);
    router.push('/');
  };

  return (
    <div>
      <Navbar onHomeClick={handleHomeClick} />

      <main>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className={styles.searchInput}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            <i className="fas fa-search"></i> Search
          </button>
        </div>

        {/* Top Ad Unit */}
        <AdUnit slot="1234567890" format="auto" layout="in-article" align="center" />

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', minHeight: '75vh' }}>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard
                key={job._id}
                id={job._id}
                image={`${job.imageUrl}`}
                date={job.createdAt}
                company={job.company}
                title={job.positionName}
                experience={job.experience}
                payment={job.salary}
                positionName={job.positionName}
              />
            ))
          ) : (
            <p>No jobs found for your search query.</p>
          )}
        </div>

        {/* Middle Ad Unit */}
        <AdUnit slot="4267938756" format="auto" layout="in-article" align="center" style={{ marginTop: '20px' }} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        {/* Bottom Ad Unit */}
        <AdUnit slot="6543210987" format="auto" layout="in-article" align="center" style={{ marginTop: '20px' }} />
      </main>

      <Footer />
    </div>
  );
}
