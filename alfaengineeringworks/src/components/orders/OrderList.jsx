import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/owner/orders') // Adjust endpoint as needed
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
    //   debugger;
  }, []);

  return (
    <div className="order-list">
      <h2>All Orders</h2>
      {orders.map(order => (
        <div key={order.order_id} className="order-card">
          <h3>Order #{order.order_id}</h3>
          <p>User: {order.username}</p>
          <p>Date: {order.order_date}</p>
          <ul>
            {order.items.map(item => (
              <li key={item.item_id}>
                {item.name} × {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
