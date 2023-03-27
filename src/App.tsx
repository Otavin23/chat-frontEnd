import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyles";
import Login from "./pages/login";
import Register from "./pages/register";
import Message from "./pages/message";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
