
// require("dotenv").config()
// const express = require("express")
// const app = express()
// const PORT = 3000
// const Fruit = require("./models/fruits")
// const reactViews = require('express-react-views')
// const mongoose = require("mongoose")


// mongoose.connect(process.env.MONGO_URI,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// mongoose.connection.once("open",() => {
//   console.log("connected to mongo")
// })


// app.set("view engine", "jsx")
// app.engine("jsx", reactViews.createEngine())

// app.use((req, res, next) => {
//   console.log("Im running for all routes")
//   console.log("1. middleware")
//   next()
// })

// app.use(express.urlencoded({extended: false}))



// app.get("/fruits", (req, res) => {
//   Fruit.find({}, (error, allFruits) => {
//     if (!error) {
//       res.status(200).render("fruits/Index", {
//         fruits: allFruits
//       })
//     } else {
//       res.status(400).send(error)
//     }
//   })
// })

// app.get("/fruits/new", (req, res) => {
//   console.log("2. controller")
//   res.render("fruits/New")
// })

// app.post("/fruits", (req, res) => {
//   console.log("2. controller")
//   if (req.body.readyToEat === "on"){
//     req.body.readyToEat = true
//   } else {
//     req.body.readyToEat = false
//   }
//   Fruit.create(req.body, (error, createdFruit) => {
//     if (!error) {
//       // redirects after creating fruit, to the Index page********
//       res.status(200).redirect("/fruits")
//     } else {
//       res.status(400).send(error)
//     }
//   })
// })



// app.get("/fruits/:id", (req, res) => {
//   Fruit.findById(req.params.id, (error, foundFruit) => {
//     if (!error) {
//       res
//         .status(200)
//         .render("fruits/Show", {
//           fruit: foundFruit
//         })
//     } else {
//       res
//         .status(400)
//         .send(error)
//     }
//   })
// })



// app.listen(PORT, () => { 
//   console.log(`Listening on port: ${PORT}`)
// });

// // //  Veggies
// // app.get("/vegetables", (req, res) => {
// //     res.render("vegetables/Index", {vegetables: vegetables});
// // });

// // app.get("/vegetables/new", (req, res) => {
// //     res.render("vegetables/New");
// // });

// // // app.post("/vegetables/", (req, res) => {
// // //     if(req.body.readyToEat === "on") {
// // //         req.body.readyToEat = true;
// // //     } else {
// // //         req.body.readyToEat = false;
// // //     }
// // //     vegetables.push(req.body);
// // //     res.redirect("/vegetables");
// // // });

// // // app.get("/vegetables/:indexOfVegetables", (req, res) => {
// // //     res.render("vegetables/Show", vegetables[req.params.indexOfVegetables]);
// // // });



// // // app.listen(PORT, () => {
// // //     console.log(`Listening on port: ${PORT}`);
// // // });






require("dotenv").config();
const express    = require("express");
const app        = express();
const port       = 3000;
const Pokemon    = require("./models/pokemon");
const reactViews = require("express-react-views");
const mongoose = require("mongoose");



mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});




app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());


app.use((req, res, next) => {
    next();
});

app.use(express.urlencoded({extended:false}));


app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>" + 
             '<a href="/pokemon/">Pokemon Index</a>');
});

app.get("/pokemon", (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        if(!error) {
            res.status(200).render("pokemon/Index", {
                pokemon: allPokemon
            });
        } else {
            res.status(400).send(error);
        }
    });
//     res.render('pokemon/Index',{pokemon})
  });

app.get("/pokemon/new", (req, res) => {
    res.render("pokemon/New");
});


app.post("/pokemon", (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        if(!error) {
            res.status(200).redirect("/pokemon");
        } else {
            res.status(400).send(error);
        }
    });
});


app.get("/pokemon/:id", (req, res) => {
    Pokemon.findById(req.params.id, (error, foundPokemon) => {
        if(!error) {
            res.status(200).render("pokemon/Show", {
                pokemon: foundPokemon
            });
        } else {
            res.status(400).send(error);
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});