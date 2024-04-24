'use client';

import { useForm } from 'react-hook-form';

export const SimpleFormTest = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('testField')} />
      <button
        type='submit'
        className={'text-black'}>
        Test Submit
      </button>
    </form>
  );
};
