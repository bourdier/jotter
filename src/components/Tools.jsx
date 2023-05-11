export default function EditorTools({ editor, note }) {

  const redirection = (path) => {
    window.location = path
  }

  async function saveNote() {
    let rand = Math.floor(Math.random() * 100000000);

    const body = {
      id: JSON.stringify(rand),
      title: note.split('\n')[0],
      content: note.split('\n').slice(1).join('\n'),
      date: new Date().toLocaleDateString()
    }

    const response = await fetch('http://localhost:8080/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await response.json();
    console.log(data);
  }

  return editor === true ? (
    <>
      <div className="upperbar">
        <button className="no tools" onClick={() => redirection('/dashboard')}>
          <i className="fa-solid fa-fw fa-arrow-left"></i>Go back
        </button>
        <ul className="upperbar__tools">
          <li>
            <button className="no tools" onClick={() => saveNote()}>
              <i className="fa-solid fa-fw fa-floppy-disk"></i>Save
            </button>
          </li>
          <li>
            <button className="no tools" onClick={() => redirection('/notes')}>
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
    </>
  ) : (
      <div className="upperbar">
        <button className="no tools" onClick={() => redirection('/dashboard')}>
          <i className="fa-solid fa-fw fa-arrow-left"></i>Go back
        </button>
        <ul className="upperbar__tools">
        <li>
            <button className="no tools" onClick={() => redirection('/editor')}>
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
