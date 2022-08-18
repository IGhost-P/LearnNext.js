import { useRef } from "react";

function HomePage() {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;

    if (enteredEmail.trim() === "" || enteredPassword.trim() === "") {
      return alert("Please enter your email and password");
    }

    // typing here : send request to server
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
          <textarea id="feedback" rows="5" ref={passwordInput} />
        </div>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
