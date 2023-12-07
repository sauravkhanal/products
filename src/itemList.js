import Item from "./item"

const ItemList = ({ dataArray }) => {
  return (
    <>
      <h1 className="header">Premium Items</h1>

      <section className='itemList'>


        {
          dataArray.map((item, index) => {
            return <Item {...item} key={item.id} index={index} />
          })
        }
      </section>
    </>
  )
}

export default ItemList