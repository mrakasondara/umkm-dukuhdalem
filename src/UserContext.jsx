import { createContext, useState } from "react";
export const UserContext = createContext({})
const UserContextProvider = ({children}) =>{
    const [userInfo, setUserInfo] = useState({})
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const [isLinkActive,setIsLinkActive] = useState("home")
    const [showErrorAlert, setShowErrorAlert] = useState(false)
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    return (
        <UserContext.Provider value={{userInfo,setUserInfo,isMenuOpen,setIsMenuOpen,isLinkActive,setIsLinkActive, showSuccessAlert, setShowSuccessAlert, showErrorAlert, setShowErrorAlert, alertMessage, setAlertMessage}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider