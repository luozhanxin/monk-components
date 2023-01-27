import { shallowMount } from "@vue/test-utils";
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import MText from "@/components/MText/MText.vue";
import { textDefaultProps } from "../../src/defaultProps";
describe("MText.vue", () => {
  const { location } = window;
  beforeEach(() => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: { href: "" },
    });
  });
  afterEach(() => {
    window.location = location;
  });
  it("default MText render", () => {
    const msg = "test";
    const props = {
      ...textDefaultProps,
      text: msg,
    };
    const wrapper = shallowMount(MText, { props });
    // should have the right text
    expect(wrapper.text()).toBe(msg);
    // should be default div tag
    expect(wrapper.element.tagName).toBe("P");
    // should have certain css attr
    const style = wrapper.attributes().style;
    expect(style.includes("font-size")).toBeTruthy();
    // should not have prop has been filtered
    expect(style.includes("actionType")).toBeFalsy();
  });
  it("MText with actionType and URL should trigger location href change", async () => {
    const props = {
      ...textDefaultProps,
      actionType: "url",
      url: "http://test.url",
      tag: "h2",
    };
    const wrapper = shallowMount(MText, { props });
    expect(wrapper.element.tagName).toBe("H2");
    await wrapper.trigger("click");
    expect(window.location.href).toBe("http://test.url");
  });
  it("MText with isEditing should not trigger location change", async () => {
    const props = {
      ...textDefaultProps,
      actionType: "url",
      url: "http://test.url",
      tag: "h2",
      isEditing: true,
    };
    const wrapper = shallowMount(MText, { props });
    await wrapper.trigger("click");
    expect(window.location.href).not.toBe("http://test.url");
  });
});
