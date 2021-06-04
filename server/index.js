const express = require("express");
const cors = require("cors");
const ctrl = require('./controller')

const app = express();


app.use(cors());
app.use(express.json()); 


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

app.get("/api/music", (req, res) => {
  const musicList = ["Fight Song",
					 "Stronger",
					 "I Will Survive",
           "Happy",
           "Beautiful Day",
  ]

  let randomIndex = Math.floor(Math.random() * musicList.length)
  let randomMusic = musicList[randomIndex];
  res.status(200).send(randomMusic);
})

app.get("/api/activity", (req, res) => {
  const activities = ["Give service to a neighbor",
					 "Smile at a stranger",
					 "Tell someone you love them",
           "Write a thank you note to a person in need",
  ]

  let randomIndex = Math.floor(Math.random() * activities.length)
  let randomActivity = activities[randomIndex]

  res.status(200).send(randomActivity)
  
})

app.get('/api/movies', (req, res) => {
  let movieList = ['The Pursuit of Happyness', 'The Blind Side', 'Braveheart', 'Cinderella Man', 'Unbroken']
  res.status(200).send(movieList)
})


app.get('/api/places', ctrl.getPlaces)
app.post('/api/places', ctrl.createPlace)
app.put('/api/places/:id', ctrl.updatePlace)
app.delete('/api/places/:id', ctrl.deletePlace)


app.listen(4000, () => console.log("Server running on 4000"));
