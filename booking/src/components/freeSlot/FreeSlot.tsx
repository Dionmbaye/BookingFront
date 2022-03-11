import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Loading from "../shared/Loading";
import FreeSlots from "./FreeSlots";

const FreeSlot: React.FC = () => {
    const isOpen = useSelector((state: RootState) => state.booking.isFreeSlotsOpen);

    return <div>
        {isOpen && <FreeSlots />}
    </div>;
};

export default FreeSlot;