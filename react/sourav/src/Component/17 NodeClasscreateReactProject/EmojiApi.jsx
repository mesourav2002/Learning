import React, { useEffect, useRef, useState } from "react";
import "./movies.css";
const EmojiApi = () => {
  let searchField = useRef();
  let [emoji, setEmoji] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();
    let inputData = searchField.current.value;

    let fetchApi = () => {
      fetch(
        `https://emoji-api.com/emojis?search=${inputData}&access_key=36f4d0c514ee648522598d8dae1ab2e3ac6eb276`
      )
        .then((elem) => elem.json())
        .then((data) => setEmoji(data));
    };
    fetchApi();
  };
  return (
    <>
      <div className="movieapi">
        <div className="header">Search Emoji</div>

        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="container w-25 form-control mt-2 "
              type="text"
              placeholder="Enter Your Movies Name"
              ref={searchField}
            />
            <button className="btn btn-primary helo">Submit</button>

            <div className="main">
              {emoji.map((data) => {
                let {
                  slug,
                  character,
                  unicodeName,
                  codePoint,
                  group,
                  subGroup,
                } = data;
                return (
                  <>
                    <div className="card ">
                      <div className="name  "> {character}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmojiApi;
