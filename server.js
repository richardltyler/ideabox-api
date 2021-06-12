// const express = require('express');
// const app = express();
const ideas = require('./data/ideas.js');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = "Idea Box";
app.locals.ideas = ideas;

app.get('/', (request, response) => {
  response.send('sah dude')
});

app.get('/api/v1/ideas', (request, response) => {
  const ideas = app.locals.ideas;

  response.json({ ideas })
});

app.post('/api/v1/ideas', (request, response) => {
  console.log('this', request.body)
  const newIdea = request.body;

  app.locals.ideas.push(newIdea);

  response.status(201).json(newIdea)
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})