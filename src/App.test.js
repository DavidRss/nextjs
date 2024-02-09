import { render, screen } from "@testing-library/react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import App from "./App";

test("renders default route", () => {
    render(
        <Router>
            <Routes>
                <Route path="*" element={<Navigate to={"app/dashboard"} />} />
            </Routes>
        </Router>
    );
});

test("renders layout component for /app/* route", () => {
    render(
        <Router>
            <Routes>
                <Route path="/app/*" element={<Layout />} />
            </Routes>
        </Router>
    );
    const layoutElement = screen.getByTestId("layout");
    expect(layoutElement).toBeInTheDocument();
});