import React, { useState, useRef, useEffect } from 'react';

const SubmissionSelect = () => {
  // Step 1: Store submission details in an object
  const submissionInfo = {
    art: {
      message: "Submit your art here",
      fileType: "image/*", // Accept only images
      placeholder: "Upload your artwork"
    },
    movies: {
      message: "Submit your movies here",
      fileType: "video/*", // Accept only videos
      placeholder: "Upload your movie"
    },
    music: {
      message: "Submit your music here",
      fileType: "audio/*", // Accept only audio files
      placeholder: "Upload your music"
    },
    fashion: {
      message: "Submit your fashion designs here",
      fileType: "image/*", // Accept only images
      placeholder: "Upload your fashion design"
    }
  };

  // Step 2: Use state to track the selected option and file upload
  const [selectedOption, setSelectedOption] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileURL, setFileURL] = useState(''); // URL for file preview

  // Use ref to access the file input element
  const fileInputRef = useRef(null);

  // Step 3: Reset the file input when the selected option changes
  useEffect(() => {
    setFile(null);
    setFileName('');
    setFileURL(''); // Reset the file URL when the selection changes
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Force reset the file input
    }
  }, [selectedOption]);

  // Step 4: Handle the selection change
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Automatically trigger the file input click when a category is selected
    if (selectedValue && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Step 5: Handle file input change
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
    setFileURL(URL.createObjectURL(selectedFile)); // Create a URL for file preview
  };

  // Step 6: Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please upload a file before submitting.");
      return;
    }
    alert(`File "${fileName}" has been submitted for ${selectedOption}.`);
    // Here you would typically send the file to the server, e.g., using fetch or axios
  };

  // Step 7: Render the file preview
  const renderFilePreview = () => {
    if (file && fileURL) {
      // Ensure the selected option is art or fashion and file type is an image
      if ((selectedOption === 'art' || selectedOption === 'fashion') && file.type.startsWith('image/')) {
        return <img src={fileURL} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '10px' }} />;
      } else if (selectedOption === 'movies' && file.type.startsWith('video/')) {
        // Preview video files
        return (
          <video controls style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '10px' }}>
            <source src={fileURL} type={file.type} />
            Your browser does not support the video tag.
          </video>
        );
      } else if (selectedOption === 'music' && file.type.startsWith('audio/')) {
        // Preview audio files
        return (
          <audio controls style={{ marginTop: '10px' }}>
            <source src={fileURL} type={file.type} />
            Your browser does not support the audio element.
          </audio>
        );
      }
    }
    return null;
  };

  return (
    <div>
      <label htmlFor="submission-select">Choose a category to submit:</label><br></br>

      <select id="submission-select" value={selectedOption} onChange={handleSelectChange}>
        
        <option value="" selected disabled>Select an option</option>
        <option value="art">Art</option>
        <option value="movies">Movies</option>
        <option value="music">Music</option>
        <option value="fashion">Fashion</option>
      </select>

      <div className="submission-form">
        {selectedOption && submissionInfo[selectedOption] && (
          <form onSubmit={handleSubmit}>
            <p>{submissionInfo[selectedOption].message}</p>
            <input
              type="file"
              accept={submissionInfo[selectedOption].fileType}
              onChange={handleFileChange}
              placeholder={submissionInfo[selectedOption].placeholder}
              ref={fileInputRef}
              style={{ display: 'none' }} // Hide the file input
            />
            {file && (
              <>
                <p>Selected file: {fileName}</p>
                {renderFilePreview()} {/* Display the file preview */}
              </>
            )}
            <button type="submit" style={{ marginTop: '10px' }}>
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SubmissionSelect;




