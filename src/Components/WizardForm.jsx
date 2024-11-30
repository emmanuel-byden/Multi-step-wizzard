import React, { useState } from 'react';

const WizardForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        preference1: false,
        preference2: false,
        file: null
    });
    const [currentStep, setCurrentStep] = useState(1);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            file: e.target.files[0]
        }));
    };

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        alert('Form Submitted!');
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Wizard Form</h1>
            <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                    <div>
                        <label className="block mb-2">
                            Name:
                            <input 
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </label>
                        <label className="block mb-2">
                            Email:
                            <input 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </label>
                    </div>
                )}
                {currentStep === 2 && (
                    <div>
                        <label className="block mb-2">
                            Address:
                            <input 
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </label>
                        <label className="block mb-2">
                            Phone:
                            <input 
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </label>
                    </div>
                )}
                {currentStep === 3 && (
                    <div>
                        <label className="block mb-2">
                            Preferences:
                            <input
                                type="checkbox"
                                name="preference1"
                                checked={formData.preference1}
                                onChange={handleInputChange}
                                className="ml-2"
                            />
                            Option 1
                            <input
                                type="checkbox"
                                name="preference2"
                                checked={formData.preference2}
                                onChange={handleInputChange}
                                className="ml-2"
                            />
                            Option 2
                        </label>
                    </div>
                )}
                {currentStep === 4 && (
                    <div>
                        <label className="block mb-2">
                            Upload Document:
                            <input 
                                type="file"
                                name="file"
                                onChange={handleFileChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </label>
                    </div>
                )}
                {currentStep === 5 && (
                    <div>
                        <h2 className="text-xl font-semibold">Confirm Details</h2>
                        <p>Name: {formData.name}</p>
                        <p>Email: {formData.email}</p>
                        <p>Address: {formData.address}</p>
                        <p>Phone: {formData.phone}</p>
                        <p>Preferences: {formData.preference1 ? 'Option 1 ' : ''}{formData.preference2 ? 'Option 2' : ''}</p>
                        <p>Document: {formData.file ? formData.file.name : 'No file uploaded'}</p>
                    </div>
                )}
                <div className="mt-4 flex justify-between">
                    {currentStep > 1 && (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Previous
                        </button>
                    )}
                    {currentStep < 5 ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default WizardForm;
