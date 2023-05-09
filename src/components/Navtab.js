export default function Navtab() {
  return (
    <div className="navtab">
      <div className="navtab__header">
        <div className="navtab__header__content">
          <h1 className="logo">jotter</h1>
          <input type="text" id="searchbox" placeholder="Search notes" />
        </div>
        <div className="navtab__tools navtab__body">
          <ul className="no-bullet">
            <li><button className="no"><i className="fa-solid fa-fw fa-square-plus"></i>New notes</button></li>
            <li><button className="no"><i className="fa-solid fa-fw fa-folder-plus"></i>New folder</button></li>
            <li><button className="no"><i className="fa-solid fa-fw fa-file-arrow-up"></i>Import notes</button></li>
          </ul>
        </div>
      </div>
      <div className="navtab__folders navtab__body">
        <h2>Folders</h2>
        <ul className="no-bullet">
          <li><button className="no"><i className="fa-solid fa-fw fa-folder"></i>Folder 1</button></li>
        </ul>
      </div>
      <div className="navtab__footer navtab__body">
        <ul className="no-bullet">
          <li><button className="no"><i className="fa-solid fa-fw fa-gear"></i>Settings</button></li>
          <li><button className="no"><i className="fa-solid fa-fw fa-arrow-right-from-bracket"></i>Log out</button></li>
        </ul>
      </div>
    </div>
  )
}