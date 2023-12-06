import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


const Item = ({ imageUrl, name, description }) => {
  return (
    <article className='item' >
      <img className='displayPic' src={imageUrl} alt={name} />
      <h3 className='name'>{name}</h3>
      <p className='description'>{description}</p>
    </article>
  )
}


const details = require('./data.json')
const dataArray = details.data


const ItemList = () => {
  return (
    <section className='itemList'>
      {
        dataArray.map((item) => {
          return <Item imageUrl={item.imageUrl} name={item.name} description={item.description} key={item.id}/>
        })
      }
    </section>
  )
}


root.render(
  <ItemList />
)