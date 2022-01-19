function ImageHome({ image, className = '' }) {
  return (
    <img
      className={`w-full h-screen object-cover absolute inset-0 ${className}`}
      src={image}
      alt={image}
    />
  );
}

export default ImageHome;
