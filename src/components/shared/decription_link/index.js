const DescriptionWithLink = (props) => {

    if(!props.description) { return null; }

    return (
        <>
            <p>{props.description}</p>
            <p>
                <a href={props.link}>{props.link}</a>
            </p>
        </>
    )
}

export default DescriptionWithLink;