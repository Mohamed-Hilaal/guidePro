import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { replace } from "./reduxStore"

const UseDispatch = () => {

    const dispatch = useDispatch()

    const appName = useSelector(state => state.appName);

    return (
        <>
            <h1>{appName}</h1>
            <button onClick = {
                () => dispatch(replace({appName: "Guide Pro"}))
                }>Add to cart
            </button>
        </>
    )
}

export default UseDispatch;