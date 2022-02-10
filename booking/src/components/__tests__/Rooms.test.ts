// import React from "react";
// import Enzyme, { shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import { store } from "../../app/store";
// import { Provider } from "react-redux";
// import { Rooms } from "../Rooms"

// Enzyme.configure({ adapter: new Adapter() })

// function setup() {
//     const props = {
//         rooms: [{ id: 1, name: "Title"}],
//         fetchRooms: jest.fn(() => [])
//     };

//     const enzymeWrapper = shallow(
//         <Rooms {...props} />
//     );

//     return {
//         props,
//         enzymeWrapper
//     };
// }

// test("should render self", () => {
//     const { enzymeWrapper } = setup();

//     expect(enzymeWrapper.find("div.room").hasClass("room")).toBe(true);
// });

// test("should call fetchRooms", () => {
//     const { enzymeWrapper, props } = setup();

//     expect(props.fetchRooms.mock.calls.length).toBe(1);
// });