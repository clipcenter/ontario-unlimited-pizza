import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Index } from "@/routes/index";

// Clicking a menu item must open a popup that repeats the item's name, its
// description and its price — the page's only path to those details.
describe("Menu item popup", () => {
  it("shows the name, description and price of the clicked item", () => {
    render(<Index />);

    fireEvent.click(screen.getByRole("button", { name: /14" Large Pizza/ }));

    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText('14" Large Pizza')).toBeInTheDocument();
    expect(
      within(dialog).getByText("Your perfect savory, cheesy masterpiece."),
    ).toBeInTheDocument();
    expect(within(dialog).getByText("$18.99")).toBeInTheDocument();
    expect(within(dialog).getByText("Every Day Specials")).toBeInTheDocument();
  });

  it("shows the clicked item's own details, not another item's", () => {
    render(<Index />);

    fireEvent.click(screen.getByRole("button", { name: /Cheesy Bread/ }));

    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText("Cheesy Bread")).toBeInTheDocument();
    expect(within(dialog).getByText("Cheesy bread on a creamy garlic base.")).toBeInTheDocument();
    expect(within(dialog).getByText("$12.99")).toBeInTheDocument();
    expect(within(dialog).queryByText('14" Large Pizza')).toBeNull();
  });

  it("closes the popup", async () => {
    render(<Index />);

    fireEvent.click(screen.getByRole("button", { name: /Chicken Wings/ }));
    const dialog = screen.getByRole("dialog");

    fireEvent.click(within(dialog).getByRole("button", { name: "Close" }));

    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  });
});
