import { Routes, Route } from 'react-router-dom';
import './index.css'

import Homepage from './routes/Homepage'
import Login from './routes/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
