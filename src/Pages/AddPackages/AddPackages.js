import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './addpackage.css'

const AddPackages = () => {
  
    //useform use here and POST Method Apply
    const { register, handleSubmit, reset } = useForm();
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
                    reset();
                }
            })
    };
    return (
        <div className='details package-details'>
            <h4>Add Packages From Here</h4>
            <form className="booking-form package-form" onSubmit={handleSubmit(onSubmit)}>
        
                <input  placeholder="Package Name" defaultValue="" {...register("name",{ required: true })} />
                <input  placeholder="Price" defaultValue="" {...register("price", { required: true })} />
                <input placeholder="Duration Day" defaultValue="" {...register("duration",{ required: true })} />
                <input placeholder="Description" defaultValue="" {...register("describe",{ required: true })} />
                <input placeholder="Image Link" defaultValue="" {...register("image",{ required: true })} />
                <Button type="submit" className='btn-book d-block'>Add Package</Button>
            </form>
        </div>
    );
};

export default AddPackages;