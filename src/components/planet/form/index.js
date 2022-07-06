import { useState } from "react";

const initialState = {
    name: ''
}

const Form = (props) => {
    const [fields, setFields] = useState(initialState);
    
    const handleFieldsChange = event => setFields({
        ...fields,
        [event.target.name]: event.target.value
    });

    const handleSubmit = event => {
        event.preventDefault();
        props.addSatellite(fields);
        setFields(initialState);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="satelliteName">Nome do Satelite: </label>
                <input type="text" id="satelliteName" name="name" value={fields.name} onChange={handleFieldsChange}/>
                <input type="submit"/>
                <br/>
            </form>
        </>
    )
}

export default Form;