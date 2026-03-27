import React, { useState, useEffect } from 'react';
import CONFIG from '../config';
import styles from '../styles/EventBannerPopup.module.css';

const EventBannerPopup = () => {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [countdown, setCountdown] = useState(0);

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

  useEffect(() => {
    if (!data) return;

    // Show initial popup after 5 seconds
    const initialTimeout = setTimeout(() => setShow(true), 5000);
    
    // Then show it again every 2 minutes (120000 ms)
    const interval = setInterval(() => {
      setShow(true);
    }, 120000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [data]);

  useEffect(() => {
    if (show) {
      setCountdown(15);
    }
  }, [show]);

  useEffect(() => {
    let timer;
    if (show && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [show, countdown]);

  const closePopup = () => setShow(false);

  if (!show || !data) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button 
          className={styles.closeBtn} 
          onClick={closePopup} 
          disabled={countdown > 0}
          title={countdown > 0 ? `Wait ${countdown} seconds to close` : "Close"}
        >
          {countdown > 0 ? countdown : "\u00D7"}
        </button>
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
            <a href={data.link} target="_blank" rel="noopener noreferrer" className={styles.btn} onClick={closePopup}>
              Register Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventBannerPopup;
