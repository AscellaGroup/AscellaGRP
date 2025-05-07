import React from 'react';
import { Field } from 'formik';

const FormInpt = ({ label, name, type = 'text' }) => {
  return (
    <div>
      <label htmlFor={name} className='text-black flexStart px-2 pb-1 montserrat'>{label}
        <span className='text-black px-1'> *</span>
      </label>
      <Field name={name}>
        {({ field, meta }) => (
          <div>
            <input
              {...field}
              type={type}
              className={`bg-transparent border-[1px] border-[#c0c2c6] ${meta.touched && meta.error ? 'border-red-500' : 'border-[#8E8E8E]'} text-white w-[220px] h-[45px] rounded-[12px] px-5 montserrat`}
            />
          </div>
        )}
      </Field>
    </div>
  );
};

export default FormInpt;