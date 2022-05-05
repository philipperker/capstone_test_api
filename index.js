const express = require("express");
const app = express();
const port = process.env.PORT || 4444;

//-------------example nft data----------------------
const example_nft_data = [
  {
    created_by: "BoredApeYachtClub",
    contract_id: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    token_id: "8520",
    token_url: "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/8520",
    image: "https://ipfs.io/ipfs/QmNfz5mmMs5yhk9SQubuBkuxi467uPLxwE43eQGBGi2JZt",
  },

  {
    created_by: "BoredApeYachtClub",
    contract_id: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    token_id: "3368",
    token_url: "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/3368",
    image: "https://ipfs.io/ipfs/QmP37F4D6anmnVCzbgRUhawreyupsdbw59HvrcapNAvdzv",
  },

  {
    created_by: "BoredApeYachtClub",
    contract_id: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    token_id: "4671",
    token_url: "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/4671",
    image: "https://ipfs.io/ipfs/Qmci1pGaUmvb6StPxdGp1WqfK9QjPjdf43nCbY5LJ9y1MY",
  },

  {
    created_by: "BoredApeYachtClub",
    contract_id: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    token_id: "570",
    token_url: "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/570",
    image: "https://ipfs.io/ipfs/QmPCKggCTEnpA8jTQBroPaCbV9rsMQ4asZ7keYJjjJDoHr",
  },

  {
    created_by: "BoredApeYachtClub",
    contract_id: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    token_id: "150",
    token_url: "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/150",
    image: "https://ipfs.io/ipfs/QmR9uR6ufPnTrz2eFVrhgESEaU47Y7F4UE5pYorHNYR9XF",
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
