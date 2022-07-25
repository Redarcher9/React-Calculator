import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import {useReducer} from 'react';
import  {ACTIONS,reducer} from '../helper';
import '../App.css'

export function Calculator() {
    const [{ currentOperand, previousOperand, operation},dispatch] = useReducer(reducer,{})
    return (
        <div className="App calculator-grid">
          <div className="output">
            <div className="previous-operand">
              {previousOperand} {operation}
            </div>
            <div className="current-operand"> 
              {currentOperand}
            </div>
          </div>
          <button className="span-two" onClick={()=>dispatch({type: ACTIONS.CLEAR})}>AC</button>
          <button onClick={()=> dispatch({type: ACTIONS.DELETE_DIGIT})} >DEL</button>
          <OperationButton operation="÷" dispatch={dispatch}></OperationButton>
          <DigitButton digit="1" dispatch={dispatch}></DigitButton>
          <DigitButton digit="2" dispatch={dispatch}></DigitButton>
          <DigitButton digit="3" dispatch={dispatch}></DigitButton>
          <OperationButton operation="*" dispatch={dispatch}></OperationButton>
          <DigitButton digit="4" dispatch={dispatch}></DigitButton>
          <DigitButton digit="5" dispatch={dispatch}></DigitButton>
          <DigitButton digit="6" dispatch={dispatch}></DigitButton>
          <OperationButton operation="+" dispatch={dispatch}></OperationButton>
          <DigitButton digit="7" dispatch={dispatch}></DigitButton>
          <DigitButton digit="8" dispatch={dispatch}></DigitButton>
          <DigitButton digit="9" dispatch={dispatch}></DigitButton>
          <OperationButton operation="-" dispatch={dispatch}></OperationButton>
          <DigitButton digit="." dispatch={dispatch}>.</DigitButton>
          <DigitButton digit="0" dispatch={dispatch}></DigitButton>
          <button
           className="span-two" 
           onClick={()=> dispatch({type: ACTIONS.EVALUATE})} >=</button>
        </div>
      );
}