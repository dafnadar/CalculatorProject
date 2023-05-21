import { ADD, DIVIDE, MULTIPLY, SET_ACTION, SET_NUM1, SET_NUM2, SUBTRACT, CLEAR, POWER, ROOT, POWER_N } from "./actions";

const calcReducer = (state, {type, payload}) => {
    switch (type) {
        case ADD: return {
            ...state, result: Number(payload.num1)+Number(payload.num2), num1: "", num2: "", action: ""
        };
        case SUBTRACT: return {
            ...state, result: Number(payload.num1)-Number(payload.num2), num1: "", num2: "", action: ""
        };
        case MULTIPLY: return {
            ...state, result: Number(payload.num1)*Number(payload.num2), num1: "", num2: "", action: ""
        };
        case DIVIDE: return {
            ...state, result: Number(payload.num1)/Number(payload.num2), num1: "", num2: "", action: ""
        };
        case POWER: return {
            ...state, result: Math.pow(Number(state.result), 2), num1: "", num2: "", action: ""
        };
        case POWER_N: return {
            ...state, result: Math.pow(Number(payload.num1), Number(payload.num2)), num1: "", num2: "", action: ""
        };
        case ROOT: return {
            ...state, result: Math.sqrt(Number(state.result)), num1: "", action: ""
        };
        case SET_NUM1: return {            
            ...state, num1: state.num1+payload, result: state.num1+payload           
        };
        case SET_NUM2: return {            
            ...state, num2: state.num2+payload, result: state.num2+payload           
        };
        case SET_ACTION: return {            
            ...state, action: payload.act, num1: state.result          
        };
        case CLEAR: return {            
            ...state, action: "", num1: "", num2: "", result: 0            
        };
        default: return state;
    }
}

export default calcReducer;