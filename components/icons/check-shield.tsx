interface IconCheckShieldProps {
  fill?: string;
  height?: string;
  width?: string;
  className?: string;
}

export default function IconCheckShield({
  fill = "currentColor",
  height = "24px",
  width = "24px",
  className = "",
}: IconCheckShieldProps) {
  return (
    <>
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM10.94 15.54L7.4 12L8.81 10.59L10.93 12.71L15.17 8.47L16.58 9.88L10.94 15.54Z"
          fill={fill}
        />
      </svg>
    </>
  );
}
