import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Sidebar } from './components';
// eslint-disable-next-line import/named
import { Home, Videos, Quotes, About,  } from './pages';
import { Slok, Adhyays } from './pages';

import './App.css';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { currentMode, activeMenu } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar ">
              <Navbar />
            </div>
            <div>
              <Routes>

                <Route path="/" element={(<Home />)} />
                <Route path="/home" element={(<Home />)} />

                <Route path="/videos" element={<Videos />} />
                <Route path="/chapter/:chapterNumber/verses" element={<Adhyays />} />
                <Route path="/chapter/:chapterNumber/verses/:verseNumber" element={<Slok />} />

                
                <Route path="/quotes" element={<Quotes />} />
               
                <Route path="/about" element={<About />} />
               
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
