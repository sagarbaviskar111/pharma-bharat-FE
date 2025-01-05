import Link from 'next/link';
import styles from '../styles/jobCard.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

const JobCard = ({ id, image, date, company, title, experience, payment,positionName }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        return date.toLocaleString('en-US', options);
    };


    const router = useRouter()
    const handleViewDetails = () => {
        router.push(`/jobs/${id}/${createSlug(positionName, company)}`); // Navigate to the job details page
    };
    function createSlug(position, company) {
        return `${position}-${company}`.toLowerCase().replace(/\s+/g, '-');
      }
    return (
        <div className={styles.jobCard} onClick={handleViewDetails}>
            {/* <img  /> */}
            <Image src={image} alt="Job Image" className={styles.jobCardImage}  width={500} height={500} />
            <div className={styles.jobCardContent}>
                <h2 className={styles.jobCardTitle}>{title}</h2>
                <p className={styles.jobCardDate}>Posted on: {formatDate(date)}</p>
                <p className={styles.jobCardCompany}>Company: {company}</p>
                <p className={styles.jobCardExperience}>Experience: {experience}</p>
                <p className={styles.jobCardPayment}>Payment: {payment}</p>
                <Link href={`/jobs/${id}/${createSlug(positionName, company)}`} className={styles.jobCardButton}>Read More</Link>
            </div>
        </div>
    );
};

export default JobCard;
