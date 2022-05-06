const express = require("express");
const app = express();
const port = process.env.PORT || 4444;

//-------------example nft data----------------------
const example_nft_data = [
  {
    created_by: "ppilihp",
    contract_id: "XXX0x6ED09b7178e08203b7320784292d0F46A79D2Ff0",
    token_id: "1",
    token_url: "XXX-1",
    image: "https://ipfs.io/ipfs/QmcRKxkWrTpP9Z7G84Z1eiL4eTqkTVketdYS1oNPRxxq5n",
  },

  {
    created_by: "ppilihp",
    contract_id: "XXX0x6ED09b7178e08203b7320784292d0F46A79D2Ff0",
    token_id: "2",
    token_url: "XXX-2",
    image: "https://ipfs.io/ipfs/QmT3mHEzHfDjo9spq7SGfdUFYVBoZPPevPQVA5pm9kSeKW",
  },

  {
    created_by: "ppilihp",
    contract_id: "XXX0x6ED09b7178e08203b7320784292d0F46A79D2Ff0",
    token_id: "3",
    token_url: "XXX-3",
    image: "https://ipfs.io/ipfs/QmenQCrnqFoM7s7sG9tJvHNVUJoHDDqie48mk7TBJfjvcs",
  },

  {
    created_by: "ppilihp",
    contract_id: "XXX0x6ED09b7178e08203b7320784292d0F46A79D2Ff0",
    token_id: "4",
    token_url: "XXX-4",
    image: "https://ipfs.io/ipfs/QmVEXHS7MknXCq63kKKdNHKtXnbx48BEnb5ayeNtLsb6gN",
  },
];

//---------------------------------------------------

app.get("/", (req, res) => {
  res.status(200).json(example_nft_data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports.app;
