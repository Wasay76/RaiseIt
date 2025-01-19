import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import MPPDashPage from './pages/MPPDashBoardPage';
import NewsPage from './pages/NewsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/MPPDash' element={<MPPDashPage />} />
        <Route path='/issues' element={<NewsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
