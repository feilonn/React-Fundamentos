import GrayImage from '../../shared/gray_image'
import DescriptionWithLink from '../../shared/decription_link'
import Form from './form'
import React, { useState, useEffect } from 'react';

async function getSatellite(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json();

    return data;
}

// componentDidMount() {
//     getSatellite(this.props.id).then(data => {
//         this.setState(() => ({
//             satellites: data['satellites']
//         }))
//     })
// }

const Planet = (props) => {

    const [satellites, setSatellites] = useState([]);

    useEffect(() => {
        getSatellite(props.id).then(data => {
            setSatellites(data['satellites'])
        })
    }, [])

    const addSatellite = (newSatellite) => {
        setSatellites([...satellites, newSatellite])
    }

    return (
        <div>
            <h4 className='titulo'>{props.name}</h4>
            <DescriptionWithLink
                description={props.description}
                link={props.link}
            >
            </DescriptionWithLink>
            <GrayImage image_url={props.image_url}></GrayImage>
            <hr/>
            <Form addSatellite={ addSatellite }/>
            <ul>
                {satellites.map((satellite) => <li>Satélite {satellite.name}</li>)

                }
            </ul>
            <hr></hr>
        </div>
    )
}

export default Planet;