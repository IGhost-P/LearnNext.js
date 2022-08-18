import { useRef, useState } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailInput = useRef(null);
  const feebackInput = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredfeeback = feebackInput.current.value;

    if (enteredEmail.trim() === "" || enteredfeeback.trim() === "") {
      return alert("Please enter your email and password");
    }

    // typing here : send request to server

    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: enteredEmail,
        text: enteredfeeback,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Feedback submitted successfully");
        }
      });
  };

  const loadFeedbackHandler = () => {
    fetch("api/feedback").then((response) => {
      response.json().then((data) => {
        setFeedbackItems(data.feedback);
      });
    });
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInput} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feebackInput} />
        </div>
        <button type="submit">Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
