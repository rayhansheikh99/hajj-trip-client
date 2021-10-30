import React from 'react';

const AllOrder = (props) => {
    const{packageName,email,address}=props.order
    return (
        <div className='d-flex mt-2 order-list'>
            <p>Package Name: {packageName} </p>
            <p>E-mail: {email} </p>
            <p>Address: {address}</p>
        </div>
    );
};

export default AllOrder;