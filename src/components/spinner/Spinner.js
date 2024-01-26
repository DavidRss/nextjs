export default function Spinner({position}) {
  return (
    <div className={`${position ? position : 'fixed'} top-[calc(50%-48px)] left-[calc(50%-48px)] z-[999]`}>
      {/* <BoxesLoader
        boxColor={"#4A9F2E"}
        // style={{ marginBottom: "20px" }}
        desktopSize={"96px"}
        mobileSize={"96px"}
      /> */}
    </div>
  );
}
