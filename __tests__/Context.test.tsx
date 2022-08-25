/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import { StateProvider } from "../context/Stateprovider"
import ContextA from "../components/ContextA"
import ContextB from "../components/ContextB"
import userEvent from "@testing-library/user-event"

describe("Global state manageement (useContext)", () => {
  it("Should change the toggle state globally", () => {
    render(
      <StateProvider>
        <ContextA />
        <ContextB />
      </StateProvider>
    )
    expect(screen.getByTestId("toggle-a").textContent).toBe('false')
    expect(screen.getByTestId("toggle-b").textContent).toBe('false')
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId("toggle-a").textContent).toBe('true')
    expect(screen.getByTestId("toggle-b").textContent).toBe('true')
  })
})
