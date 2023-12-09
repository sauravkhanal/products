import Item from "./item"

const ItemList = ({ dataArray }) => {

  // sort data based on id (it is received in random order from server)
  dataArray.sort(function (firstItem,secondItem){return firstItem.id - secondItem.id})

  return (
    <>
      <h1 className="header">Premium Items</h1>

      <section className='itemList'>


        {
          dataArray.map((item, index) => {
            return <Item {...item} key={item.id} index={item.id} />
          })
        }
      </section>
    </>
  )
}

export default ItemList