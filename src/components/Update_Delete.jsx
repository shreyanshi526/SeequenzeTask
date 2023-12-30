import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { cardIdState } from '../recoilState.jsx';
import blackCancel from '../assets/black-cancel.png'

const Update_Delete = () => {
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // Retrieve cardId from session storage on component mount
  const storedCardId = sessionStorage.getItem('storedCardId');
  const cardId =  useRecoilValue(cardIdState) || storedCardId;

  const handleclose = () => {
    navigate('/user-image')
  }

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        if (!cardId) {
          // If cardId is not available, navigate back to User-Image
          navigate('/user-image');
          return;
        }

        const response = await axios.get(`http://localhost:5000/user/${cardId}`);
        setCard(response.data);
      } catch (error) {
        console.error('Error fetching card details:', error);
      }
    };

    fetchCardDetails();
  }, [cardId, navigate]);

  const handleUpdate = async () => {
    try {
      // Perform the update
      const response = await axios.put(`http://localhost:5000/user/updateCard/${card._id}`, {
        title: card.title,
        description: card.description,
        author: card.author,
        imgurl: card.imgurl,
        ClickedDate: card.ClickedDate,
      });

      if (response.data.updatedCard) {
        console.log('Card successfully updated:', response.data.updatedCard);
        setEditMode(false); // Exit edit mode after update
        // Navigate back to '/user-image'
        navigate('/user-image');
        // Clear stored cardId
        sessionStorage.removeItem('storedCardId');
      } else {
        console.error('Failed to update card:', response.data.message);
      }
    } catch (error) {
      console.error('Error updating card:', error);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this image?');

    if (confirmDelete) {
      // User confirmed deletion
      try {
        // Perform the deletion
        const response = await axios.delete(`http://localhost:5000/user/deleteCard/${card._id}`);

        if (response.data.message === 'Card successfully deleted') {
          console.log('Card successfully deleted:', response.data.message);
          // After deletion, navigate back to '/user-image'
          navigate('/user-image');
          // Clear stored cardId
          sessionStorage.removeItem('storedCardId');
        } else {
          console.error('Failed to delete card:', response.data.message);
        }
      } catch (error) {
        console.error('Error deleting card:', error);
      }
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const renderField = (label, value, field) => (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">{label}</label>
        {editMode ? (
          <input
            type="text"
            value={card[field]}
            onChange={(e) => setCard({ ...card, [field]: e.target.value })}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${field === 'imgurl' ? 'max-w-full' : ''}`}
          />
        ) : (
          <div className={`text-gray-800 ${field === 'imgurl' ? 'truncate max-w-full' : 'max-w-xs'}`}>
            {value}
          </div>
        )}
      </div>
    </div>
  );

  useEffect(() => {
    // Store cardId in sessionStorage on component mount
    if (cardId && !storedCardId) {
      sessionStorage.setItem('storedCardId', cardId);
    }
  }, [cardId, storedCardId]);

  return (
    <>
      <div className='w-full h-full bg-bg-grey'>
        <div className="max-w-md mx-auto p-4  ">
          {card ? (
            <div className="bg-white rounded-md shadow-xl p-6 mt-9 flex flex-col ">
              <img src={blackCancel} onClick={handleclose} className='w-5 h-5 self-end -mt-3'></img>
              <h2 className="text-2xl font-bold mb-4">Update & Delete</h2>
              {renderField('Image URL', card.imgurl, 'imgurl')}
              {renderField('Title', card.title, 'title')}
              {renderField('Description', card.description, 'description')}
              {renderField('Author', card.author, 'author')}
              {renderField('Clicked Date', card.ClickedDate, 'ClickedDate')}
              <div className="flex space-x-4 mt-6">
                {editMode ? (
                  <button
                    onClick={handleUpdate}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={handleEdit}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-600">Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Update_Delete;
