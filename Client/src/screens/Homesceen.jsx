import styles from "../style";
import { Business,Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
const Homescreen = () => (
  <div className="bg-primary w-full overflow-hidden">
    
  
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
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

      </div>
    </div>
  </div>
);

export default Homescreen;
