import Navtab from "../components/Navtab";
import Upperbar from "../components/Upperbar";
import NotesList from "../components/NotesList";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <Navtab />        
      </div>
      <div className="dashboard__content">
        <Upperbar />
        <NotesList />
      </div>
    </div>
  )
}