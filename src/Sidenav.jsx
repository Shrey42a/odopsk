import 'animate.css';
import { Link } from 'react-router-dom';

function Sidenav({ xyz }) {
    return (
    <>
    <div className="fixed backdrop-blur lg:hidden md:hidden z-10 flex flex-col justify-between space-y-8 px-4 py-4 bxsd animate__animated animate__slideInLeft animate__repeat-1 h-full w-60 overflow-hidden bg-white/90">
      <div className='mt-4 flex flex-col space-y-8'>
        <div className='w-full h-20 rounded-lg bg-white/10'>
          <img className='h-full w-full' src='/odlogo.png' />
        </div>
        <ul className='text-md font-bold uppercase space-y-4 flex flex-col justify-evenly text-gray-700'>
          <li className='active:text-lime-400 active:transition active:ease-in-out p-1 w-max rounded-lg cursor-pointer'><Link to="/" onClick={xyz}>Home</Link></li>
          <li className='active:text-lime-400 active:transition active:ease-in-out p-1 w-max rounded-lg cursor-pointer'><Link to="/about" onClick={xyz}>About</Link></li>
        </ul>
        <div className='w-full space-y-4 mt-4 flex flex-col items-center justify-center'>
          <h1 className='font-mono'>Thanx for visit ODOP..</h1>
        </div>
        <img src='/min.webp' className='h-20 w-full' />
      </div>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-lg font-semibold">Bulandshahr District, Uttar Pradesh</p>
        <p className="text-sm text-gray-400">Famous for Khurja Ceramic Pottery – A GI-tagged cultural heritage of India.</p>
        <div className="mt-4">
          <a href="https://odopup.in/en/article/bulandshahar" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Visit Official ODOP Bulandshahr Page →</a>
        </div>
        <p className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} Shrey Kumar | Khurja Pottery</p>
      </div>
    </div>
  </>
    )
}
export default Sidenav;