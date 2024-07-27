import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Note, NoteData, Tag } from "./pages/types";
import { v4 } from "uuid";
import Layout from "./components/Layout";

const App = () => {
  const [notes, setNotes] = useLocalStorage<Note[]>("notes", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("tags", []);

  // tag oluşturma fonksiyonu
  const createTag = (tag: Tag): void => {
    setTags([...tags, tag]);
  };
  // note oluşturma fonksiyonu

  const createNote = (noteData: NoteData): void => {
    // formdan gelen veriye  id eklenecek
    const newNote: Note = { id: v4(), ...noteData };

    // state'i güncelle
    setNotes([...notes, newNote]);
  };

  // not silme fonksiyonu
  const deleteNote = (id: string): void => {
    setNotes(notes.filter((i) => i.id !== id));
  };

  // not düzenleme fonksiyonu

  const updateNote = (id: string, updatedData: NoteData): void => {
    const updatedArr = notes.map((note) =>
      note.id === id ? { id, ...updatedData } : note
    );
    setNotes(updatedArr);
  };

  //! console.log(notes)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main notes={notes} availableTags={tags} />} />
        <Route
          path="/new"
          element={
            <Create
              handleSubmit={createNote}
              createTag={createTag}
              availableTags={tags}
            />
          }
        />

        <Route path="/note/:id" element={<Layout notes={notes} />}>
          <Route index element={<Detail deleteNote={deleteNote} />} />
          <Route
            path="edit"
            element={
              <Edit
                handleSubmit={updateNote}
                createTag={createTag}
                availableTags={tags}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
