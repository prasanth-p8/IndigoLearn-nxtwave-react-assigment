import Header from './components/Header'
import BecomeACCA from './components/BecomeACCA'
import LearningACCA from './components/LearningACCA'
import Placements from './components/Placements'
import Footer from './components/Footer'
import WhyChooseUs from './components/WhyChooseUs'
import { BrowserRouter } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <BecomeACCA />
      <WhyChooseUs />
      <LearningACCA />
      <Placements />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
