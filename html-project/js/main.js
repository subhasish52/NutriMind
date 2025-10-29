// ==================== MAIN JAVASCRIPT ====================

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initFAQ();
    initScrollAnimations();
    checkAuth();
});

// ==================== FAQ FUNCTIONALITY ====================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// ==================== AUTHENTICATION ====================
function checkAuth() {
    const user = localStorage.getItem('nutrimind_user');
    const navAuth = document.querySelector('.nav-auth');
    
    if (user && navAuth) {
        const userData = JSON.parse(user);
        navAuth.innerHTML = `
            <div class="user-menu">
                <div class="user-avatar">${userData.name.charAt(0).toUpperCase()}</div>
                <div class="user-dropdown">
                    <a href="pages/profile.html">
                        <i class="fas fa-user"></i> Profile
                    </a>
                    <a href="pages/subscription.html">
                        <i class="fas fa-credit-card"></i> Subscription
                    </a>
                    <a href="pages/health-tracking.html">
                        <i class="fas fa-heartbeat"></i> Health Tracking
                    </a>
                    <hr>
                    <a href="#" onclick="logout()">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </a>
                </div>
            </div>
        `;
    }
}

function logout() {
    localStorage.removeItem('nutrimind_user');
    localStorage.removeItem('nutrimind_auth');
    window.location.href = '../index.html';
}

// ==================== FORM VALIDATIONS ====================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add CSS if not exists
    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            .toast {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                padding: 1rem 1.5rem;
                background-color: hsl(var(--card));
                border: 1px solid hsl(var(--border));
                border-radius: var(--radius-md);
                box-shadow: 0 10px 30px hsl(var(--foreground) / 0.15);
                display: flex;
                align-items: center;
                gap: 0.75rem;
                z-index: 10000;
                animation: slideIn 0.3s ease-out;
            }
            
            .toast-success { border-left: 4px solid #22c55e; }
            .toast-error { border-left: 4px solid #ef4444; }
            
            .toast i {
                font-size: 1.25rem;
            }
            
            .toast-success i { color: #22c55e; }
            .toast-error i { color: #ef4444; }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== LOADING SPINNER ====================
function showLoader() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = '<div class="spinner"></div>';
    
    if (!document.getElementById('loader-styles')) {
        const style = document.createElement('style');
        style.id = 'loader-styles';
        style.textContent = `
            .loader {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: hsl(var(--background) / 0.8);
                backdrop-filter: blur(4px);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            }
            
            .spinner {
                width: 48px;
                height: 48px;
                border: 4px solid hsl(var(--muted));
                border-top-color: hsl(var(--primary));
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
            }
            
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(loader);
    return loader;
}

function hideLoader(loader) {
    if (loader) {
        loader.remove();
    }
}

// Export functions for use in other scripts
window.validateEmail = validateEmail;
window.validatePassword = validatePassword;
window.showToast = showToast;
window.showLoader = showLoader;
window.hideLoader = hideLoader;
window.logout = logout;