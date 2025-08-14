// OrderModal.jsx
import React from 'react';
import './order.css';
import '../button.css'
const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Place Your Order</h2>
        <form>
          <input type="text" placeholder="Item name" required />
          <input type="number" placeholder="Quantity" required />
          <textarea placeholder="Additional notes" />
          <button type="submit">Submit Order</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OrderModal;
