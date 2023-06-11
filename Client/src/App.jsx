import styles from "./style";
import {  Business, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Register from "./screens/Register";
import Login from "./screens/Login";
import PasswordVault from "./screens/PasswordVault";
import Homescreen from "./screens/Homesceen";
import {BrowserRouter,Routes,Route} from "react-router-dom"
const App = () => {
 return(
<BrowserRouter>
  <div className="bg-primary w-full overflow-hidden">
    
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Homescreen />} />
        <Route path="/passwordVault" element={<PasswordVault />} />
 </Routes>
        <Footer />
      
  </div>
  </BrowserRouter>
);
 }
export default App;
