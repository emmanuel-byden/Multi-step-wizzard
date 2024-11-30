import React from 'react';
import { useForm } from 'react-hook-form';

const PersonalInfo = ({ formData, setFormData, nextStep }) => {
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
        Name:
        <input
          type="text"
          name="name"
          ref={register({ required: true })}
        />
        {errors.name && <p>This field is required</p>}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && <p>This field is required</p>}
      </label>
      <button type="submit">Next</button>
    </form>
  );
};

export default PersonalInfo;
