const ideas = require('./data/ideas.js');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
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
  const newIdea = request.body;
  const match = app.locals.ideas.find(idea => idea.id === newIdea.id);
  if (match) return response.status(404).json({ message: 'That idea already exists.'});

  app.locals.ideas.push(newIdea);

  response.json(newIdea);
});

app.delete('/api/v1/ideas/:id', (request, response) => {
  const { id } = request.params;
  const match = app.locals.ideas.find(idea => idea.id == id);
  if (!match) return response.status(404).json({ message: `No idea found with an id of ${id}`});

  const filteredIdeas = app.locals.ideas.filter(idea => idea.id != id);
  app.locals.ideas = filteredIdeas;

  return response.sendStatus(204).json({ id });
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})