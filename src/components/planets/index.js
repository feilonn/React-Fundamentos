import React, { useState, useEffect } from 'react';
import Planet from './planet'
import Form from './form'

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json');
    let data = await response.json()

    // console.log(data);
    return data;
}

const Planets = () => {
    // [estado, método que altera o estado]
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets().then(data => {
           setPlanets(data['planets'])
        })
    }, [])

    const addPlanet = (newPlanet) => {
        setPlanets([...planets, newPlanet])
    }

    return (
        <>
            <h3>Planetas</h3>
            <hr/>
            <Form addPlanet={addPlanet}/>
            <hr/>
            {planets.map((planet) =>
                <Planet
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    link={planet.link}
                    image_url={planet.img_url}
                />
            )}
        </>
    )
}

export default Planets;