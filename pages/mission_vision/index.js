import Head from 'next/head';
import styles from './MissionVision.module.css'; // Custom CSS module for styling
import dynamic from 'next/dynamic';
// import Navbar from '../../components/Navbar';
const Navbar = dynamic(() => import('../../components/Navbar'));
// import Footer from '../../components/Footer';
const Footer = dynamic(() => import('../../components/Footer'));


const MissionVision = () => {
  return (
    

<div>
{/* <Head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
</Head> */}
<Navbar />

<div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Our Mission & Vision</h1>
        <p className={styles.subtitle}>
          Empowering Careers in Healthcare and Pharmaceuticals
        </p>
      </section>

      {/* Mission Section */}
      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Our Mission</h2>
          <p className={styles.description}>
            Our mission is to ignite and elevate the careers of freshers and experienced
            professionals within the healthcare and pharmaceutical sectors by providing them
            with a comprehensive, user-friendly platform to access the best job opportunities
            available.
          </p>
          <p className={styles.description}>
            We aim to empower job seekers with tools, resources, and guidance to navigate
            the competitive landscape, hone their skills, and achieve their aspirations. By
            fostering a community of growth, we ensure that every individual has the chance to
            thrive in their chosen field.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Our Vision</h2>
          <p className={styles.description}>
            Our vision is to build an enduring, transformative platform that serves as the
            ultimate connection point for fresh talent and seasoned professionals seeking
            opportunities in healthcare and pharmaceuticals.
          </p>
          <p className={styles.description}>
            By empowering individuals with career-changing opportunities and a network of
            like-minded professionals, we aspire to support their long-term professional
            growth. Through innovation, collaboration, and dedication, we aim to create a
            brighter future for the healthcare and pharmaceutical industries.
          </p>
        </div>
      </section>
    </div>

<Footer />
</div>
  );
};

export default MissionVision;
