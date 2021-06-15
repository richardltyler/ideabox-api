# Ideabox API

This app is the back-end server for [Vue-Ideabox](https://github.com/richardltyler/vue-ideabox). It stores ideas using only Express.js. 

## Getting Started 
  1. Clone down this repository 
    - `git clone git@github.com:richardltyler/ideabox-api.git`
  2. Change into this directory 
    - `cd ideabox-api`
  3. Install dependencies 
    - `npm install`
  4. Fire it up 
    - run `node server.js`

### Endpoints

| url | verb | options | sample response |
| ----|------|---------|-----------------|
|`http://localhost:3000/api/v1/ideas` | GET | not needed | object with key of 'ideas' and value is array of idea objects: <br>`{ ideas: [{ id: 1, title: 'a resume that gets you a job', description: 'just write \'please dear god hire me\' over and over again' }] }`
|`http://localhost:3000/api/v1/ideas` | POST | `{id: <Number>, title: <String>, description: <String>}` | the idea that you posted: <br>`id: 1, title: 'a resume that gets you a job', description: 'just write \'please dear god hire me\' over and over again'`
|`http://localhost:3000/api/v1/ideas/:id` | DELETE | not needed | No response body is sent. Just the status. |