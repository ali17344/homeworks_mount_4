import { HiOutlineMinusCircle } from "react-icons/hi";
export const Min = ({minus}) => {
    return (
        <div>
            <button onClick={() => minus()}>
            <HiOutlineMinusCircle />
            </button>
        </div>
    );
}



