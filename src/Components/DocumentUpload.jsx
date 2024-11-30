import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const DocumentUpload = ({ formData, setFormData, nextStep, prevStep }) => {
  const [file, setFile] = useState(null);
  const { register, handleSubmit } = useForm({
    defaultValues: formData
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data, file });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" onChange={handleFileChange} ref={register} />
      <button type="button" onClick={prevStep}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default DocumentUpload;
