import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddFood from './AddFood';
import { Link } from 'react-router-dom'; 

const FoodList = () => {
    const [foods, setFoods] = useState([]);
    const [origin, setOrigin] = useState('');

    useEffect(() => {
        setOrigin(window.location.origin);
        axios.get(`${window.location.origin}/api/foods/`)
            .then(response => setFoods(response.data))
            .catch(error => console.log(error));
    }, []);
   

    return (
        <div>
            <h2>Food List</h2>
            <ul>
            <p>Origin: {origin}</p>
                {foods.map(food => (
                    <li key={food._id}>{food.name} - ${food.price}</li>
                ))}
            </ul>
            <Link to="/foods/new">Add New Food</Link>
            <br />
            <Link to="/orders/new">Add New order</Link>
            
        </div>
    );
};

export default FoodList;
