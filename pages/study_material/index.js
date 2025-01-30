import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/DummyPage.module.css';

const StudyMaterial = () => {
  return (
    

<div>
<Navbar />
<div className={styles.aboutContainer}>
 
<div className={styles.pageContainer}>
      <h1 className='h1-class'>📚 Study Material</h1>
      <p className='p-class'>Our study materials will be available soon. Stay tuned for exciting updates!</p>
    </div>

 
</div>
<Footer />
</div>
  );
};

export default StudyMaterial;
