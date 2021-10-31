import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import useAuth from '../../Hooks/useAuth';


const AddPackages = () => {
  
    const { register, handleSubmit, reset } = useForm();
    // const { user } = useAuth();
    const onSubmit = data => {
        fetch('https://shocking-werewolf-98267.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Package Added Successfully');
                    // clearTheCart();
                    reset();
                }
            })
    };
    return (
        <div className='details'>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                <input  placeholder="Package Name" defaultValue="" {...register("name",{ required: true })} />
                <input  placeholder="Price" defaultValue="" {...register("price", { required: true })} />
                {/* {errors.email && <span className="error">This field is required</span>} */}
                <input placeholder="Duration" defaultValue="" {...register("duration",{ required: true })} />
                <input placeholder="Description" defaultValue="" {...register("describe",{ required: true })} />
                <input placeholder="Image Link" defaultValue="" {...register("image",{ required: true })} />
                <Button type="submit" className='btn-book d-block'>Add Package</Button>
            </form>
        </div>
    );
};

export default AddPackages;