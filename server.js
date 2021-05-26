const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {
        id: 1, 
        name: 'Course 1'
    },
    {
        id: 2, 
        name: 'Course 2'
    },
    {
        id: 3, 
        name: 'Course 3'
    }
]

app.get('/', function(req, res) {
    res.send("Hello World");
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
})

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
})

app.get('/api/courses/:id', (req, res) => {
   const course = courses.find(c => c.id == parseInt(req.params.id))
   if (!course) res.status(404).send("the courses was not given the right id")
   res.send(course);

})
// PORT 
const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Listening on port' + {port})});