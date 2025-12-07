import Head from "next/head";
import { motion } from "framer-motion";
import styles from "./NewsArticle.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

export default function NewsArticle() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 1;
  const [loading, setLoading] = useState(true);

  // ✅ API Call to fetch news from backend
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/news?page=${currentPage}&limit=${articlesPerPage}`);
        const data = await res.json();
        setNewsArticles(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };

    fetchNews();
  }, [currentPage]);

  // ✅ Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      {newsArticles?.length > 0 && (
        <Head>
          <title>{newsArticles[0]?.title} - News</title>
          <meta name="description" content={newsArticles[0]?.content?.slice(0, 150)} />
          <meta name="keywords" content="news, latest updates, trending, headlines" />
          <meta name="author" content={newsArticles[0]?.author} />
        </Head>
      )}

      <div className={styles.container}>
        {loading ? (
          <p>Loading news...</p>
        ) : (
          newsArticles.map((article, index) => (
            <div key={index} className={styles.card}>
              <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className={styles.title}>{article.title}</h1>
                <p className={styles.meta}>By {article.author} | {article.date}</p>
                <img src={article.imageUrl} alt={article.title} className={styles.image} />
                <p className={styles.text}>{article.content}</p>
              </motion.div>
              {/* <div className={styles.adSlot}>Google Ad Here</div> */}
            </div>
          ))
        )}
      </div>
      
      {/* Pagination Buttons */}
      <div className={styles.pagination}>
        {[1, 2, 3].map((num) => (
          <button key={num} onClick={() => paginate(num)} className={styles.pageButton}>
            {num}
          </button>
        ))}
      </div>

      {/* Suggested News Section */}
      <div className={styles.relatedArticles}>
        <h2 className={styles.relatedTitle}>Suggested News</h2>
        <div className={styles.relatedGrid}>
          {newsArticles.map((article, index) => (
            <div key={index} className={styles.relatedCard}>
              <img src={article.imageUrl} alt={article.title} className={styles.relatedImage} />
              <p className={styles.relatedText}>{article.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
