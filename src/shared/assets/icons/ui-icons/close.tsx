import { IconType } from "../icon.type";

export const Close = (props: IconType) => {
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
          d="M1.96023 1.28682C2.35133 0.905526 2.98541 0.905526 3.37651 1.28682L14.7067 12.3332C15.0978 12.7145 15.0978 13.3327 14.7067 13.714C14.3156 14.0953 13.6815 14.0953 13.2904 13.714L1.96023 2.66762C1.56914 2.28633 1.56914 1.66812 1.96023 1.28682Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.28758 13.6172C0.899682 13.2328 0.904845 12.6146 1.29911 12.2365L12.7212 1.28037C13.1154 0.902194 13.7495 0.907229 14.1374 1.29162C14.5253 1.67601 14.5201 2.29419 14.1259 2.67237L2.7038 13.6285C2.30954 14.0066 1.67547 14.0016 1.28758 13.6172Z"
          fill="white"
        />
      </svg>
    </>
  );
};
