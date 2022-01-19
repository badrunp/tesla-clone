function ImageHome({ image, className = '' }) {
  return <img className={`w-full h-screen object-cover ${className}`} src={image} alt={image} />;
}

export default ImageHome;
