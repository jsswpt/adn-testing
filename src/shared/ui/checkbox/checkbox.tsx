import { InputHTMLAttributes } from "react";
interface CheckboxType
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

export const Checkbox = (props: CheckboxType) => {
  return <input type="checkbox" {...props} />;
};
