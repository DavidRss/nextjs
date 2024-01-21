import { RotatingLines } from "react-loader-spinner";

export default function Spinner({ position }) {
  return (
    <div
      className={`${
        position ? position : "fixed"
      } top-[calc(50%-48px)] left-[calc(50%-48px)] z-[999]`}
    >
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
