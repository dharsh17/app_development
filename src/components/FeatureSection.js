// src/FeatureSection.js
import React from 'react';
import './FeatureSection.css';

function FeatureSection() {
  const features = [
    { title: 'Dashboard', description: 'Our detailed dashboard gives a snapshot of all the logistics activities and includes an easy way of accessing performance indicators. There is always a sense of control that comes with the management and monitoring of all the activities, as you can easily keep up to date.' },
    { title: 'Pickup Management', description: 'Optimize the management of your pickups with the organizational Pickup Management option. Organize and coordinate the pickups effectively to minimize any form of hold up that may be experienced. This helps to ensure that your logistic operations run smoothly and that they are timely thus improving the reliability of the services offered.' },
    { title: 'AWB/LR Entry', description: 'Ease your work with our smooth entry of Air Waybill (AWB)/Lorry Receipt (LR). Enter all shipment details as effectively and expeditiously as possible while ensuring that all the required information is entered to minimize mistakes and boost the shipment’s precision.' },
    { title: 'Manifest Entry', description: 'Make the management of your shipment manifests easy with the help of Manifest Entry. Introduce and systematize all manifest specifics in accordance with the existing regulations and facilitate shipment identification and responsibility.' },
    { title: 'Dispatch Entry', description: 'Improve your dispatch processes with the easy-to-use Dispatch Entry feature. Coordinate and document dispatches in an effective manner; this will ensure proper documentation as well as efficient departures for the transport. This feature is useful in ensuring that the flow of dispatching tasks is smooth and minimizing on dispatch errors.' },
    { title: 'Arrival Entry', description: 'Make your shipment entry with the exactness you need with the help of Arrival Entry. Record and manage arrival details accurately with regards to the documentation of the incoming part and its tracking which helps in enhancing the inventory accuracy and minimizing the misplaced parts.' },
    { title: 'POD Upload', description: 'Conveniently upload POD documents by using POD Upload which is integrated into the system. This makes sure that all delivery confirmations are taken at a very early time to ensure that they act as evidence in case of disagreements and to improve customer satisfaction.' },
    { title: 'Delivery Management', description: 'Enhance your delivery processes with the help of our powerful Delivery Management system. A good system of managing deliveries should be put in place to ensure that goods are delivered on time and to the right places. This feature can be stated to help in customer satisfaction and can also be seen to boost the reliability of service delivery.' },
  ];

  return (
    <div className="feature-section">
      <h2>Features</h2>
      <h3>Striking Features of ELITE Logistics</h3>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
