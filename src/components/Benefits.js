import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faStar, faChartLine, faWarehouse, faRoute, faCog } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Benefits.css'; // Import the CSS file

const benefitsData = [
  {
    icon: faEye,
    title: 'Real-time Visibility',
    description: 'Our logistics software offers you complete, up-to-date information on your supply chain. Track the shipment, locate the assets, and obtain real-time data for improving decision-making and increasing the transparency of all logistic processes.'
  },
  {
    icon: faStar,
    title: 'Customer Experience',
    description: 'Improve your customer satisfaction by delivering on time and with the right information. Customer tracking and communication are also made possible in our system, which ensures that customers are updated and at the same time, satisfied with the service being offered and the quick turnaround time.'
  },
  {
    icon: faChartLine,
    title: 'Reduced Operational Cost',
    description: 'Greatly improve the efficiency of the operations by having the best logistics strategies in terms of planning and implementation. The features of our software help in reducing wastage, optimizing the usage of resources, and enhancing the flow of processes and thus cuts down the expenses and enhance the revenues.'
  },
  {
    icon: faWarehouse,
    title: 'Warehouse Management',
    description: 'Optimize your warehouse with the help of our sophisticated management solutions. Improve inventory management, layout storage and operation procedures, thus decreasing order processing time and handling times.'
  },
  {
    icon: faRoute,
    title: 'Route Planning',
    description: 'Improve delivery efficiency with our state of the art route optimization features. Optimize the consumption of fuel, the time to transport goods, and the timely delivery of goods by choosing the best routes for your shipments.'
  },
  {
    icon: faCog,
    title: 'Automate Operations',
    description: 'Make your logistics process more efficient by eliminating monotonous and time-wasting tasks with our software. Improve efficiency, cut down on the number of mistakes, and make staff available to work on more important tasks that would contribute to the company’s operations’ efficiency.'
  }
];

const BenefitCard = ({ icon, title, description }) => (
  <div className="col-12 col-md-6 col-lg-4 mb-3">
    <div className="card h-100 bounce">
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          <FontAwesomeIcon icon={icon} size="2x" className="text-primary" />
          <h5 className="ml-2">{title}</h5>
        </div>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

const Benefits = () => (
  <div className="container py-4">
    <h2 className="text-center mb-3">Benefits</h2>
    <p className="text-center text-muted mb-4">What Your Existing Business Gains with Logistics Management Software?</p>
    <div className="row">
      {benefitsData.map((benefit, index) => (
        <BenefitCard key={index} {...benefit} />
      ))}
    </div>
  </div>
);

export default Benefits;
