import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import './packages.css'

const Packages = () => {

    const [services, setServices]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('https://shocking-werewolf-98267.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=> setServices(data))

    },[])

    return (
        <div className='package-page'>
            <h3>Our Valuable Packages</h3>

            <div className="row row-cols-1 row-cols-md-3 g-4 pb-3 mt-3">
            
            {
              services.map(service=> <Services key={service._id} service={service}/>)
            }
        </div>
            
        </div>
    );
};

export default Packages;