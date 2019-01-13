const express = require('express');
const router = express.Router();
const Twitter = require('twitter');
const _ = require('underscore');

var twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || 'jte8TWedv8MerfciqVTfbIkie',
  consumer_secret:
    process.env.TWITTER_CONSUMER_SECRET ||
    'j2r8zUs5O8jp5ANesTAORZTOFOKCZuAIij659U0zj5BLTvGyql',
  access_token_key:
    process.env.TWITTER_ACCESS_TOKEN_KEY ||
    '1534028156-WzOpbpd2BXZeJ2DTVmKkWGbM4Ew01uHclMdWVWE',
  access_token_secret:
    process.env.TWITTER_ACCESS_TOKEN_SECRET ||
    '8HQdd4rEIdZy4MadiFwLfjqYOsUONhkJR2kHP7Vkh3Lpg'
});

router.get('/tweets', (req, res, next) => {
  const url = '/search/tweets';

  const params = {
    q: req.query.searchTerm,
    count: req.query.count,
    lang: 'en'
  };

  twitterClient
    .get(url, params)
    .then(tweets => {
      res.status(200).json(tweets);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
});

router.get('/userTimeline', (req, res, next) => {
  if (_.isEmpty(req.query)) {
    error.status = 500;
    throw error();
  }

  const url = '/statuses/user_timeline.json';
  const params = {
    screen_name: req.query.screenName,
    count: req.query.count || 10
  };

  twitterClient
    .get(url, params)
    .then(statuses => {
      res.status(200).json(statuses);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
});

module.exports = router;
