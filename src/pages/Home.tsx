import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';
import Process from '../components/home/Process';
import Pricing from '../components/home/Pricing';
import Contact from '../components/home/Contact';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}
