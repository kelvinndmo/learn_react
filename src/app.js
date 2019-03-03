let count = 0;

const countIncrement = () =>{
    count ++;
    runTheApplication()
    
}

const approute = document.getElementById('areba')

const runTheApplication = ()=>{
    const template = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={countIncrement}>Kelvin Onkundi Ndemo</button>
        </div>
    );
    ReactDOM.render(template,approute);
}

runTheApplication();