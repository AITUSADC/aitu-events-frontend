import {BrowserRouter, Routes, Route} from 'react-router'; 
import Authorization from './pages/Authorization';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/auth" element={<Authorization />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
