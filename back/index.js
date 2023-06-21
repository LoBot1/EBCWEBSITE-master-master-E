var cors = require('cors')
const multer = require("multer")
const path = require("path")
const express = require("express");
const app = express();
app.use(cors())
const port = 4444;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const { Sequelize } = require('sequelize');
var fs = require('fs');
require("dotenv").config()

// // pour requête sql
// const mysql = require('mysql');
// const con = mysql.createConnection({ host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD, database: process.env.DATABASE });

// //pour requête sequelize
// const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
//   host: process.env.HOST,
//   dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });
// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

// pour requête sql
const mysql = require('mysql');
const con = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "basket_bdd" });

//pour requête sequelize
const sequelize = new Sequelize("basket_bdd", "root", "root", {
  host: "localhost",
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


app.get("/", function (req, res) {
  res.send("Hello World!");
});

// Stripe 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

var initModels = require("./models/init-models");
var models = initModels(sequelize);

// CRUD user
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/user/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.user.create
      ({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        email: req.body.email,
        phone_number: req.body.phone_number,
        city: req.body.city,
        postal_code: req.body.postal_code,
        adress: req.body.adress,
        apartment: req.body.apartment,
        banking_information: req.body.banking_information,
        admin: req.body.admin,
        coach: req.body.coach,
        reservation: req.body.reservation
      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/user/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.user.findAll({});
    res.send(body)
  })();
});

app.post("/user/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.user.update
      ({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        email: req.body.email,
        phone_number: req.body.phone_number,
        city: req.body.city,
        postal_code: req.body.postal_code,
        adress: req.body.adress,
        apartment: req.body.apartment,
        banking_information: req.body.banking_information,
        admin: req.body.admin,
        coach: req.body.coach,
        reservation: req.body.reservation
      },
        {
          where: {
            id: req.body.id
          }
        })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/user/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.user.destroy({
      where: {
        id: req.body.id
      }
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

// requête sql pour avoir les email des users
app.get("/user/info_email", function (req, res) {
  con.query("SELECT `email` FROM `user`",
  function(err, results, fields) {
    if(err) throw err;
    res.send(JSON.stringify(results))
     
  });
});

// CRUD reservation
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/reservation/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.reservation.create
      ({
        coach_name: req.body.coach_name,
        place: req.body.place,
        start_date: req.body.start_date,
        finish_date: req.body.finish_date,
        category: req.body.category,
        price: req.body.price,
        desc: req.body.desc,
        desc2: req.body.desc2,
        avaible: req.body.avaible,
        mainImage: req.body.mainImage,
        image1: req.body.image1,
        image2: req.body.image2,
        image3: req.body.image3,
        video: req.body.video
      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

// app.get("/reservation/list", function (req, res) {
//   (async () => {
//     await sequelize.sync();
//     const body = await models.reservation.findAll({});
//     res.send(body)
//   })();
// });


// requête sql pour avoir les reservations 
app.get("/reservation/list", function (req, res) {
  con.query("SELECT * FROM `reservation`",
  function(err, results, fields) {
    if(err) throw err;
    res.send(JSON.stringify(results))
     
  });
});

app.post("/reservation/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.reservation.update
      ({
        coach_name: req.body.coach_name,
        place: req.body.place,
        start_date: req.body.start_date,
        finish_date: req.body.finish_date,
        category: req.body.category,
        price: req.body.price,
        desc: req.body.desc,
        desc2: req.body.desc2,
        avaible: req.body.avaible,
        mainImage: req.body.mainImage,
        image1: req.body.image1,
        image2: req.body.image2,
        image3: req.body.image3,
        video: req.body.video
      },
        {
          where: {
            id: req.body.id
          }
        })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/reservation/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.reservation.destroy({
      where: {
        id: req.body.id
      }
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

// requête sql pour avoir les dates des reservations 
app.get("/reservation/info_date", function (req, res) {
  con.query("SELECT start_date FROM `reservation` GROUP BY start_date",
  function(err, results, fields) {
    if(err) throw err;
    res.send(JSON.stringify(results))
     
  });
});

// requête sql pour avoir les endroits des reservations 
app.get("/reservation/info_place", function (req, res) {
  con.query("SELECT place FROM `reservation` GROUP BY place",
  function(err, results, fields) {
    if(err) throw err;
    res.send(JSON.stringify(results))
     
  });
});

// requête sql pour avoir les endroits des reservations 
app.get("/reservation/info_category", function (req, res) {
  con.query("SELECT category FROM `reservation` GROUP BY category",
  function(err, results, fields) {
    if(err) throw err;
    res.send(JSON.stringify(results))
     
  });
});


// CRUD user_resa
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/user_resa/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.user_resa.create
      ({
        user_id: req.body.user_id,
        reservation_id: req.body.reservation_id,
        registered_first_name: req.body.registered_first_name,
        registered_last_name: req.body.registered_last_name, 
        age: req.body.age, 
        licence: req.body.licence, 
        email: req.body.email,
        urgency_number: req.body.urgency_number

      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/user_resa/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.user_resa.findAll({});
    res.send(body)
  })();
});

app.post("/user_resa/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.user_resa.update
      ({
        user_id: req.body.user_id,
        reservation_id: req.body.reservation_id,
        registered_first_name: req.body.registered_first_name,
        registered_last_name: req.body.registered_last_name, 
        age: req.body.age, 
        licence: req.body.licence, 
        email: req.body.email,
        urgency_number: req.body.urgency_number
      },
        {
          where: {
            id: req.body.id
          }
        })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/user_resa/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.user_resa.destroy({
      where: {
        id: req.body.id
      }
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

// requête sql pour avoir les reservation dans la liste des réservation des utilisateurs 
app.get("/user_resa/info", function (req, res) {
  con.query("SELECT user_resa.id, user_resa.reservation_id, reservation.coach_name, reservation.place, reservation.category, reservation.desc, reservation.price, reservation.start_date, reservation.finish_date, reservation.avaible, reservation.mainImage, reservation.image1, reservation.image2, reservation.image3, reservation.video, user_resa.registered_first_name, user_resa.registered_last_name,  user_resa.age,  user_resa.licence,  user_resa.email FROM `user_resa` JOIN `reservation` on user_resa.reservation_id = reservation.id JOIN `user` on user_resa.user_id = user.id ",
  function(err, results, fields) {
    if(err) throw err;
    res.send(JSON.stringify(results))
     
  });
});

// requête sql pour avoir les reservation dans la liste des réservation des utilisateurs pour les admin par date croissante 
app.get("/user_resa/admin_info", function (req, res) {
  con.query("SELECT user_resa.registered_first_name, user_resa.registered_first_name, user_resa.age, user_resa.licence, user_resa.email, user_resa.urgency_number, reservation.desc, reservation.place, reservation.start_date, reservation.finish_date, reservation.category, reservation.coach_name, reservation.mainImage, reservation.image1, reservation.image2, reservation.image3, reservation.video FROM `user_resa` JOIN `user` on user_resa.user_id = user.id JOIN `reservation` ON user_resa.reservation_id = reservation.id WHERE user.reservation = 1 order by reservation.start_date ASC",
  function(err, results, fields) {
    if(err) throw err;
    res.send(JSON.stringify(results))
     
  });
});


// CRUD bag
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/bag/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.bag.create
      ({
        user_id: req.body.user_id,
        reservation_id: req.body.reservation_id
      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/bag/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.bag.findAll({});
    res.send(body)
  })();
});

app.post("/bag/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.bag.update
      ({
        user_id: req.body.user_id,
        reservation_id: req.body.reservation_id
      },
        {
          where: {
            id: req.body.id
          }
        })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/bag/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.bag.destroy({
      where: {
        id: req.body.id
      }
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});


// requête sql pour avoir les reservation dans le sac pour chaque utilisateur
app.get("/bag/info", function (req, res) {
  con.query("SELECT bag.id, bag.reservation_id, reservation.coach_name, reservation.place, reservation.category,  reservation.desc, reservation.price, reservation.start_date, reservation.finish_date, reservation.avaible, reservation.mainImage, reservation.image1, reservation.image2, reservation.image3, reservation.video FROM `bag` JOIN `reservation` on bag.reservation_id = reservation.id JOIN `user` on bag.user_id = user.id ", 
  function(err, results, fields) {
    if(err) throw err;
    res.send(JSON.stringify(results))
     
  });
});



app.use(bodyParser.urlencoded({ extended: true }));
app.post("/condition/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.condition.create
      ({
        name: req.body.name,
        desc: req.body.desc
      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/condition/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.condition.findAll({});
    res.send(body)
  })();
});

app.post("/condition/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.condition.update
      ({
        name: req.body.name,
        desc: req.body.desc
      },
        {
          where: {
            id: req.body.id
          }
        })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/condition/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.condition.destroy({
      where: {
        id: req.body.id
      }
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

// CRUD coach_profile
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/coach_profile/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.coach_profile.create
      ({
        user_id: req.body.user_id,
        coach_name: req.body.coach_name,
        desc: req.body.desc
      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/coach_profile/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.coach_profile.findAll({});
    res.send(body)
  })();
});

app.post("/coach_profile/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.coach_profile.update
      ({
        user_id: req.body.user_id,
        coach_name: req.body.coach_name,
        desc: req.body.desc
      },
        {
          where: {
            id: req.body.id
          }
        })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/coach_profile/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.coach_profile.destroy({
      where: {
        id: req.body.id
      }
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

// requête sql pour avoir la liste des user ayant un coach_profil
app.get("/coach_profile/info", function (req, res) {
con.query("SELECT user.id FROM `user` JOIN `coach_profile` ON user.id = coach_profile.user_id where user.coach = 1" ,
function(err, results, fields) {
  if(err) throw err;
  console.log(results)
  res.send(JSON.stringify(results))
   
});
});


// CRUD news
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/news/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.news.create
      ({
        img: req.body.img,
        desc: req.body.desc
      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/news/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.news.findAll({});
    res.send(body)
  })();
});

app.post("/news/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.news.update
      ({
        img: req.body.img,
        desc: req.body.desc
      },
        {
          where: {
            id: req.body.id
          }
        })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/news/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.news.destroy({
      where: {
        id: req.body.id
      }
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});


const storageFile = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../front/myapp/src/image/pictures")
  },
  filename: (req, file, cb) => {  
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  }
});

const uploadImageFile = multer ({
  storage: storageFile 
});

app.post("/upload/image/:id/:table/:param", (uploadImageFile.single("images")),  (req, res) => {
    const id = req.params.id
    const table = req.params.table
    const param = req.params.param
    const img = req.file.filename;
    const sql = "UPDATE " + table + " set " + param + " = ? Where id = " + id;
    con.query(sql, [img], (err, result) => {
      if (err) return res.json({Message : "Error"});
      return res.json({Status : "Success"});
    });
});

app.post("/delete/file/:file", jsonParser,   (req, res) => {
  const fileToDelete = req.params.file
  fs.unlinkSync("../front/myapp/src/image/pictures/" + fileToDelete)
  res.send('file removed');
});

