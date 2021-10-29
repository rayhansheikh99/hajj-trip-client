import React, { useEffect, useState } from 'react';
import Slider from '../Header/Slider/Slider';
import Services from '../Services/Services';
import './home.css';

const Home = () => {

    const [services, setServices]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('http://localhost:5000/services')
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
              services.map(service=> <Services key={service.id} service={service}/>)
            }
        </div>
        </div>

        </div>
    );
};

export default Home;