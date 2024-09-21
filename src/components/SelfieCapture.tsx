import React, { useState, useRef } from "react";
import { Button, Box } from "@mui/material";

interface SelfieCaptureProps {
  setFieldValue: (field: string, value: Blob) => void;
}

const SelfieCapture: React.FC<SelfieCaptureProps> = ({ setFieldValue }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleOpenCamera = async () => {
    setIsCameraOpen(true);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera: ", error);
      }
    }
  };

  const handleCaptureSelfie = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const video = videoRef.current;
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageDataUrl = canvas.toDataURL("image/png");
        setImageSrc(imageDataUrl);

        // Convert the image data URL to a blob and set it in Formik field
        canvas.toBlob((blob) => {
          if (blob) {
            setFieldValue("selfie", blob);
          }
        });
      }
    }
    setIsCameraOpen(false);
  };

  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFieldValue("selfie", file);
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  return (
    <Box textAlign="center">
      {isCameraOpen ? (
        <Box>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            width="100%"
            height="auto"
          />
          <canvas
            ref={canvasRef}
            style={{ display: "none" }}
            width={300}
            height={300}
          ></canvas>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCaptureSelfie}
          >
            Capturar Selfie
          </Button>
        </Box>
      ) : (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenCamera}
          >
            Abrir Cámara
          </Button>
          <input
            type="file"
            accept="image/*"
            onChange={handleSelectFile}
            style={{ display: "block", marginTop: "10px" }}
          />
        </>
      )}

      {imageSrc && (
        <Box mt={2}>
          <img src={imageSrc} alt="Selfie preview" width="100%" height="auto" />
        </Box>
      )}
    </Box>
  );
};

export default SelfieCapture;
