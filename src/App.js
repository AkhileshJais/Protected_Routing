import Home from "./Home/Home";
import Login from "./Login/Login";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoutes";
import Page from "./Page/Page";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/page" element={
        <ProtectedRoute>
        <Page/>
        </ProtectedRoute>
     }/>

<Route path="/home" element={
        <ProtectedRoute>
        <Home/>
        </ProtectedRoute>
     }/>

        <Route path="/login" element={<Login/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;

