import { test, expect } from "vitest";
import "@vitest/browser/matchers.d.ts";
import { render } from "vitest-browser-react";

import App from "@/App";

test("renders name", async () => {
  const { getByRole, getByText } = render(<App />);

  await expect.element(getByText("Vite + React")).toBeInTheDocument();
  await getByRole("button", { name: "it_count" }).click();

  await expect.element(getByText("count is 1")).toBeInTheDocument();
});
