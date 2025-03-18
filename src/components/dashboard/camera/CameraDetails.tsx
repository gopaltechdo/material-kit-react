"use client";
import * as React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

export function Camera(): React.JSX.Element {
  const videoRefs = [React.useRef<HTMLVideoElement>(null), React.useRef<HTMLVideoElement>(null), React.useRef<HTMLVideoElement>(null)];
  const cameraNames = ['Front Camera', 'Main Camera', 'Back Camera'];
  const videoLinks = [
    'http://10.42.0.1:8080/stream?topic=/camera/image_raw',
    'http://10.42.0.1:8080/stream?topic=/camera/camera/color/image_raw',
    'http://10.42.0.1:8080/stream_viewer?topic=/rear/camera/image_raw'
  ];

  React.useEffect(() => {
    const getCameras = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        
        if (videoDevices.length < 3) {
          console.warn('Not enough camera devices found.');
          return;
        }
        
        videoDevices.slice(0, 3).forEach(async (device, index) => {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { deviceId: { exact: device.deviceId } }
          });
          if (videoRefs[index].current) {
            videoRefs[index].current.srcObject = stream;
          }
        });
      } catch (error) {
        console.error('Error accessing cameras:', error);
      }
    };

    getCameras();

    return () => {
      videoRefs.forEach(ref => {
        if (ref.current?.srcObject) {
          (ref.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
        }
      });
    };
  }, []);

  return (
    <Grid container spacing={2}>
      
      {videoLinks.map((link, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{cameraNames[index]}</Typography>
              <iframe
                width="100%"
                height="200"
                src={link}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}