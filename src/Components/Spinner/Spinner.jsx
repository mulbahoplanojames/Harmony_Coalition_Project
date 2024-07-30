import { CirclesWithBar } from "react-loader-spinner";
const Spinner = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4b208c"
          outerCircleColor="#4b208c"
          innerCircleColor="#4b208c"
          barColor="#4b208c"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Spinner;
