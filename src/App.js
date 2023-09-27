import logo from './logo.svg';

 import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navabar from "./components/Navbar";
import Layout from "./components/Layout";
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
          <Route path="/admindashboard" element={<AdminDashboard/>}/>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
