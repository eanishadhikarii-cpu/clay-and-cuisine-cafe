import React, { useState, useEffect } from 'react';
import menuData from '../data/menu.json';
import '../styles/menu.css';

const Menu = () => {
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const element = document.getElementById('menu');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const featuredItems = [
    { name: "Black Coffee", price: "90 / 130", type: "veg", category: "Coffee" },
    { name: "Steam Momo", price: "160 / 200", type: "Veg / Chicken", category: "MOMO" },
    { name: "Chicken Curry", price: "380", type: "non-veg", category: "Main Course" },
    { name: "Virgin Mojito", price: "290", type: "veg", category: "Mocktails" },
    { name: "Paneer Chilly", price: "350", type: "veg", category: "Appetizers" },
    { name: "Biryani", price: "310 / 390", type: "Veg / Chicken", category: "Main Course" }
  ];

  const getVegIcon = (type) => {
    if (type === 'veg') return '●';
    if (type === 'non-veg') return '●';
    return '';
  };

  const getFilteredCategories = () => {
    if (activeCategory === 'all') return menuData.categories;
    return menuData.categories.filter(category => category.id === activeCategory);
  };

  const getFilteredItems = (items) => {
    if (activeType === 'all') return items;
    return items.filter(item => {
      if (activeType === 'veg') {
        return item.type === 'veg' || item.type.includes('Veg');
      }
      if (activeType === 'non-veg') {
        return item.type === 'non-veg' || item.type.includes('Chicken') || item.type.includes('Non-Veg') || item.type.includes('Fry') || item.type.includes('Boil');
      }
      if (activeType === 'drinks') {
        return activeCategory === 'coffee' || activeCategory === 'mocktails';
      }
      return true;
    });
  };

  if (showFullMenu) {
    return (
      <section id="menu" className={`section menu luxury-menu ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="menu-header">
            <h2 className="menu-title">Our Menu</h2>
            <p className="menu-subtitle">A curated selection of thoughtfully prepared cuisine</p>
          </div>
          
          <button className="luxury-back-btn" onClick={() => setShowFullMenu(false)}>
            ← Featured Selection
          </button>
          
          <div className="luxury-filters">
            <div className="category-tabs">
              <button 
                className={`luxury-tab ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All
              </button>
              {menuData.categories.map(category => (
                <button 
                  key={category.id}
                  className={`luxury-tab ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="type-pills">
              {['all', 'veg', 'non-veg', 'drinks'].map(type => (
                <button 
                  key={type}
                  className={`type-pill ${activeType === type ? 'active' : ''}`}
                  onClick={() => setActiveType(type)}
                >
                  {type === 'all' ? 'All' : type === 'non-veg' ? 'Non-Veg' : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="luxury-menu-content">
            {getFilteredCategories().map(category => {
              const hasVisibleItems = category.subcategories.some(subcategory => 
                getFilteredItems(subcategory.items).length > 0
              );
              
              if (!hasVisibleItems) return null;
              
              return (
                <div key={category.id} className="luxury-category">
                  <h3 className="luxury-category-title">{category.name}</h3>
                  
                  {category.subcategories.map((subcategory, subIndex) => {
                    const filteredItems = getFilteredItems(subcategory.items);
                    if (filteredItems.length === 0) return null;
                    
                    return (
                      <div key={subIndex} className="luxury-subcategory">
                        <h4 className="luxury-subcategory-title">{subcategory.name}</h4>
                        <div className="luxury-items-grid">
                          {filteredItems.map((item, itemIndex) => (
                            <div key={itemIndex} className="luxury-menu-item">
                              <div className="item-row">
                                <div className="item-left">
                                  <span className={`veg-indicator ${item.type === 'veg' ? 'veg' : item.type === 'non-veg' ? 'non-veg' : 'mixed'}`}>
                                    {getVegIcon(item.type)}
                                  </span>
                                  <span className="item-name">{item.name}</span>
                                </div>
                                <div className="item-divider"></div>
                                <div className="item-price">Rs.{item.price}</div>
                              </div>
                              {item.type !== 'veg' && item.type !== 'non-veg' && (
                                <div className="item-type">{item.type}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className={`section menu luxury-menu ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="menu-header">
          <h2 className="menu-title">Our Menu</h2>
          <p className="menu-subtitle">A curated selection of thoughtfully prepared cuisine</p>
        </div>
        
        <div className="featured-showcase">
          <h3 className="featured-title">Featured Selection</h3>
          <div className="luxury-featured-grid">
            {featuredItems.map((item, index) => (
              <div key={index} className="luxury-featured-item">
                <div className="item-row">
                  <div className="item-left">
                    <span className={`veg-indicator ${item.type === 'veg' ? 'veg' : item.type === 'non-veg' ? 'non-veg' : 'mixed'}`}>
                      {getVegIcon(item.type)}
                    </span>
                    <span className="item-name">{item.name}</span>
                  </div>
                  <div className="item-divider"></div>
                  <div className="item-price">Rs.{item.price}</div>
                </div>
                {item.type !== 'veg' && item.type !== 'non-veg' && (
                  <div className="item-type">{item.type}</div>
                )}
                <div className="item-category">{item.category}</div>
              </div>
            ))}
          </div>
          
          <div className="luxury-cta">
            <button className="luxury-btn" onClick={() => setShowFullMenu(true)}>
              View Complete Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;