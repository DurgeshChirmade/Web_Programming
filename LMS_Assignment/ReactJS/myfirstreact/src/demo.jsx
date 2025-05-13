import { Component } from "react";

class Demo extends Component {
    state = { Name: "Mahesh" }

    constructor(){
        // debugger;
        super();
    }

    doSomething=()=>{
        // debugger;
        // this.state.Name = "Nilesh"; //Do not change state this way!

        this.setState({Name : "Nilesh"})
    }

    componentDidMount(){
        // debugger;
    }

    componentDidUpdate()
    {
        // debugger;
    }

    render() {
        // debugger;
        return (<>
            <h1>Welcome Home {this.state.Name}</h1>
            <h1>Test Class Component</h1>
            <button onClick={this.doSomething}>Click Me</button>
        </>);
    }
}

export default Demo;