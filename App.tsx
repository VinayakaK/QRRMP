import React, { useEffect } from 'react';

const App: React.FC = () => {
    useEffect(() => {
        // This is for the fade-in animation.
        const fadeElements = document.querySelectorAll('.fade-in');
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const el = element as HTMLElement;
                const elementTop = el.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    el.classList.add('visible');
                }
            });
        };
        
        fadeInOnScroll();
        window.addEventListener('scroll', fadeInOnScroll);

        // Click handlers for category cards
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const categoryName = this.querySelector('.category-name')?.textContent;
                if (categoryName === 'Appetizers') {
                    window.location.href = 'appetizers.html';
                } else {
                    alert(`Page for ${categoryName} not created yet`);
                }
            });
        });

        const floatingCart = document.querySelector('.floating-cart');
        floatingCart?.addEventListener('click', function() {
            alert('Cart functionality will be implemented soon!');
        });
        
        return () => {
            window.removeEventListener('scroll', fadeInOnScroll);
        };
    }, []);

    return (
        <>
            <div className="container">
                <header>
                    <div className="restaurant-logo floating">
                        <i className="fas fa-utensils"></i>
                    </div>
                    <h1>FlavorFusion Menu</h1>
                    <p className="subtitle">Experience culinary excellence with our handcrafted dishes made from the finest ingredients</p>
                    <div className="divider"></div>
                </header>
                
                <div className="categories-grid">
                    <div className="category-card fade-in">
                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Pizzas" className="category-image" />
                        <div className="category-overlay">
                            <h3 className="category-name">Pizzas</h3>
                            <p className="items-count">12 delicious varieties</p>
                        </div>
                    </div>
                    
                    <div className="category-card fade-in">
                        <img src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ce2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Pastas" className="category-image" />
                        <div className="category-overlay">
                            <h3 className="category-name">Pastas</h3>
                            <p className="items-count">8 authentic recipes</p>
                        </div>
                    </div>
                    
                    <div className="category-card fade-in">
                        <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Salads" className="category-image" />
                        <div className="category-overlay">
                            <h3 className="category-name">Salads</h3>
                            <p className="items-count">10 fresh options</p>
                        </div>
                    </div>
                    
                    <div className="category-card fade-in">
                        <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Desserts" className="category-image" />
                        <div className="category-overlay">
                            <h3 className="category-name">Desserts</h3>
                            <p className="items-count">15 sweet creations</p>
                        </div>
                    </div>
                    
                    <div className="category-card fade-in">
                        <img src="https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Drinks" className="category-image" />
                        <div className="category-overlay">
                            <h3 className="category-name">Drinks</h3>
                            <p className="items-count">20 refreshing choices</p>
                        </div>
                    </div>
                    
                    <div className="category-card fade-in">
                        <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Appetizers" className="category-image" />
                        <div className="category-overlay">
                            <h3 className="category-name">Appetizers</h3>
                            <p className="items-count">14 tempting starters</p>
                        </div>
                    </div>
                    
                    <div className="category-card fade-in">
                        <img src="https://images.unsplash.com/photo-1606755962773-d324e3832345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Burgers" className="category-image" />
                        <div className="category-overlay">
                            <h3 className="category-name">Burgers</h3>
                            <p className="items-count">9 gourmet selections</p>
                        </div>
                    </div>
                    
                    <div className="category-card fade-in">
                        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Soups" className="category-image" />
                        <div className="category-overlay">
                            <h3 className="category-name">Soups</h3>
                            <p className="items-count">7 comforting bowls</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className="floating-cart">
                <i className="fas fa-shopping-bag"></i>
                View Cart
                <div className="cart-badge">0</div>
            </button>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>FlavorFusion</h3>
                        <p>Experience the finest culinary journey with our expertly crafted dishes and exceptional service.</p>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-tripadvisor"></i></a>
                        </div>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <div className="contact-info">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>123 Gourmet Street, Food District<br />Mumbai, India - 400001</p>
                        </div>
                        <div className="contact-info">
                            <i className="fas fa-phone"></i>
                            <p>+91 98765 43210</p>
                        </div>
                        <div className="contact-info">
                            <i className="fas fa-envelope"></i>
                            <p>info@flavorfusion.com</p>
                        </div>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Opening Hours</h4>
                        <p><strong>Monday - Friday:</strong><br />11:00 AM - 11:00 PM</p>
                        <p><strong>Weekends:</strong><br />10:00 AM - 12:00 AM</p>
                        <p><strong>Last Order:</strong> 10:30 PM</p>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; 2024 FlavorFusion Restaurant. All rights reserved. | Crafted with <i className="fas fa-heart" style={{color: 'var(--primary-red)'}}></i></p>
                </div>
            </footer>
        </>
    );
};

export default App;
