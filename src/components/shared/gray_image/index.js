import './style.css'

const GrayImage = (props) => {
    return (
        <>
            <img className="img-planet" src={props.image_url}></img>
        </>
    )
}

export default GrayImage;