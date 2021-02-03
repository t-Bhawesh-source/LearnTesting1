import * as React from "react";
import { render } from "react-dom";
import App from "./App";

test("render correctness", () => {
  const root = document.createElement("div");
  render(<App />, root);
  expect(document.querySelector("h1").textContent).toBe("TODOs");
});
