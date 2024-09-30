interface IconLogoProps {
  fill: string;
  height: string;
  width: string;
  className?: string;
}

export default function IconLogo({
  fill = "#2C2C2C",
  height = "45px",
  width = "143px",
  className = "",
}: IconLogoProps) {
  return (
    <>
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 143 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={fill}
          d="M10.2362 11.3574H0.357422V34.105H5.16243V26.7608H10.2362C15.2765 26.7608 18.603 23.7711 18.603 18.9941C18.603 14.2171 15.2765 11.3574 10.2362 11.3574ZM10.0346 22.3413H5.16243V15.777H10.0346C12.5211 15.777 13.7308 17.0443 13.7308 19.0591C13.7308 21.0414 12.5211 22.3413 10.0346 22.3413Z"
        />
        <path
          fill={fill}
          d="M33.4079 16.2319V18.7342C32.131 17.0118 30.1821 15.842 27.5612 15.842C22.8234 15.842 19.1608 19.6441 19.1608 25.1685C19.1608 30.6604 22.7562 34.495 27.5948 34.495C30.1821 34.495 32.0974 33.3901 33.3743 31.7003V34.105H38.1793L38.2129 16.2319H33.4079ZM28.6701 30.0755C26.0155 30.0755 23.9995 28.1257 23.9995 25.1685C23.9995 22.2438 25.9819 20.2615 28.6701 20.2615C31.3582 20.2615 33.4079 22.2438 33.4079 25.1685C33.4079 28.1257 31.3582 30.0755 28.6701 30.0755Z"
        />
        <path
          fill={fill}
          d="M51.182 15.842C48.5947 15.842 46.6122 17.0118 45.3353 18.7342V16.2319H40.5303V42.2292H45.3353V31.7003C46.6458 33.3901 48.5611 34.495 51.182 34.495C55.987 34.495 59.6159 30.6604 59.6159 25.1685C59.6159 19.6441 55.9198 15.842 51.182 15.842ZM50.0731 30.0755C47.385 30.0755 45.3353 28.1257 45.3353 25.1685C45.3353 22.2438 47.385 20.2615 50.0731 20.2615C52.7612 20.2615 54.7437 22.2438 54.7437 25.1685C54.7437 28.1257 52.7276 30.0755 50.0731 30.0755Z"
        />
        <path
          fill={fill}
          d="M70.4978 15.842C64.8528 15.842 60.8542 19.839 60.8542 25.201C60.8542 30.5304 64.8192 34.495 70.5986 34.495C74.5636 34.495 78.2598 32.6427 79.6374 28.4181H74.6644C74.026 29.848 72.4131 30.6604 70.565 30.6604C68.0785 30.6604 66.0624 29.2306 65.76 26.3709H79.9398C80.4102 20.489 76.6133 15.842 70.4978 15.842ZM70.4642 19.6766C72.7827 19.6766 74.2948 21.0089 74.8324 22.9587H65.9952C66.6 21.0414 68.1121 19.6766 70.4642 19.6766Z"
        />
        <path
          fill={fill}
          d="M92.1151 15.842C89.4942 15.842 87.4781 17.0118 86.3356 19.3516V16.2319H81.5306V34.105H86.3356V26.1434C86.3356 21.9188 88.9566 20.619 92.0143 20.619C92.5519 20.619 92.8207 20.6515 93.1903 20.6839V15.9069C92.8879 15.8744 92.5519 15.842 92.1151 15.842Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M119.61 2.70297C108.203 2.70297 98.9557 11.646 98.9557 22.6777C98.9557 33.7095 108.203 42.6525 119.61 42.6525C131.016 42.6525 140.263 33.7095 140.263 22.6777C140.263 11.646 131.016 2.70297 119.61 2.70297ZM96.8616 22.6777C96.8616 10.5275 107.046 0.677734 119.61 0.677734C132.173 0.677734 142.358 10.5275 142.358 22.6777C142.358 34.828 132.173 44.6777 119.61 44.6777C107.046 44.6777 96.8616 34.828 96.8616 22.6777Z"
          fill="url(#paint0_linear_2562_85)"
        />
        <path
          fill={fill}
          d="M111.428 27.8432H118.961V31.1408H105.61V28.6676L110.682 24.3516C112.555 22.7352 113.74 21.6521 114.237 21.1025C114.734 20.5529 114.983 19.9791 114.983 19.381C114.983 18.7668 114.751 18.2495 114.287 17.8292C113.839 17.3928 113.184 17.1745 112.323 17.1745C110.632 17.1745 109.646 18.0717 109.364 19.8659H105.784C105.9 18.0393 106.571 16.5845 107.798 15.5015C109.041 14.4185 110.599 13.877 112.472 13.877C114.328 13.877 115.812 14.3942 116.922 15.4288C118.033 16.4471 118.588 17.708 118.588 19.2113C118.588 19.5831 118.538 19.9468 118.439 20.3024C118.356 20.6418 118.265 20.949 118.165 21.2238C118.082 21.4824 117.892 21.7976 117.594 22.1694C117.295 22.525 117.063 22.8079 116.897 23.018C116.748 23.212 116.433 23.5272 115.953 23.9637C115.472 24.4001 115.124 24.7153 114.908 24.9093C114.693 25.0871 114.262 25.4508 113.615 26.0004L111.477 27.8189L111.428 27.8432Z"
        />
        <path
          fill={fill}
          d="M133.961 24.1819V27.4067L131.524 27.431V31.1408H127.969V27.431H119.341V24.1819L126.278 14.1679H131.524V24.1577L133.961 24.1819ZM123.145 24.1577H127.969V17.3928H127.745L123.145 24.1577Z"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2562_85"
            x1="132.9"
            y1="36.8974"
            x2="111.964"
            y2="13.1543"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8466FF" />
            <stop offset="1" stopColor="#F8F8FF" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
