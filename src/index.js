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
      <EventExamples />
      {
        dataArray.map((item) => {
          return <Item {...item} key={item.id} />
        })
      }
    </section>
  )
}


const EventExamples = () => {
  const handleClick = (event) => {
    alert("btn clicked");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(event)
    console.log("form is submitted")
  };

  return (
    <section>

      <form onSubmit={handleFormSubmit}>
        <h2>form element</h2>
        <input
          type="text"
          name="inputValue"
          onChange={handleChange}>
        </input>
      </form>

      <button onClick={handleClick}>click here</button>

      <button onClick={(event) => {alert('btn 2 click')}}>btn 2</button>
    </section>
  );
};


root.render(
  <ItemList />
)