import About from './About';
import './App.css'
import Footer from './Footer';
import Navbar from './Navbar';
import Page from './Page';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="bg-[url(bg4.png)] bg-center flex flex-col justify-between bg-contain bg-fixed max-h-max min-h-screen w-full">
        <Navbar />
        <div className='p-4 flex items-center justify-center'>
          <Routes>
            <Route index element={<Page />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;
