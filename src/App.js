import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About/About';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Blog from './Pages/Blog/Blog/Blog';
import Contact from './Pages/Contact/Contact/Contact';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Login from './Pages/Login/Login/Login';
import ResetPassword from './Pages/Login/ResetPassword/ResetPassword';
import Signup from './Pages/Login/Signup/Signup';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import PageNotFound from './Pages/Shared/PageNotFound/PageNotFound';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import AllUsers from './Pages/Dashboard/AllUsers/AllUsers';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import Portfolio from './Pages/Portfolio/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile />}></Route>
          <Route path='order' element={<MyOrder />}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
          <Route path='allUsers' element={<AllUsers />}></Route>\
          <Route path='manageOrders' element={<ManageOrders />}></Route>\
          <Route path='addProducts' element={<AddProducts />}></Route>\
          <Route path='manageProducts' element={<ManageProducts />}></Route>\
        </Route>

        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/resetPass' element={<ResetPassword />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
