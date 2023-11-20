import PersonShow from './PersonShow'
import "./PersonList.css"
function PersonList({ personList }) {
    const renderedList = personList.map((person, index) => {
        return <PersonShow person={person} key={index} />
    })
    return <div>
        <div className="title">
            <div>User List</div>
        </div>
        <div>
            {renderedList}
        </div>
</div>
}
export default PersonList;