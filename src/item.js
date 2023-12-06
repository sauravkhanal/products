const Item = ({ imageUrl, name, description, index}) => {
    return (
        <article className='item' >
            <img className='displayPic' src={imageUrl} alt={name} />
            <h3 className='name'>{name}</h3>
            <p className='description'>{description}</p>
            <p className="index">#{index+1}</p>
        </article>
    )
}
export default Item;