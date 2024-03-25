import './Review.css'; 
import reviewData from './reviewData';

function Review() {
  return (
    <div>
      {reviewData.map(review => (
        <div key={review.id} className="review-container">
          <div className="rectangle">
            <h2 className="header">{review.name}</h2>
            <hr className="line" />
            <p className="content">{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Review;
