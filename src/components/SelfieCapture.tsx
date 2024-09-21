import React, { useState, useRef, useEffect } from "react";
import { Button, Box, Typography, Fade } from "@mui/material";
import { useDropzone } from "react-dropzone";
import Logo from "../assets/images/logo.svg";
import CamIcon from "../assets/images/camIcon.svg";

interface SelfieCaptureProps {
  setFieldValue: (field: string, value: Blob) => void;
}

const SelfieCapture: React.FC<SelfieCaptureProps> = ({ setFieldValue }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isCameraSupported, setIsCameraSupported] = useState(false);
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const titleTitle: string = "text-Roboto text-[24px] font-[500] mb-1";
  const textDesc: string = "text-Roboto text-[16px] font-[400] mb-5";
  const styledDiv: string =
    "flex flex-row justify-center items-center w-full my-5";
  const styledLine: string = "border-t-2 border-[#E7E7E7] w-full";
  const styledO: string =
    "px-4 text-[#6D6D6D] font-WorkSans font-[700] text-[10px]";

  useEffect(() => {
    if (navigator.mediaDevices) {
      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => {
          const hasCamera = devices.some(
            (device) => device.kind === "videoinput"
          );
          setIsCameraSupported(hasCamera);
        })
        .catch((error) => console.error("Error detecting devices: ", error));
    }
  }, []);

  const handleOpenCamera = async () => {
    setIsCameraOpen(true);
    if (isCameraSupported && navigator.mediaDevices) {
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
        setIsPhotoTaken(true);

        canvas.toBlob((blob) => {
          if (blob) {
            setFieldValue("selfie", blob);
          }
        });
      }
    }
    setIsCameraOpen(false);
  };

  const handleRetakePhoto = () => {
    setImageSrc(null);
    setIsPhotoTaken(false);
    handleOpenCamera();
  };

  const handleSelectFile = (file: File) => {
    setFieldValue("selfie", file);
    const imageUrl = URL.createObjectURL(file);
    setImageSrc(imageUrl);
    setIsPhotoTaken(true);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        handleSelectFile(acceptedFiles[0]);
      }
    },
  });

  return (
    <Box textAlign="center">
      {isCameraSupported ? (
        <>
          {!isPhotoTaken && (
            <>
              {isCameraOpen ? (
                <Fade in={isCameraOpen} timeout={1000}>
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
                      style={{ marginTop: "10px" }}
                    >
                      Capturar Selfie
                    </Button>
                  </Box>
                </Fade>
              ) : (
                <>
                  <div className="flex flex-col justify-center items-center">
                    <img src={Logo} alt="logo" className="w-[100px] h-auto" />
                    <img
                      src={CamIcon}
                      alt="logo"
                      className="w-[100px] h-auto my-5"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h2 className={titleTitle}>¡Es hora de la selfie!</h2>
                    <h2 className={textDesc}>
                      Sonríe y asegúrate de tener buena iluminación.
                    </h2>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpenCamera}
                  >
                    Continuar
                  </Button>

                  <div className={styledDiv}>
                    <div className={styledLine}></div>
                    <div className={styledO}>O</div>
                    <div className={styledLine}></div>
                  </div>

                  <Box {...getRootProps()} mt={2}>
                    <input {...getInputProps()} />
                    <Button
                      sx={{
                        backgroundColor: "#F2F4F7",
                        fontSize: "13px",
                        color: "#1D2939",
                        "&:hover": { backgroundColor: "#dde0e4" },
                      }}
                    >
                      seleccionar archivo
                    </Button>
                  </Box>
                </>
              )}
            </>
          )}

          {isPhotoTaken && (
            <Fade in={isPhotoTaken} timeout={1000}>
              <Box mt={2}>
                <img
                  src={imageSrc!}
                  alt="Selfie preview"
                  className="object-cover w-[640px] h-[480px]"
                />
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleRetakePhoto}
                  style={{ marginTop: "10px" }}
                >
                  Retomar Selfie
                </Button>
              </Box>
            </Fade>
          )}
        </>
      ) : (
        <Typography variant="body1" color="error">
          Cámara no soportada en este dispositivo.
        </Typography>
      )}
    </Box>
  );
};

export default SelfieCapture;
