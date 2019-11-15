import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './actionType';


export const incrementAction = () => ({
    type: COUNTER_INCREMENT
})

export const decrementAction = () => ({
    type: COUNTER_DECREMENT
})