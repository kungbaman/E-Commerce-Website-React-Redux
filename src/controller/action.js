import { ADD_CART, REDUCE_ITEM, REMOVE} from './type'

export const ADD = (item) => {
    return {
        type: ADD_CART,
        payload: item,
    }
}

export const DELETE = (id) => {
    return {
        type: REMOVE,
        payload: id,
    }
}

export const REDUCE_TO_ITEM = (item) => {
    return {
        type: REDUCE_ITEM,
        payload: item,
    }
}