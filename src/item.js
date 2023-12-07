const Item = ({ imageUrl, name, description, index }) => {
    return (
        <article className='item' >
            {/* <img className='displayPic' src={imageUrl} alt={name} /> */}
            <ImageContainer imageUrl={imageUrl} name={name}></ImageContainer>
            <h3 className='name'>{name}</h3>
            <p className='description'>{description}</p>
            <p className="index">#{index + 1}</p>
        </article>
    )
}

const ImageContainer = ({imageUrl, name}) => {
    return <div className="imageContainer">
        <img className="displayPic" src={imageUrl} alt={name} />
    </div>
}
export default Item;