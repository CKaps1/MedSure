import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const CameraCapture = () => {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleCameraToggle = async () => {
    try {
      if (!isCameraOpen) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsCameraOpen(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (isCameraOpen) {
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg');

        // Send the captured image to the backend using Axios
        axios({
          method: 'POST',
          url: '/recognize-image',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({ image: dataUrl }),
        })
          .then((response) => {
            const res = response.data;
            console.log('Extracted Text:', res.text);
            setCapturedImage(dataUrl); // Optionally, you can display the captured image on the frontend
          })
          .catch((error) => {
            console.error('Error capturing image:', error);
          });

        setIsCameraOpen(false);
      } else {
        handleCameraToggle();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCameraOpen]);

  return (
    <div>
      <video ref={videoRef} style={{ display: isCameraOpen ? 'block' : 'none' }} />
      <button onClick={handleCameraToggle}>{isCameraOpen ? 'Capture Image' : 'Open Camera'}</button>
      {capturedImage && <img src={capturedImage} alt="Captured" />}
    </div>
  );
};

export default CameraCapture;

