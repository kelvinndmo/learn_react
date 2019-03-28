import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'

export default class IndecisionApp extends React.Component{
    state = {
        options:[]
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
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }

    }
    componentWillUnmount(){
        console.log('unmount')
    }
    handleDeleteOptions = () => {
        this.setState(() => ({options:[]}))
    }

    handlePickOne = () => {
            let kelvo = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[kelvo]
            alert (option)
    }
    handleAddOption = (option) => {
        if(!option){ 
            
            return 'Enter a valid value to add an item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }else {
        this.setState((prevState) => ({options : prevState.options.concat([option])}))
        }
    }

    handleDeleteOption = (optionToRemove) => {
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