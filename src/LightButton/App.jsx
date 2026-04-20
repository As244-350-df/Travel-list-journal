import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Button from './Button';
import ButtonData from './Buttondata.js';
import { useState } from 'react';
export default function App (){
// Importing ButtonData from Buttondata.js
// and using it to create an array of Button components
// Each button will have its own color and on/off state
    const [buttonsState, setButtonState] = useState(ButtonData());
    function toggleButton(id) {
        setButtonState(prevState =>{
            return prevState.map(button => {
                if (button.id === id) {
                    return { ...button, on: !button.on };
                }
                return button;
            });
        })
    }
    let buttons = buttonsState.map(button => {
    return (
        <Button
            key={button.id}
            color={button.color}
            on={button.on}
            toggle={() => toggleButton(button.id)}
        />
    )
})
    return (
        <div id="button-container" >
           {buttons} 
        </div>
    )
}