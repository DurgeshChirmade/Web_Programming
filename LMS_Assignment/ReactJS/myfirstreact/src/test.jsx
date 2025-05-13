import { Component } from "react";

class Test extends Component {
    state = { emp: { No: 1, Name: "Durgesh", Address: "Pune" } }

    DoChange = () => {
        var copyOfEmp = { ...this.state.emp };
        copyOfEmp.Name="Ajay";

        // debugger;
        this.setState({emp:copyOfEmp});
        // this.setState({emp : {No : 1, Name : "Nilesh", Address: "Pune"}});
    }

    render() {
        // debugger;
        return (<>
            <h1>No : {this.state.emp.No}</h1>
            <h1>Name : {this.state.emp.Name}</h1>
            <h1>Address : {this.state.emp.Address}</h1>
            <button onClick={this.DoChange}>Click Me</button>
        </>);
    }
}

export default Test;