import { useState } from 'react';
import './Products.css';
import Product from '../../assets/Product.jpeg'; 

function Products ()  {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      title: "Sample Video Title 1",
      price: "₹1500",
      lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quis sit amet impedit aliquid iure accusantium error exercitationem soluta vel debitis nisi nam, commodi iste, perferendis velit ut qui veniam."
    },
    {
      id: 2,
      title: "Sample Video Title 2",
      price: "₹1500",
      lorem: "Suspendisse potenti. Duis congue eros vel eros ultrices, vitae molestie justo maximus. Integer eget ligula quis arcu posuere gravida."
    },
    {
      id: 3,
      title: "Sample Video Title 3",
      price: "₹1500",
      lorem: "Vestibulum ac lorem fermentum, ullamcorper felis vel, tincidunt justo. Curabitur ultricies tortor ut sem vehicula, et vulputate eros malesuada."
    }
  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id} className={`container${product.id}`}>
            <div className={`photo-container${product.id}`}>
              <img
                className={`photo${product.id}`}
                src={Product}
                alt="Left side photo"
              />
            </div>
            <div className={`content${product.id}`}>
              <br />
              <h2 className={`header${product.id}`}>{product.title}</h2>
              <br />
              <p className={`text${product.id}`}>{product.lorem}</p>
              <br />
              <p style={{fontWeight:"bold",fontSize:"20px" }}>{product.price}</p>
              <button className={`button${product.id}`}>ADD TO CART</button>
            </div>
          </div>
        ))
      ) : (
        <p style={{textAlign: 'center'}}>Oops, you typed something wrong!</p>
      )}
    </>
  );
}

export default Products;
