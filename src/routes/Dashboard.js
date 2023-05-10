import React, { useState } from "react";
import Markdown from 'marked-react';

export default function Dashboard() {
  const [createNote, setCreateNote] = useState(false)
  const [viewNote, setViewNote] = useState(false)

  const newNote = () => {
    setCreateNote(true)
  }

  const goBack = () => {
    setCreateNote(false)
  }

  const openNote = () => {
    setViewNote(true)
  }

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className="navtab">
        <div className="navtab__header">
          <div className="navtab__header__content">
            <h1 className="logo">jotter</h1>
            <input type="text" id="searchbox" placeholder="Search notes" />
          </div>
          <div className="navtab__tools navtab__body">
            <ul className="no-bullet">
              <li><button className="no" onClick={newNote}><i className="fa-solid fa-fw fa-square-plus"></i>New notes</button></li>
              <li><button className="no"><i className="fa-solid fa-fw fa-folder-plus"></i>New folder</button></li>
              <li><button className="no"><i className="fa-solid fa-fw fa-file-arrow-up"></i>Import notes</button></li>
            </ul>
          </div>
        </div>
        <div className="navtab__folders navtab__body">
          <h2>Folders</h2>
          <ul className="no-bullet">
            <li><button className="no"><i className="fa-solid fa-fw fa-folder"></i>Folder 1</button></li>
            <li><button className="no"><i className="fa-solid fa-fw fa-folder"></i>Folder 2</button></li>
            <li><button className="no"><i className="fa-solid fa-fw fa-folder"></i>Folder 3</button></li>
          </ul>
        </div>
        <div className="navtab__footer navtab__body">
          <ul className="no-bullet">
            <li><button className="no"><i className="fa-solid fa-fw fa-gear"></i>Settings</button></li>
            <li><button className="no"><i className="fa-solid fa-fw fa-arrow-right-from-bracket"></i>Log out</button></li>
          </ul>
        </div>
        </div>        
      </div>
      <div className="dashboard__content">
        {createNote === false ? (
          <>
            <div className="upperbar">
              <h2>All notes</h2>
            </div>
            <div className="notes-list">
              <button onclick={openNote}>Note</button>
            </div>
          </>
        ) : (
          <>
            <div className="upperbar">
              <button onClick={goBack} className="no tools"><i className="fa-solid fa-fw fa-arrow-left"></i>Go back</button>
              <ul className="upperbar__tools">
                <li><button className="no tools"><i className="fa-solid fa-fw fa-floppy-disk"></i>Save</button></li>
                <li><button className="no tools"><i className="fa-solid fa-fw fa-eye"></i>Preview</button></li>
                <li><button className="no tools"><i className="fa-solid fa-fw fa-file-arrow-down"></i>Export</button></li>
                <li><button className="no tools"><i className="fa-solid fa-fw fa-trash"></i>Delete</button></li>
              </ul>
            </div>
            <div className="notes-editor">
            <div id="editor" contenteditable="true">
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}