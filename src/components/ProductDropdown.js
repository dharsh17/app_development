import React, { useState } from 'react';
import './ProductDropdown.css';

const ProductDropdown = () => {
  const [selectedProduct, setSelectedProduct] = useState('Select a product');

  const products = [
    'Courier Tracking Devices', // Added option for Courier Logistics
    'Boxes',
    'Bubble Wrap',
    'Packing Peanuts',
    'Tape',
    'Labels',
    'Pallets',
    'Shelving Units',
    'Forklifts',
    'Hand Trucks',
    'Cargo Vans',
    'Trucks',
    'Trailers',
    'Refrigerated Vehicles',
    'GPS Devices',
    'Barcode Scanners',
    'RFID Tags',
    'Protective Gear',
    'Fire Extinguishers',
    'First Aid Kits',
    'Printers',
    'Computers',
    'Desks and Chairs',
  ];

  const handleChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  return (
    <div className="product-dropdown">
      <label htmlFor="product-select" className="dropdown-label">Choose a product:</label>
      <select
        id="product-select"
        value={selectedProduct}
        onChange={handleChange}
        className="dropdown"
      >
        <option value="Select a product" disabled>Select a product</option>
        {products.map((product, index) => (
          <option key={index} value={product}>{product}</option>
        ))}
      </select>
      <p className="selected-product">Selected Product: {selectedProduct}</p>
    </div>
  );
};

export default ProductDropdown;
