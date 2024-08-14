import React from 'react';
import './PortfolioComponent.css';

const PortfolioComponent = () => {
    const portfolioItems = [
        {
            title: 'AI-Driven Route Optimization',
            shortDescription: 'Cut down delivery times by utilizing AI for optimal route planning.',
            details: 'Leveraged AI algorithms to analyze traffic patterns, delivery windows, and vehicle loads, resulting in a 25% reduction in fuel costs and faster delivery times.',
            imageUrl: '/assets/ai-route.jpg'
        },
        {
            title: 'Green Logistics Initiative',
            shortDescription: 'Implemented eco-friendly practices across the supply chain.',
            details: 'Transitioned to electric vehicles, reduced packaging waste, and optimized warehouse energy consumption, lowering the company’s carbon footprint by 30%.',
            imageUrl: '/assets/green-logistics.jpg'
        },
        {
            title: 'Blockchain for Transparent Tracking',
            shortDescription: 'Used blockchain to ensure transparency and security in the supply chain.',
            details: 'Integrated blockchain technology to provide real-time tracking and verification of goods, enhancing trust and reducing losses due to fraud or errors.',
            imageUrl: '/assets/blockchain-tracking.jpg'
        },
        {
            title: 'Custom Logistics Software Development',
            shortDescription: 'Developed tailored software solutions for complex logistics operations.',
            details: 'Created custom software solutions that integrate with existing systems, streamline processes, and provide real-time analytics, boosting operational efficiency by 40%.',
            imageUrl: '/assets/custom-software.jpg'
        }
    ];

    return (
        <div className="portfolio-section">
            <h2 className="portfolio-title">Our Case Studies</h2>
            <p className="portfolio-subtitle">Explore our innovative logistics solutions</p>
            <div className="portfolio-grid">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="portfolio-card">
                        <div className="card-front" style={{ backgroundImage: `url(${item.imageUrl})` }}>
                            <h3 className="portfolio-item-title">{item.title}</h3>
                            <p className="portfolio-short-description">{item.shortDescription}</p>
                        </div>
                        <div className="card-back">
                            <h3 className="portfolio-item-title">{item.title}</h3>
                            <p className="portfolio-details">{item.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioComponent;
