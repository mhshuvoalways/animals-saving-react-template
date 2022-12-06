import React, { useState } from "react";
import SupportBG from "../assets/images/catbg.jpg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const SupportCount = () => {
  const [isStart, setIsStart] = useState(false);

  const onChange = (isVisible) => {
    setIsStart(isVisible && true);
  };

  return (
    <div
      className="bg-center bg-cover py-48 flex items-center"
      style={{ backgroundImage: `url(${SupportBG})` }}
    >
      <div className="w-10/12 m-auto text-center">
        <p className="text-4xl font-semibold">
          Thank You for Your Lifesaving Support!
        </p>
        <div className="mt-20 flex justify-center gap-20 flex-wrap">
          <div>
            <VisibilitySensor onChange={onChange}>
              <CountUp
                end={isStart && 119}
                className="text-6xl text-red-600 font-semibold"
              />
            </VisibilitySensor>
            <p className="text-3xl text-blue-600 font-semibold mt-5">
              Cats saved in 2021.
            </p>
          </div>
          <div>
            <VisibilitySensor onChange={onChange}>
              <CountUp
                end={isStart && 17515}
                className="text-6xl text-red-600 font-semibold"
              />
            </VisibilitySensor>
            <p className="text-3xl text-blue-600 font-semibold mt-5">
              Cats saved to date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCount;
