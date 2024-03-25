import MyContext from "./myContext"
import { useContext } from "react" 
import NestedComponent from "./nestedComponent";


const ChildComponent = (props) => {
    const {appName, appVersion} = useContext(MyContext)

    console.log(appName, " : AppName")
    console.log(appVersion, " : appVersion")

    return(
        < NestedComponent />
    )
}

export default ChildComponent