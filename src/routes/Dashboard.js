import Navtab from "../components/Navtab"
import Upperbar from "../components/Upperbar"

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <Navtab />
        <Upperbar />
      </div>
    </div>
  )
}