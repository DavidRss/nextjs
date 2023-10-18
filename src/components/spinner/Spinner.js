import { RotatingLines } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="fixed top-2/4 left-2/4 z-[999]">
      <RotatingLines
        strokeColor="#C73E00"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}
