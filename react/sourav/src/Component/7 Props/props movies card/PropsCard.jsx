import React from "react";

const PropsCard = (Props) => {
  let { name, img, rel, lang, hero, budget } = Props;
  return (
    <>
      <div
        className="card  m-2 text-center  "
        style={{ width: "32vh", height: "72vh" }}
      >
        <div className="name p-2 d-flex justify-content-center text-danger all">
          {name}
        </div>
        <div className="image">
          <img src={img} alt="" />
        </div>
        <hr />
        <div className="d-flex justify-content-center text-uppercase all text-info">
          {rel}
        </div>
        <div className=" d-flex justify-content-center text-uppercase all text-primary">
          {lang}
        </div>
        <div className="d-flex justify-content-center text-uppercase all text-secondary">
          {hero}
        </div>
        <div className="d-flex justify-content-center text-uppercase all text-warning">
          {budget}
        </div>
        <hr />
        <div className="d-flex justify-content-center ">
          <button className="btn btn-success w-50 d-flex justify-content-center ">
            {" "}
            Watch
          </button>
        </div>
      </div>
    </>
  );
};

export default PropsCard;
