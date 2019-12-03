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

  const deleteClass = (id) => {
    setClasses(classes.filter(curClass => curClass.id !== id));
  }

  const cancelClass = (id) => {
    console.log(id);
  }

  return (
    <Wrapper>
      <NavBar />
      <h1>Welcome to RookieCookie!</h1>
      <CardsWrapper>
        {classes.map((klass, i) => (
            <ClassCard
              key={i}
              content={klass}
              onCancel={cancelClass.bind(this, klass.id)}
              onDelete={deleteClass.bind(this, klass.id)}
            />
          )
        )}
      </CardsWrapper>
      <AddClass onSubmit={newClass => setClasses([...classes, newClass]) }/>
    </Wrapper>
  )
}

export default App

const ClassCard = ({index, content, onDelete, onCancel}) => {
  const [currClass, setCurrClass] = useState(content);

  const cancelClass = () => {
    let tempClass = Object.assign({}, content);
    tempClass.isCancelled = true;
    setCurrClass(tempClass);
  }

  return (
    <ClassCardWrapper>
      <ClassCardImage
        style ={ { backgroundImage: `url(${processImageKey(currClass)})` } }
        src={processImageKey(currClass)}
      />
      {currClass.isCancelled && (
        <CancelledBadge>Cancelled</CancelledBadge>
      )}
      <h4>{currClass.title}</h4>
      <h5>{currClass.instructor}</h5>
      <h5>{truncateDesc(currClass.description)}</h5>
      <ClassCardDuration>{currClass.duration} min</ClassCardDuration>
      <ClassButtonContainer>
        <button onClick={onDelete}>Delete</button>
        <button onClick={cancelClass}>Cancel</button>
      </ClassButtonContainer>
    </ClassCardWrapper>
  )
}

const CancelledBadge = styled.div`
  position: absolute;
  width: 99%;
  top: 0;
  left: 0;
  padding: 15px 0;
  font-weight: bold;
  color: red;
`

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
  bottom: 15px;
`

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`

const ClassButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
`
