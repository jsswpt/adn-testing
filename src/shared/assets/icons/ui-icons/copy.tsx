import { IconType } from "../icon.type";

export const Copy = (props: IconType) => {
  return (
    <>
      <svg
        className={props.className}
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 9C2 7.34315 3.34315 6 5 6H14C15.6569 6 17 7.34315 17 9V21C17 22.6569 15.6569 24 14 24H5C3.34315 24 2 22.6569 2 21V9ZM5 8C4.44772 8 4 8.44772 4 9V21C4 21.5523 4.44772 22 5 22H14C14.5523 22 15 21.5523 15 21V9C15 8.44772 14.5523 8 14 8H5Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 3C7 1.34315 8.34315 0 10 0H19C20.6569 0 22 1.34315 22 3V15C22 16.6569 20.6569 18 19 18H18V16H19C19.5523 16 20 15.5523 20 15V3C20 2.44772 19.5523 2 19 2H10C9.44772 2 9 2.44772 9 3V4H7V3Z"
          fill="white"
        />
      </svg>
    </>
  );
};
