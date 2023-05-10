import './index.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './routes/Homepage';
import Home from './routes/Home';
import Note from './routes/Note';
import Editor from './routes/Editor';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/note/" element={<Note />} />
        <Route path="editor" element={<Editor />} />
      </Routes>
    </>
  );
}

export default App;
