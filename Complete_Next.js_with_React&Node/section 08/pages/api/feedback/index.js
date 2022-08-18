import fs from "fs";
import path from "path";

export const getPath = () => {
  return path.join(process.cwd(), "data", `feedback.json`);
};

export const readFile = (file) => {
  return fs.readFileSync(file, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return data;
  });
};

export const writeFile = (file, fileData, newData) => {
  const data = JSON.parse(fileData);
  data.push(newData);

  fs.writeFile(file, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text: feedbackText,
    };
    // store that in a database or in a file

    const filePath = getPath();

    const fileData = readFile(filePath);

    writeFile(filePath, fileData, newFeedback);

    res.status(201).json({
      message: "Success!",
      feedback: newFeedback,
    });

    return;
  }

  if (req.method === "GET") {
    const filePath = getPath();
    const fileData = readFile(filePath);

    res.status(200).json({ feedback: JSON.parse(fileData) });

    return;
  }

  res.status(200).json({
    message: "Hello World",
  });
}
