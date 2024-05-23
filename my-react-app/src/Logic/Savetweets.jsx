import axios from 'axios';

const Savetweets = async (tweetData) => {
  try {
    console.log('Sending tweet data:', tweetData);
    const response = await axios.post('http://localhost:3000/tweets', tweetData);
    return response.data;
  } catch (error) {
    console.error('Error posting tweet:', error);
    throw new Error('Error posting tweet');
  }
};

export default Savetweets;
