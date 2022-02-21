import React from "react";
import * as redux from "react-redux"
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import Users from "../Users";
import CreateUser from "../CreateUser";

Enzyme.configure({ adapter: new Adapter() });

let useDispatchSpy;

beforeEach(() => {
    const useSelectorSpy = jest.spyOn(redux, "useSelector");
    useSelectorSpy.mockReturnValue([{ id: 1, fistName: "Name", lastName:"test" }]);
    
    useDispatchSpy = jest
        .spyOn(redux, "useDispatch")
        .mockImplementation(() => configureStore()().dispatch);
});

test("should render self Users", () => {
    const wrapper = mount(<Users />);

    expect(wrapper.find("li.liList").hasClass("liList")).toBe(true);
});

test("should call fetchUsers", () => {
    mount(<Users />);

    expect(useDispatchSpy).toHaveBeenCalled();
});

test("should call createUser", () => {
    mount(<CreateUser />);

    expect(useDispatchSpy).toHaveBeenCalled();
});