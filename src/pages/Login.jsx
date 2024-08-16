import { useState, useContext, useEffect } from 'react'
import { signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from 'firebase/auth'
import image from '../public/hero.png'
import { UserContext } from '../UserContext'
import app from '../utils/firebase-sdk'
import {getImageFromStorage} from '../utils/storage'
import { AlertError, AlertSuccess } from '../utils/Alert'

const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setAlertMessage, alertMessage} = useContext(UserContext)

    useEffect(()=>{
        const fetchImage = async () =>{
            const data = await getImageFromStorage("kopi.jpg").then(res=>{
                return res
            })
        }
        fetchImage().catch(console.error)
    },[])

    const auth = getAuth(app)

    const login = async (ev) =>{
        ev.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then(()=>{
            AlertSuccess('Login Sukses')
            setTimeout(() => {
                location.href = '/dashboard'
            }, 1700);
        }).catch((err)=>{
            setEmail("")
            setPassword("")
            AlertError('Login Gagal')
        })
    }

    const resetPassword = () =>{
        const auth = getAuth(app)
        sendPasswordResetEmail(auth, 'umkmdukuhdalem@gmail.com').then(()=>{
            AlertSuccess('Link Reset Kata Sandi Sudah Dikirim')
        })
    }

    return (
        <div className="w-full h-[30rem] flex items-center justify-center font-Poppins relative">
            <div className="p-2 flex h-3/4 w-3/4 justify items-center lg:w-1/2 rounded-lg bg-slate-50 shadow-slate-300 shadow-lg">
                <div className="w-1/2 h-full bg-Primary hidden md:flex justify-center items-center rounded-lg">
                    <img src={image} alt="" className='rounded-lg' />
                </div>
                <div className="h-full w-full md:w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-center text-lg  font-semibold">Selamat Datang!</h2>
                    <p className="text-center text-[14px]">Login untuk menuju halaman admin</p>
                    <form onSubmit={login} className="my-[3rem] flex flex-col gap-3">
                        <input type="email" autoComplete='true' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='md:w3/4 w-full shadow-lg text-[15px] px-2 py-1 rounded-md hover:border hover:border-Primary outline-none' />
                        <input type="password" placeholder='Kata Sandi' value={password} onChange={(e) => setPassword(e.target.value)} className='md:w3/4 w-full shadow-lg text-[15px] px-2 py-1 rounded-md hover:border hover:border-Primary outline-none' />
                        <a onClick={() => resetPassword()} className=" cursor-pointer text-[11px] text-red-500">Lupa Kata Sandi ?</a>
                        <button className="md:w3/4 w-full mt-5 shadow-lg bg-Primary text-white font-semibold px-3 py-1 rounded-md text-center hover:bg-white hover:border hover:border-1 hover:text-Primary">Login</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default Login