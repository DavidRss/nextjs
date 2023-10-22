import { RotatingLines } from "react-loader-spinner";

export default function Spinner({position}) {
  return (
    <div className={`${position ? position : 'fixed'} top-[calc(50%-48px)] left-[calc(50%-48px)] z-[999]`}>
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
