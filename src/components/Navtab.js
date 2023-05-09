export default function Navtab() {
  return (
    <div className="navtab">
      <div className="navtab__header">
        <h1 className="logo">jotter</h1>
        <input type="text" id="searchbox" placeholder="Search notes" />
      </div>
      <div className="navtab__tools">
        <ul>
          <li><button className="no"><i className="fa-solid fa-fw fa-square-plus"></i>New notes</button></li>
          <li><button className="no"><i className="fa-solid fa-fw fa-folder-plus"></i>New folder</button></li>
          <li><button className="no"><i className="fa-solid fa-fw fa-file-import"></i>Import notes</button></li>
        </ul>
      </div>
      <div className="navtab__folders">
        <ul>
          <li><button className="no"><i className="fa-solid fa-fw fa-folder"></i>Folder 1</button></li>
        </ul>
      </div>
      <div className="navtab__footer">
        <ul>
          <li><button className="no"><i className="fa-solid fa-fw fa-gear"></i>Settings</button></li>
          <li><button className="no"><i className="fa-solid fa-fw fa-arrow-right-from-bracket"></i>Log out</button></li>
        </ul>
      </div>
    </div>
  )
}