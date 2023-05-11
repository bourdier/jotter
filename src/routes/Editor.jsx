import Tools from "../components/Tools";

export default function Dashboard() {
  let editor = true;

  return (
    <div className="dashboard">
      <Tools editor={editor}/>      
      <div className="dashboard__content">

      </div>
    </div>
  )
}