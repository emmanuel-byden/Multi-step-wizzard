import React from 'react';
import { useForm } from 'react-hook-form';

const Preferences = ({ formData, setFormData, nextStep, prevStep }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: formData
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Preferences:
        <input
          type="checkbox"
          name="preference1"
          ref={register}
        />
        Option 1
        <input
          type="checkbox"
          name="preference2"
          ref={register}
        />
        Option 2
      </label>
      <button type="button" onClick={prevStep}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Preferences;
