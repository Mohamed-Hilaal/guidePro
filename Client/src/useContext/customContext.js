import MyContext from './myContext'
import ChildComponent from './childComponent'

const CustomContext = () => {
    console.log(MyContext, " : MyContext")
    return(
        <MyContext.Provider value = {
            { appName: 
                "Guide Pro",
                appVersion: "1.0.0",
            }
    }>
        <ChildComponent/>
    </MyContext.Provider>
    )

}

export default CustomContext