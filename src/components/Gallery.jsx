import React from 'react';
import '../styles/gallery.css';

const Gallery = () => {
  const galleryImages = [
    { id: 1, category: 'ambience', alt: 'Cozy cafe interior with pottery displays' },
    { id: 2, category: 'food', alt: 'Artisan avocado toast on handmade ceramic plate' },
    { id: 3, category: 'clay-art', alt: 'Hands shaping clay on pottery wheel' },
    { id: 4, category: 'ambience', alt: 'Natural lighting in pottery studio area' },
    { id: 5, category: 'food', alt: 'Clay pot shakshuka with fresh herbs' },
    { id: 6, category: 'clay-art', alt: 'Beautiful handmade ceramic vessels' },
    { id: 7, category: 'food', alt: 'Artisan coffee in handcrafted ceramic mug' },
    { id: 8, category: 'clay-art', alt: 'Pottery instructor guiding customer' },
    { id: 9, category: 'ambience', alt: 'Peaceful dining area with clay art displays' }
  ];

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="gallery-subtitle">
          Explore our unique blend of culinary artistry and creative clay experiences
        </p>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="gallery-placeholder">
                <span className="placeholder-text">{image.alt}</span>
              </div>
              <div className="gallery-overlay">
                <span className="gallery-category">{image.category.replace('-', ' ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;