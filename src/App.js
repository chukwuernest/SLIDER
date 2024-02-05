import React, { useState } from 'react'
import data from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'

function App() {
  const [people, SetPeople] = useState(data)
  const [index, setIndex] = useState(0)
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-centre'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          //more to come

          return (
            <article key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev'>
          <FiChevronsLeft />
        </button>
        <button className='next'>
          <FiChevronsRight />
        </button>
      </div>
    </section>
  )
}

export default App
