import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './views/Login/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
          <Route path="/login" element={<Login/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
