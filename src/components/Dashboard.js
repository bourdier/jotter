import Tabs from "./Tabs";

export default function Dashboard({ children }) {
  return (
    <div className="dashboard">
      <div classname="dashboard__header">
        <Tabs />
      </div>
      <div className="dashboard__content">
        { children }
      </div>
    </div>
  )
}