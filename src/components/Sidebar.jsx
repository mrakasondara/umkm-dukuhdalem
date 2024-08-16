import { useState, useContext } from "react"
import { getAuth, signOut } from "firebase/auth"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext"
import app from "../utils/firebase-sdk"
import { AlertError, AlertSuccess } from "../utils/Alert"

const Sidebar = ({display, width}) =>{
    const {setIsLinkActive, isLinkActive} = useContext(UserContext)
    const {setUserInfo, userInfo} = useContext(UserContext)

    const auth = getAuth(app)

    const logoutSession = () =>{

        signOut(auth).then(()=>{
            AlertSuccess('Berhasil Logout!')
            setUserInfo(null)
            setTimeout(() => {
                location.href = '/login'
            }, 1700);
        }).catch((err)=>{
            setShowErrorAlert(true)
            AlertError('Gagal Logout!')
        })
    }

    return(
        <div className={`fixed top-0 right-5 py-3 mt-[2.5rem] ${width} ${display} md:hidden flex-col justify-center h-[12rem] bg-Primary z-20 pt-[1rem] rounded-lg text-[13px] transition`}>
             <ul className="font-Poppins flex items-center flex-col gap-5">
                <li><Link to={'/'} className={`font-semibold ${isLinkActive == 'home' ? 'text-white hover:text-black' : 'text-black'} transition`} onClick={()=> setIsLinkActive('home')}>Home</Link></li>
                {userInfo && (
                    <li><Link to={'/dashboard'} className={`hover:text-white font-semibold ${isLinkActive == 'dashboard' ? 'text-white hover:text-black' : 'text-black'} transition`} onClick={()=> setIsLinkActive('dashboard')}>Dashboard</Link></li>
                )}
                <li><Link to={'/produk'} className={`hover:text-white font-semibold ${isLinkActive == 'produk' ? 'text-white hover:text-black' : 'text-black'} transition`} onClick={()=> setIsLinkActive('produk')}>Produk</Link></li>
            </ul>

            {userInfo && (
                <button onClick={()=> logoutSession()} className="my-5 mx-auto w-3/4 bg-transparent text-red-500 font-bold px-3 py-1 rounded-md text-center border border-1 border-red-500 transition">Logout</button>
            )}
            {!userInfo && (
                <Link to={'/login'} className="my-5 mx-auto w-3/4 bg-green-500 text-white font-bold px-3 py-1 rounded-md text-center hover:bg-transparent hover:border hover:border-green-500 hover:text-green-500 transition">Login</Link>
            )}

        </div>
    )
}
export default Sidebar