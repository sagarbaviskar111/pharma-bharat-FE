import { useState } from 'react';
import Modal from 'react-modal';
import styles from './ATSResumeChecker.module.css';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Define keywords and common spelling mistakes
const REQUIRED_KEYWORDS = ['React', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Teamwork', 'Problem-solving'];
const COMMON_MISSPELLINGS = ['recieve', 'teh', 'adress', 'occurence', 'untill'];

const ATSResumeChecker = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const analyzeResume = async (text) => {
    const errors = [];
    let score = 100;

    if (file.size > 2 * 1024 * 1024) {
      errors.push("File size exceeds the 2MB limit.");
      score -= 20;
    }

    const misspellings = COMMON_MISSPELLINGS.filter(word => text.includes(word));
    if (misspellings.length > 0) {
      errors.push(`Common spelling mistakes found: ${misspellings.join(', ')}`);
      score -= misspellings.length * 5;
    }

    const missingKeywords = REQUIRED_KEYWORDS.filter(keyword => !text.includes(keyword));
    if (missingKeywords.length > 0) {
      errors.push(`Missing important keywords: ${missingKeywords.join(', ')}`);
      score -= missingKeywords.length * 5;
    }

    const hasHeadline = text.match(/^(resume|curriculum vitae|cv|professional summary)/i);
    if (!hasHeadline) {
      errors.push("No headline or title found.");
      score -= 10;
    }

    return { errors, score: Math.max(0, score) };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const text = event.target.result.toLowerCase();
        const { errors, score } = await analyzeResume(text);
        setResult({ errors, score });
        setIsModalOpen(true);
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a resume file.");
    }
  };

  return (

    <div>
    {/* <Head>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
    </Head> */}
    <Navbar />
    <main>
    <div className={styles.container}>
      <h2 className={styles.title}>ATS Resume Checker</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          type="file" 
          onChange={handleFileChange} 
          accept=".txt,.pdf,.doc,.docx" 
          className={styles.fileInput} 
        />
        <button type="submit" className={styles.submitButton}>Check Resume</button>
      </form>

 {/* Warning message */}
 <p className={styles.warningText}>
        This module is currently under development and may not be 100% accurate. You can use it for basic resume comparison. For professional resume services, please email us your resume. We also offer paid services to assist in creating a polished resume.
      </p>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Resume Analysis Result"
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            maxWidth: '500px',
            width: '90%',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <div className={styles.modalContent}>
          <h3 className={styles.modalTitle}>Resume Analysis Result</h3>
          <p className={styles.modalScore}>Score: {result?.score} / 100</p>
          {result?.errors.length > 0 ? (
            <ul className={styles.errorList}>
              {result.errors.map((error, index) => (
                <li key={index} className={styles.errorItem}>{error}</li>
              ))}
            </ul>
          ) : (
            <p className={styles.successMessage}>No errors found. Great job!</p>
          )}
          <button onClick={() => setIsModalOpen(false)} className={styles.closeButton}>Close</button>
        </div>
      </Modal>
    </div>

    </main>
    <Footer />
</div>

    

  );
};

export default ATSResumeChecker;
