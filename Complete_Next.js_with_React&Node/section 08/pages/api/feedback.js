import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString,
      email,
      text: feedbackText,
    };
    // store that in a database or in a file

    // 실행중인 프로젝트의 루트 폴더 => data 폴더를 찾고 => feedback.json 파일을 찾아서 읽어온다.
    const filePath = path.join(process.cwd(), "data", "feedback.json");

    // 1. 먼저 파일을 읽는다
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    // 2. 읽어온 데이터에 새로운 데이터를 추가한다.
    data.push(newFeedback);

    // 3. 읽어온 데이터를 새로운 데이터로 쓴다.
    fs.writeFile(filePath, JSON.stringify(data));

    res.status(201).json({
      message: "Success!",
      feedback: newFeedback,
    });

    return;
  }

  res.status(200).json({
    message: "Hello World",
  });
}
