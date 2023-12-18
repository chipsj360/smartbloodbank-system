import logo from './logo.svg';

 import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navabar from "./components/Navbar";
import Layout from "./components/Layout";
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from "./misc/PrivateRoute";
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      
      <BrowserRouter>
       <Layout>
        <Navabar/>
      </Layout>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path="/admindashboard" element={
        <PrivateRoute component={AdminDashboard}>
          <AdminDashboard/>
        </PrivateRoute>
        }/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
