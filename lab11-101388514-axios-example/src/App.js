import PersonList from "./components/PersonList"
import getPersons from "./api"
import { useEffect, useState } from 'react'
function App() {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const personList = await getPersons();
            setPersons(personList);
        }
        fetchData();
    }, [])
    return <div>
        <PersonList personList={persons} />
    </div>
}


export default App;