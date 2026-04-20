export default function Form({onSubmit}) {
  return (
  <div>
    <form onSubmit={onSubmit} className="bg-white p-4 d-flex flex-row justify-content-center align-items-center">
        <div className="mx-1 d-flex flex-grow-1">
        <label htmlFor="recipeName" className="form-label d-none">Recipe Name</label>
            <input type="text" className="form-control" id="recipeName" placeholder="Enter recipe name" />
        </div>
        <input type="submit" className="btn btn-dark outline-none" value="+ Add Ingridient"/>
    </form>
  </div>
  );
}