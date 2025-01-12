import Navbar from './components/navbar/Navbar';
import HeroSection from './components/hero/HeroSection';
import CardSection from './components/cards/CardSection'
export default function Home() {
  return (
      <main>
        <Navbar />
        <HeroSection />
       <CardSection/>
      </main>
  );
}
