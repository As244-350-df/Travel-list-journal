export default function Form() {
    function handleSubmit(event) {
        event.preventDefault();
        // Handle form submission logic here
        let formData=new FormData(event.target)
       /* let email=formData.get("email")
        let name=formData.get("name")
        let age=formData.get("age")
        let password=formData.get("password")
        check=formData.getAll("check")
        console.log(`Email: ${email}/n,${check}, Name: ${name}/n, Age: ${age}/n, Password: ${password}`);*/
        let radio=formData.getAll('select')
        let  check=formData.getAll("check")
        console.log(radio,check)
    }
    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
                type="email"
                autoComplete="on"
                className="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelpId"
                placeholder="abc@mail.com"
            />
            <label className="form-label" htmlFor="name">Name<input type="text" name="name" id="name" className="form-control" /></label>
            <label className="form-label" htmlFor='age'>age<input type="text" id="age" name="age" className="form-control" /></label>
            <label className="form-label"autoComplete="on" htmlFor="password">Password<input id="password" type="password" name="password"className="form-control" /></label>
            <label htmlFor="check" className="form-label">checkbox1
                 <input type="checkbox" name="check" id="check" value="checkbox1" />
            </label>
            <label htmlFor="check" className="form-label">checkbox2
                 <input type="checkbox" name="check" id="check" />
            </label>
            <label htmlFor="radio" className="form-label">
                <input type="radio" name='radio' id="one" className="form-control" value="mango" />
                <input type="radio" name='radio' id="two" className="form-control" value="two" />
                <input type="radio" name='radio' id="three" className="form-control"value="three" />
                <input type="radio" name="radio" id="four" className="form-control" />
            </label>
            <label htmlFor="select" className="form-label">Select
                <select name="select"  id="select" className="form-select" multiple>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
            </label>
            <input type="submit" value="submit" />
            <small id="emailHelpId" className="form-text text-muted"
                >Help text</small
            >
        </form>
        
    );
}