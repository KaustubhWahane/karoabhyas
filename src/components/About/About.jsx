import AboutUs from '../../assets/AboutUs.jpg';
import './About.css'; 

export default function About() {
  return (
    <div className="container">
      <br />
      <div className="item">
        <div className="left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum placeat repellendus incidunt numquam nostrum possimus expedita in molestiae eveniet cupiditate a alias unde reprehenderit neque facilis, officiis qui esse id ipsum ratione! Officia corrupti possimus ea, sint perspiciatis ab ducimus eos quam laboriosam, inventore ipsam facere quasi sit non.</p>
        </div>
        <div className="right">
          <img src={AboutUs} alt="Error fetching image" />
        </div>
      </div>
      <br /><br />
      <div className="item">
        <div className="left">
          <img src={AboutUs} alt="Error fetching image" />
        </div>
        <div className="right">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum placeat repellendus incidunt numquam nostrum possimus expedita in molestiae eveniet cupiditate a alias unde reprehenderit neque facilis, officiis qui esse id ipsum ratione! Officia corrupti possimus ea, sint perspiciatis ab ducimus eos quam laboriosam, inventore ipsam facere quasi sit non.</p>
        </div>
      </div>
      <br /><br />
      <div className="item">
        <div className="left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum placeat repellendus incidunt numquam nostrum possimus expedita in molestiae eveniet cupiditate a alias unde reprehenderit neque facilis, officiis qui esse id ipsum ratione! Officia corrupti possimus ea, sint perspiciatis ab ducimus eos quam laboriosam, inventore ipsam facere quasi sit non.</p>
        </div>
        <div className="right">
          <img src={AboutUs} alt="Error fetching image" />
        </div>
      </div>
    </div>
  );
}
