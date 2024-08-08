import React, { useContext } from 'react';
import populerOilImg from '../../public/Images/populerOil.jpg';
import ContextApi from '../Context/ContextApi';

const PopularOil = () => {
  const { handleNavClick } = useContext(ContextApi);
  return (
    <>
      <style>
        {`
                  .popular-oil-section {
                    background-color: #fff;
                    padding: 2rem;
                    border-radius: 0.5rem;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  }

                  .popular-oil-section .category {
                    color: #888;
                  }

                  .popular-oil-section .title {
                    font-size: 2.5rem;
                    font-weight: bold;
                    margin-top: 0.5rem;
                  }

                  .popular-oil-section .description {
                    color: #555;
                    line-height: 1.5;
                    margin-top: 1rem;
                  }

                  .popular-oil-section .btn {
                    margin-top: 1rem;
                  }
                `}
      </style>

      <section className="container mt-5 popular-oil-section">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={populerOilImg} alt="Popular Oil" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h5 className="category paragraphStyle">ZIC Car Engine Oils</h5>
            <h2 className="title headingStyle">Top Quality Engine Oils by ZIC</h2>
            <p className="description paragraphStyle">
              Discover ZIC's premium range of engine oils designed to enhance the performance and longevity of your vehicle's engine. Our collection includes high-quality oils that meet the latest industry standards, ensuring your car runs smoothly and efficiently. Experience superior protection and performance with ZIC's top-grade engine oils, trusted by millions of drivers worldwide.
            </p>
            <button onClick={() => handleNavClick("productId", "/")} className="btn btn-dark btnStyle">Explore the Collection</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularOil;
