import { IconType } from "../icon.type";

export const Checkbox = (props: IconType) => {
  return (
    <>
      <svg
        className={props.className}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2ZM3 0C1.34315 0 0 1.34315 0 3V13C0 14.6569 1.34315 16 3 16H13C14.6569 16 16 14.6569 16 13V3C16 1.34315 14.6569 0 13 0H3Z"
          fill="#707070"
        />
      </svg>
    </>
  );
};
