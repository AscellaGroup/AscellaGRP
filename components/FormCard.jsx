import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, FormInpt } from '@/constant';

const validationSchema = Yup.object().shape({
  personName: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  businessName: Yup.string().required('Business name is required'),
  industry: Yup.string().required('Industry is required'),
  address: Yup.string().required('Registered Address is required'),
});

const FormCard = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [checkboxState, setCheckboxState] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });

  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleNext = (validateForm, values) => {
    validateForm().then(errors => {
      if (Object.keys(errors).length === 0) {
        setStep(prevStep => prevStep + 1);
      }
    });
  };

  const handleBack = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleCheckboxChange = (checkbox) => {
    setCheckboxState(prevState => ({
      ...prevState,
      [checkbox]: !prevState[checkbox],
    }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 mt-20">
      <div ref={formRef} className="bg-gradient-to-b from-[#15171D] to-[#040811] p-6 rounded-2xl shadow-lg w-[600px] max-h-[80vh] min-h-[500px] border-[1.2px] border-[#414141] flex flex-col overflow-y-auto">
        <h1 className='montserrat text-white text-[25px]'>Ascella for Startups</h1>

        <Formik
          initialValues={{
            personName: '',
            phone: '',
            email: '',
            businessName: '',
            industry: '',
            address: '',
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            checkbox5: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Form data', values);
          }}
        >
          {({ values, validateForm, handleSubmit }) => (
            <Form className="flex-grow">
              {step === 1 && (
                <>
                  <div className='lg:px-10 max-container mt-12'>
                    <div className='flex flex-row gap-10'>
                      <FormInpt label="Name" name="personName" />
                      <FormInpt label="Phone" name="phone" />
                    </div>
                    <div className='flex flex-row gap-10 mt-7'>
                      <FormInpt label="Email" name="email" />
                      <FormInpt label="Legal Business Name" name="businessName" />
                    </div>
                    <div className='flex flex-row gap-10 mt-7'>
                      <FormInpt label="Industry" name="industry" />
                      <FormInpt label="Registered Address" name="address" />
                    </div>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <div className='flex flex-col gap-4 mt-4'>
                    <label>
                      <Field
                        type="checkbox"
                        name="checkbox1"
                        checked={values.checkbox1}
                        onChange={() => handleCheckboxChange('checkbox1')}
                      />
                      Checkbox 1
                      {checkboxState.checkbox1 && (
                        <div className='ml-4 mt-2'>
                          <label className='block'>
                            <Field type="checkbox" name="nestedCheckbox1_1" />
                            Nested Checkbox 1.1
                          </label>
                          <label className='block'>
                            <Field type="checkbox" name="nestedCheckbox1_2" />
                            Nested Checkbox 1.2
                          </label>
                        </div>
                      )}
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="checkbox2"
                        checked={values.checkbox2}
                        onChange={() => handleCheckboxChange('checkbox2')}
                      />
                      Checkbox 2
                      {checkboxState.checkbox2 && (
                        <div className='ml-4 mt-2'>
                          <label className='block'>
                            <Field type="checkbox" name="nestedCheckbox2_1" />
                            Nested Checkbox 2.1
                          </label>
                          <label className='block'>
                            <Field type="checkbox" name="nestedCheckbox2_2" />
                            Nested Checkbox 2.2
                          </label>
                        </div>
                      )}
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="checkbox3"
                        checked={values.checkbox3}
                        onChange={() => handleCheckboxChange('checkbox3')}
                      />
                      Checkbox 3
                      {checkboxState.checkbox3 && (
                        <div className='ml-4 mt-2'>
                          <label className='block'>
                            <Field type="checkbox" name="nestedCheckbox3_1" />
                            Nested Checkbox 3.1
                          </label>
                          <label className='block'>
                            <Field type="checkbox" name="nestedCheckbox3_2" />
                            Nested Checkbox 3.2
                          </label>
                        </div>
                      )}
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="checkbox4"
                        checked={values.checkbox4}
                        onChange={() => handleCheckboxChange('checkbox4')}
                      />
                      Checkbox 4
                      {checkboxState.checkbox4 && (
                        <div className='ml-4 mt-2'>
                          <label className='block'>
                            <Field type="checkbox" name="nestedCheckbox4_1" />
                            Nested Checkbox 4.1
                          </label>
                          <label className='block'>
                            <Field type="checkbox" name="nestedCheckbox4_2" />
                            Nested Checkbox 4.2
                          </label>
                        </div>
                      )}
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="checkbox5"
                        checked={values.checkbox5}
                        onChange={() => handleCheckboxChange('checkbox5')}
                      />
                      Checkbox 5
                      {checkboxState.checkbox5 && (
                        <div className='ml-4 mt-2'>
                          <label className='block'>
                            <Field type="checkbox" name="nestedCheckbox5_1" />
                            Nested Checkbox 5.1
                          </label>
                          <label className='block'>
                            <Field type="checkbox" name="nestedCheckbox5_2" />
                            Nested Checkbox 5.2
                          </label>
                        </div>
                      )}
                    </label>
                  </div>
                </>
              )}
              <div className='flex justify-between lg:px-12 max-container mt-10'>
                {step > 1 && <Button value="Back" onClick={handleBack} />}
                <Button value={step === 2 ? "Submit" : "Next"} onClick={step === 2 ? handleSubmit : () => handleNext(validateForm, values)} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormCard;