import { useState, useEffect } from "react";

const initialState = {
    name: '',
    description: '',
    link: '',
    img_url: ''
}

const Form = (props) => {
    const [fields, setFields] = useState(initialState);
    
    const handleFieldsChange = event => setFields({
        ...fields,
        [event.target.name]: event.target.value
    });

    const handleSubmit = event => {
        event.preventDefault();
        props.addPlanet(fields);
        setFields(initialState);
    }

    // useEffect(() => {
    //     setName()
    // }, [])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="planetName">Nome do Planeta: </label>
                <input type="text" id="planetName" name="name" value={fields.name} onChange={handleFieldsChange}/>
                <br/>
                <label htmlFor="planetName">Descrição: </label>
                <input type="text" id="planetName" name="description" value={fields.description} onChange={handleFieldsChange}/>
                <br/>
                <label htmlFor="planetName">Link: </label>
                <input type="text" id="planetName" name="link" value={fields.link} onChange={handleFieldsChange}/>
                <br/>
                <label htmlFor="planetName">URL Image: </label>
                <input type="text" id="planetName" name="img_url" value={fields.img_url} onChange={handleFieldsChange}/>
                <br/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default Form;