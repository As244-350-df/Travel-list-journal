import Header from "./Header";
import Content from "./MainContent";
import "./App.css"
import {destinations} from "./destination.js";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
  <>
    <Header/>
    {
      destinations.map((destination, index) => (
        <Content 
          key={index}
          {...destination}
        />
      ))
    }
  </>
  );
}