console.log("app.js is running");

const template = (
<div>
<h1>This is JSX from app.js hello</h1> 
<p>This is some info</p>
<ol>
    <li>Kelvin</li>
    <li>Item two</li>
</ol>
</div>
);

// var userName = 'onkundi';
// var UserAge = 21;
// var location = "Kisii"

const juja = {
    "title":"I wondered lonely",
    "subtitle":"English",
    "options":["One","Two"]

}

const template2 = (
    <div>
        <h1>{juja.title}</h1>
        {juja.subtitle && <p>subtitle : {juja.subtitle}</p>}
      {juja.options.length > 0 ? <p> onkindi ndemo  </p> :"no options"}
      
    </div>
)

const ndemo = {
    "name":"",
    "school":"JKUAT",
    "age":50,
    "company":"andela",
    "location":"Keroka  "
}

function getLocation(location){
    if(location){
        return <p>{location}</p>
    }
}

const andela = (
    <div>
        <h1>{ndemo.name ? ndemo.name:"Onkundi"}</h1>
        <h2>{ndemo.school}</h2>
        <h3>{ndemo.company}</h3>
        {( ndemo.age && ndemo.age >= 18) && <p> Age:{ndemo.age}</p>}
        {getLocation(ndemo.location)}
    </div>
)

const approute = document.getElementById('areba')


ReactDOM.render(template2,approute)