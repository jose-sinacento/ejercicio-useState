import './App.css'
import { useState } from 'react';

function App() {
    //Aquí tu código
    const [name, setName] = useState("Sofía")
    const [newName, setNewName] = useState("")

    const nameChanged = (n) => {
        setName(n);
    };

    const changeNameToReyes = () => {
        setName('Reyes');
    };

    const changeNameBonus = (e) => {
        e.preventDefault();
        if (newName) {
        setName(newName);
        setNewName("");

        }
    };

    const handleOnChange = (e) => {
        setNewName(e.target.value);
    }

    return (
        <div>
            <h1>Teacher Name: {name}</h1>
            <ul>
                <li onClick={() => nameChanged("Data")}>Data</li>
                <li onClick={changeNameToReyes}>Reyes</li>
                <li onClick={() => setName('Yolanda')}>Yolanda</li>
            </ul>
            <form onSubmit={changeNameBonus}>
                <input type='text' value={newName} onChange={handleOnChange} placeholder='add a name'></input>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
};

export default App;
