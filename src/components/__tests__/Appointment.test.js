
import React from "react";
import { render } from "@testing-library/react";
import index from "components/Appointment/index";
import Appointment from "components/Appointment/index";




describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

})
