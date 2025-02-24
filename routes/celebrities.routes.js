const router = require("express").Router()
const Celebrity = require('./../models/Celebrity.model')

router.get("/celebrities", (req, res, next) => {
  Celebrity
    .find()
    .then(celebrities => {res.render('celebrities/celebrities', { celebrities })})
    .catch(err => console.error(err))
});

router.get('/celebrities/create', (req, res, next) => {
  res.render('celebrities/new-celebrity')
})

router.post('/celebrities/create', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body

  Celebrity
    .create(req.body)
    .then(() => res.redirect('/celebrities'))
    .catch(() => res.render('celebrities/new-celebrity'))
})


module.exports = router;