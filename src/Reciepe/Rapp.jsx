import Header from "./Header";
import Getreciepe from "./AplBttuon";
import Form from "./Form";
import "./style.css";
import Ingridients from "./ingridients";
import { useState } from "react";
export default function App() {
  const allIngridients=['sugar', 'salt','water'];
  const [items,updateallIngridients]=useState(allIngridients)
  function handleSubmit(event){
   event.preventDefault()
   const newItem=event.target.recipeName.value
   event.target.recipeName.value=''
   if(!newItem) return
   updateallIngridients(items=>{
    items.push(newItem)
    console.log(items)
    return [...items]
    })
   console.log(newItem)
  }
  //generTING THE RECIPE
  function getReciepe(){
    console.log("getting reciepe")
    // ...existing code...
    console.log("getting reciepe");
    const prompt = `Create a recipe using these ingredients: ${items.join(", ")}`;
    fetch(
       "https://api-inference.huggingface.co/models/mistral", // You can change the model if needed
       {
         headers: {
         "Authorization": `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
         "Content-Type": "application/json",
         },
         body: JSON.stringify({ inputs: prompt }),
        }
    )
    .then((res) => res.json())
    .then((data) => {
      // Handle the response here
      console.log("AI Response:", data);
      // You can set this to state and display it in your UI
    })
    .catch((err) => {
      console.log("Error fetching from Hugging Face:", err);
    });
// ...existing code...
  }
  return (
    <>
      <Header/>
      <Form
       onSubmit={handleSubmit}
      />
      <Ingridients
        allIngridients={items}
      />
      {items.length>=4 && <Getreciepe onClock={getReciepe}/>}
    </>
  );
}
// Note: The export statement at the end exports both the App component and the allIngridients array.
