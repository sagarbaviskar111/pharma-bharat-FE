import styles from '../styles/Footer.module.css';

const Footer = () => {


  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <p className={styles.companyName}>© 2024 PharmaTalentHub. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div style={{ gap: '20px', marginBottom: '15px' }} className={styles.navLink2} >
          <a
            href="/terms_and_conditions"
            style={{
              color: '#ccc',
              fontSize: '16px',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '10px 15px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffcc00';
              e.target.style.color = '#1a1a1a';
              e.target.style.border = '1px solid #ffcc00';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ccc';
              e.target.style.border = '1px solid transparent';
            }}
            onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(255, 204, 0, 0.6)'}
            onBlur={(e) => e.target.style.boxShadow = 'none'}
          >
            Terms & Conditions
          </a>
          <a
            href="/mission_vision"
            style={{
              color: '#ccc',
              fontSize: '16px',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '10px 15px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffcc00';
              e.target.style.color = '#1a1a1a';
              e.target.style.border = '1px solid #ffcc00';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ccc';
              e.target.style.border = '1px solid transparent';
            }}
            onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(255, 204, 0, 0.6)'}
            onBlur={(e) => e.target.style.boxShadow = 'none'}
          >
            Mission & Vision
          </a>
          <a
            href="/privacy_policy"
            style={{
              color: '#ccc',
              fontSize: '16px',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '10px 15px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffcc00';
              e.target.style.color = '#1a1a1a';
              e.target.style.border = '1px solid #ffcc00';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ccc';
              e.target.style.border = '1px solid transparent';
            }}
            onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(255, 204, 0, 0.6)'}
            onBlur={(e) => e.target.style.boxShadow = 'none'}
          >
            Privacy Policy
          </a>

          <a
            href="/contact_us"
            style={{
              color: '#ccc',
              fontSize: '16px',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '10px 15px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffcc00';
              e.target.style.color = '#1a1a1a';
              e.target.style.border = '1px solid #ffcc00';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ccc';
              e.target.style.border = '1px solid transparent';
            }}
            onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(255, 204, 0, 0.6)'}
            onBlur={(e) => e.target.style.boxShadow = 'none'}
          >
            Contact Us
          </a>
        </div>



        {/* Social Links */}
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/company/pharmatalenthub/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
          <a href="https://t.me/PharmaTalentHubCareer" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className="fab fa-telegram-plane"></i> Telegram
          </a>
          <a href="https://whatsapp.com/channel/0029VaxIS2WGZNCt64tx5b3F" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <i class="fa-brands fa-whatsapp"></i> Whatsapp
          </a>
          <a href="mailto:avinashrohankar123@gmail.com" className={styles.socialIcon}>
            <i className="fas fa-envelope"></i> Email Us
          </a>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
