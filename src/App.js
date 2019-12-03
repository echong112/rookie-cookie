import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import classList from './classes'
import NavBar from './NavBar'
import AddClass from './AddClass'
import { processImageKey } from './utils'

const App = () => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    setClasses(classList)
  }, [])

  return (
    <Wrapper>
      <NavBar />
      <h1>Welcome to RookieCookie!</h1>
      <CardsWrapper>
        {classes.map((klass, i) => <ClassCard key={i} content={klass}/>)}
      </CardsWrapper>
      <AddClass onSubmit={newClass => setClasses([...classes, newClass]) }/>
    </Wrapper>
  )
}

export default App

const ClassCard = ({content}) => (
  <ClassCardWrapper>
    <img width="100%"
      src={processImageKey(content)}
      alt=''
    />
    <h4>{content.title}</h4>
    <h5>{content.instructor}</h5>
    <h5>{content.description}</h5>
    <h5>{content.duration} min</h5>
  </ClassCardWrapper>
)

const Wrapper = styled.div `
  margin-top: 45px;
  text-align: center;
  max-width: 991px;
  margin: auto;
`

const ClassCardWrapper = styled.div`
  height: 380px;
  width: 175px;
  border-radius: 5px;
  border: solid 1px black;
  overflow: hidden;
  flex-basis: 19%;
  margin: .25%;
`

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`
