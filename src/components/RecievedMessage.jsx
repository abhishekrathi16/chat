import React from "react";

const RecievedMessage = () => {
  return (
    <fieldset>
      <legend>Received:</legend>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </fieldset>
  );
};

export default RecievedMessage;
