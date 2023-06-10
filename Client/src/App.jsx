import styles from "./style";
import {  Business, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Register from "./screens/Register";
import Login from "./screens/Login";
import PasswordVault from "./screens/PasswordVault";
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Testimonials />
        <Clients />
        <CTA />
<Register/>
<Login/>
<PasswordVault/>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
