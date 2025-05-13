import { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Assignment2 extends Component {
    state = { users: [] }

    componentDidMount() {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState === 4 && helper.status === 200) {
                var dataReceivedInString = helper.responseText;
                var dataInJSONFormat = JSON.parse(dataReceivedInString);
                var usersFromServer = dataInJSONFormat.meals;
                this.setState({ users: usersFromServer });
            }
        };
        helper.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?s=pizza");
        helper.send();
    }

    render() {
        const { users } = this.state;

        return (
            <>
                <h5 className="m-5">Component Name : <strong>Recipe</strong></h5>

                {users.length > 0 ? (
                    users.map((user, index) => (
                        <div className="border p-4 m-5" key={index}>
                            <div className="mb-3">
                                <h6><strong>Recipe Name:</strong> {user.strMeal}</h6>
                            </div>

                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <h6 className="mb-3">IMAGE HERE</h6>
                                    <img
                                        src={user.strMealThumb}
                                        alt={user.strMeal}
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '450px' }}
                                    />
                                </div>

                                <div className="col-md-8">
                                    <p style={{ whiteSpace: 'pre-line' }}>{user.strInstructions}</p>
                                </div>

                                <div className="col-12 mt-3">
                                    <h6 className="mb-2">VIDEO HERE</h6>
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            // src={user.strYoutube.replace("watch?v=", "embed/")}
                                            src='https://www.youtube.com/embed/rw_zHEPVpL8'
                                            // https://youtu.be/rw_zHEPVpL8?si=U2THhdKc0-3mU6ly

                                            title="Recipe Video"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </>
        );
    }
}

export default Assignment2;
