import React, { useRef } from "react";

const FormUseRef = () => {
  let form = useRef();
  let res = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    let fnm = form.current[0].value;
    let lnm = form.current[1].value;
    console.log(fnm, lnm);

    // let data = {
    //   fnm: form.current[0].value,
    //   lnm: form.current[1].value,
    // };
    // let { fnm, lnm } = data;

    res.current.innerText = `My Name is ${fnm} ${lnm}`;
  };

  return (
    <>
      <div className="useRef">
        <div className="header text-center text-bg-danger text-primary display-6 mb-5">
          Print Data
        </div>
        <div className="container text-center">
          <form
            ref={form}
            onSubmit={handleSubmit}
            action=""
            className="border p-5 border-3"
          >
            <input
              type="text"
              placeholder="Enter First Name"
              className="form-control mb-3"
            />
            <input
              type="text"
              placeholder="Enter Last Name"
              className="form-control mb-3"
            />
            <button className="btn btn-danger ">Print Data</button>
          </form>
          <h1 ref={res} className="text-primary"></h1>
        </div>
      </div>
    </>
  );
};

export default FormUseRef;
