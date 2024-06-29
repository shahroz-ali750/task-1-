import React from "react";

export default function Step1(props) {
  const budgets = [
    { id: 1, title: "< $1,000/mo", value: "lessThen1k" },
    { id: 2, title: "$1,000 - $2,000", value: "1And2k" },
    { id: 3, title: "$2,000 - $5,000", value: "2kAnd5k" },
    { id: 4, title: "$5,000 - $10,000", value: "5kAnd10k" },
    { id: 5, title: "$10,000 - $25000", value: "10kAnd25k" },
    { id: 6, title: "$25000+", value: "25k+" },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center ">
        <h2 className="text-center mt-5 fw-semibold">Step # 1</h2>
        <div className="col-8 col-md-7 col-lg-5">
          <h2 className="fw-semibold text-center my-4">
            What is your monthly digital marketing budget?
          </h2>
          <div className="text-center">
            <form>
              <div
                class="btn-group-vertical"
                role="group"
                aria-label="Basic radio toggle button group">
                {budgets &&
                  budgets.map((x) => (
                    <>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id={"radio_" + x.id}
                        autocomplete="off"
                        value={x.value}
                        onClick={() => props.onBugetSelect(x.value)}
                        defaultChecked={props?.form?.bugetValue === x.value}
                      />
                      <label
                        className={`btn btn-outline-success ps-5 pe-5 p-2 border border-0 rounded rounded-1 my-2 ${
                          props?.form?.bugetValue !== x.value ? "bg-light" : ""
                        }`}
                        for={"radio_" + x.id}>
                        {x.title}
                      </label>
                    </>
                  ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
