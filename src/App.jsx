import About from './About';
import './App.css'
import Footer from './Footer';
import Navbar from './Navbar';
import Page from './Page';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="main flex flex-col justify-between bg-contain bg-fixed max-h-max min-h-screen w-full">
        <Navbar />
        <div className='flex items-center justify-center'>
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
