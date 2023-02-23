import cx from '@/utils/cx';

import React from 'react';

interface BlurBlobProps extends React.SVGAttributes<SVGElement> {
  pathClassName: string;
  className?: string;
}

const BlurBlob: React.FC<BlurBlobProps> = ({
  pathClassName,
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 2328 1902"
      className={cx(className ?? 'w-full')}
      {...rest}
    >
      <g filter="url(#filter0_f_1229_1099)">
        <path
          className={pathClassName}
          d="M1914.4 951.397c0-296.577-335.97-537-750.4-537-414.433 0-750.397 240.423-750.397 537 0 296.573 335.964 537.003 750.397 537.003 414.43 0 750.4-240.43 750.4-537.003z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_f_1229_1099"
          width="2327.75"
          height="1900.95"
          x="0.126"
          y="0.92"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_1229_1099"
            stdDeviation="180"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export default BlurBlob;
