import React, { useEffect, useState } from "react";

export default function StepProgress(props) {
  const [width, setWidth] = useState(25);
  const step = props.step;
  useEffect(() => {
    switch (step) {
      case 0:
        setWidth(25);
        break;
      case 1:
        setWidth(50);
        break;
      case 2:
        setWidth(100);
        break;

      default:
        setWidth(25);
        break;
    }
  }, [step]);
  return (
    <div className="my-2">
      <div className="progress progress-sm rounded rounded-0">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          aria-label="Segment one"
          style={{ width: width + "%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"></div>
      </div>
    </div>
  );
}
