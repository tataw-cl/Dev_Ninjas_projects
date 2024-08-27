import React, { useState, useRef } from 'react';

const SubmissionSelect = () => {
  // Step 1: Store submission details in an object
  const submissionInfo = {
    art: {
      message: "Submit your art here",
      fileType: "image/*",
      placeholder: "Upload your artwork"
    },
    movies: {
      message: "Submit your movies here",
      fileType: "video/*",
      placeholder: "Upload your movie"
    },
    music: {
      message: "Submit your music here",
      fileType: "audio/*",
      placeholder: "Upload your music"
    },
    fashion: {
      message: "Submit your fashion designs here",
      fileType: "image/*",
      placeholder: "Upload your fashion design"
    }
  };

  // Step 2: Use state to track the selected option and file upload
  const [selectedOption, setSelectedOption] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  // Use ref to access the file input element
  const fileInputRef = useRef(null);

  // Step 3: Handle the selection change
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setFile(null);
    setFileName('');

    // Automatically trigger the file input click when a category is selected
    if (selectedValue && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Step 4: Handle file input change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  // Step 5: Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please upload a file before submitting.");
      return;
    }
    alert(`File "${fileName}" has been submitted for ${selectedOption}.`);
    // Here you would typically send the file to the server, e.g., using fetch or axios
  };

  // Step 6: Dynamically render the submission form
  const renderSubmissionForm = () => {
    if (selectedOption && submissionInfo[selectedOption]) {
      const { message, fileType, placeholder } = submissionInfo[selectedOption];
      return (
        <form onSubmit={handleSubmit}>
          <p>{message}</p>
          <input
            type="file"
            accept={fileType}
            onChange={handleFileChange}
            placeholder={placeholder}
            ref={fileInputRef}
            style={{ display: 'none' }} // Hide the file input
          />
          {file && <p>Selected file: {fileName}</p>}
          <button type="submit">Submit</button>
        </form>
      );
    }
    return <p>Please select a category to see the submission form.</p>;
  };

  return (
    <div>
      <label htmlFor="submission-select">Choose a category to submit:</label>
      <select id="submission-select" value={selectedOption} onChange={handleSelectChange}>
        <option value="">--Select an option--</option>
        <option value="art">Art</option>
        <option value="movies">Movies</option>
        <option value="music">Music</option>
        <option value="fashion">Fashion</option>
      </select>

      <div className="submission-form">
        {renderSubmissionForm()}
      </div>
    </div>
  );
};

export default SubmissionSelect;

