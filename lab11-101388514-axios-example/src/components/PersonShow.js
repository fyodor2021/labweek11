import "./PersonShow.css"
function PersonShow({ person }) {
    return <div className="flex-top-container">

        <div>
            <div className="person-header">
                <span>{person.name.title} </span>
                <span>{person.name.first} </span>
                <span>{person.name.last} </span>
                <span> - {person.login.uuid} </span>

            </div>
            <div className="flex-med-container">

                <div className="flex-container">
                    <div>
                        <img alt="picture of a person" src={person.picture.large} />

                    </div>
                    <div className="button-container">
                        <button>Details</button>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="flex-item">
                        <p>User Name: </p>
                        <p>{person.login.username}</p>
                    </div>
                    <div className="flex-item">
                        <p>Gender: </p>
                        <p>{person.gender}</p>
                    </div>
                    <div className="flex-item">
                        <p>Time Zone Desciption: </p>
                        <p>{person.location.timezone.description}</p>
                    </div>
                    <div className="flex-item">
                        <p>User Name: </p>
                        <p>
                            <span>{person.location.street.number} </span>
                            <span>{person.location.street.name}, </span>
                            <span>{person.location.city}, </span>
                            <span>{person.location.state}, </span>
                            <span>{person.location.country}, </span>
                            <span>{person.location.postcode}</span>
                        </p>
                    </div>
                    <div className="flex-item">
                        <p>Email: </p>
                        <p>{person.email}</p>
                    </div>
                    <div className="flex-item">
                        <p>Birth Date and Age: </p>
                        <p>
                            <span>{person.dob.date} </span>
                            <span>({person.dob.age})</span>
                        </p>
                    </div>
                    <div className="flex-item">
                        <p>Register Date: </p>
                        <p>{person.registered.date}</p>
                    </div>
                    <div className="flex-item">
                        <p>Phone#: </p>
                        <p>{person.phone}</p>
                    </div>
                    <div className="flex-item">
                        <p>Cell#: </p>
                        <p>{person.cell}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default PersonShow;