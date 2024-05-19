import axios from 'axios';

const Savetweets = async (tweetText) => {
  try {
    const response = await axios.post('http://localhost:3000/tweets', { tweet: tweetText });
    return response.data;
  } catch (error) {
    throw new Error('Error posting tweet');
  }
};

export default Savetweets;
