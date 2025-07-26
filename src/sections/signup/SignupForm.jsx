import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();

  const formFields = [
    // Row 1
    [
      { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter your first name', required: true },
      { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter your last name', required: true }
    ],
    // Row 2
    [
      { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'Enter company name', required: true },
      { id: 'businessAddress', label: 'Business Address', type: 'text', placeholder: 'Enter business address', required: true }
    ],
    // Row 3
    [
      { id: 'country', label: 'Country', type: 'text', placeholder: 'Enter country', required: true },
      { id: 'state', label: 'State', type: 'text', placeholder: 'Enter state', required: true },
    ],
    // Row 4
    [
      { id: 'zipCode', label: 'Zip Code', type: 'text', placeholder: 'Enter zip code', required: true },
      { id: 'mobile', label: 'Mobile', type: 'tel', placeholder: 'Enter mobile number', required: true },
    ],
    // Row 5
    [
      { id: 'fax', label: 'Fax', type: 'tel', placeholder: 'Enter fax number', required: false },
      { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter email', required: true }
    ],
    // Row 6
    [
      { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter password', required: true },
      { id: 'tax', label: 'Resale Tax(if any)', type: 'password', placeholder: 'Enter Resale Tax', required: true }
    ]
  ];

  const fileUploads = [
    { id: 'resaleTaxForm', label: 'Resale Tax Form Upload' },
    { id: 'businessCertificate', label: 'Business Certificate' }
  ];

  return (
    <section className="relative pb-12 px-4 sm:px-6 lg:px-16 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold font-roboto text-[#141414] mb-3">Sign Up</h1>
        <p className="text-[#8F8F8F] text-sm font-roboto mb-8">Provide Your Details to Sign Up</p>
        
        <form className="space-y-6">
          {formFields.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className='flex flex-row justify-between space-x-4'>
              {row.map(field => (
                <div key={field.id} className="flex-1">
                  <label htmlFor={field.id} className="text-sm font-medium font-roboto text-[#4C4C4C] mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    className="w-full px-4 py-2 border text-sm border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </div>
              ))}
            </div>
          ))}

          {/* File Upload Sections in same row */}
          <div className="flex flex-row justify-between space-x-4">
            {fileUploads.map((upload) => (
              <div key={upload.id} className="flex-1 flex flex-col">
                <label htmlFor={upload.id} className="text-sm  font-roboto font-medium text-[#4C4C4C] mb-2">
                  {upload.label}
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id={upload.id}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    required
                  />
                  <div className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-xl">
                    <span className="text-sm text-gray-500">Choose file</span>
                    <img 
                      src="/assets/fileupload.png" 
                      alt="Upload icon"
                    
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button
            type="submit"
            className="w-[50%] justify-center flex mx-auto bg-[#B5151E] text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Sign Up
          </button>
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-600">
          Already Have Account?{' '}
          <a 
            href="#" 
            className="font-medium text-blue-600 hover:text-blue-500"
            onClick={(e) => {
              e.preventDefault();
              navigate('/log-in');
              window.scrollTo(0, 0);
            }}
          >
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default SignUpForm;