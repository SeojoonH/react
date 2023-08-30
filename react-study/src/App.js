/* 경고 상자 만들기 */

import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [isDeleting, setIsDeleting] = useState(false);

  function deleteHandler() {
    setIsDeleting(true);
  }

  function proceedHandler() {
    setIsDeleting(false);
  }

  return (
    <div>
      {isDeleting ? (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>{" "}
        </div>
      ) : (
        ""
      )}

      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
