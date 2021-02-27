module.exports = (req, res) => {
  //CORS HEADERS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");

  // Response
  res.json({
    body: req.body,
    headers: req.headers,
    query: req.query,
    cookies: req.cookies,
  });
};
