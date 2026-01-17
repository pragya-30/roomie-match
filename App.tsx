import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Splash from "./pages/Splash"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import OtpVerification from "./pages/OtpVerification"
import Interview from "./pages/Interview"
import Messages from "./pages/Messages"
import Chat from "./Chat";
import Profile from "./pages/Profile"
import Discover from "./pages/Discover"
import Browse from "./pages/Browse"
import NotFound from "./pages/NotFound"
import BottomNav from "./components/navigation/BottomNav"

function App() {
  return (
    <Router>
      <div className="relative pb-16"> {/* padding bottom so content isn't hidden behind nav */}
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otpverification" element={<OtpVerification />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Show BottomNav on all pages except splash */}
      <BottomNav />
    </Router>
  )
}

export default App
