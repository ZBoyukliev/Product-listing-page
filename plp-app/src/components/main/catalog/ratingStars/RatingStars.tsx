import { FunctionComponent } from 'react';
import styles from './RatingStars.module.scss';

type Props = {
    rating: number;
};

const RatingStars: FunctionComponent<Props> = ({ rating }) => {
    
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    let hasHalfStar = rating - fullStars >= 0.5;

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= totalStars; i++) {
            if (i <= fullStars) {
                stars.push(<span key={i} className={styles['star']}>&#9733;</span>);
            } else if (hasHalfStar) {
                stars.push(<span key={i} className={styles['star']}>&#9733;&#189;</span>);
                hasHalfStar = false; // Show only one half star
            } else {
                stars.push(<span key={i} className={styles['star']}>&#9734;</span>);
            }
        }
        return stars;
    };

    return <div className={styles['rating-container']}>{renderStars()}</div>;
};

export default RatingStars;
