import React, { useState, useEffect } from 'react';
import CONFIG from '../config';
import styles from '../styles/InlineEventBanner.module.css';

const InlineEventBanner = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${CONFIG.BACKEND_URL}/api/eventbanner`);
        if (res.ok) {
          const result = await res.json();
          // Adjust logic based on expected payload structure: sometimes an array, sometimes singular object.
          const eventData = Array.isArray(result) ? result[0] : (result.data ? result.data : result);
          if (eventData) {
            setData(eventData);
          }
        }
      } catch (err) {
        console.error("Failed to fetch event banner data", err);
      }
    };
    fetchData();
  }, []);

  if (!data) return null;

  return (
    <div className={styles.container}>
      {(data.imageUrl || data.image) && (
        <div className={styles.imageContainer}>
           <img 
             src={(typeof (data.imageUrl || data.image) === 'string' && (data.imageUrl || data.image).startsWith('http')) ? (data.imageUrl || data.image) : `${CONFIG.BACKEND_URL}/${data.imageUrl || data.image}`} 
             alt={data.eventName} 
             className={styles.image} 
           />
        </div>
      )}
      <div className={styles.content}>
        {data.badgeText && <span className={styles.badge}>{data.badgeText}</span>}
        {data.eventName && <h2>{data.eventName}</h2>}
        {data.description && <p className={styles.description}>{data.description}</p>}
        <div className={styles.details}>
          {data.date && <span><i className="fa-solid fa-calendar"></i> {data.date}</span>}
          {data.time && <span><i className="fa-solid fa-clock"></i> {data.time}</span>}
        </div>
        {data.link && (
          <a href={data.link} target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Register Now
          </a>
        )}
      </div>
    </div>
  );
};

export default InlineEventBanner;
