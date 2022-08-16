export default function handler(req, res) {
  res.status(200).json({
    message: "Hello World",
  });
}
// 여기 작성되는 코드는 클라이언트측 코드 번들링에 포함되지 않기 때문에 클라이언트는 알 수 없다
