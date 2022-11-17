import { IconType } from "../icon.type";

export const BandaiNamco = (props: IconType) => {
  return (
    <>
      <svg
        className={props.className}
        width="106"
        height="50"
        viewBox="0 0 106 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="106" height="50" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_1_5635"
              transform="translate(0 -0.0047619) scale(0.00297619 0.00630952)"
            />
          </pattern>
          <image
            id="image0_1_5635"
            width="336"
            height="160"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </>
  );
};