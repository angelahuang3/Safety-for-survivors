import React, { useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";

const Map = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.log(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.log(error);
        }
      );
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSOSClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="map-container" style={{ textAlign: "center" }}>
        <iframe
          title="Google Map"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?q=${location.latitude},${location.longitude}&key=AIzaSyAne-wDQnG40i8ukL3Y1-4zVdP88d5SM5o&zoom=18`}
          allowFullScreen
        />
      </div>
      <button
        onClick={handleSOSClick}
        style={{
          backgroundColor: "red",
          color: "white",
          fontSize: "2rem",
          padding: "1rem 2rem",
          marginTop: "1rem",
          border: "none",
          borderRadius: "50%",
          width: "10rem",
          height: "10rem",
        }}
      >
        SOS
      </button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        color="success"
        message={"Help on the way, hold tight!"}
      />
    </div>
  );
};

export default Map;
