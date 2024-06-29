import React, { useState } from "react";
export default function Step2(props) {
  const [form, setForm] = useState(props.form);

  const submitForm = () => {
    console.log(form);
    if (!form.name) {
      alert("Please enter your name");
      return;
    }
    if (!form.email) {
      alert("please enter your email");
    }
    if (!form.phone) {
      alert("Please enter your phone number");
      return;
    }
    props.submitForm(form);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="text-center mt-5 fw-semibold">Step # 2</h2>
          <h2 className="text-center my-2 fw-semibold">Details</h2>
          <p className="text-center mt-2 text-secondary">
            We’re thrilled at the opportunity to help you grow your business
            online. <br />
            Please let us know the best way to reach you.
          </p>
          <div className="col-12 col-md-9 col-lg-7 col-xl-5 fw-semibold mt-4">
            <div>
              <form>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="form-control rounded rounded-0 my-1 w-100"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <div className="d-flex mt-2 justify-content-between">
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      className="form-control rounded rounded-0 border my-1"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control rounded rounded-0 my-1"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <label htmlFor="" className="mt-2">
                  Anything else you’d like to share?
                </label>
                <textarea
                  className="form-control rounded rounded-0 my-1"
                  rows={5}
                  value={form.note}
                  onChange={(e) =>
                    setForm({ ...form, note: e.target.value })
                  }></textarea>
              </form>
              <div className="text-center my-3">
                <button
                  type="submit"
                  className="btn btn-success w-25 p-3"
                  onClick={submitForm}>
                  Submit
                </button>
              </div>
              <div className="d-flex justify-content-between my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="grey"
                  className="bi bi-lock"
                  viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                </svg>
                <p className="text-center text-secondary">
                  We promise never to share your information or spam your inbox
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
