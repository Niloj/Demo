const express = require('express');
const router = express.Router();
const axios = require('axios');
const a = axios.create({
  baseURL: 'https://api.stackexchange.com/2.2'
});
const testJson = require('./test.json');
const _ = require('underscore');

router.get('/questions', (req, res, next) => {
  console.log(req.query.tags);
  const params = {
    page: 1,
    pagesize: 3,
    order: 'desc',
    sort: 'votes',
    tagged: req.query.tags,
    site: 'stackoverflow',
    filter: 'withbody'
  };

  a.get('/search', { params })
    .then(response => response.data.items)
    .then(questions => {
      const suggestions = Object.assign(
        {},
        questions.map(q => {
          return {
            id: q.question_id,
            tags: q.tags.slice(0, 5),
            score: q.score,
            link: q.link,
            title: q.title,
            body: q.body
          };
        })
      );
      res.status(200).json(suggestions);
    })
    .catch(err => console.log(err));

  // sample Data b/c of overpulling api
  // const questions = _.toArray(testJson);
  // const suggestions = Object.assign(
  //   {},
  //   questions.map(q => {
  //     return {
  //       id: q.question_id,
  //       tags: q.tags.slice(0, 5),
  //       score: q.score,
  //       link: q.link,
  //       title: q.title,
  //       body: q.body
  //     };
  //   })
  // );

  // res
  //   .status(200)
  //   .json(suggestions)
  //   .catch(err => console.log(err));
  //end sample data
});

module.exports = router;
