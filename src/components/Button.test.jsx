import { fireEvent } from "@testing-library/react";
import { describe } from "vitest"

describe("Button component", () => {
    it('should render porperly', async () => {
        render(<Button name="Sampple"/>);
        
        const btn = await screen.findByTestId("button");
        

        //If the button is rendered
        expect(btn).toBeInTheDocument();
        //If the button has appropriate text
        expect(btn.textContent).toBe("Sample");
        //If the class name is set
        expect(btn.ClassName).toBe("py-2 px-4 border rounded-md");

    });
    it("should be clickable", async() => {
        const onClick = vi.fn;
        render(<Button name="Sample" onClick={onClick} />);

        const btn = await screen.findByTestId("button");
        fireEvent.click(btn);

        expect(onClick).toHaveBeenCalledOnce();

    });

    it("should append classNames", async() => {
        render(<Button name="Sample" ClassName="bg-green-500" />);

        const btn = await screen.findByTestId("button");

        expect(btn.ClassName).toBe("bg-green-500 py-2 px-4 border rounded-md");

    });
});