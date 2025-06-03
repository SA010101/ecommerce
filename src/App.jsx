import './App.css'
import Home from './components/Main/Home';
import LogIn from './components/LogIn Page/LogIn';
import Main from './components/Main/Main';
import Products from './components/Main/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Main/Cart';
import Register from './components/SignUp Page/Register';
import CustomerProfileupdate from './components/Main/customerProfileupdate';
import InfoInvoice from './components/Invoice Checkout/InfoInvoice';
import Notfound from './components/Not Found/Notfound';
import MyOrder from './components/Main/MyOrder';
import AdminMain from './components/Admin/AdminMain';
import AdminDashboard from './components/Admin/AdminDashboard';
import AllProducts from './components/Admin/AllProducts';
import Orders from './components/Admin/Orders';
import Users from './components/Admin/Users';
import Admins from './components/Admin/Admins';
import Settings from './components/Admin/Settings';
import AllOrders from './../src/components/Admin/ALL_P_S_DelOrders/AllOrders'
import PendingOrders from './components/Admin/ALL_P_S_DelOrders/PendingOrders';
import Shipped from './../src/components/Admin/ALL_P_S_DelOrders/Shipped'
import Delivered from './../src/components/Admin/ALL_P_S_DelOrders/Delivered'
import AdminProfileUpdate from './components/Admin/AdminProfileUpdate';

function App() {

  return (
    <BrowserRouter>

        <Routes>


        <Route path="/" element={<Main />}>
          <Route index element={<Home/>} />
          <Route path="/product" element={<Products/>} />
          <Route path="/MyOrder" element={<MyOrder/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/CustomerUpdate" element={<CustomerProfileupdate/>} />
          <Route path='/InfoInvoice' element={<InfoInvoice/>}/>
          <Route path='/Notfound' element={<Notfound/>}/>
        </Route>

         // Nested Routing Within Adminmain
        <Route path="/AdminMain" element={<AdminMain />}>
          <Route index element={<AdminDashboard/>} />
          <Route path="AdminProfileUpdate" element={<AdminProfileUpdate/>} />
          <Route path="products" element={<AllProducts/>} />

        // Nested Routing eiyhin Nested Routing
          <Route path="Orders" element={<Orders/>}>        
          <Route index element={<AllOrders/>} />
          <Route path="PendingOrders" element={<PendingOrders/>} />
          <Route path="Shipped" element={<Shipped/>} />
          <Route path="Delivered" element={<Delivered/>}/>
          </Route>

          <Route path="Users" element={<Users/>}/>
          <Route path='Admins' element={<Admins/>}/>
          <Route path='Settings' element={<Settings/>}/>
        </Route>


        
        <Route path='/Login' element={<LogIn/>}/>
        <Route path='/Register' element={<Register/>}/>


        </Routes>

    </BrowserRouter>
  )
}

export default App
