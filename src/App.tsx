import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Authorization from "./pages/Authorization";
import ProfileConfirm from "./pages/ProfileConfirm";
import EditInfo from "./pages/EditInfo";
import Home from "./pages/Home";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Authorization />} />
          <Route path="/profile-confirm" element={<ProfileConfirm />} />
          <Route path="/edit-info" element={<EditInfo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
