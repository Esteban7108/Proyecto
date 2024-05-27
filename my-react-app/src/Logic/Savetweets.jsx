import axios from 'axios';

const Savetweets = async (tweetData) => {
  try {
    const response = await axios.post('https://back-avances-phi.vercel.app/tweets', tweetData);
    console.log('Tweet posted successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error posting tweet:', error);
    throw error;
  }
};

export default Savetweets;
