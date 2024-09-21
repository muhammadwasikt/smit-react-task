import { Route, Routes } from "react-router"
import UserProfile from "./pages/UserProfile"
import UsersDetail from "./pages/UsersDetail"



function App() {
  return (
   <Routes>
    <Route path="/" element={<UserProfile />} />
    <Route path="/userprofile" element={<UserProfile />} />
    <Route path="/userprofile/:id" element={<UsersDetail />} />
   </Routes>
  )
}

export default App
