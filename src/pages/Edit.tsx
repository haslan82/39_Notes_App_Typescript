import { useOutletContext } from "react-router-dom";
import Form from "../components/Form"
import { Note, NoteData, Tag } from "./types";

type Props ={
  handleSubmit: (id: string, updatedData:NoteData)=> void;
  createTag: (tag:Tag)=> void;
  availableTags:Tag[];
}

const Edit = ({handleSubmit,createTag,availableTags}:Props) => {

  const note:Note = useOutletContext();

  return (
    <div className="container py-5">
     <h2>Notu Düzenle</h2>
     <Form 
     handleSubmit={(updatedData) => handleSubmit(note.id, updatedData)}
     createTag={createTag}
     availableTags={availableTags}
     markdown={note.markdown}
     title={note.title}
     tags={note.tags}
     />
    </div>
  )
}

export default Edit
