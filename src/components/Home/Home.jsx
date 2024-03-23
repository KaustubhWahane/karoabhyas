import CarouselAnimation from "../CarouselAnimation/CarouselAnimation";
import Card from 'react-bootstrap/Card';
import CardLogo from '../../assets/CardLogo.jpg';
import cardsData from './cardsData'; 
import './Home.css'; 
import Review from "./Review/Review";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <div>
      {/* Carousel Animation */}
      <CarouselAnimation />
      <br />
      <h1 className="title" style={{ textAlign: "center" }}>Top Students</h1>
      {/* Card */}
      <div className="card-container">
        {cardsData.map((card) => (
          <div key={card.id} className="card-item">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={CardLogo} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {/* Reviews */}
      <br />
      <h1 className="title" style={{ textAlign: "center" }}>Review</h1>
      <br />
        <Review/>
        <br /><br />
        <Footer/>
    </div>
  );
}
