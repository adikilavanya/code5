import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import {
  NoteContainer,
  Form,
  NoteList,
  Heading,
  Head,
  Para,
  Img,
  NameInput,
  NoteTextArea,
  NoteButton,
} from './styledComponents'

const Notes = () => {
  const [name, setName] = useState('')
  const [noteText, setNoteText] = useState('')

  const [noteList, setNoteList] = useState([])

  const onChangeNoteText = event => {
    setNoteText(event.target.value)
  }
  const onChangeName = event => {
    setName(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()

    const newNote = {
      name,
      noteText,
      noteList,
      id: uuidv4(),
    }
    setName('')
    setNoteText('')
    setNoteList(prevNoteList => [...prevNoteList, newNote])
  }

  return (
    <>
      <NoteContainer>
        <Heading>Notes</Heading>
        <Form onSubmit={onAddNote}>
          <NameInput
            type="text"
            placeholder="Title"
            value={name}
            onChange={onChangeName}
          />
          <NoteTextArea
            placeholder="Take a Note..."
            rows="6"
            type="textarea"
            value={noteText}
            onChange={onChangeNoteText}
          />
          <NoteButton type="submit">Add</NoteButton>
        </Form>
        <Img
          alt="notes empty"
          src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        />
        <Head>No Notes Yet</Head>
        <Para>Notes you add will appear here</Para>
        <NoteList>{noteList}</NoteList>
        <NoteList>
          {noteList.map(eachnote => (
            <NoteItem {eachnote.id} />
          ))}
        </NoteList>
      </NoteContainer>
    </>
  )
}

export default Notes
