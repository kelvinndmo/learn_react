 
class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision'
        const subtitle = 'Application'
        const options = ['one','two','three','five']
        return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options={options}/>
            <AddOption />

        </div>
        )}
}
class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>
                    {this.props.title}
                </h1>
                <h2>put your life in the hands of a computer</h2>
            </div>
        )
    }
}



class Action extends React.Component{
    handlePick(){
        alert('Novak')
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>what should i do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    removeAll(){
        alert(this.props.options)
    }
    render(){
        return (
        <div>
        {this.props.options.map((option) => < Option key={option} optionText={option}/> )}
        <button onClick={this.removeAll}>Remove all</button> 
        </div>
        )}
}
class Option extends React.Component  {
    render(){
        return (
            <div>{this.props.optionText}</div>
        )
    }
}

class AddOption extends React.Component{
    handleOption(e){
        e.preventDefault()
        
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option)
        }
    }
    render(){
        return (
            <div>
                <p>Add option Component here</p>
                <form onSubmit={this.handleOption}>
                    <input type='text' placeholder='your option here' name='option'></input>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />,document.getElementById('areba'))