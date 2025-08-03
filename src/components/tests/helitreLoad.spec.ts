import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import helithreLoad from "../HelithreLoad.vue";

describe("HelithreLoad component", () => {
  it("loads wrapper if the type is correct without errors", () => {
    const consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(() => {});
    const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {});

    mount(helithreLoad, {
      props: {
        helithreJson: {
          name: "testForm",
          wrapper: "form",
          childrens: [
            {
              text: "First input",
              id: "0",
              type: "text",
            },
          ],
          responses: [
            {
              id: "0",
              value: "Test load",
            },
          ],
        },
      },
    });
    expect(consoleErrorMock).not.toHaveBeenCalled();
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it("throws an error if the wrapper is invalid", () => {
  const consoleErrorMock = vi.spyOn(console, "error").mockImplementation(() => {});

  expect(() => {
    mount(helithreLoad, {
      props: {
        helithreJson: {
          name: "testForm",
          wrapper: "notAValidWrapper",
          childrens: [
            {
              text: "First input",
              id: "0",
              type: "text",
            },
          ],
          responses: [
            {
              id: "0",
              value: "Test load",
            },
          ],
        },
      },
    });
  }).toThrow("Invalid wrapper type");

  consoleErrorMock.mockRestore();
});

});
