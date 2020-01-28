export default async function (err, req, res, next) {
  res.status(400).send('bad request');
}