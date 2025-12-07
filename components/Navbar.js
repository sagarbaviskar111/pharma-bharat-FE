import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CONFIG from '../config';

const Navbar = ({ onHomeClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [departments, setDepartments] = useState([]);
  const router = useRouter();
  const navbarRef = useRef(null);

  const isOnJobsPage = router.pathname === '/';
  const API_URL = CONFIG.BACKEND_URL;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch(`${API_URL}/api/departments`);
        const data = await response.json();
        setDepartments(data || []);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [API_URL]);

  const handleHomeClick = () => {
    onHomeClick && onHomeClick();
    router.push('/');
  };

  return (
    <nav className={styles.navbar} ref={navbarRef}>
      <div className={styles.logo} onClick={handleHomeClick}>
        Pharma <span>Talent</span> <span>Hub</span>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li>
          <a onClick={handleHomeClick} className={styles.homeLink}>🏠 Home</a>
        </li>
        {isOnJobsPage && (
          <li className={styles.dropdown}>
            <a>
              🏥 Department <i className="fas fa-caret-down"></i>
            </a>
            <ul className={styles.dropdownMenu}>
              {departments?.length > 0 ? (
                departments.map((department, index) => (
                  <li key={index}>
                    <Link href={`?departmentId=${department._id}`}>{department.name}</Link>
                  </li>
                ))
              ) : (
                <li>Loading...</li>
              )}
            </ul>
          </li>
        )}
         <li>
          <a href="/industry_insights">🏭 Industry Insights</a>
        </li>
        <li>
          <a href="/mission_vision">📃 Mission & Vision</a>
        </li>
        <li>
          <a href="/about_us">👨‍⚕️ About Us</a>
        </li>
        {/* <li>
          <a href="/study_material">📚 Study Material</a>
        </li>
        <li>
          <a href="/pharma_news">📰 Industry Insites</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
