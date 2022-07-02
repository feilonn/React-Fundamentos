import GrayImage from '../../shared/gray_image'
import DescriptionWithLink from '../../shared/decription_link'

const Planet = (props) => {
    return (
        <div>
            <h4 class="titulo">{props.name}</h4>
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