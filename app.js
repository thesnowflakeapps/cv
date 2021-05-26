const express = require('express')
const app = express()
const port = 3000

const products = [
{
  id: 1,
  name: "Ivanhoe",
  author: "Sir Walter Scott",
},
{
  id: 2,
  name: "Colour Magic",
  author: "Terry Pratchett",
},
{
  id: 3,
  name: "The Bluest eye",
  author: "Toni Morrison",
},
];


const league = [
    {
      id: 1,
      name: "Montreal",
      team: "Canadiens",
      captain: "Shea Weber",
      goalie: "Carie Price",
    },
    {
        id: 2,
        name: "Toronto",
        team: "Maple Leafs",
        captain: "John Tavares",
        goalie: "Jack Campbell",
      },
        {
            id: 3,
            name: "Ottawa",
            team: "Senators",
            captain: "No Capatain",
            goalie: "Matt Murray",
          },

          {
            id: 4,
            name: "Edmonton",
            team: "Oilers",
            captain: "Connor McDavid",
            goalie: "Mike Smith",
          },
    ];

app.get('/', (req, res) => {
    // res.send('Hello API!')
    res.sendFile(__dirname + "/" + "index.html")
});

app.get("/products/:id", (req, res) => {
    res.json(products.find(p => p.id === +req.params.id));
});

app.get('/products', (req, res) => {
    const page = +req.query.page;
    const pageSize = +req.query.pageSize;
  
    if (page && pageSize) {
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      res.json(products.slice(start, end));
    } else {
      res.json(products);
    }
  })

app.get("/league/:id", (req, res) => {
    res.json(league.find(p => p.id === +req.params.id));
});

app.get('/league', (req, res) => {
    const page = +req.query.page;
    const pageSize = +req.query.pageSize;
  
    if (page && pageSize) {
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      res.json(league.slice(start, end));
    } else {
      res.json(league);
    }
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// app.get('/', (req, res) => res.send('Hello World!'));

// // Adds a new Route 

// app.get("/products", (req,res) => {
//     const products = [
//     {
//       id: 1,
//       name: "hammer",
//     },
//     {
//       id: 2,
//       name: "screwdriver",
//     },
//     ,
//     {
//       id: 3,
//       name: "wrench",
//     },
//    ];
  
//    res.json(products);
//   });






// // 
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
