import { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Assignment1 extends Component {
    state = { users: [] }

    componentDidMount() {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                var dataReceivedInString = helper.responseText;
                var dataInJSONFormat = JSON.parse(dataReceivedInString);
                var usersFromServer = dataInJSONFormat; // Adjusted to match the expected structure
                this.setState({ users: usersFromServer });
            } else {
                console.error("Error fetching data: ", helper.statusText);
            }
        };
        helper.open("GET", "https://jsonplaceholder.typicode.com/users");
        helper.send();
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-bordered table-hover rounded">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>ZipCode</th>
                    </thead>
                    <tbody>

                        {
                            this.state.users.map(user => {
                                console.log(user);
                                return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.zipcode}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Assignment1;