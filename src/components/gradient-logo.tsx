import React from 'react';
import type { SVGProps } from '@/lib/svg';

const color1 = '#F4F5F8';
const color2 = '#FFFFFF';

export const GradientLogo = ({
  color = 'currentColor',
  ...props
}: SVGProps) => {
  return (
    <>
      <svg
        width='321'
        height='150'
        viewBox='0 0 321 150'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M191.717 149.301H272.082L212.021 89.2401C229.043 82.4316 241.201 65.7751 241.201 46.3222C241.201 20.7903 220.41 0 194.878 0H115C115 23.1003 124.362 32.8268 140.653 46.9301C153.784 58.4802 165.942 69.4225 175.182 84.4985C187.462 104.195 191.717 126.322 191.717 149.301Z'
          fill={color2}
        />
        <path
          d='M175.304 149.301C175.304 96.8997 151.717 76.3526 128.252 55.8055C113.419 42.7964 98.5863 29.7872 98.5863 0H48.1304C48.1304 52.5228 71.717 73.0699 95.182 93.617C110.015 106.505 124.848 119.514 124.848 149.301H175.304Z'
          fill='url(#paint0_linear_43_358)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M48.1306 0.243164C33.5409 22.0061 25.0303 47.4164 25.0303 74.6505C25.0303 101.885 33.5409 127.416 48.1306 149.058C43.8753 125.471 41.5652 100.547 41.5652 74.6505C41.5652 48.8754 43.8753 23.8298 48.1306 0.243164Z'
          fill={color2}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M29.0423 15.8054C17.3705 32.9483 10.8052 53.1306 10.8052 74.6504C10.8052 96.1702 17.3705 116.353 29.0423 133.495C25.638 114.894 23.8143 95.0759 23.8143 74.6504C23.8143 54.2249 25.638 34.5288 29.0423 15.8054Z'
          fill={color2}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13.2371 32.2188C4.96967 44.62 0.106445 59.2096 0.106445 74.6504C0.106445 90.2127 4.96967 104.681 13.2371 117.082C10.8055 103.708 9.46815 89.3616 9.46815 74.6504C9.46815 59.9391 10.8055 45.7142 13.2371 32.2188Z'
          fill={color2}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M272.082 0.243164C286.793 22.0061 295.182 47.4164 295.182 74.6505C295.182 101.885 286.793 127.416 272.082 149.058C276.337 125.471 278.768 100.547 278.768 74.6505C278.768 48.8754 276.337 23.8298 272.082 0.243164Z'
          fill={color2}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M291.178 15.8066C302.849 32.9495 309.536 53.1319 309.536 74.6516C309.536 96.1714 302.849 116.354 291.178 133.497C294.582 114.895 296.527 95.0772 296.527 74.6516C296.527 54.2261 294.582 34.53 291.178 15.8066Z'
          fill={color2}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M306.976 32.2188C315.365 44.62 320.106 59.2096 320.106 74.6504C320.106 90.2127 315.365 104.681 306.976 117.082C309.407 103.708 310.745 89.3616 310.745 74.6504C310.745 59.9391 309.407 45.7142 306.976 32.2188Z'
          fill={color2}
        />
        <defs>
          <linearGradient
            id='paint0_linear_43_358'
            x1='85.7172'
            y1='6.09427'
            x2='137.708'
            y2='143.271'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#FF0000' />
            <stop
              offset='1'
              stopColor='#FFE6B0'
            />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
