import React from "react";
import { render, screen } from "@utils/test-utils";

import Button from "../index";

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Button {...setupStore}>Press</Button>, {});
};

describe("Test for Button ui component", () => {
  test("Should render without errors", () => {
    setup();
    expect(screen.getByText("Press")).toBeTruthy();
  });

  test("Should renders the same component", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
