import React, { useState } from "react";
import StepProgress from "../StepProgress";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Steps() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(null);

  const onBugetSelect = (value) => {
    setForm({ ...form, bugetValue: value });
    setStep(1);
  };

  const submitForm = (formValue) => {
    setForm({ ...form, ...formValue });
    setStep(2);
  };

  const returnHome = () => {
    setStep(0);
  };

  const handleBack = () => {
     setStep(step - 1);
  };

  return (
    <div>
      <div className="mt-2 ms-3 ">
        <button
          onClick={handleBack}
          className="fw-semibold btn border border-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="20"
            fill="currentColor"
            class="bi bi-arrow-left fw-semibold"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>{" "}
          Go Back
        </button>
      </div>

      <StepProgress step={step} />
      {step === 0 && <Step1 onBugetSelect={onBugetSelect} form={form} />}
      {step === 1 && <Step2 submitForm={submitForm} form={form} />}
      {step === 2 && <Step3 getForm={form} returnHome={returnHome} />}
    </div>
  );
}
