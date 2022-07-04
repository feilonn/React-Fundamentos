import React from 'react';
import Planet from './planet'

// const clickPlanet = (name) => {
//     alert(`Clique no planeta ${name}`);
// }

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json');
    let data = await response.json()

    return data;
}

class Planets extends React.Component {

    constructor(props) {
        super(props);
        //Estado inicial
        this.state = {
            planets: []
        }
    }

    componentDidMount() {
        getPlanets().then(data => {
            this.setState(() => ({
                planets: data['planets']
            }))
            // this.state.planets = data['planets'];
        })
    }

    render() {
        return (
            <>
                <h3>Planetas</h3>
                <hr></hr>
                {this.state.planets.map((planet) =>
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

}

export default Planets;