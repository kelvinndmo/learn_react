class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision App"
        const subtitle = "Put your life in the hands of a computer"
        const options = ['Thing one','Thing Two','Thing three']
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action  />
                <Options  options={options}/>
                <AddOption />
            </div>
        )
    }
}
class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    handlePick(){
        alert('hey')
    }
   
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>what should i do?</button>
                <button onClick={this.removeAll}>hellloe</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    removeAll(){
        alert("fuck ")
        console.log(this.props.options)
    }
    render(){

        return (
            <div>
                <ol>
                    {
                        this.props.options.map((option) => <li key={option}>{option}</li>)
                    }
                    <button onClick={this.removeAll}>Remove all</button>
                </ol>
            </div>
        )
    }
}

class AddOption extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        const kevo = e.target.elements.kevo.value.trim();
        if (kevo){
            alert(kevo)
        }
    }
    render(){
        return (
          <form onSubmit={this.handleSubmit}>
              <input type="text" name="kevo"></input>
              <button > submit </button>
          </form>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        < Options />
        <AddOption />
    </div>
)

ReactDOM.render(<IndecisionApp/>, document.getElementById('areba'))