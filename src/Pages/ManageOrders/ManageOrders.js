// import React, { useEffect, useState } from 'react';
// // import AllOrder from '../AllOrder/AllOrder';

// const ManageOrders = () => {

//     const [orders, setOrders]=useState([])
//     // data fetch 
//     useEffect(()=>{
//         fetch('http://localhost:5000/orders')
//         .then(res=>res.json())
//         .then(data=> setOrders(data))


//     },[])

//        //delete an order
//        const handleDeleteOrder = id =>{
//         const proceed = window.confirm("Are you want to delete")
//         if(proceed){
//             const url = `http://localhost:5000/orders/${id}`
//         fetch(url, {
//             method:'DELETE'
//         })
//         .then(res => res.json())
//         .then(data => {
//             if(data.deletedCount > 0){
//                 alert('deleted successfully');
//                 const remainingOrders = orders.filter(order => order._id!==id);
//                 setOrders(remainingOrders);
//             }
//         })
 
//     }
//         }

        
//     return{
//         handleDeleteOrder
//     }
   

//     // return (
//     //     <div className='page-size-bg'>
//     //         <div className='mb-5'><h2 className=''>All Booking List</h2></div>
//     //         <div className="">
            
//     //         {
//     //           orders.map(order=> <AllOrder key={order._id} order={order}/>)
//     //         }
//     //     </div>
//     //     </div>
     
//     // );
    
// };


// export default ManageOrders;