import "@testing-library/jest-dom";
import {
  describe,
  it,
  expect,
  test,
  beforeAll,
  beforeEach,
  afterEach,
} from "vitest";
import { axe } from "vitest-axe";
import * as matchers from "vitest-axe/matchers";
expect.extend(matchers);

// Need to clean this up
// import { configure, render, screen } from "@testing-library/react";
import { configure, render, screen } from "@testing-library/react";

configure({ testIdAttribute: "data-slot" });
