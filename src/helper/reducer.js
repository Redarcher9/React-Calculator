import { ACTIONS } from "./actions"
import { evaluate } from "."

export function reducer(state, {type, payload}) {
    switch(type) {
      case ACTIONS.ADD_DIGIT:
        if (payload.digit ==="0" && state.currentOperand ==="0") {
          return state
        }  
        if (payload.digit ==="." && state.currentOperand.includes(".")) {
          return state
        }
        return{
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
      case ACTIONS.CHOOSE_OPERATION:
        if(state.currentOperand ==null && state.previousOperand ==null){
          return state
        }
  
        if(state.currentOperand == null) {
          return {
            ...state,
            operation: payload.operation,
          }
        }
  
        if(state.previousOperand ==null){
          return {
            ...state,
            operation:payload.operation,
            previousOperand: state.currentOperand,
            currentOperand: null,
          }
        }
  
        return {
          ...state,
          previousOperand: evaluate(state),
          operation: payload.operation,
          currentOperand: null,
        }
  
      case ACTIONS.CLEAR:
        return {}
      case ACTIONS.DELETE_DIGIT:
        if(state.currentOperand == null) return state
        if(state.currentOperand.length ===1) {
          return{
            ...state,
            currentOperand: null
          }
        }
        return {
          ...state,
          currentOperand: state.currentOperand.slice(0,-1)
        }
      case ACTIONS.EVALUATE:
        if(state.operation == null || state.currentOperand == null || state.previousOperand == null ){
          return state
        }
        return{
          ...state,
          previousOperand: null,
          operation: null,
          currentOperand: evaluate(state),
        }
    }
  }