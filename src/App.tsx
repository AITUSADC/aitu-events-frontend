import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Authorization from './pages/Authorization';
import ProfileConfirm from './pages/profileConfirm';
import Home from './pages/Home';
import EditInfo from './pages/EditInfo';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Authorization />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile-confirm" element={<ProfileConfirm />} />
          <Route path="/edit-info" element={<EditInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
