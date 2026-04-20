export default function Ingridients({allIngridients}) {
  const items=allIngridients;
  return (
    <div className="ingridients">
      <h2 className="text-center fw-bold">Ingridients At Hand</h2>
      <ul className="list-group">
         {items.map((ingridient, index) => {
            return (<li key={index} className="list-group-item d-flex justify-content-start px-5 mx-5"> {ingridient}</li>)
          }
          )}
      </ul>
    </div>
  );
}