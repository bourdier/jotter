export default function EditorTools({ editor }) {

  const redirection = (path) => {
    window.location = path
  }

  return editor === true ? (
    <>
      <div className="upperbar">
        <button className="no tools" onClick={() => redirection('/dashboard')}>
          <i className="fa-solid fa-fw fa-arrow-left"></i>Go back
        </button>
        <ul className="upperbar__tools">
          <li>
            <button className="no tools">
              <i className="fa-solid fa-fw fa-floppy-disk"></i>Save
            </button>
          </li>
          <li>
            <button className="no tools">
              <i className="fa-solid fa-fw fa-eye"></i>Preview
            </button>
          </li>
          <li>
            <button className="no tools">
              <i className="fa-solid fa-fw fa-file-arrow-down"></i>Export
            </button>
          </li>
          <li>
            <button className="no tools">
              <i className="fa-solid fa-fw fa-trash"></i>Delete
            </button>
          </li>
          <li>
            <button className="no tools"><i className="fa-solid fa-fw fa-gear no-text"></i></button>
          </li>
          <li>
            <button className="no tools"><i className="fa-solid fa-fw fa-arrow-right-from-bracket no-text"></i></button>
          </li>
        </ul>
      </div>
      <div className="notes">
        <textarea id="editor"></textarea>
      </div>
    </>
  ) : (
      <div className="upperbar">
        <button className="no tools" onClick={() => redirection('/dashboard')}>
          <i className="fa-solid fa-fw fa-arrow-left"></i>Go back
        </button>
        <ul className="upperbar__tools">
        <li>
            <button className="no tools">
              <i className="fa-solid fa-fw fa-pen-to-square"></i>Edit
            </button>
          </li>
          <li>
            <button className="no tools">
              <i className="fa-solid fa-fw fa-file-arrow-down"></i>Export
            </button>
          </li>
          <li>
            <button className="no tools">
              <i className="fa-solid fa-fw fa-trash"></i>Delete
            </button>
          </li>
          <li>
            <button className="no tools"><i className="fa-solid fa-fw fa-gear no-text"></i></button>
          </li>
          <li>
            <button className="no tools"><i className="fa-solid fa-fw fa-arrow-right-from-bracket no-text"></i></button>
          </li>
        </ul>
      </div>
  )
}
