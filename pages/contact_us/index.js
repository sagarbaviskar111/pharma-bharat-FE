import Head from 'next/head';
import styles from '../../styles/Contact.module.css'
import dynamic from 'next/dynamic';
// import Navbar from '../../components/Navbar';
const Navbar = dynamic(() => import('../../components/Navbar'));
// import Footer from '../../components/Footer';
const Footer = dynamic(() => import('../../components/Footer'));

export default function Contact() {
  return (
    <>
     <div>
    {/* <Head>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
    </Head> */}
    <Navbar />
    <Head>
        <title>Contact Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.contactCard}>
          <div className={styles.cardContent}>
            <h2>Contact Us</h2>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <i className="fas fa-phone-alt"></i>
                <span>+91 8999213129</span> {/* Updated phone number */}
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-envelope"></i>
                <span>avinashrohankar123@gmail.com</span> {/* Updated email */}
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-map-marker-alt"></i>
                <span>Pune</span> {/* Updated address */}
              </div>
            </div>
            <button className={styles.contactButton}>Get in Touch</button>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}
