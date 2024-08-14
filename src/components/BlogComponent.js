import React, { useState } from 'react';
import './BlogComponent.css';

const blogs = [
   
    {
        title: "Technology in Logistics",
        content: "Explore the impact of AI, IoT, blockchain, and automation on logistics operations.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGVjaG5vbG9neSUyMGluJTIwTG9naXN0aWNzJTIwaGR8ZW58MHx8MHx8fDA%3D",
        category: "Technology",
        author: "John Smith",
        date: "August 22, 2024"
    },
    {
        title: "The Role of IoT in Modern Logistics",
        content: "How IoT devices are revolutionizing real-time tracking and data collection in logistics.",
        image: "https://plus.unsplash.com/premium_photo-1661964188820-90b48fcdf860?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VGhlJTIwUm9sZSUyMG9mJTIwSW9UJTIwaW4lMjBNb2Rlcm4lMjBMb2dpc3RpY3N8ZW58MHx8MHx8fDA%3D",
        category: "Technology",
        author: "Sarah Lee",
        date: "August 30, 2024"
    },
    {
        title: "Blockchain for Secure Supply Chains",
        content: "Using blockchain technology to enhance transparency and security in the supply chain.",
        image: "https://plus.unsplash.com/premium_photo-1700830452741-3640bed87eef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEJsb2NrY2hhaW4lMjBmb3IlMjBTZWN1cmUlMjBTdXBwbHklMjBDaGFpbnN8ZW58MHx8MHx8fDA%3D",
        category: "Technology",
        author: "Robert Green",
        date: "September 10, 2024"
    },
    {
        title: "Lean Inventory Techniques",
        content: "Implementing lean inventory practices to reduce waste and improve efficiency in your logistics operations.",
        image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhbiUyMEludmVudG9yeSUyMFRlY2huaXF1ZXN8ZW58MHx8MHx8fDA%3D",
        category: "Optimization",
        author: "Emily White",
        date: "September 5, 2024"
    },
    {
        title: "Supply Chain Optimization",
        content: "Discover strategies to enhance supply chain efficiency, cut costs, and improve performance.",
        image: "https://plus.unsplash.com/premium_photo-1683120796013-f2f18451a907?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VwcGx5JTIwY2hhaW4lMjBvcHRpbWl6YXRpb258ZW58MHx8MHx8fDA%3D",
        category: "Optimization",
        author: "Jane Doe",
        date: "August 15, 2024"
    },
    {
        title: "Freight and Transportation Management",
        content: "Learn best practices for managing freight, optimizing routes, and improving fuel efficiency.",
        image: "https://images.unsplash.com/photo-1666809434902-b77f5ca82d3b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnJlaWdodCUyMGFuZCUyMFRyYW5zcG9ydGF0aW9uJTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
        category: "Freight",
        author: "Alice Johnson",
        date: "September 1, 2024"
    },
    {
        title: "Maximizing Freight Efficiency",
        content: "Techniques for improving freight efficiency and reducing costs through route optimization and load management.",
        image: "https://images.unsplash.com/photo-1598194501777-edbff942e501?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWF4aW1pemluZyUyMEZyZWlnaHQlMjBFZmZpY2llbmN5fGVufDB8fDB8fHww",
        category: "Freight",
        author: "David Wilson",
        date: "September 15, 2024"
    },
    {
        title: "Advanced Analytics for Supply Chains",
        content: "Leveraging data analytics to make informed decisions and optimize supply chain operations.",
        image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWR2YW5jZWQlMjBBbmFseXRpY3MlMjBmb3IlMjBTdXBwbHklMjBDaGFpbnN8ZW58MHx8MHx8fDA%3D",
        category: "Optimization",
        author: "Mike Brown",
        date: "August 25, 2024"
    },
    {
        title: "Trends in Global Freight Management",
        content: "An overview of current trends in global freight management and their implications for logistics.",
        image: "https://media.istockphoto.com/id/1327564299/photo/transport-and-logistic-foreman-checking-up-and-control-timing-of-cargo-freight-network.jpg?s=612x612&w=0&k=20&c=drQSGmgMRb9z1z_918qKOBlzJqHc2naSTvG0W9CK2cY=",
        category: "Freight",
        author: "Sophia Brown",
        date: "September 20, 2024"
    }
    // Add more blog data as needed
];

const BlogComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filterBlogs = (category) => {
        if (category === "All") {
            return blogs;
        }
        return blogs.filter(blog => blog.category === category);
    };

    return (
        <div className="blog-container">
            <h1 className="blog-header">Logistics Management Insights</h1>
            <div className="blog-tabs">
                <button
                    className={`tab-button ${selectedCategory === "All" ? "active" : ""}`}
                    onClick={() => setSelectedCategory("All")}
                >
                    All
                </button>
                <button
                    className={`tab-button ${selectedCategory === "Optimization" ? "active" : ""}`}
                    onClick={() => setSelectedCategory("Optimization")}
                >
                    Optimization
                </button>
                <button
                    className={`tab-button ${selectedCategory === "Technology" ? "active" : ""}`}
                    onClick={() => setSelectedCategory("Technology")}
                >
                    Technology
                </button>
                <button
                    className={`tab-button ${selectedCategory === "Freight" ? "active" : ""}`}
                    onClick={() => setSelectedCategory("Freight")}
                >
                    Freight
                </button>
                {/* Add more filter buttons as needed */}
            </div>
            <div className="blog-list">
                {filterBlogs(selectedCategory).map((blog, index) => (
                    <div className="blog-card" key={index}>
                        <img src={blog.image} alt={blog.title} className="blog-image" />
                        <h2 className="blog-title">{blog.title}</h2>
                        <p className="blog-date">By {blog.author} | {blog.date}</p>
                        <p className="blog-content">{blog.content}</p>
                        <button className="read-more-button">Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogComponent;
