import React,{createContext,useState} from "react"
export const contexto = createContext()
const {Provider} = contexto;


const CustomProvider =({children})=>{

    const [currentStep,setStep] = useState(1);
    const [userData,setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const [isNumberEntered, setIsNumberEntered] = useState(false);


   
    

    const submitData = ()=>{
        setFinalData(finalData =>[...finalData, userData]);
        setUserData({});
        setIsNumberEntered(false)
        setStep(1)
        console.log(userData)
    }

    return(
        <Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData,isNumberEntered,setIsNumberEntered}}>
            {children}
        </Provider>
    )
}

export default CustomProvider