import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import JobCard from '../components/JobCard';
import dynamic from 'next/dynamic';
import AdUnit from '../components/AdUnit';
import Pagination from '../components/Pagination';
import CONFIG from '../config';
import styles from '../styles/Home.module.css';
import { SEO, BreadcrumbSchema, FAQSchema } from '../components/SEO';

const API_URL = CONFIG.BACKEND_URL;

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

  // FAQ data for schema
  const faqs = [
    {
      question: "What types of pharma jobs are available on Pharma Talent Hub?",
      answer: "We offer a wide range of pharmaceutical jobs including Quality Assurance (QA), Quality Control (QC), Production, R&D, Regulatory Affairs, Clinical Research, Pharmacovigilance, Medical Coding, Sales, and Marketing positions across India."
    },
    {
      question: "How do I apply for pharma jobs?",
      answer: "Simply browse through our job listings, click on the job that interests you, and follow the application instructions. You can search by location, department, experience level, or keywords to find the perfect match."
    },
    {
      question: "Are there pharma jobs for freshers?",
      answer: "Yes! We regularly post entry-level and fresher positions in various pharmaceutical departments. Use our search filter to find jobs specifically for freshers and recent graduates."
    },
    {
      question: "Which cities have the most pharma job opportunities?",
      answer: "Major pharma hubs in India include Pune, Hyderabad, Mumbai, Ahmedabad, Bangalore, Baddi, Goa, Indore, Nashik, and Aurangabad. We list jobs from all these locations and more."
    },
    {
      question: "How often are new pharma jobs posted?",
      answer: "New pharmaceutical job opportunities are posted daily. We recommend checking back regularly or setting up job alerts to stay updated on the latest openings."
    }
  ];

  return (
    <div>
      <SEO
        title="Latest Pharma Jobs in India"
        description="Find latest pharma jobs across India including QA, QC, Production, R&D and Regulatory roles. Apply now at Pharma Talent Hub."
        canonical="https://pharmatalenthub.in"
        keywords="pharma jobs, pharmaceutical jobs, pharma job portal India, pharma career opportunities, pharmaceutical vacancies, pharma hiring, pharma recruitment India, pharma industry jobs, quality assurance jobs, quality control jobs, pharma production jobs, pharma R&D jobs, clinical research jobs, regulatory affairs jobs, pharma sales jobs, medical representative jobs, pharma jobs in Pune, pharma jobs in Hyderabad, pharma jobs in Mumbai, pharma jobs for freshers"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://pharmatalenthub.in' },
          { name: 'Jobs', url: 'https://pharmatalenthub.in/jobs' }
        ]}
      />

      <FAQSchema faqs={faqs} />

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

        {/* Hero Section with SEO Content */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <h1 className={styles.heroH1}>
              Find Latest Pharma Jobs in India | #1 Pharmaceutical Job Portal
            </h1>
            <p className={styles.heroDescription}>
              Discover your dream career in the pharmaceutical industry with <strong>Pharma Talent Hub</strong>,
              India's leading job portal for pharmacy professionals. We connect talented individuals with top
              pharmaceutical companies across India, offering opportunities in <a href="/?departmentId=qa" className={styles.inlineLink}>Quality Assurance</a>,
              <a href="/?departmentId=qc" className={styles.inlineLink}> Quality Control</a>,
              <a href="/?departmentId=production" className={styles.inlineLink}> Production</a>,
              <a href="/?departmentId=rd" className={styles.inlineLink}> R&D</a>, and
              <a href="/?departmentId=regulatory" className={styles.inlineLink}> Regulatory Affairs</a>.
            </p>
            <p className={styles.heroDescription}>
              Whether you're a <strong>fresher</strong> looking for your first pharma job or an experienced professional
              seeking career advancement, our platform features verified job listings from leading pharmaceutical companies
              in major cities including Pune, Hyderabad, Mumbai, Bangalore, and Ahmedabad. Get expert career guidance,
              apply to multiple positions, and take the next step in your pharmaceutical career today!
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Successful Placements</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Active Job Listings</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Top Companies</span>
              </div>
            </div>
          </div>
        </section>

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

        {/* SEO Content Section */}
        <section className={styles.seoContent}>
          <div className={styles.seoContainer}>
            <div className={styles.seoText}>
              <h2 className={styles.seoH2}>Leading Pharmaceutical Job Portal in India</h2>
              <p>
                Pharma Talent Hub is India's premier job portal dedicated exclusively to pharmaceutical and healthcare professionals.
                Whether you're a fresher looking for your first opportunity or an experienced professional seeking career advancement,
                we connect you with top pharmaceutical companies across India.
              </p>

              <h2 className={styles.seoH2}>Wide Range of Pharma Job Categories</h2>
              <p>
                Explore diverse career opportunities in <a href="/?departmentId=qa" className={styles.categoryLink}><strong>Quality Assurance (QA)</strong></a>,
                <a href="/?departmentId=qc" className={styles.categoryLink}> <strong>Quality Control (QC)</strong></a>,
                <a href="/?departmentId=production" className={styles.categoryLink}> <strong>Production</strong></a>,
                <a href="/?departmentId=rd" className={styles.categoryLink}> <strong>Research & Development (R&D)</strong></a>,
                <a href="/?departmentId=regulatory" className={styles.categoryLink}> <strong>Regulatory Affairs</strong></a>,
                <strong> Clinical Research</strong>, <strong>Pharmacovigilance</strong>, <strong>Medical Coding</strong>,
                <strong> Pharmaceutical Sales</strong>, and <strong>Marketing</strong>. We feature positions from leading
                pharmaceutical companies including Sun Pharma, Cipla, Dr. Reddy's, Lupin, Biocon, and many more.
              </p>

              <h2 className={styles.seoH2}>Pharma Jobs Across Major Indian Cities</h2>
              <p>
                Find pharmaceutical job opportunities in major pharma hubs: <strong>Pune</strong>, <strong>Hyderabad</strong>,
                <strong> Mumbai</strong>, <strong>Ahmedabad</strong>, <strong>Bangalore</strong>, <strong>Baddi</strong>,
                <strong> Goa</strong>, <strong>Indore</strong>, <strong>Nashik</strong>, <strong>Aurangabad</strong>,
                <strong> Vadodara</strong>, <strong>Ankleshwar</strong>, and <strong>Haridwar</strong>. Our platform features
                both metro and tier-2 city opportunities, giving you access to the entire Indian pharmaceutical job market.
              </p>

              <h2>Jobs for Every Experience Level</h2>
              <p>
                Whether you're a <strong>fresher</strong> with an M.Pharma or B.Pharma degree, or have 1, 3, 5, or 10+ years
                of experience, we have opportunities tailored to your career stage. We also feature <strong>internship programs</strong>
                and training positions for students and recent graduates.
              </p>

              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqSection}>
                {faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>

              <h2>Why Choose Pharma Talent Hub?</h2>
              <ul className={styles.benefitsList}>
                <li>✓ Daily updates with latest pharmaceutical job openings</li>
                <li>✓ Direct applications to top pharma companies</li>
                <li>✓ Advanced search filters by location, experience, and department</li>
                <li>✓ Verified job postings from trusted employers</li>
                <li>✓ Career resources and interview preparation tips</li>
                <li>✓ Mobile-friendly platform for job search on the go</li>
              </ul>

              <p className={styles.ctaText}>
                Start your pharmaceutical career journey today! Browse through our extensive database of
                <strong> pharma jobs in India</strong> and apply to positions that match your skills and aspirations.
                Join thousands of pharmaceutical professionals who have found their dream jobs through Pharma Talent Hub.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
