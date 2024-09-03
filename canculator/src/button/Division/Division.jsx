import { FaDivide } from "react-icons/fa";
export const Division = ({division}) => {
    return (
        <div>
            <button onClick={() => division()}>
            <FaDivide />
            </button>
        </div>
    );
}
