export default Listgroup
function Listgroup(){
    return (
        <>
        <h1>
             <img src="../vite.svg" alt="react image" />
        </h1>
         <h1 className="h1">why i like react</h1>
         <ul className="list-group px-5">
            <li className=" py-2">its composable</li>
            <li className=" py-2">its declarative</li>
            <li className=" py-2">it interesting</li>
            <li className=" py-2">on high demand</li>
         </ul>
        </>
    )
}