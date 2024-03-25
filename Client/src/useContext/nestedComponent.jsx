import MyContext from "./myContext";
import { useContext } from "react";

const NestedComponent = () => {
    
    const {appName} = useContext(MyContext)
    console.log(appName, " : AppName 1")
    
    return(
        <>
        <h1 > {appName} </h1>    
        </>
    )
}

export default NestedComponent;