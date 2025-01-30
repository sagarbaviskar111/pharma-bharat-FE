import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/DummyPage.module.css';

const PharmaNews = () => {
  return (
    

<div>
<Navbar />
<div className={styles.aboutContainer}>
 
<div className={styles.pageContainer}>
      <h1>📰 Pharma News</h1>
      <p>Latest updates on Pharma News are coming soon. Stay connected!</p>
    </div>

 
</div>
<Footer />
</div>
  );
};

export default PharmaNews;
