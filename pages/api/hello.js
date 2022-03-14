export default function handler(req, res) {
  console.log(req.headers)
  res.status(200).json({ text: "Hello" })
}
