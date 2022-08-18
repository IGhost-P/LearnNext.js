import { getPath, readFile } from ".";

export default function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  console.log("feedbackId");
  console.log(req.query);
  const filePath = getPath(feedbackId);
  const fileData = readFile(filePath);
  const feedback = JSON.parse(fileData);

  const slelctedFeedback = feedback.find((item) => item.id === feedbackId);

  res.status(200).json({ feedback: slelctedFeedback });
}
