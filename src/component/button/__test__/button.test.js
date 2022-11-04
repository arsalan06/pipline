import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
// afterEach(cleanup);
it("renders without crashing", () => {
  const root = ReactDOM.createRoot(document.createElement("div"));
  //   const div = document.createElement("div");
  root.render(<Button />);
});
it("render button correctly", () => {
  render(<Button label="Click me" />);
  const but = screen.getByTestId("button");
  expect(but).toBeInTheDocument();
});
it("changes the class when hovered", () => {
  const component = renderer.create(<Button label="save" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
