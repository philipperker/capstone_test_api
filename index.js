const express = require("express");
const app = express();
const port = process.env.PORT || 4444;

const example_nft_data = [
  {
    contract_id: "a7875f5758f85544dcaab79a8a1ca406",
    image: "https://cryptocoven.s3.amazonaws.com/a7875f5758f85544dcaab79a8a1ca406.png",
  },
  {
    contract_id: "a7875f5758f85544dcaab79a8a1ca406",
    image: "https://cryptocoven.s3.amazonaws.com/a7875f5758f85544dcaab79a8a1ca406.png",
  },
  {
    contract_id: "a7875f5758f85544dcaab79a8a1ca406",
    image: "https://cryptocoven.s3.amazonaws.com/a7875f5758f85544dcaab79a8a1ca406.png",
  },
  {
    contract_id: "a7875f5758f85544dcaab79a8a1ca406",
    image: "https://cryptocoven.s3.amazonaws.com/a7875f5758f85544dcaab79a8a1ca406.png",
  },
  {
    contract_id: "a7875f5758f85544dcaab79a8a1ca406",
    image: "https://cryptocoven.s3.amazonaws.com/a7875f5758f85544dcaab79a8a1ca406.png",
  },
];

app.get("/", (req, res) => {
  res.status(200).json(example_nft_data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports.app;
