import Tabs from "../components/Tabs";
import List from "../components/List";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Tabs />
      <div className="dashboard__content">
        <List />
      </div>
    </div>
  )
}