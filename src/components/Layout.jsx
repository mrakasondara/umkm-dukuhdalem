import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { Alert } from '@mui/material'
import app from '../utils/firebase-sdk'
import Header from './Header'
import Sidebar from './Sidebar'
import { UserContext } from '../UserContext'


const Layout = () =>{
    const {setIsMenuOpen, isMenuOpen} = useContext(UserContext)
    const {setUserInfo, userInfo} = useContext(UserContext)
    const {setShowErrorAlert, showErrorAlert} = useContext(UserContext)
    const {setShowSuccessAlert, showSuccessAlert} = useContext(UserContext)
    const {setAlertMessage, alertMessage} = useContext(UserContext)

    const width = isMenuOpen ? 'w-[8rem]' : 'w-0'
    const display = isMenuOpen ? 'flex' : 'hidden'

    const auth = getAuth(app)

    useEffect(()=>{
        const getSession = () =>{
            onAuthStateChanged(auth, (user)=>{
                if(user){
                    const {accessToken} = user
                    setUserInfo(accessToken)
                }else{
                    setUserInfo(null)
                }
            })
        }

        getSession()
    })


    return (
        <div className="w-full">
            <Header/>
            <Outlet/>
            <Sidebar width={width} display={display}/>
        </div>
    )
}
export default Layout