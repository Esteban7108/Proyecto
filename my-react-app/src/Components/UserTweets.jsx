import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const UserTweets = () => {
  const [tweets, setTweets] = useState([]);
  const [editingTweet, setEditingTweet] = useState(null);
  const [editContent, setEditContent] = useState('');
  const userId = localStorage.getItem('userId'); // Obtener el userId de localStorage

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get(`https://back-avances-phi.vercel.app/tweets/${userId}`);
        setTweets(response.data);
      } catch (error) {
        console.error('Error fetching user tweets:', error);
      }
    };

    fetchTweets();
  }, [userId]);

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Fecha no disponible';
    let date;
    if (typeof timestamp === 'object' && timestamp._seconds) {
      date = new Date(timestamp._seconds * 1000);
    } else {
      date = new Date(timestamp);
    }
    if (isNaN(date)) return 'Fecha no disponible';
    return format(date, 'PPpp');
  };

  const handleEditClick = (tweet) => {
    setEditingTweet(tweet);
    setEditContent(tweet.tweet);
  };

  const handleSaveClick = async () => {
    try {
      const updatedTweet = { tweet: editContent, userId };
      await axios.put(`https://back-avances-phi.vercel.app/tweets/${editingTweet.id}`, updatedTweet);
      setTweets(tweets.map(tweet => (tweet.id === editingTweet.id ? { ...tweet, tweet: editContent } : tweet)));
      setEditingTweet(null);
      setEditContent('');
    } catch (error) {
      console.error('Error updating tweet:', error);
    }
  };

  const handleCancelClick = () => {
    setEditingTweet(null);
    setEditContent('');
  };

  const handleDeleteClick = async (tweetId) => {
    try {
      await axios.delete(`https://back-avances-phi.vercel.app/tweets/${tweetId}`, { data: { userId } });
      setTweets(tweets.filter(tweet => tweet.id !== tweetId));
    } catch (error) {
      console.error('Error deleting tweet:', error);
    }
  };

  return (
    <div className='flex flex-col gap-8'>
      {tweets.map(tweet => (
        <div key={tweet.id}>
          <div className='flex flex-col gap-5 border-2 bg-white rounded-lg'>
            <div className='p-2 flex justify-between'>
              <div>
                <br></br>
                {editingTweet?.id === tweet.id ? (
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                ) : (
                  <p>{tweet.tweet}</p>
                )}
              </div>
              <div className='flex'>
                <p className='text-sm text-gray-500'>{formatDate(tweet.timestamp)}</p>
              </div>
            </div>
            <div className='flex gap-80 bg-blue-200 w-100'>
              <p>@{tweet.userName}</p>
              <div className='flex gap-2'>
                {tweet.userId === userId && (
                  <>
                    {editingTweet?.id === tweet.id ? (
                      <>
                        <button onClick={handleSaveClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Guardar</button>
                        <button onClick={handleCancelClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Cancelar</button>
                      </>
                    ) : (
                      <button onClick={() => handleEditClick(tweet)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Editar</button>
                    )}
                    <svg className="h-6 w-6 text-neutral-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => handleDeleteClick(tweet.id)}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTweets;
