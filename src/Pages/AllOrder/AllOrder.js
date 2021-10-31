// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useEffect, useState } from 'react';
// import ManageOrders from '../ManageOrders/ManageOrders';

// const AllOrder = (props) => {
//     // const [orders, setOrders]=useState([])
//     // // data fetch 
//     // useEffect(()=>{
//     //     fetch('http://localhost:5000/orders')
//     //     .then(res=>res.json())
//     //     .then(data=> setOrders(data))


//     // },[])

//     //    //delete an order
//     //    const handleDeleteOrder = id =>{
//     //     const proceed = window.confirm("Are you want to delete")
//     //     if(proceed){
//     //         const url = `http://localhost:5000/orders/${id}`
//     //     fetch(url, {
//     //         method:'DELETE'
//     //     })
//     //     .then(res => res.json())
//     //     .then(data => {
//     //         if(data.deletedCount > 0){
//     //             alert('deleted successfully');
//     //             const remainingOrders = orders.filter(order => order._id!==id);
//     //             setOrders(remainingOrders);
//     //         }
//     //     })
 
//     // }
//     //     }
//     const{_id,packageName,email,address}=props.order
//     // const {handleDeleteOrder}=ManageOrders()
//     // //delete an order
//     // const handleDeleteOrder = id =>{
//     //     const url = `http://localhost:5000/orders/${id}`
//     //     fetch(url, {
//     //         method:'DELETE'
//     //     })
//     //     .then(res = res.json())
//     //     .then(data => {
//     //         if(data.deletedCount > 0){
//     //             alert('deleted successfully');
//     //             const remainingOrders = orders.filter(_id!==id);
//     //             setOrders(remainingOrders);
//     //         }
//     //     })
//     // }

//     return (
//         <div className='d-flex mt-2 order-list'>
//             <p>Package Name: {packageName} </p>
//             <p>E-mail: {email} </p>
//             <p>Address: {address}</p>
//             {/* <FontAwesomeIcon onClick={()=>handleDeleteOrder(orders._id)} className='ms-3 mt-1' icon={faTrash} /> */}
//         </div>
//     );
// };

// export default AllOrder;