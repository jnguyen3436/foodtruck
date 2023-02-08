
import './styles.css';
import Navbar from './Navbar';

import Menu from './pages/Menu';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/menu":
      component = <Menu/>
      break
    case "/about":
      component = <About/>
      break
  }
  return (
    <>
    <Navbar/>
    {component}
    </>
  );
}

export default App;
