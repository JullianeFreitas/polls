const Person = require("../model/personModel");

module.exports = async function postPerson(req, res) {
  await Person.create({
    name: req.body.name,
    role: req.body.role,
  })
    .then(function (item) {
      res.json({
        Message: "Created person.",
        Item: item,
      });
      res.status(201);
    })
    .catch(function (err) {
      res.json({
        Message: "Error creating person",
        Error: err,
      });
      res.status(400);
    });

  res.send();
};

