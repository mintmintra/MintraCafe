export default function (state = [], action) {
    switch (action.type) {
        case "orders_fetch":
            return action.payload;
        default:
            return state;
    }
}