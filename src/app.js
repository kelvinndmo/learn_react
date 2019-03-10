const app = {
    "title":"norah Novak",
    "subtitle":"kelvin onkundi",
    "options":[]
}

const submitForm = (e) => {
    e.preventDefault();//prevents the default behaviour
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option)
        e.target.elements.option.value = '' //sets to an empty string 
    }
    renderApp()
}

const clearArray = () => {
    app.options = []
    renderApp()
}


const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "here are your option":"no options"}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>kelvin onkundi</li>
                <li>norah areba</li>    
            </ol>
            <form onSubmit={submitForm}>
                <input type="text" name="option"></input>
                <button> add option </button>
                <button onClick={clearArray}>clearall</button>
            </form>
    
        </div>
    );
    ReactDOM.render(template,document.getElementById('ndemo'))
}

renderApp()