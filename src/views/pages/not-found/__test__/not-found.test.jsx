import React from "react";
import { render, screen } from "@utils/test-utils";

import NotFound from "../index";

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<NotFound {...setupStore} />, {});
};

describe("Test for NotFound page component", () => {
  test("Should render without errors", () => {
    setup();
    expect(screen.getByText("Url incorrecta")).toBeTruthy();
  });

  test("Should renders the same component", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
