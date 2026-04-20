export default App;
import "bootstrap/dist/css/bootstrap.min.css";
import NavLinks from './NavLinks'
import Content from "./Content";
import Footer from "./Footer";
//first react code
function App() {
  return (
    <>
      <NavLinks/>
      <Content/>
      <Footer/>
    </>
  );
}
