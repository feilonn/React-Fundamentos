import GrayImage from '../../shared/gray_image'
import DescriptionWithLink from '../../shared/decription_link'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


const Planet = (props) => {
    return (
        <div>
            <Link to={`planet/${props.name}`}><h4 className='titulo'>{props.name}</h4></Link>
            <DescriptionWithLink
                description={props.description}
                link={props.link}
            >
            </DescriptionWithLink>
            <GrayImage image_url={props.image_url}></GrayImage>
        </div>
    )
}

export default Planet;