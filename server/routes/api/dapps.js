const Dapp = require('../../models/Dapp');

module.exports = (app) => {
  app.get('/api/dapps', (req, res, next) => {
    Dapp.find()
      .exec()
      .then((dapps) => res.json(dapps))
      .catch((err) => next(err));
  });

  app.post('/api/dapps',  (req, res, next) => {
    const dapp = new Dapp({
        rank: req.body.rank,
        name: req.body.name,
        usage: req.body.usage
    })
        
    dapp.save()
      .then(() => res.json(dapp))
      .catch((err) => next(err));
  });

//   app.delete('/api/counters/:id',  (req, res, next) => {
//     Counter.findOneAndRemove({ _id: req.params.id })
//       .exec()
//       .then((counter) => res.json())
//       .catch((err) => next(err));
//   });

//   app.put('/api/counters/:id/increment', (req, res, next) => {
//     Counter.findById(req.params.id)
//       .exec()
//       .then((counter) => {
//         counter.count++;

//         counter.save()
//           .then(() => res.json(counter))
//           .catch((err) => next(err));
//       })
//       .catch((err) => next(err));
//   });

//   app.put('/api/counters/:id/decrement', (req, res, next) => {
//     Counter.findById(req.params.id)
//       .exec()
//       .then((counter) => {
//         counter.count--;

//         counter.save()
//           .then(() => res.json(counter))
//           .catch((err) => next(err));
//       })
//       .catch((err) => next(err));
//   });
};
