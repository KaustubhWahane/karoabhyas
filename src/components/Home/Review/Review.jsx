import './Review.css'; // Import yer custom CSS for styling
import reviewData from './reviewData'; // Import the review data

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
