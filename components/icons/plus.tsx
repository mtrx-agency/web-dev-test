interface IconPlusProps {
  stroke: string;
  height: string;
  width: string;
  className: string;
}

export default function IconPlus({
  stroke = "white",
  height = "28px",
  width = "28px",
  className,
}: IconPlusProps) {
  return (
    <>
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke={stroke}
          d="M13.9987 5.83398V22.1673M5.83203 14.0007H22.1654"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
