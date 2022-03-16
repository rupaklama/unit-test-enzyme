import { shallow } from "enzyme";
import Todo from "./Todo";

// adding Enzyme setup here so that it runs before every tests
import Enzyme from "enzyme";

// to help translate react code into Enzyme code
import EnzymeAdapter from "enzyme-adapter-react-16";

// configure Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Todo component", () => {
  let todoComponent;

  const mockFn = jest.fn();

  const props = {
    onClick: mockFn,
    completed: false,
    text: "do yoga",
  };

  beforeEach(() => {
    todoComponent = shallow(<Todo {...props} />);
  });

  it("should renders without error", () => {
    expect(todoComponent).toHaveLength(1);
    expect(todoComponent.find("li")).toHaveLength(1);
  });

  it("should render props correctly", () => {
    console.log(todoComponent.props());
    expect(todoComponent.props().children).toEqual("do yoga");
    expect(todoComponent.props().style).toEqual({ textDecoration: "none" });
    expect(todoComponent.props().onClick).toEqual(mockFn);
  });

  it("should set props correctly", () => {
    todoComponent.setProps({ text: "start coding" });
    expect(todoComponent.props().children).toEqual("start coding");
  });

  it("should call onClick handler when clicked", () => {
    todoComponent.simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("<Todo /> styling behavior", () => {
  it("should not have line through style when Todo is incomplete", () => {
    const mockFn = jest.fn();

    /* Passing props inline */
    const todoComponent = shallow(<Todo onClick={mockFn} completed={false} text="go run" />);
    expect(todoComponent.props().style).toEqual({ textDecoration: "none" });
  });

  it("should have line through style when Todo is complete", () => {
    const mockFn = jest.fn();
    const todoComponent = shallow(<Todo onClick={mockFn} completed={true} text="go run" />);
    expect(todoComponent.props().style).toEqual({ textDecoration: "line-through" });
  });
});
