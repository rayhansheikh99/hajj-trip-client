import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import AllOrder from '../AllOrder/AllOrder';
import './orders.css'
const Orders = () => {
    const {user} = useAuth();

    const [orders, setOrders]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=> setOrders(data))


    },[])


    return (
        <div className='page-size-bg'>
            <div className='mb-5'><h2 className=''>My Booking List</h2></div>
            <div className="">
            
            {
              orders.filter(order=> <AllOrder key={order._id} order={order}/>)
            }
        </div>
        </div>
    );
};

export default Orders;