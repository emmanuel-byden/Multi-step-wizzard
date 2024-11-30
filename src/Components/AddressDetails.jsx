import React from 'react';
import { useForm } from 'react-hook-form';

const AddressDetails = ({ formData, setFormData, nextStep, prevStep }) => {
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
        Address:
        <input
          type="text"
          name="address"
          ref={register({ required: true })}
        />
        {errors.address && <p>This field is required</p>}
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          ref={register({ required: true })}
        />
        {errors.phone && <p>This field is required</p>}
      </label>
      <button type="button" onClick={prevStep}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default AddressDetails;
