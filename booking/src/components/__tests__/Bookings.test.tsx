import React from "react";
import * as redux from "react-redux"
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import Bookings from "../Bookings";

Enzyme.configure({ adapter: new Adapter() });

let useDispatchSpy;

beforeEach(() => {
    const useSelectorSpy = jest.spyOn(redux, "useSelector");
    useSelectorSpy.mockReturnValue([{
        id: 1,
        startSlot: 5,
        endSlot:10,
        date: new Date('2022-02-15T15:00:00'), 
        user: {
            id: 1,
            firstName:"test 1",
            lastName:"test2"
        },
        room: {
            id: 1,
            name: "test room"
        }
    }]);
    
    useDispatchSpy = jest
        .spyOn(redux, "useDispatch")
        .mockImplementation(() => configureStore()().dispatch);
});

test("should render self", () => {
    const wrapper = mount(<Bookings />);

    expect(wrapper.find("li.liList").hasClass("liList")).toBe(true);
});

test("should call fetchBookings", () => {
    mount(<Bookings />);

    expect(useDispatchSpy).toHaveBeenCalled();
});