import axios from "axios";
export const ordersFetch = () => {
    return dispatch => {
        axios.get("http://localhost:3001/orders").then(
            res => {
                dispatch({ type : "orders_fetch", payload : res.data})
            }
        )
    }
}

export const orderDelete = id => {

}