import './Classes.css';
import Thumbnail from '../../assets/Thumbnail.jpg'; 

function Classes ()  {
  return (
    <>
      <div className="container">
        <div className="photo-container">
          <img
            className="photo"
            src={Thumbnail}
            alt="Left side photo"
          />
        </div>
        <div className="content">
          <h2 className="header">Sample Video Title</h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo nisi incidunt minima corporis quis eum delectus accusamus at quidem adipisci ullam ad quibusdam quasi excepturi possimus, temporibus unde minus, labore repudiandae aspernatur cupiditate? Veniam totam in quod culpa eius dolor nostrum labore accusamus molestiae sequi amet, exercitationem asperiores commodi!
          </p>
          <br />
          <button className="button">PRACTICE</button>
        </div>
      </div>
      <hr style={{opacity: "0.3"}}/>
      <div className="container">
      <div className="photo-container">
        <img
          className="photo"
          src={Thumbnail}
          alt="Left side photo"
        />
      </div>
      <div className="content">
        <h2 className="header">Sample Video Title</h2>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo nisi incidunt minima corporis quis eum delectus accusamus at quidem adipisci ullam ad quibusdam quasi excepturi possimus, temporibus unde minus, labore repudiandae aspernatur cupiditate? Veniam totam in quod culpa eius dolor nostrum labore accusamus molestiae sequi amet, exercitationem asperiores commodi!
        </p>
        <br />
        <button className="button">PRACTICE</button>
      </div>
      </div>
      <hr style={{opacity: "0.3"}}/>
      <div className="container">
      <div className="photo-container">
        <img
          className="photo"
          src={Thumbnail}
          alt="Left side photo"
        />
      </div>
      <div className="content">
        <h2 className="header">Sample Video Title</h2>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo nisi incidunt minima corporis quis eum delectus accusamus at quidem adipisci ullam ad quibusdam quasi excepturi possimus, temporibus unde minus, labore repudiandae aspernatur cupiditate? Veniam totam in quod culpa eius dolor nostrum labore accusamus molestiae sequi amet, exercitationem asperiores commodi!
        </p>
        <br />
        <button className="button">PRACTICE</button>
      </div>
      </div>
      <br />
      <h3 style={{textAlign:"center"}}>1 2 3 4 5</h3>
    </>
  );
}

export default Classes;
