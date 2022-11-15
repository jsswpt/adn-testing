import { IconType } from "../icon.type";

export const Navigation = (props: IconType) => {
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
          d="M12.6402 7.30693L5.09712 1.28734C4.61729 0.904221 3.83933 0.904221 3.35973 1.28734C2.88009 1.67011 2.88009 2.29094 3.35973 2.67368L10.0342 8.0001L3.35992 13.3263C2.88028 13.7093 2.88028 14.33 3.35992 14.7128C3.83956 15.0957 4.61749 15.0957 5.09732 14.7128L12.6404 8.69312C12.8802 8.50164 13 8.25095 13 8.00013C13 7.74919 12.88 7.49832 12.6402 7.30693Z"
          fill="white"
        />
      </svg>
    </>
  );
};
