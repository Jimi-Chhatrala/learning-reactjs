import React, { useState } from "react";

function OtherInputs() {
  const [textarea, setTextarea] = useState("");
  const [selectMenu, setSelectMenu] = useState("USA");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comments: ", e.target[0].value);
    console.log("Country: ", e.target[1].value);
    console.log("Checkbox: ", e.target[2].checked);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ verticalAlign: "top" }} htmlFor="">
          Comments: &nbsp;
        </label>
        <textarea
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
          cols="30"
          rows="5"
        ></textarea>
        <br />
        <br />
        <label htmlFor="">Select Country: &nbsp;</label>
        <select
          value={selectMenu}
          onChange={(e) => setSelectMenu(e.target.value)}
        >
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Brazil">Brazil</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Yes I agree the terms &nbsp;</label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default OtherInputs;
