export default [
  {
    Operator: 'watching now',
    Finds: 'containing both “watching” and “now”. This is the default operator.'
  },
  {
    Operator: '“happy hour”',
    Finds: 'containing the exact phrase “happy hour”.'
  },
  {
    Operator: 'love OR hate',
    Finds: 'containing either “love” or “hate” (or both).'
  },
  {
    Operator: 'beer -root',
    Finds: 'containing “beer” but not “root”.'
  },
  {
    Operator: '#haiku',
    Finds: 'containing the hashtag “haiku”.'
  },
  {
    Operator: 'from:interior',
    Finds: 'sent from Twitter account “interior”.'
  },
  {
    Operator: 'list:NASA/astronauts-in-space-now',
    Finds:
      'sent from a Twitter account in the NASA list astronauts-in-space-now'
  },
  {
    Operator: 'to:NASA',
    Finds: 'a Tweet authored in reply to Twitter account “NASA”.'
  },
  {
    Operator: '@NASA',
    Finds: 'mentioning Twitter account “NASA”.'
  },
  {
    Operator: 'politics filter:safe',
    Finds:
      'containing “politics” with Tweets marked as potentially sensitive removed.'
  },
  {
    Operator: 'puppy filter:media',
    Finds: 'containing “puppy” and an image or video.'
  },
  {
    Operator: 'puppy -filter:retweets',
    Finds: 'containing “puppy”, filtering out retweets'
  },
  {
    Operator: 'puppy filter:native_video',
    Finds:
      'containing “puppy” and an uploaded video, Amplify video, Periscope, or Vine.'
  },
  {
    Operator: 'puppy filter:periscope',
    Finds: 'containing “puppy” and a Periscope video URL.'
  },
  {
    Operator: 'puppy filter:vine',
    Finds: 'containing “puppy” and a Vine.'
  },
  {
    Operator: 'puppy filter:images',
    Finds:
      'containing “puppy” and links identified as photos, including third parties such as Instagram.'
  },
  {
    Operator: 'puppy filter:twimg',
    Finds:
      'containing “puppy” and a pic.twitter.com link representing one or more photos.'
  },
  {
    Operator: 'hilarious filter:links',
    Finds: 'containing “hilarious” and linking to URL.'
  },
  {
    Operator: 'puppy url:amazon',
    Finds:
      'containing “puppy” and a URL with the word “amazon” anywhere within it.'
  },
  {
    Operator: 'superhero since:2015-12-21',
    Finds:
      'containing “superhero” and sent since date “2015-12-21” (year-month-day).'
  },
  {
    Operator: 'puppy until:2015-12-21',
    Finds: 'containing “puppy” and sent before the date “2015-12-21”.'
  },
  {
    Operator: 'movie -scary :)',
    Finds: 'containing “movie”, but not “scary”, and with a positive attitude.'
  },
  {
    Operator: 'flight :(',
    Finds: 'containing “flight” and with a negative attitude.'
  },
  {
    Operator: 'traffic ?',
    Finds: 'containing “traffic” and asking a question.'
  }
];
