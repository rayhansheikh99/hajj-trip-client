import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Pages/Footer/Footer';
import Menu from './Pages/Header/Menu/Menu';
// import AllService from './Pages/AllService/AllService';
import Error from './Pages/Error/Error';
// import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Login from './Pages/Header/Login/Login';
import SignUp from './Pages/Header/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import PackageDetails from './Pages/PackageDetails/PackageDetails';
import PrivateRoute from './Pages/Header/Login/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import Orders from './Pages/OrderList/Orders';
import ManageOrders from './Pages/ManageOrders/ManageOrders';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
     <Menu/>
       <Switch>
         <Route exact path='/'>
            <Home/>
         </Route>
         <Route path='/home'>
            <Home/>
         </Route>
         <Route path='/login'>
            <Login/>
         </Route>
         <Route path='/signup'>
            <SignUp/>
         </Route>
         <Route path='/about'>
            <About/>
         </Route>
         <Route path='/contact'>
            <Contact/>
         </Route>
         <Route path='/booking'>
            <Booking/>
         </Route>
         <PrivateRoute exact path='/PackageDetails/:serviceId'>
            <PackageDetails/>
         </PrivateRoute>
         <PrivateRoute exact path='/orders'>
            <Orders/>
         </PrivateRoute>
         {/* <PrivateRoute exact path='/ordersmanage'>
            <ManageOrders/>
         </PrivateRoute> */}
         <Route path='*'>
            <Error/>
         </Route>
       </Switch>
       <Footer/>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
