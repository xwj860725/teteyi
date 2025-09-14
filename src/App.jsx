import {Routes,Route  } from "react-router-dom";
import {Home, About, Team, Business, Equivalentstudies, Shareholding, Collaboration, Contact, Join, LegalNotice, PrivacyPolicy} from './pages'; // Importing all pages for routing
import{Header,Footer,Logo,Banner,Btn,Card} from './components'; // Importing all components for routing

function App() {
  return (
    <div className="bg-white font-sans mx-[48px] max-w-[calc(100%-48px)]">

    <Routes>
      <Route path="/" element={<Home />} />      
      <Route path="/about" element={<About />} />  
      <Route path="/team" element={<Team />} />  
      <Route path="/business" element={<Business />} />  
      <Route path="/equivalentstudies" element={<Equivalentstudies />} />  
      <Route path="/shareholding" element={<Shareholding />} />  
      <Route path="/collaboration" element={<Collaboration />} />  
      <Route path="/contact" element={<Contact />} />  
      <Route path="/join" element={<Join />} />  
      <Route path="/legalnotice" element={<LegalNotice />} />      
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />               
    </Routes>
    </div>
  );
}

export default App; 

