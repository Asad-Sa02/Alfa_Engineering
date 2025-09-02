import React, { useEffect, useState } from "react";
import { getAllOrders } from "../services/orders";

function OrderRow({
  orderItemId,
  orderId,
  total,
  paymentStatus,
  status,
  timest,
  itemName,
  price,
  quantity,
  size,
  userName,
  date,
  time,
}) {
  return (
    <tr>
      <td>{orderItemId}</td>
      <td>{orderId}</td>
      <td>₹{total}</td>
      <td>{timest}</td>
      <td>{itemName}</td>
      <td>₹{price}</td>
      <td>{quantity}</td>
      <td>{size}</td>
      <td>{userName}</td>
      <td><StatusDropdown value={paymentStatus} /></td> 
      <td><StatusDropdown value={status} /></td> 
    <td>{date}</td>
    <td>{time}</td>
    </tr>
  );
}

function StatusDropdown({ value }) {
  const getClass = (status) => {
    // debugger
    switch (status) {
      case "delivered":
      case "completed":
        return "bg-success text-white";
      case "pending":
        return "bg-warning text-dark";
      case "cancelled":
        return "bg-danger text-white";
      default:
        return "bg-secondary text-white";
    }
  };

  return (
    <select className={`form-select form-select-sm ${getClass(value)}`}>
      <option value={value}>{value}</option>
    </select>
  );
}

export default function GetOrders() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const result = await getAllOrders();
      if (result.status === "success") {
    // debugger
        setItems(result.data);
      }
    };
    loadItems();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">All Orders</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Item ID</th>
              <th>Order ID</th>
              <th>Total</th>
             
              <th>Time</th>
              <th>Item</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Size</th>
              <th>User</th>
               <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <OrderRow
                key={item.ORDER_ITEM_ID}
                itemName={item.ITEM}
                orderItemId={item.ORDER_ITEM_ID}
                orderId={item.ORDER_ID}
                total={item.TOTAL}
                timest={item.TIMESTAMP}
                price={item.PRICE}
                quantity={item.QUANTITY}
                size={item.SIZE}
                userName={item.USERNAME}
                paymentStatus={item.PAYMENT_STATUS}
                status={item.STATUS}
                datetime={item.TIMEST}
                
                //here add status aand timestaamp
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
