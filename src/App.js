import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import PageNotFound from './Pages/Shared/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
