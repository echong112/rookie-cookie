import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import classList from './classes'
import NavBar from './NavBar'
import AddClass from './AddClass'
import ClassCard from './ClassCard'

const App = () => {
  const [classes, setClasses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setClasses(classList)
  }, [])

  const deleteClass = (id) => {
    if (window.confirm("Delete Class?")) {
      setClasses(classes.filter(curClass => curClass.id !== id));
    }
  }

  const handleSubmit = (newClass) => {
    setClasses([...classes, newClass]);
    setIsModalOpen(false);
  }

  return (
    <Wrapper>
      <NavBar />
      <h1>Welcome to RookieCookie!</h1>
      <button onClick={() => setIsModalOpen(!isModalOpen)}>Add Class</button>
      {isModalOpen && (
        <div>
          <button onClick={() => setIsModalOpen(!isModalOpen)}>Cancel</button>
          <AddClass
            onCloseModal={() => setIsModalOpen(false)} 
            onSubmit={handleSubmit}
            />
        </div>
      )}
      <CardsWrapper>
        {classes.map((klass, i) => (
          <ClassCard
            key={i}
            content={klass}
            onDelete={deleteClass.bind(this, klass.id)}
            />
          )
        )}
      </CardsWrapper>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div `
  text-align: center;
  max-width: 991px;
  margin: auto;
  margin-top: 45px;
`

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`
