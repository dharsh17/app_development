import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <div className="about-company">
        <h2>ELITE LOGISTICS</h2>
        <p>
          Elite Logistics stands at the forefront of logistics management, offering premier services designed to optimize your supply chain operations. We provide cutting-edge solutions that streamline processes, reduce costs, and enhance efficiency. Our commitment to seamless integration and innovative technology ensures that your logistics operations are smooth and cost-effective. Partner with us to experience unparalleled service and gain a competitive advantage in the logistics industry.
        </p>
      </div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img className="d-block w-100" src="https://img.freepik.com/free-photo/scene-with-photorealistic-logistics-operations-proceedings_23-2151468884.jpg?size=626&ext=jpg&ga=GA1.1.2093015045.1712982624&semt=ais_hybrid" alt="First slide" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img className="d-block w-100" src="https://img.freepik.com/free-photo/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative_123827-24177.jpg?size=626&ext=jpg&ga=GA1.1.2093015045.1712982624&semt=ais_hybrid" alt="Second slide" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img className="d-block w-100" src="https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1380.jpg?size=626&ext=jpg&ga=GA1.1.2093015045.1712982624&semt=ais_hybrid" alt="Third slide" />
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <img className="d-block w-100" src="https://img.freepik.com/free-photo/technological-futuristic-holograms-logistics-means-transport_23-2151663045.jpg?size=626&ext=jpg&ga=GA1.1.2093015045.1712982624&semt=ais_hybrid" alt="Fourth slide" />
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <img className="d-block w-100" src="https://img.freepik.com/premium-photo/global-business-logistics-import-export-container-cargo-freight-ship-loading-port-by-crane-container-handlers-cargo-airplane-truck-highway-transport-industry-concept-depth-blur-effect_144356-64376.jpg?size=626&ext=jpg&ga=GA1.1.2093015045.1712982624&semt=ais_hybrid" alt="Fifth slide" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
