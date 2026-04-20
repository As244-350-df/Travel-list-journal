import ReactDom from "react-dom/client";
import App from "./Travel list journal/App";
import "bootstrap/dist/css/bootstrap.min.css";
//import Form from  "./inputs/form"
import "bootstrap/dist/css/bootstrap.min.css";
let root=ReactDom.createRoot(
    document.querySelector('#root')
)
root.render( 
    <App />
)