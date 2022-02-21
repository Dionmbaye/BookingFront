import React from "react";
import * as redux from "react-redux"
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import Rooms from "../Rooms";
import CreateRoom from "../CreateRoom";

Enzyme.configure({ adapter: new Adapter() });

let useDispatchSpy;

beforeEach(() => {
    const useSelectorSpy = jest.spyOn(redux, "useSelector");
    useSelectorSpy.mockReturnValue([{ id: 1, name: "Name" }]);
    
    useDispatchSpy = jest
        .spyOn(redux, "useDispatch")
        .mockImplementation(() => configureStore()().dispatch);
});

test("should render self Rooms", () => {
    const wrapper = mount(<Rooms />);

    expect(wrapper.find("li.liList").hasClass("liList")).toBe(true);
});

test("should call fetchRooms", () => {
    mount(<Rooms />);

    expect(useDispatchSpy).toHaveBeenCalled();
});

test("should call createRoom", () => {
    mount(<CreateRoom />);

    expect(useDispatchSpy).toHaveBeenCalled();
});