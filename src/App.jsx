import Navbar from './Navbar'
import Container from'./Container.jsx'
import Card1 from './Card1.jsx'
import SERVICES from './SERVICES.jsx'
import Testimonials from './testimonials.jsx'
import PartnersCarousel from './PartnersCarousel.jsx'
import Explore from './Explore.jsx'
import Community from './Community.jsx'
import Help from './Help.jsx'
import GetInTouch from './GetinTouch.jsx'
import FindSupport from './FindSupport.jsx'
function App() {
  return(
    <>
    <div className='bg-blue-50'>
    <Navbar/>
    <Container/>
    <Card1/>
    <SERVICES/>
    <Testimonials/>
    <PartnersCarousel/> 
    <Explore/>
    <Community/>
    <Help/>
    <GetInTouch/>
    <FindSupport/>
    </div>
    </>
  );
}
export default App