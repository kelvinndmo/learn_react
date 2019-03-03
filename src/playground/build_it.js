let visibility = false

const runFun = () =>{
    visibility = !visibility
    myApp();

}
const myApp = () => {
    const jsx = (
        <div>
            <h1>Content hiders</h1>
            <button onClick={runFun}>
                {visibility ? "Hide details":"show details"}
            </button>
            {visibility && (
                <div>
                    <p>Hello</p>
                 </div>
            )}
        </div>
    )
    ReactDOM.render(jsx,document.getElementById('areba'));
}

myApp()