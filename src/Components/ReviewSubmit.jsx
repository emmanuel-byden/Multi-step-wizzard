import React from 'react';

const ReviewSubmit = ({ formData, prevStep, handleSubmit }) => (
  <div>
    <h2>Review Your Details</h2>
    <p>Name: {formData.name}</p>
    <p>Email: {formData.email}</p>
    <p>Address: {formData.address}</p>
    <p>Phone: {formData.phone}</p>
    <p>Preferences: {formData.preference1 ? 'Option 1 ' : ''}{formData.preference2 ? 'Option 2' : ''}</p>
    <button type="button" onClick={prevStep}>Previous</button>
    <button onClick={handleSubmit}>Submit</button>
  </div>
);

export default ReviewSubmit;
