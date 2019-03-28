class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleminusOne = this.handleminusOne.bind(this)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.state = {
            count:[]
        }
    }
    componentDidMount(){
        const stringCount = localStorage.getItem('count')
        const count = parseInt(stringCount, 10)

        if(!isNaN(count)){
            this.setState(() => ({count}))
        }
    }
    componentDidUpdate(prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count)
        }

    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count:prevState.count + 1
            }
        })

    }
    handleminusOne(){
        this.setState((prev) => {
            return {
                count:prev.count - 1
            }
        })
    }
    handleRemoveAll(){
        this.setState((prevS) => {
            return {
                count:prevS.count - prevS.count
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Count:{this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleminusOne}>-1</button>
                <button onClick={this.handleRemoveAll}>reset</button>
            </div>
        )
    }
};

ReactDOM.render(<Counter/>,document.getElementById('areba'))