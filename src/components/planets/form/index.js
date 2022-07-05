import { useState, useEffect } from "react";

const Form = (props) => {
    const [planetName, setName] = useState("");
    const handleChange = event => setName(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();
        props.addPlanet({name: planetName});
    }

    useEffect(() => {
        setName()
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="planetName">Nome do Planeta: </label>
                <input type="text" id="planetName" value={planetName} onChange={handleChange}/>
                <br/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default Form;