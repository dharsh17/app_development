import React, { useState } from 'react';
import './ClientsPage.css';

const clients = [
    {
      name: 'ABC Logistics',
      testimonial: 'The best logistics solution we’ve used. It has streamlined our operations and improved efficiency!',
      logo: 'https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9naXN0aWNzfGVufDB8fDB8fHww',
    },
    {
      name: 'XYZ Delivery',
      testimonial: 'A game changer in logistics management. Highly customizable and reliable.',
      logo: 'https://images.unsplash.com/photo-1695654390723-479197a8c4a3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlbGl2ZXJ5fGVufDB8fDB8fHww',
    },
    {
      name: 'FastTrack Couriers',
      testimonial: 'Exceptional service and support. The software is user-friendly and integrates seamlessly with our systems.',
      logo: 'https://images.unsplash.com/photo-1545591841-4a97f1da8d1f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdHRyYWNrJTIwY291cmllcnxlbnwwfHwwfHx8MA%3D%3D', // You can use a different link for FastTrack
    },
  ];
  

const ClientsPage = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    // Logic to handle feedback submission (e.g., send to API or store in state)
    setSubmitted(true);
  };

  return (
    <div className="clients-page">
      <h1 className="page-title">Our Valued Clients</h1>
      <div className="clients-list">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <img src={client.logo} alt={`${client.name} logo`} className="client-logo" />
            <h2 className="client-name">{client.name}</h2>
            <p className="client-testimonial">"{client.testimonial}"</p>
          </div>
        ))}
      </div>

      <div className="feedback-section">
        <h2 className="feedback-title">We Value Your Feedback</h2>
        <form onSubmit={handleSubmitFeedback} className="feedback-form">
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Share your thoughts..."
            rows="5"
            required
            className="feedback-textarea"
          />
          <button type="submit" className="feedback-submit">
            Submit Feedback
          </button>
        </form>
        {submitted && <p className="feedback-thanks">Thank you for your feedback!</p>}
      </div>
    </div>
  );
};

export default ClientsPage;
