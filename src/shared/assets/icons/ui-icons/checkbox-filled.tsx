import { IconType } from "../icon.type";

export const CheckboxFilled = (props: IconType) => {
  return (
    <>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        <rect width="16" height="16" rx="3" fill="#FF5C00" />
      </svg>
    </>
  );
};
