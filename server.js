// const express = require('express');
// const app = express();
const ideas = require('./ideas.js');
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
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})