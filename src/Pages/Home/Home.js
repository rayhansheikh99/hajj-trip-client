import React, { useEffect, useState } from 'react';
import Features from '../Features/Features';
import Slider from '../Header/Slider/Slider';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import './home.css';

const Home = () => {

    const [services, setServices]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('https://shocking-werewolf-98267.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=> setServices(data))

    },[])

    return (
        <div>
            <Slider/>
            <div className='mt-5 card-design1'>
            <div><h2>Our Services</h2></div>
            <div className="row row-cols-1 row-cols-md-3 g-4 pb-3 mt-3">
            
            {
              services.map(service=> <Services key={service._id} service={service}/>)
            }
        </div>
        </div>
        <Testimonials/>
        <Features/>

        </div>
    );
};

export default Home;