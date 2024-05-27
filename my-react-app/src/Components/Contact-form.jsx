import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactForm() {
  const [user, setUser] = useState(null);
  const [editableUserId, setEditableUserId] = useState(null);
  const [editableValues, setEditableValues] = useState({ firstName: '', lastName: '', password: '' });
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          throw new Error('User ID not found');
        }

        const response = await axios.get(`http://localhost:3000/edit-contact/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  const handleEditClick = (userData) => {
    setEditableUserId(userData.id);
    setEditableValues({ firstName: userData.firstName, lastName: userData.lastName, password: userData.password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async (userId) => {
    try {
      const updatedUser = { ...user, ...editableValues };
      await axios.put(`http://localhost:3000/update-contact/${userId}`, updatedUser); // Asegúrate de que esta ruta exista en tu backend
      setUser(updatedUser);
      setEditableUserId(null);
      setPasswordVisible(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='w-full dark:text-white'>
      {user && (
        <div>
          <div className='flex gap-20 justify-center'>
            <div className='flex gap-2'>
              <div className='flex p-7 border-4 rounded-xl'>
                <div className='flex gap-10'>
                  <p className='flex text-4xl'>Name:</p>
                  {editableUserId === user.id ? (
                    <input
                      type='text'
                      name='firstName'
                      value={editableValues.firstName}
                      onChange={handleChange}
                      className='text-4xl w-48 h-12 p-2'
                    />
                  ) : (
                    <p className='text-4xl'>{user.firstName}</p>
                  )}
                  <button onClick={() => handleEditClick(user)}>
                    <svg className="h-8 w-8 text-blue-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='flex p-7 border-4 rounded-xl'>
                <div className='flex gap-10'>
                  <p className='flex text-4xl'>Last Name:</p>
                  {editableUserId === user.id ? (
                    <input
                      type='text'
                      name='lastName'
                      value={editableValues.lastName}
                      onChange={handleChange}
                      className='text-4xl w-48 h-12 p-2'
                    />
                  ) : (
                    <p className='text-4xl'>{user.lastName}</p>
                  )}
                  <button onClick={() => handleEditClick(user)}>
                    <svg className="h-8 w-8 text-blue-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className='flex gap-20 justify-center'>
            <div className='flex p-7 border-4 rounded-xl'>
              <p className='flex text-4xl'>Email: {user.email}</p>
            </div>
          </div>
          <br />
          <div className='flex gap-20 justify-center'>
            <div className='flex p-7 border-4 rounded-xl'>
              <label className='flex text-4xl '>Password:</label>
              <div className='flex items-center gap-2'>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name='password'
                  value={user.password}
                  className='text-4xl w-48 h-12 p-2 dark:bg-gray-900 '
                  readOnly
                />
                <button onClick={togglePasswordVisibility}>
                  <svg className="h-8 w-8 text-blue-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M22 12c-2 -4.5 -5.5 -8 -10 -8s-8 3.5 -10 8s3.5 8 8 8s8 -3.5 10 -8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {editableUserId === user.id && (
            <div className='flex gap-20 justify-center mt-4'>
              <button onClick={() => handleSave(user.id)} className='p-2 bg-blue-500 text-white rounded w-32 h-12'>
                Save
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ContactForm;
