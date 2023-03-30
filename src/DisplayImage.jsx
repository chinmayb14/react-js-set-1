const ShowImage = ({ imageLink, caption }) => {
  return (
    <div>
      <img src={imageLink} alt="A photo" width="350px" height="250px" />
      <p>Caption: {caption}</p>
    </div>
  );
};

export default ShowImage;
