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
                        <p className="label">User Name: </p>
                        <p>{person.login.username}</p>
                    </div>
                    <div className="flex-item">
                        <p className="label">Gender: </p>
                        <p>{person.gender}</p>
                    </div>
                    <div className="flex-item">
                        <p className="label">Time Zone Desciption: </p>
                        <p>{person.location.timezone.description}</p>
                    </div>
                    <div className="flex-item ">
                        <div className="address-label">
                            <p>Address: </p>
                        </div>

                        <div className="address-container">
                            <span className="address">{person.location.street.number} </span>
                            <span className="address">{person.location.street.name}, </span>
                            <span className="address">{person.location.city}, </span>
                            <span className="address">{person.location.state}, </span>
                            <span className="address">{person.location.country}, </span>
                            <span className="address">{person.location.postcode}</span>

                        </div>
                    </div>
                    <div className="flex-item">
                        <p className="label">Email: </p>
                        <p>{person.email}</p>
                    </div>
                    <div className="flex-item">
                        <p className="label">Birth Date and Age: </p>
                        <p>
                            <span>{person.dob.date} </span>
                            <span>({person.dob.age})</span>
                        </p>
                    </div>
                    <div className="flex-item">
                        <p className="label">Register Date: </p>
                        <p>{person.registered.date}</p>
                    </div>
                    <div className="flex-item">
                        <p className="label">Phone#: </p>
                        <p>{person.phone}</p>
                    </div>
                    <div className="flex-item">
                        <p className="label">Cell#: </p>
                        <p>{person.cell}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default PersonShow;