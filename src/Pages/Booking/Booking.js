import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
// import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './booking.css';

const Booking = () => {
    // let {orderId} = useParams()
    // const [service, setService]= useState([])
    // const [singleService, setSingleService] = useState({});
    // useEffect(()=>{
    //     fetch('http://localhost:5000/services')
    //     .then(res => res.json())
    //     .then(data => setService(data))
    // },[])

    // //  data  fetch
    // useEffect(()=>{
    //     const foundService = service.find(
    //         (services)=>services._id===orderId);
    //     console.log(foundService);
      
    // },[service,orderId]);


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        // const savedCart = singleService?._id;
        // data.order = savedCart;
        //         console.log(savedCart)
        fetch('https://shocking-werewolf-98267.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    // clearTheCart();
                    reset();
                }
            })
    };
    return (
        <div className=''>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name",{ required: true })} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Package Name" defaultValue="" {...register("packageName",{ required: true })} />
                <input placeholder="Address" defaultValue="" {...register("address",{ required: true })} />
                <input placeholder="Message" defaultValue="" {...register("message",{ required: true })} />
                <input placeholder="phone number" defaultValue="" {...register("phone",{ required: true })} />
                <Button type="submit" className='btn-book d-block'>Book Ticket</Button>
            </form>
        </div>
    );
};

export default Booking;