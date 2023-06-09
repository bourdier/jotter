import Card from "../components/Card";

export default function Dashboard({ data }) {

  const redirection = (path) => {
    window.location = path
  }

  return (
    <div className="dashboard">
      <div className="upperbar">
          <h1>jotter</h1>
        <ul className="upperbar__tools">
        <li>
            <button className="no tools" onClick={() => redirection('/editor')}><i className="fa-solid fa-fw fa-square-plus"></i>New note</button>
          </li>
          <li>
            <button className="no tools"><i className="fa-solid fa-fw fa-file-arrow-up"></i>Import</button>
          </li>
          <li>
            <button className="no tools"><i className="fa-solid fa-fw fa-gear no-text"></i></button>
          </li>
          <li>
            <button className="no tools"><i className="fa-solid fa-fw fa-arrow-right-from-bracket no-text"></i></button>
          </li>
        </ul>
      </div>
      <div className="dashboard__content">
        <Card data={data} />
      </div>
    </div>
  )
}