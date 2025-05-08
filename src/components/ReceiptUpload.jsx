// ReceiptUpload.jsx
import { useState, useRef } from 'react';
import { Camera, Upload, X, Check, RefreshCw, AlertCircle } from 'lucide-react';

const ReceiptUpload = ({ transactionId, onUploadComplete }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  
  // Handle file selection through file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (!file) return;
    
    // Validate file type
    if (!file.type.match('image.*')) {
      setError('Please select an image file (JPEG, PNG, etc.)');
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size exceeds 5MB limit');
      return;
    }
    
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setError('');
  };
  
  // Handle dragging and dropping files
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      
      // Validate file type
      if (!file.type.match('image.*')) {
        setError('Please select an image file (JPEG, PNG, etc.)');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('File size exceeds 5MB limit');
        return;
      }
      
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError('');
    }
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  // Trigger file input click when button is clicked
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  
  // Initialize camera for taking a picture
  const initCamera = async () => {
    setShowCamera(true);
    
    try {
      const constraints = {
        video: {
          facingMode: 'environment', // Use the rear camera on mobile devices
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
    } catch (err) {
      console.error('Error accessing camera:', err);
      setError('Could not access camera. Please check permissions or try uploading a file instead.');
      setShowCamera(false);
    }
  };
  
  // Take a picture from the camera
  const takePicture = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    // Set canvas dimensions to match video dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw the current video frame to the canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Convert the canvas image to a file
    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], 'receipt.jpg', { type: 'image/jpeg' });
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
      }
    }, 'image/jpeg', 0.95);
    
    // Stop the camera
    stopCamera();
  };
  
  // Stop the camera stream
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setShowCamera(false);
  };
  
  // Clear the selected file
  const clearSelection = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setError('');
    setUploadSuccess(false);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  // Upload the receipt
  const uploadReceipt = async () => {
    if (!selectedFile || !transactionId) return;
    
    setLoading(true);
    setError('');
    
    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('receipt', selectedFile);
      formData.append('transactionId', transactionId);
      
      // Replace with your actual API endpoint
      const response = await fetch('/api/member/upload-receipt', {
        method: 'POST',
        body: formData,
        // No Content-Type header needed, it's set automatically with FormData
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to upload receipt');
      }
      
      setUploadSuccess(true);
      
      // Notify parent component about successful upload
      if (onUploadComplete) {
        onUploadComplete(data);
      }
    } catch (err) {
      setError(err.message || 'An error occurred during upload');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Receipt</h3>
      
      {uploadSuccess ? (
        <div className="text-center py-6">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="mt-3 text-lg font-medium text-gray-900">Receipt Uploaded Successfully</h3>
          <p className="mt-2 text-sm text-gray-500">
            Your receipt has been uploaded and attached to the transaction.
          </p>
          <div className="mt-5">
            <button
              onClick={clearSelection}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload Another Receipt
            </button>
          </div>
        </div>
      ) : (
        <>
          {showCamera ? (
            <div className="camera-container">
              <div className="relative">
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  className="w-full h-auto rounded-md overflow-hidden"
                />
                <button
                  onClick={stopCamera}
                  className="absolute top-2 right-2 bg-gray-800 bg-opacity-50 rounded-full p-2 text-white"
                >
                  <X size={16} />
                </button>
              </div>
              
              <div className="flex justify-center mt-4">
                <button
                  onClick={takePicture}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Take Photo
                </button>
              </div>
              
              {/* Hidden canvas for capturing the image */}
              <canvas ref={canvasRef} style={{ display: 'none' }} />
            </div>
          ) : (
            <>
              {/* File input (hidden) */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              
              {/* File preview */}
              {previewUrl ? (
                <div className="mb-4">
                  <div className="relative">
                    <img
                      src={previewUrl}
                      alt="Receipt preview"
                      className="max-h-64 w-auto mx-auto rounded-md"
                    />
                    <button
                      onClick={clearSelection}
                      className="absolute top-2 right-2 bg-gray-800 bg-opacity-50 rounded-full p-2 text-white"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="border-2 border-dashed border-gray-300 rounded-md p-6 mb-4 text-center"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <p className="pl-1">Drag and drop a receipt image or click to upload</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                  </div>
                </div>
              )}
              
              {/* Error message */}
              {error && (
                <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <div className="flex">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 justify-center">
                {!previewUrl ? (
                  <>
                    <button
                      type="button"
                      onClick={handleUploadClick}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Select File
                    </button>
                    
                    <button
                      type="button"
                      onClick={initCamera}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <Camera className="mr-2 h-4 w-4" />
                      Take Photo
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={uploadReceipt}
                    disabled={loading}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Receipt
                      </>
                    )}
                  </button>
                )}
              </div>
            </>
          )}
          
          {/* Upload tips */}
          {!showCamera && !previewUrl && (
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Tips for clear receipt photos:</h4>
              <ul className="text-xs text-gray-500 list-disc pl-5 space-y-1">
                <li>Ensure good lighting with no shadows</li>
                <li>Place receipt on a flat, contrasting surface</li>
                <li>Make sure all details are visible, especially the total amount</li>
                <li>Capture the full receipt in the frame</li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ReceiptUpload;