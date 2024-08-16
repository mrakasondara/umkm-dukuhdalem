import { getAuth, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { IoMenu, IoClose } from "react-icons/io5";
import { UserContext } from "../UserContext";
import app from "../utils/firebase-sdk";
import { AlertError, AlertSuccess } from "../utils/Alert";
import icon from '../public/icon.png'

const Header = () =>{
    const {setIsMenuOpen, isMenuOpen} = useContext(UserContext)
    const {setIsLinkActive, isLinkActive} = useContext(UserContext)
    const {setUserInfo, userInfo} = useContext(UserContext)
    const [isActiveHeader, setIsActiveHeader] = useState(false)

    const auth = getAuth(app)    

    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
          return setIsActiveHeader(false)
        } else if (window.scrollY > 70) {
          return setIsActiveHeader(true)
        } 
        cpm
      }
      
      
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);
      
    const logoutSession = () =>{

        signOut(auth).then(()=>{
            AlertSuccess('Berhasil Logout!')
            setUserInfo(null)
            setTimeout(() => {
                location.href = '/login'
            }, 1700);
        }).catch((err)=>{
            AlertError('Gagal Logout!')
        })
    }

    return (
        <div className={`w-full relative bg-white sticky top-0 items-center flex justify-between p-4 z-20  ${isActiveHeader ? 'shadow-lg' : ''}`}> 
            <div className="flex w-full md:w-auto gap-3 justify-center md-auto md:mx-0 text-start items-center text-lg">
                <img src={icon} alt=""  className="h-[24px]"/>
                <Link to={'/'} className={`font-Poppins font-semibold text-Primary`}>TendaUMKM</Link>

            </div>
            <ul className="font-Poppins hidden md:flex gap-5">
                <li><Link to={'/'} className={`hover:font-normal font-semibold ${isLinkActive  == 'home' ? 'text-Primary' : 'text-black'}  transition`}  onClick={()=> setIsLinkActive('home')}>Home</Link></li>
                {userInfo && (
                    <li><Link to={'/dashboard'} className={`hover:font-normal font-semibold ${isLinkActive == 'dashboard' ? 'text-Primary' : 'text-black'} transition`} onClick={()=> setIsLinkActive('dashboard')}>Dashboard</Link></li>
                )}
                <li><Link to={'/produk'} className={`hover:font-normal font-semibold ${isLinkActive == 'produk' ? 'text-Primary' : 'text-black'} transition`} onClick={()=> setIsLinkActive('produk')}>Produk</Link></li>
            </ul>
            <button className="md:hidden z-20 text-lg" onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen && (
                    <IoClose/>
                )}
                {!isMenuOpen && (
                    <IoMenu/>
                )}
            </button>

            {!userInfo && (
                <Link to={'/login'} className="hidden md:block bg-Primary text-white font-semibold px-3 py-1 rounded-md text-center hover:bg-white border hover:border-1 hover:border-Primary hover:text-Primary">Login</Link>
            )}
            {userInfo && (
                <button onClick={() => logoutSession()} className="hidden md:block bg-red-500 text-white font-semibold px-3 py-1 rounded-md text-center hover:bg-white hover:border hover:border-red-500 hover:border-1 hover:text-red-500">Logout</button>
            )}

            
        </div>
        
    )
}

export default Header