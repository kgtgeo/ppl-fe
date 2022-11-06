import Login from "../pages/login";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Login", () => {
    it("renders a login page", () => {
      render(<Login />);
      // check if all components are rendered
      expect(screen.getByTestId("username")).toBeInTheDocument();
      expect(screen.getByTestId("email")).toBeInTheDocument();
      expect(screen.getByTestId("password label")).toBeInTheDocument();
      expect(screen.getByTestId("password")).toBeInTheDocument();
      expect(screen.getByTestId("submit button")).toBeInTheDocument();
    });
  });