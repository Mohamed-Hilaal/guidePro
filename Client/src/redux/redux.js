import { Provider } from "react-redux";
import { reduxStore } from './reduxStore'
import UseDispatch from "./useDispatch";

const Redux = () => {

    return (
        <Provider store = {reduxStore} >
            <UseDispatch />
        </Provider>
    )
}
export default Redux