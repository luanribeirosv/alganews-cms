import * as I from "./Input.styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Input({ label, ...props }: InputProps) {
  return <I.Wrapper>
    {
      label &&
      <span className="Label">
        {label}:
      </span>
    }

    <input type="text" {...props} />
  </I.Wrapper>
}