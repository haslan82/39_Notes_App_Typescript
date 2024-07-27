
import { Badge, Card, Stack } from 'react-bootstrap';
import { Note } from '../../pages/types'
import styles from "./card.module.css";
import { useNavigate } from 'react-router-dom';


const CustomCard = ({note}:{note:Note}) => {

const navigate = useNavigate();

  return (
 <Card onClick={()=> navigate(`/note/${note.id}`)} className={styles.note_card} >
<Card.Body>
    <Stack className='align-items-center h-100 justify-content-between'>
<span className='fw-bold'>{note.title} </span>
<Stack direction='horizontal' className='justify-content-center' gap={2} >
    {note.tags.map((tag)=>(
        <Badge key={tag.value}>{tag.label} </Badge>
    ))}
</Stack>
    </Stack>
</Card.Body>
 </Card>
  )
}

export default CustomCard;
