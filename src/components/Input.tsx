import { forwardRef } from "react";

type InputProps = {
  errorMessage?: string;
};

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & InputProps
>(({ errorMessage, ...props }, ref) => {
  return (
    <label>
      <input type="text" ref={ref} {...props} />
      {errorMessage && <p>{errorMessage}</p>}
    </label>
  );
});

export default Input;
