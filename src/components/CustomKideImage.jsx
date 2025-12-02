import { Repeat, Rowing, Transform } from "@mui/icons-material";

const CustomKideImage = () => {
  const iconPattern = `data:image/svg+xml,${encodeURIComponent(
    '<svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="rgba(188, 214, 17, 0.4)" transform="translate(12,12)"/></svg>'
  )}`;

  const styles = {
    container: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
    blankSpace: {
      backgroundColor: "white",
      width: "50%",
      height: "100%",
    },
    iconCanvas: {
      backgroundColor: "teal",
      width: "60%",
      height: "100%",
      backgroundImage: 'url("/Images/kide-logo.svg")',
      backgroundRepeat: "repeat",
      backgroundSize: "280px 280px",
    },
    imageCanvas: {
      position: "absolute",
      width: "60%",
      height: "40%",
      top: 330,
      left: 0,
      backgroundImage: 'url("/Images/kide-hero-image.jpg")', // your hero image
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 1, // ensures it's on top
    },
  };

  return (
    <div className="container" style={styles.container}>
      <div className="blank-space" style={styles.blankSpace}></div>
      <div className="image-canvas" style={styles.imageCanvas}></div>
      <div className="icon-canvas" style={styles.iconCanvas}></div>
    </div>
  );
};
export default CustomKideImage;
