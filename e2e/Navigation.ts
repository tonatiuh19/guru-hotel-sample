import { test, expect } from "@playwright/test";

test("should navigate to the about page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("text=See more");
  await expect(page).toHaveURL("http://localhost:3000/details");
  await expect(page.locator("BackButton")).toContainText("Back");
});
