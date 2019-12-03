import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import classList from './classes'
import NavBar from './NavBar'
import AddClass from './AddClass'
import { processImageKey, truncateDesc } from './utils'

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
    <ClassCardImage
    style ={ { backgroundImage: "url("+processImageKey(content)+")" } }
      src={processImageKey(content)}
    />
    <h4>{content.title}</h4>
    <h5>{content.instructor}</h5>
    <h5>{truncateDesc(content.description)}</h5>
    <ClassCardDuration>{content.duration} min</ClassCardDuration>
  </ClassCardWrapper>
)

const Wrapper = styled.div `
  text-align: center;
  max-width: 991px;
  margin: auto;
  margin-top: 45px;
`

const ClassCardWrapper = styled.div`
  height: 480px;
  width: 175px;
  border-radius: 5px;
  border: solid 1px black;
  overflow: hidden;
  flex-basis: 19%;
  margin: .25%;
  position: relative;
`
const ClassCardImage = styled.div`
  width: 100%;
  height: 50%;
  background-size: cover;
`

const ClassCardDuration = styled.h5`
  width: 100%;
  position: absolute;
  bottom: 5px;
`


const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`
