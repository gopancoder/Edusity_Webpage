import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import Testimonials from './Components/Testimonials/Testimonials';
import Title from './Components/Title/Title';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='our PROGRAM' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='gALLERY' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Students Says'/>
        <Testimonials/>
        <Title subTitle='Contact us' title='Get in Touch '/>
        <Contact/>
        <Footer/> 
      </div>
    </div>
  );
}

export default App;
