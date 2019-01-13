import axios from 'axios';

const a = axios.create({
  baseURL: 'http://localhost:8080/issues'
});

export default {
  // ---- searchTwitter ---- //
  // CallTwitter.searchTwitter('to:Intuit', 20)
  // .then(tweets => console.log(tweets));
  // .catch(err => console.log(err));
  searchTwitter: async (searchTerm, count) => {
    const tweets = await a.get(`/tweets`, { params: { searchTerm, count } });
    return tweets.data.statuses;
  },
  // ---- getStatuses --- //
  // CallTwitter.getStatuses('IntuitDevStatus', 20)
  //   .then(statuses => console.log(statuses.data))
  //   .catch(err => console.log(err));
  getStatuses: async (screenName, count) => {
    const statuses = await a.get('/userTimeline', {
      params: { screenName: screenName, count: count }
    });
    return statuses;
  }
};
