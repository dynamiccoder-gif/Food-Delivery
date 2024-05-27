import React, { useEffect, useState } from 'react';
import AddOrder from './AddOrder';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(`${window.location.origin}/api/orders/`)
            .then(response => setOrders(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Order List</h2>
            <ul>
                {orders.map(order => (
                    <li key={order._id}>
                        {order.customerName} ordered {order.quantity} of {order.foodId.name} - Status: {order.status}
                    </li>
                ))}
            </ul>
            <Link to='/orders/new'>ADD  NEW ORDER</Link>
        </div>
    );
};

export default OrderList;
