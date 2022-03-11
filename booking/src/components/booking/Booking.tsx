import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import FreeSlot from "../freeSlot/FreeSlot";
import Loading from "../shared/Loading";
import BookingEditor from "./BookingEditor";
import Bookings from "./Bookings";

const Room: React.FC = () => {
    const isOpen = useSelector((state: RootState) => state.booking.isOpen);
    const isLoading = useSelector((state: RootState) => state.booking.isLoading);
    const isFreeSlotsOpen = useSelector((state: RootState) => state.booking.isFreeSlotsOpen);

    return <div>
        <Bookings />
        {isLoading && <Loading />}
        {isOpen && <BookingEditor />}
        {isFreeSlotsOpen && <FreeSlot />}
    </div>;
};

export default Room;