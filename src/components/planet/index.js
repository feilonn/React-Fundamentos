import GrayImage from '../shared/gray_image'
import DescriptionWithLink from '../shared/decription_link'
import Form from './form'
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from "react-router-dom";

async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json();

    return data;
}

const Planet = (props) => {

    const [satellites, setSatellites] = useState([]);
    const [planet, setPlanet] = useState({});
    const [redirect, setRedirect] = useState(false);

    let { id } = useParams();

    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites'])
            setPlanet(data['data'])
        }, error => {
            setRedirect(true)
        })
    }, [])

    const addSatellite = (newSatellite) => {
        setSatellites([...satellites, newSatellite])
    }

    const navigate = useNavigate();

    const goToHome = () => {
        return navigate('/');
    }

    if(redirect) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h3>Satélites</h3>
            <h4 className='titulo'>{planet.name}</h4>
            <DescriptionWithLink
                description={planet.description}
                link={planet.link}
            >
            </DescriptionWithLink>
            <GrayImage image_url={planet.img_url}></GrayImage>
            <hr/>
            <Form addSatellite={ addSatellite }/>
            <ul>
                {satellites.map((satellite) => <li>Satélite {satellite.name}</li>)

                }
            </ul>
            <hr></hr>
            <button type="button" onClick={goToHome}>Retornar para a listagem</button>
        </div>
    )
}

export default Planet;