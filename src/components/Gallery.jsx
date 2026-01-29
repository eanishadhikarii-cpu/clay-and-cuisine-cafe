import React from 'react';
import '../styles/gallery.css';
import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/3.jpeg';
import img3 from '../assets/images/WhatsApp Image 2026-01-06 at 7.33.22 PM.jpeg';
import img4 from '../assets/images/WhatsApp Image 2026-01-06 at 7.33.23 PM.jpeg';
import img5 from '../assets/images/WhatsApp Image 2026-01-06 at 7.33.24 PM.jpeg';
import img6 from '../assets/images/WhatsApp Image 2026-01-06 at 7.33.25 PM.jpeg';
import img7 from '../assets/images/WhatsApp Image 2026-01-06 at 7.33.26 PM.jpeg';
import img8 from '../assets/images/WhatsApp Image 2026-01-06 at 7.33.27 PM.jpeg';
import img9 from '../assets/images/WhatsApp Image 2026-01-06 at 7.33.28 PM.jpeg';

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: img1, category: 'ambience', alt: 'Cozy cafe interior with pottery displays' },
    { id: 2, src: img2, category: 'food', alt: 'Artisan food presentation' },
    { id: 3, src: img3, category: 'clay-art', alt: 'Clay art and pottery workspace' },
    { id: 4, src: img4, category: 'ambience', alt: 'Natural lighting in pottery studio area' },
    { id: 5, src: img5, category: 'food', alt: 'Delicious cafe dishes' },
    { id: 6, src: img6, category: 'clay-art', alt: 'Beautiful handmade ceramic vessels' },
    { id: 7, src: img7, category: 'food', alt: 'Artisan coffee and beverages' },
    { id: 8, src: img8, category: 'clay-art', alt: 'Pottery and clay art creations' },
    { id: 9, src: img9, category: 'ambience', alt: 'Peaceful dining area with clay art displays' }
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
              <img src={image.src} alt={image.alt} loading="lazy" />
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