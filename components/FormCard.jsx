import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, FormInpt } from "@/constant";
import { CustomCheckbox } from "@/components/customCheckbox";
import { Tooltip } from "@/components/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


const validationSchema = Yup.object().shape({
  personName: Yup.string().required("Name is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^[0-9()+-\s]+$/, "Phone number can only contain digits, spaces, and the symbols +, -, ().")
    .test('min-digits', 'Phone number must contain at least 10 digits', value => {
      const digits = value.replace(/\D/g, ''); // Remove non-digit characters
      return digits.length >= 6;
    }),
  email: Yup.string().email("Invalid email").required("Email is required"),
  businessName: Yup.string().required("Business name is required"),
  industry: Yup.string().required("Industry is required"),
  address: Yup.string().required("Registered Address is required"),
});

const FormCard = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleNext = (validateForm, values) => {
    validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setStep((prevStep) => prevStep + 1);
      }
    });
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleCheckboxChange = (setFieldValue, fieldName, value) => {
    setFieldValue(fieldName, !value);
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 mt-20">
      <div
        ref={formRef}
        className="bg-gradient-to-b from-[#15171D] to-[#040811] p-6 rounded-2xl shadow-lg w-[600px] max-h-[80vh] min-h-[500px] border-[1.2px] border-[#414141] flex flex-col overflow-y-auto"
      >
        <h1 className="montserrat text-white text-[25px] font-medium pb-6 mt-0">
          Ascella for Startups
        </h1>

        <Formik
          initialValues={{
            personName: "",
            phone: "",
            email: "",
            businessName: "",
            industry: "",
            address: "",
            cyberSecurity: false,
            offensiveSecurity: false,
            defensiveSecurity: false,
            grcAudits: false,
            softwareDevelopment: false,
            web2Development: false,
            web3Development: false,
            gameDevelopment: false,
            cloudServices: false,
            staffing: false,
            hrOperations: false,
            payrollManagement: false,
            rpo: false,
            fullTimeHiring: false,
            contractualHiring: false,
            engage: false,
            businessDevelopmentOutsourcing: false,
            businessProcessOutsourcing: false,
            salesEnablement: false,
            forge: false,
            clientAcquisition: false,
            growthConsulting: false,
            digitalMarketing: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form data", values);
          }}
        >
          {({ values, setFieldValue, validateForm, handleSubmit }) => (
            <Form className="flex-grow">
              {step === 1 && (
                <>
                  <div className="lg:px-10 max-container mt-12">
                    <div className="flex flex-row gap-10">
                      <FormInpt label="Name" name="personName" />
                      <FormInpt label="Phone" name="phone" />
                    </div>
                    <div className="flex flex-row gap-10 mt-7">
                      <FormInpt label="Email" name="email" />
                      <FormInpt
                        label="Legal Business Name"
                        name="businessName"
                      />
                    </div>
                    <div className="flex flex-row gap-10 mt-7">
                      <FormInpt label="Industry" name="industry" />
                      <FormInpt label="Registered Address" name="address" />
                    </div>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <div className="flex flex-col gap-4 mt-4 montserrat text-[#888888] text-left">
                    <h5 className="montserrat text-[#888888] text-[18px]">
                      Which side our assistance required?
                    </h5>

                    <CustomCheckbox
                      name="cyberSecurity"
                      label="Cyber Security"
                      checked={values.cyberSecurity}
                      onChange={() =>
                        handleCheckboxChange(
                          setFieldValue,
                          "cyberSecurity",
                          values.cyberSecurity
                        )
                      }
                    />
                    {values.cyberSecurity && (
                      <div className="ml-6 space-y-2">
                        <div className="flex items-center">
                          <CustomCheckbox
                            name="offensiveSecurity"
                            label="Offensive Security"
                            checked={values.offensiveSecurity}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "offensiveSecurity",
                                values.offensiveSecurity
                              )
                            }
                          />
                          <Tooltip content="Penetration Testing, Audits, Vulnerability Management, Application, Network, Infra & Cloud">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                        <div className="flex items-center">
                          <CustomCheckbox
                            name="defensiveSecurity"
                            label="Defensive Security"
                            checked={values.defensiveSecurity}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "defensiveSecurity",
                                values.defensiveSecurity
                              )
                            }
                          />
                          <Tooltip content="Network Security, Endpoint Protection, Threat Monitoring, and others">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                        <div className="flex items-center">
                          <CustomCheckbox
                            name="grcAudits"
                            label="GRC"
                            checked={values.grcAudits}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "grcAudits",
                                values.grcAudits
                              )
                            }
                          />
                          <Tooltip content="Compliance Management, Risk Assessment, Security Policies, and more">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                      </div>
                    )}
                    <CustomCheckbox
                      name="softwareDevelopment"
                      label="Software Development"
                      checked={values.softwareDevelopment}
                      onChange={() =>
                        handleCheckboxChange(
                          setFieldValue,
                          "softwareDevelopment",
                          values.softwareDevelopment
                        )
                      }
                    />
                    {values.softwareDevelopment && (
                      <div className="ml-6 space-y-2">
                        <div className="flex flex-center">
                          <CustomCheckbox
                            name="web2Development"
                            label="Web2 Development"
                            checked={values.web2Development}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "web2Development",
                                values.web2Development
                              )
                            }
                          />
                          <Tooltip content="Web and Mobile App Development, System Applications, Software Maintenance, among other services">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                        <div className="flex flex-center">
                          <CustomCheckbox
                            name="web3Development"
                            label="Web3 Development"
                            checked={values.web3Development}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "web3Development",
                                values.web3Development
                              )
                            }
                          />
                          <Tooltip content="Blockchain Development, Decentralized Applications (dApps), Smart Contracts, and similar technologies">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                        <div className="flex flex-center">
                          <CustomCheckbox
                            name="gameDevelopment"
                            label="Game Development"
                            checked={values.gameDevelopment}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "gameDevelopment",
                                values.gameDevelopment
                              )
                            }
                          />
                          <Tooltip content="---">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                        <div className="flex flex-center">
                          <CustomCheckbox
                            name="cloudServices"
                            label="Cloud Services"
                            checked={values.cloudServices}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "cloudServices",
                                values.cloudServices
                              )
                            }
                          />
                          <Tooltip content="Cloud Infrastructure Design, Cloud Services Development, Cloud Security, among other solutions">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                      </div>
                    )}
                    <CustomCheckbox
                      name="staffing"
                      label="Staffing"
                      checked={values.staffing}
                      onChange={() =>
                        handleCheckboxChange(
                          setFieldValue,
                          "staffing",
                          values.staffing
                        )
                      }
                    />
                    {values.staffing && (
                      <div className="ml-6 space-y-2">
                        <div className="flex flex-center">
                          <CustomCheckbox
                            name="hrOperations"
                            label="HR Operations"
                            checked={values.hrOperations}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "hrOperations",
                                values.hrOperations
                              )
                            }
                          />
                          <Tooltip content="Recruitment, Onboarding, Employee Relations, Compliance, HR Management, among other offerings">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                        <div className="flex flex-center">
                          <CustomCheckbox
                            name="payrollManagement"
                            label="Payroll Management"
                            checked={values.payrollManagement}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "payrollManagement",
                                values.payrollManagement
                              )
                            }
                          />
                          <Tooltip content="Payroll Processing, Tax Compliance, Benefits Administration, Employee Compensation, and further support">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                        <div className="flex flex-center">
                          <CustomCheckbox
                            name="rpo"
                            label="RPO (Recruitment Process Outsourcing)"
                            checked={values.rpo}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "rpo",
                                values.rpo
                              )
                            }
                          />
                          <Tooltip content="---">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                        <div className="flex flex-center">
                          <CustomCheckbox
                            name="fullTimeHiring"
                            label="Full Time Hiring"
                            checked={values.fullTimeHiring}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "fullTimeHiring",
                                values.fullTimeHiring
                              )
                            }
                          />
                          <Tooltip content="---">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                        <div className="flex flex-center">
                          <CustomCheckbox
                            name="contractualHiring"
                            label="Contractual Hiring"
                            checked={values.contractualHiring}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "contractualHiring",
                                values.contractualHiring
                              )
                            }
                          />
                          <Tooltip content="Providing skilled professionals on a contract basis, Temporary Staffing Solutions, and additional services">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                      </div>
                    )}
                    <CustomCheckbox
                      name="engage"
                      label="Engage"
                      checked={values.engage}
                      onChange={() =>
                        handleCheckboxChange(
                          setFieldValue,
                          "engage",
                          values.engage
                        )
                      }
                    />
                    {values.engage && (
                      <div className="ml-6 space-y-2">
                        <div className="flex flex-center">
                          <CustomCheckbox
                            name="businessDevelopmentOutsourcing"
                            label="Business Development Outsourcing"
                            checked={values.businessDevelopmentOutsourcing}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "businessDevelopmentOutsourcing",
                                values.businessDevelopmentOutsourcing
                              )
                            }
                          />
                          <Tooltip content="Identifying Growth Opportunities, Building Partnerships, Managing Client Relationships, Ensuring Customer Satisfaction, and more">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                        <div className="flex flex-center">
                          <CustomCheckbox
                            name="businessProcessOutsourcing"
                            label="Business Process Outsourcing"
                            checked={values.businessProcessOutsourcing}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "businessProcessOutsourcing",
                                values.businessProcessOutsourcing
                              )
                            }
                          />
                          <Tooltip content="Outsourced services for various business processes to enhance efficiency and reduce operational costs">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                        <div className="flex flex-center">
                          <CustomCheckbox
                            name="salesEnablement"
                            label="Sales Enablement"
                            checked={values.salesEnablement}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "salesEnablement",
                                values.salesEnablement
                              )
                            }
                          />
                          <Tooltip content="Tools, Resources, and strategies to improve sales performance and productivity, among other initiatives">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                      </div>
                    )}
                    <CustomCheckbox
                      name="forge"
                      label="Forge"
                      checked={values.forge}
                      onChange={() =>
                        handleCheckboxChange(
                          setFieldValue,
                          "forge",
                          values.forge
                        )
                      }
                    />
                    {values.forge && (
                      <div className="ml-6 space-y-2">
                        <div className="flex flex-center">
                          <CustomCheckbox
                            name="clientAcquisition"
                            label="Client Acquisition"
                            checked={values.clientAcquisition}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "clientAcquisition",
                                values.clientAcquisition
                              )
                            }
                          />
                          <Tooltip content="---">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                        <div className="flex flex-control">
                          <CustomCheckbox
                            name="growthConsulting"
                            label="Growth Consulting"
                            checked={values.growthConsulting}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "growthConsulting",
                                values.growthConsulting
                              )
                            }
                          />
                          <Tooltip content="Expert advice and strategies to drive business growth, Optimize Performance, GTM, Achieve long-term success, and more">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                        <div className="flex flex-control">
                          <CustomCheckbox
                            name="digitalMarketing"
                            label="Digital Marketing"
                            checked={values.digitalMarketing}
                            onChange={() =>
                              handleCheckboxChange(
                                setFieldValue,
                                "digitalMarketing",
                                values.digitalMarketing
                              )
                            }
                          />
                          <Tooltip content="SEO, SEM, Social Media Marketing, Content Marketing, Email Marketing, and other strategies">
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="ml-2 cursor-pointer text-white fa-sm"
                            />
                          </Tooltip>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
              <div className="flex justify-between lg:px-12 max-container mt-10">
                {step > 1 && <Button value="Back" onClick={handleBack} />}
                <Button
                  value={step === 2 ? "Submit" : "Next"}
                  onClick={
                    step === 2
                      ? handleSubmit
                      : () => handleNext(validateForm, values)
                  }
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormCard;