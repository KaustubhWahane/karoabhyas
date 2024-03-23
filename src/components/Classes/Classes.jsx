import './Classes.css';
import Thumbnail from '../../assets/Thumbnail.jpg'; 

function Classes ()  {
  return (
    <>
    <h1 style={{textAlign:"center"}}>I have made changes in the layout to enhance user experience and functionality</h1>
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
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo veritatis dolorem temporibus eius et delectus ipsum corporis modi amet totam molestias repellat, tempora illo saepe voluptas consequuntur, nesciunt libero vero vitae. Rerum enim aperiam vitae iure, assumenda voluptatum hic?
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
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo veritatis dolorem temporibus eius et delectus ipsum corporis modi amet totam molestias repellat, tempora illo saepe voluptas consequuntur, nesciunt libero vero vitae. Rerum enim aperiam vitae iure, assumenda voluptatum hic?
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
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo veritatis dolorem temporibus eius et delectus ipsum corporis modi amet totam molestias repellat, tempora illo saepe voluptas consequuntur, nesciunt libero vero vitae. Rerum enim aperiam vitae iure, assumenda voluptatum hic?
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