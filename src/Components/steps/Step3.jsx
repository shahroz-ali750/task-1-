import React from "react";

export default function Step3(props) {
  return (
    <div className="container">
      <div className="row justify-content-center align-content-center vh-100">
        <div className="text-center">
          <div className="d-inline-block ps-5 pe-5 p-5 bg-light"></div>
        </div>
        <div className="col-12 col-md-9 col-lg-7 col-xl-5 my-3 p-3">
          <h2 className="text-center fw-bold">
            Your Request for a Proposal Has Been Submitted!
          </h2>
          <p style={{ color: "#6B7280" }} className="text-center p-3">
            Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis
            gravida parturient urna tristique congue. Curabitur volutpat nulla
            convallis eget pellentesque. Luctus tellus eu ultrices egestas.
          </p>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-success p-3 "
              onClick={props.returnHome}>
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
