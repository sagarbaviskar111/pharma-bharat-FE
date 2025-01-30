// pages/about.js
import Head from 'next/head';
import dynamic from 'next/dynamic';
// import Navbar from '../../components/Navbar';
const Navbar = dynamic(() => import('../../components/Navbar'));
// import Footer from '../../components/Footer';
const Footer = dynamic(() => import('../../components/Footer'));
import styles from './About.module.css';

const About = () => {
  return (
    <div>
    {/* <Head>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
    </Head> */}
    <Navbar />
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        {/* <Image src={logo} alt="Pharma Talent Hub" width={150} height={50} /> */}
        <h1>About Us</h1>
      </header>

      <section className={styles.content}>
        <h2>Welcome to Pharma Talent Hub</h2>
        <p>
          We are dedicated to helping pharmacy students find their dream jobs in the industry.
          With a strong commitment to connecting students with top employers, we have successfully placed over 100 students so far!
        </p>
        <p>
          Our expert HR team works tirelessly to ensure that you get the best opportunities tailored to your skills and aspirations.
          Join us in your journey to a fulfilling career in pharmacy and healthcare!
        </p>
      </section>

      <footer className={styles.footer}>
        <h3>Contact Us</h3>
        <div className={styles.contactLinks}>
          <a href="mailto:avinashrohankar123@gmail.com" className={styles.contactLink}>
            <EmailLogo /> Email Us
          </a>
          <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <LinkedInLogo /> LinkedIn
          </a>
          <a href="https://t.me/PharmaTalentHubCareer" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <TelegramLogo /> Telegram
          </a>
          <a href="https://whatsapp.com/channel/0029VaxIS2WGZNCt64tx5b3F" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
         <WhatsAppLogo/> Whatsapp
          </a>
        </div>
      </footer>
    </div>
    <Footer />
    </div>
  );
};

const EmailLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" id="gmail">
    <path fill="#ea4435" d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"></path>
    <path fill="#00ac47" d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" transform="rotate(180 26.5 16)"></path>
    <path fill="#ffba00" d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"></path>
    <path fill="#4285f4" d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"></path>
    <path fill="#c52528" d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"></path>
  </svg>
);

const LinkedInLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#419FD9">
    <path d="M19.633 19.633h-3.595v-5.171c0-1.237-.022-2.827-1.73-2.827-1.731 0-1.994 1.354-1.994 2.747v5.251h-3.596V9h3.448v1.482h.048c.48-.906 1.651-1.857 3.389-1.857 3.623 0 4.295 2.386 4.295 5.486v5.522zM5.98 8.641c-1.177 0-2.123-.977-2.123-2.167 0-1.191.964-2.167 2.123-2.167 1.175 0 2.122.976 2.122 2.167 0 1.19-.947 2.167-2.122 2.167zM7.53 19.633H4.01V9h3.52v10.633zM21.991 0H1.007C.452 0 0 .447 0 1.004v21.993C0 23.553.452 24 1.007 24h20.984C23.553 24 24 23.553 24 21.997V1.004C24 .447 23.553 0 21.991 0z"></path>
  </svg>
);

const TelegramLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 48 48" id="telegram">
    <rect width="48" height="48" fill="#419FD9" rx="24"></rect>
    <rect width="48" height="48" fill="url(#paint0_linear)" rx="24"></rect>
    <path fill="#fff" d="M10.7874 23.4709C17.7667 20.3663 22.4206 18.3195 24.7493 17.3305C31.3979 14.507 32.7795 14.0165 33.68 14.0002C33.878 13.9968 34.3208 14.0469 34.6077 14.2845C34.8499 14.4852 34.9165 14.7563 34.9484 14.9465C34.9803 15.1368 35.02 15.5702 34.9884 15.9088C34.6281 19.774 33.0692 29.1539 32.276 33.483C31.9404 35.3148 31.2796 35.929 30.6399 35.9891C29.2496 36.1197 28.1938 35.051 26.8473 34.1497C24.7401 32.7395 23.5498 31.8615 21.5044 30.4854C19.1407 28.895 20.673 28.0209 22.0201 26.5923C22.3726 26.2185 28.4983 20.5295 28.6169 20.0135C28.6317 19.9489 28.6455 19.7083 28.5055 19.5813C28.3655 19.4543 28.1589 19.4977 28.0098 19.5322C27.7985 19.5812 24.4323 21.8529 17.9113 26.3473C16.9558 27.0172 16.0904 27.3435 15.315 27.3264C14.4602 27.3076 12.8159 26.833 11.5935 26.4273C10.0942 25.9296 8.90254 25.6666 9.0063 24.8215C9.06035 24.3813 9.65403 23.9311 10.7874 23.4709Z"></path>
    <defs>
      <linearGradient id="paint0_linear" x1="24" x2="24" y2="47.644" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2AABEE"></stop>
        <stop offset="1" stop-color="#229ED9"></stop>
      </linearGradient>
    </defs>
  </svg>
  
);

const WhatsAppLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 258">
    <defs>
      <linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%">
        <stop offset="0%" stop-color="#1faf38"/>
        <stop offset="100%" stop-color="#60d669"/>
      </linearGradient>
      <linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%">
        <stop offset="0%" stop-color="#f9f9f9"/>
        <stop offset="100%" stop-color="#fff"/>
      </linearGradient>
    </defs>
    <path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/>
    <path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/>
    <path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/>
  </svg>
);




export default About;
