import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import MPPDashPage from './pages/MPPDashBoardPage';
import NewsPage from './pages/NewsPage';

// THIS IS WHERE YOU CAN ADD IN MORE PAGES WITH THEIR PATH
// HAVE THE PAGE COMPONENT HERE AND THEN MAKE SURE YOUR LINKS MATCH THE PATH HERE
// IF YOU DONT MATCH THE LINKS YOU'LL GET A UNFOUND PAGE ERROR IN THE CONSOLE.LOG

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
