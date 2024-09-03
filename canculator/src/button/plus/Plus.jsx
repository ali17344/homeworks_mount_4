import { PiPlusCircleBold } from "react-icons/pi";
 export const Plus = ({plus}) => {
    return (
        <div>
            <button onClick={() => plus()}>
            <PiPlusCircleBold /> 
            </button>
        </div>
    );
}

