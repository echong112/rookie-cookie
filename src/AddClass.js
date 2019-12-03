import React, { useState } from 'react';
import styled from 'styled-components'

const AddClass = ({content, onSubmit}) => {

  const [classId, setClassId] = useState(Math.ceil(Math.random() * 1000));
  const [classTitle, setClassTitle] = useState('Henry');
  const [classIns, setClassIns] = useState('asdf instructor name');
  const [classDesc, setClassDesc] = useState('asdfasdd');
  const [classDur, setClassDur] = useState(0);
  const [classFeaturedImage, setClassFeaturedImage] = useState('asdf');
  const [classType, setClassType] = useState('on-demand');

  
  const handleSubmit = (event, props) => {
    event.preventDefault();
    onSubmit({
      id: classId,
      title: classTitle,
      instructor: classIns,
      description: classDesc,
      duration: classDur,
      featuredImage: classFeaturedImage,
      type: classType
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormWrapper>
        <label>Title:</label>
        <FormFieldWrapper
          type="text"
          value={classTitle}
          required
          onChange={e => setClassTitle(e.target.value)}
        />
        <label>Instructor:</label>
        <FormFieldWrapper
          type="text"
          placeholder="e.g. (Gordon Ramsey, Ratatouille, Julia Child)"
          value={classIns}
          required
          onChange={e => setClassIns(e.target.value)}
        />
        <label>Description:</label>
        <FormTextArea
          type="text"
          placeholder="Please enter class description"
          value={classDesc}
          required
          onChange={e => setClassDesc(e.target.value)}
        />
        <label>Duration:</label>
        <FormFieldWrapper
          type="number"
          placeholder="Please enter duration in hours"
          value={classDur}
          required
          onChange={e => setClassDur(e.target.value)}
        />
        <label>Featured Image:</label>
        <FormFieldWrapper
          type="text"
          placeholder="Please enter image URL"
          value={classFeaturedImage}
          required
          onChange={e => setClassFeaturedImage(e.target.value)}
        />
        <label>Class Type:</label>
        <FormSelect
          placeholder="Please select "
          value={classType}
          onChange={e => setClassType(e.target.value)}
        >
          <option value="on-demand">On Demand</option>
          <option value="live">Live</option>
        </FormSelect>
        <FormFieldWrapper type="submit" value="Add" />
      </FormWrapper>
    </form>
  )
}


export default AddClass
const FormWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  flex-wrap: wrap;
  max-width: 991px;
  margin: auto;
`

const FormFieldWrapper = styled.input`
  width: 100%;
`

const FormTextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
`
const FormSelect = styled.select`
`