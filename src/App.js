import React, { useEffect, useState } from 'react'
import data from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'

function App() {
  const [people, SetPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])
  useEffect(() => {
    setInterval(() => {
      setIndex(index + 1)
    }, 3000)
  }, [index])
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
          let position = 'nextslide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronsLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronsRight />
        </button>
      </div>
    </section>
  )
}

export default App
