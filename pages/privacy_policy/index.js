import React from 'react';
import styles from './PrivacyPolicy.module.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';
// import Navbar from '../../components/Navbar';
const Navbar = dynamic(() => import('../../components/Navbar'));
// import Footer from '../../components/Footer';
const Footer = dynamic(() => import('../../components/Footer'));

const PrivacyPolicy = () => {
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
      <header>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.date}>Effective Date: 20/11/2024</p>
      </header>
      <section>
        <h2 className={styles.sectionTitle}>1. What Information We Collect</h2>
        <p className={styles.paragraph}>We may collect two types of information:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Personal Information:</strong> Your name, email address, or contact details when you sign up or share job-related details like preferences or resumes.
          </li>
          <li className={styles.listItem}>
            <strong>Non-Personal Information:</strong> Browser type, IP address, and how you use the website, collected via cookies and other tools.
          </li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Share job updates and relevant notifications.</li>
          <li className={styles.listItem}>Improve our website and make it user-friendly.</li>
          <li className={styles.listItem}>Respond to your messages or feedback.</li>
          <li className={styles.listItem}>Analyze website performance to serve you better.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>3. Sharing Your Information</h2>
        <p className={styles.paragraph}>We do not sell your information. We share it only when:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>It is required by law.</li>
          <li className={styles.listItem}>Working with trusted third parties to manage or improve our website (e.g., analytics tools).</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>4. Cookies</h2>
        <p className={styles.paragraph}>Cookies are small files that help improve your experience on our website. They allow us to:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Enhance website functionality for you.</li>
          <li className={styles.listItem}>Understand how you use the site to improve it.</li>
        </ul>
        <p className={styles.paragraph}>
          You can turn off cookies in your browser settings, but some features might not work as expected.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>5. How We Keep Your Information Safe</h2>
        <p className={styles.paragraph}>
          We take steps to protect your information from unauthorized access, loss, or misuse. However, no online system is 100% secure, so please use the website with care.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>6. Links to Other Websites</h2>
        <p className={styles.paragraph}>
          We may share links to other websites, but we are not responsible for how they handle your information. Please review their privacy policies before sharing any personal details.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>7. Your Rights</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>See, update, or delete your information.</li>
          <li className={styles.listItem}>Request us to stop collecting or using your data.</li>
          <li className={styles.listItem}>Report concerns if you feel your data has been mishandled.</li>
        </ul>
        <p className={styles.paragraph}>
          To exercise your rights, email us at: <a href="mailto:avinashrohankar123@gmail.com" className={styles.link}>avinashrohankar123@gmail.com</a>
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>8. Updates to This Policy</h2>
        <p className={styles.paragraph}>
          We may update this policy from time to time. Please check this page regularly to stay informed. By continuing to use the website, you agree to any updates.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>9. Contact Us</h2>
        <p className={styles.paragraph}>
          If you have any questions about this Privacy Policy, you can reach us at:
        </p>
        <p className={styles.paragraph}>
          Email: <a href="mailto:avinashrohankar123@gmail.com" className={styles.link}>avinashrohankar123@gmail.com</a>
        </p>
      </section>
    </div>
    <Footer />
      </div>
  );
};

export default PrivacyPolicy;
