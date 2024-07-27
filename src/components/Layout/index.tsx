import { Navigate, Outlet, useParams } from "react-router-dom"
import { Note } from "../../pages/types";


const Layout = ({notes}:{notes:Note[] }) => {
 

 // urldeki idyi al
 
 const {id} = useParams();
 // notes dizisnde elemanı ara

const found = notes.find((i)=>i.id === id);
 // bulmazsaka anaysayfaya yönlendir
if(!found) return <Navigate to="/" replace/>

 // parent route içerisnde alt route'u renderla
 return <Outlet context={found} />
}

export default Layout
