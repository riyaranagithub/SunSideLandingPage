import Navbar from './components/navbar/Navbar';
import HeroSection from './components/hero/HeroSection';
import CardSection from './components/cards/CardSection';
import Testimonial from './components/testimonials/Testimonial'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
export default function Home() {
  return (
      <main>
        <Navbar />
        <HeroSection />
       <CardSection/>
       <Testimonial/>
       <Services/>
       <Footer/>
      </main>
  );
}
