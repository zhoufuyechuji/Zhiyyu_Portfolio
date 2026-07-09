export default function ImageGallery({ images, title }) {
  if (!images?.length) return null;

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <figure key={`${image}-${index}`} className="image-gallery__item">
          <img src={image} alt={`${title} process or result screenshot ${index + 1}`} />
          <figcaption>{String(index + 1).padStart(2, "0")} / archive capture</figcaption>
        </figure>
      ))}
    </div>
  );
}
