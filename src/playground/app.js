class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePickOne = this.handlePickOne.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this) 
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options : []
        }
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json)
    
            if (options){
                this.setState(() => ({ options }))
            }
        }catch(e){

        }
        
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }

    }
    componentWillUnmount(){
        console.log('unmount')
    }
    handleDeleteOptions (){
        this.setState(() => ({options:[]}))
    }

    handlePickOne(){
            let kelvo = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[kelvo]
            alert (option)
    }
    handleAddOption(option){
        if(!option){ 
            return 'Enter a valid value to add an item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }else {
        this.setState((prevState) => ({options : prevState.options.concat([option])}))
        }
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => (
            {
                options : prevState.options.filter((option) => {
                    return optionToRemove !== option
                })
            }
        ))
    }
    render(){
        const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action handlePick={this.handlePickOne} hasOptions = {this.state.options.length > 0}/>
                <Options handleDeleteOptions={this.handleDeleteOptions}  options={this.state.options} handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title:'Indecision'
}


const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >what should i do?</button>
        </div>
    )   
}



const Options = (props) => {
    return (
        <div>
            <ol>
                {
                    props.options.map((option) => < Option key={option} handleDeleteOption={props.handleDeleteOption} optionText={option} />)
                    
                }
                <button onClick={props.handleDeleteOptions}>Remove all</button>
            </ol>
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText} 
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>remove</button>
        </div>
    )
}

class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error:undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.kevo.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => {
            return {error}
        })
        if (!error) {
            e.target.elements.kevo.value = '';

        }
    }
    render(){
        return (
            <div>
                <p>{this.state.error}</p>
          <form onSubmit={this.handleAddOption}>
              <input type="text" name="kevo"></input>
              <button > submit </button>
          </form> 
          </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('areba')) 