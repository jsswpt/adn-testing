import { IconType } from "../icon.type";

export const Pause = (props: IconType) => {
  return (
    <>
      <svg
        className={props.className}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 36C18.8954 36 18 35.1046 18 34L18 14C18 12.8954 18.8954 12 20 12C21.1046 12 22 12.8954 22 14L22 34C22 35.1046 21.1046 36 20 36Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29 36C27.8954 36 27 35.1046 27 34L27 14C27 12.8954 27.8954 12 29 12C30.1046 12 31 12.8954 31 14L31 34C31 35.1046 30.1046 36 29 36Z"
          fill="white"
        />
      </svg>
    </>
  );
};
