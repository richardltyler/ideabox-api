// const express = require('express');
// const app = express();
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = "Idea Box";

app.get('/', (request, response) => {
  response.send('sah dude')
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})