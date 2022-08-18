import { Fragment, useState } from "react";
import { getPath, readFile } from "../api/feedback";
export default function FeedbackPage({ feedback }) {
  const [feedbackItem, setFeedbackItem] = useState([]);

  const loadFeedbackHandler = (id) => {
    fetch(`api/feedback/${id}`).then((response) => {
      response.json().then((data) => {
        setFeedbackItem(data.feedback);
      });
    });
  };

  return (
    <Fragment>
      {feedbackItem && (
        <div>
          <h1>{feedbackItem.email}</h1>
          <p>{feedbackItem.text}</p>
        </div>
      )}
      <div>
        <ul>
          {feedback.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => loadFeedbackHandler(item.id)}>
                Load Feedback
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  // 백에서 로드될 코드 이기때문에 front처럼 접근하면 안된다.
  // 그렇다고 api 처럼 응답 코드를 낼 필요없으니 api에서 필요한 부분만 import해오자
  const filePath = getPath();
  const fileData = readFile(filePath);
  const feedback = JSON.parse(fileData);

  return {
    props: {
      feedback,
    },
  };
}
