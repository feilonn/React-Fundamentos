import Planet from './planet'

export const Planets = () => {
    return (
        <>
            <h3>Planetas</h3>
            <hr></hr>
            <Planet 
                name="Mercúrio" 
                description="Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.Si num tem leite então bota uma pinga aí cumpadi!Sapien in monti palavris qui num significa nadis i pareci latim.Copo furadis é disculpa de bebadis, arcu quam euismod magna."
                link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                image_url="https://s2.glbimg.com/VpIzELbkikLPNtd2tewJFKOSZuM=/0x0:624x624/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/H/B/DctA4FQCOb1cLPd5LO1Q/missao-mercurio-6-nasa.jpg"
            >
            </Planet>
            <Planet 
                name="Saturno" 
                description="Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.Si num tem leite então bota uma pinga aí cumpadi!Sapien in monti palavris qui num significa nadis i pareci latim.Copo furadis é disculpa de bebadis, arcu quam euismod magna."
                link="https://pt.wikipedia.org/wiki/Saturno_(planeta)"
                image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg"
            >
            </Planet>
        </>
    )
}

// export default Planets;