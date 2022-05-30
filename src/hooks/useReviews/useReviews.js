import { useEffect, useState } from 'react';

const useReviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://pacific-garden-52745.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return [reviews, setReviews]
};

export default useReviews;