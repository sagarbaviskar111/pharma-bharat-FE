import Head from 'next/head';
import styles from './TermsConditions.module.css';
import dynamic from 'next/dynamic';
// import Navbar from '../../components/Navbar';
const Navbar = dynamic(() => import('../../components/Navbar'));
// import Footer from '../../components/Footer';
const Footer = dynamic(() => import('../../components/Footer'));

const TermsConditions = () => {
  return (
    <div>
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head> */}

      {/* Separate Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Terms and Conditions</h1>
          <p className={styles.intro}>
            Welcome to Pharma Talent Hub! By using our website, you agree to the following terms and conditions. Please review them carefully before accessing our services.
          </p>
        </header>

        {/* Terms and Conditions Content */}
        <section className={styles.content}>
          {/* Each Article Represents a Section */}
          <article>
            <h2 className={styles.sectionTitle}>1. Scope of Services</h2>
            <p className={styles.sectionText}>
              Pharma Talent Hub shares job links and information about vacancies in the healthcare and pharmaceutical industries worldwide. We do not create job opportunities, hire candidates, or act as a recruitment agency. All job-related information is sourced from publicly available platforms.
            </p>
          </article>

          <article>
            <h2 className={styles.sectionTitle}>2. User Eligibility</h2>
            <p className={styles.sectionText}>
              Users must be at least 18 years of age to access and use the platform. It is the user's responsibility to verify the authenticity of job opportunities before applying.
            </p>
          </article>

          <article>
            <h2 className={styles.sectionTitle}>3. Job Listings and Links</h2>
            <p className={styles.sectionText}>
              Job listings on Pharma Talent Hub are sourced from third-party platforms. We do not guarantee the availability, accuracy, or authenticity of these listings. Details such as job descriptions and deadlines are subject to change by the respective employers.
            </p>
          </article>

          <article>
            <h2 className={styles.sectionTitle}>4. External Links Disclaimer</h2>
            <p className={styles.sectionText}>
              Our website may contain links to third-party websites for user convenience. We are not responsible for the content, policies, or functionality of these external websites. Access to third-party links is at the user’s own risk.
            </p>
          </article>

          <article>
            <h2 className={styles.sectionTitle}>5. User Responsibilities</h2>
            <p className={styles.sectionText}>
              Users must use Pharma Talent Hub responsibly and in compliance with applicable laws. They should verify job details directly with the source and are responsible for any actions taken based on the information provided.
            </p>
          </article>

          <article>
            <h2 className={styles.sectionTitle}>6. Disclaimer of Warranties</h2>
            <p className={styles.sectionText}>
              Pharma Talent Hub provides its services "as is" without guarantees of uninterrupted or error-free operation. We disclaim all warranties regarding the accuracy and reliability of the information shared on the platform.
            </p>
          </article>

          <article>
            <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
            <p className={styles.sectionText}>
              Pharma Talent Hub is not liable for inaccuracies, outdated job information, fraudulent listings, or losses arising from reliance on shared content. Users must exercise due diligence when applying for job opportunities.
            </p>
          </article>

          <article>
            <h2 className={styles.sectionTitle}>8. Privacy Policy</h2>
            <p className={styles.sectionText}>
              By using our website, users agree to our Privacy Policy. We do not share user data with third-party employers or recruitment platforms.
            </p>
          </article>

          <article>
            <h2 className={styles.sectionTitle}>9. Intellectual Property</h2>
            <p className={styles.sectionText}>
              All content on Pharma Talent Hub, including text and graphics, is protected under intellectual property laws. Users are prohibited from reproducing or redistributing any content without prior written permission.
            </p>
          </article>

          <article>
            <h2 className={styles.sectionTitle}>10. Changes to Terms and Conditions</h2>
            <p className={styles.sectionText}>
              We reserve the right to modify these Terms and Conditions at any time. Continued use of the website constitutes acceptance of the revised terms.
            </p>
          </article>

          <article>
            <h2 className={styles.sectionTitle}>11. Governing Law</h2>
            <p className={styles.sectionText}>
              These Terms and Conditions are governed by the laws of India. Any disputes will be resolved under the jurisdiction of Indian courts.
            </p>
          </article>

          <article>
            <h2 className={styles.sectionTitle}>12. Contact Us</h2>
            <p className={styles.sectionText}>
              For inquiries or assistance, please contact us at: <a href="mailto:avinashrohankar123@gmail.com" className={styles.email}>avinashrohankar123@gmail.com</a>.
            </p>
          </article>
        </section>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default TermsConditions;
