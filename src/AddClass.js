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
        <Formlabel>Title:</Formlabel>
        <FormFieldWrapper
          type="text"
          value={classTitle}
          required
          onChange={e => setClassTitle(e.target.value)}
        />
        <Formlabel>Instructor:</Formlabel>
        <FormFieldWrapper
          type="text"
          placeholder="e.g. (Gordon Ramsey, Ratatouille, Julia Child)"
          value={classIns}
          required
          onChange={e => setClassIns(e.target.value)}
        />
        <Formlabel>Description:</Formlabel>
        <FormTextArea
          type="text"
          placeholder="Please enter class description"
          value={classDesc}
          required
          onChange={e => setClassDesc(e.target.value)}
        />
        <Formlabel>Duration:</Formlabel>
        <FormFieldWrapper
          type="number"
          placeholder="Please enter duration in hours"
          value={classDur}
          required
          onChange={e => setClassDur(e.target.value)}
        />
        <Formlabel>Featured Image:</Formlabel>
        <FormFieldWrapper
          type="text"
          placeholder="Please enter image URL"
          value={classFeaturedImage}
          required
          onChange={e => setClassFeaturedImage(e.target.value)}
        />
        <Formlabel>Class Type:</Formlabel>
        <FormSelect
          placeholder="Please select "
          value={classType}
          onChange={e => setClassType(e.target.value)}
        >
          <option value="on-demand">On Demand</option>
          <option value="live">Live</option>
        </FormSelect>
        <FormSubmit type="submit" value="Add" />
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
  padding: 25px;
`
const Formlabel = styled.label`
  padding-top: 15px;
`
const FormFieldWrapper = styled.input`
  width: 100%;
`

const FormSubmit = styled.input`
  margin-top: 15px;
  width: 100%;
  padding: 25px;
`

const FormTextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
`
const FormSelect = styled.select`
  width: 100%;
`