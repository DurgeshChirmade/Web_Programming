import { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Sample2 extends Component {
    state = { users: [] }

    componentDidMount() {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                var dataReceivedInString = helper.responseText;
                var dataInJSONFormat = JSON.parse(dataReceivedInString);
                var usersFromServer = dataInJSONFormat.data;
                this.setState({ users: usersFromServer });
            }
        };
        helper.open("GET", "https://reqres.in/api/users");
        helper.setRequestHeader("x-api-key", "reqres-free-v1");
        helper.send();
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Photo</th>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user => {
                                return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <img className="img-responsive rounded" src={user.avatar} alt={user.first_name} />
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Sample2;