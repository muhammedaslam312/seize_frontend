import { createContext } from "react";

const AuthContext = createContext()


export const AuthProvider = ({children}) =>{
    




let contexData = {
    // questions : questions 
 }
 return (
     <AuthContext.Provider value={contexData}>
         {children}    
     </AuthContext.Provider>
 )
}


export default AuthContext;