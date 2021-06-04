const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Adventure can be real happiness.", 
    "All the effort you are making will ultimately pay off.",
    "Change is happening in your life, so go with the flow!",
    "Go for the gold today! You’ll be the champion of whatever.",
    "Keep your face to the sunshine and you will never see shadows.",
  ]

  let randFortuneIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randFortuneIndex]

  res.status(200).send(randomFortune)

})

app.get("/api/quote", (req, res) => {
  const quotes = ['"The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney',
  '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
  '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”',
  '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Vince Lombardi',
  '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs',
  ]

  let randQuoteIndex = Math.floor(Math.random() * quotes.length)
  let randomQuote = quotes[randQuoteIndex]

  res.status(200).send(randomQuote)

})


app.listen(4000, () => console.log("Server running on 4000"));
