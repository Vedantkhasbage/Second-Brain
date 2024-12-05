import { DashBoard } from "./screen/dashboard"
import { SignIn } from "./screen/signIn"
import { SignUp } from "./screen/signUp"
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return <div>
    <BrowserRouter>
     <Routes>
     <Route path="/SignUp" element={<SignUp/>}/>
     <Route path="/SignIn" element={<SignIn/>}/>
     <Route path="/DashBoard" element={<DashBoard/>}/>
     </Routes>
    {/* <DashBoard/> */}
    </BrowserRouter>
  </div>

}
   
export default App
