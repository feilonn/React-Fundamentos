import GrayImage from '../../shared/gray_image'
import DescriptionWithLink from '../../shared/decription_link'
import React from 'react';

async function getSatellite(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json();

    return data;
}

class Planet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            satellites: []
        }
    }

    componentDidMount() {
        getSatellite(this.props.id).then(data => {
            this.setState(() => ({
                satellites: data['satellites']
            }))
        })
    }

    // let title;
    // if(props.title_with_underline) {
    //     title = <h4 className="titulo"><u>{props.name}</u></h4>
    // } else {
    //     title = <h4 className="titulo">{props.name}</h4> 
    // }

    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
                <DescriptionWithLink 
                    description={this.props.description} 
                    link={this.props.link}    
                >
                </DescriptionWithLink>
                <GrayImage image_url={this.props.image_url}></GrayImage>
                <ul>
                   {this.state.satellites.map((satellite) => <li>Satélite { satellite.name }</li>)
    
                   }
                </ul>
                <hr></hr>
            </div>
        )
    }
    
}

export default Planet;