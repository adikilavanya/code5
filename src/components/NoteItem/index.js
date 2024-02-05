// Write your code here
import {
  ListItem,
  Avatar,
  NameAndNoteContainer,
  NameText,
  NoteText,
  HorizontalLine,
} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {name, noteText} = noteDetails

  return (
    <>
      <ListItem>
        {name && <Avatar>{name[0].toUpperCase()}</Avatar>}
        <NameAndNoteContainer>
          <NameText>{name}</NameText>
          <NoteText>{noteText}</NoteText>
        </NameAndNoteContainer>
      </ListItem>
      <HorizontalLine />
    </>
  )
}

export default NoteItem
