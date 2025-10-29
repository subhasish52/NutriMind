// ==================== AUTHENTICATION ====================

// Demo users for testing
const DEMO_USERS = [
    {
        email: 'user@nutrimind.ai',
        password: 'demo123',
        name: 'Rahul Sharma',
        membershipPlan: 'Pro Plan'
    },
    {
        email: 'test@nutrimind.ai',
        password: 'test123',
        name: 'Priya Kumar',
        membershipPlan: 'Custom Plan'
    }
];

// ==================== LOGIN ====================
function handleLogin(email, password) {
    // Find user
    const user = DEMO_USERS.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Save user data (without password)
        const userData = {
            email: user.email,
            name: user.name,
            membershipPlan: user.membershipPlan
        };
        
        storage.set('user', userData);
        storage.set('auth', true);
        
        return { success: true, user: userData };
    } else {
        return { success: false, message: 'Invalid email or password' };
    }
}

// ==================== SIGNUP ====================
function handleSignup(name, email, password) {
    // Check if user already exists
    const existingUser = storage.get('users') || [];
    const userExists = existingUser.find(u => u.email === email);
    
    if (userExists) {
        return { success: false, message: 'Email already registered' };
    }
    
    // Create new user
    const newUser = {
        email,
        name,
        membershipPlan: 'Beginner Plan',
        createdAt: new Date().toISOString()
    };
    
    // Save user
    existingUser.push(newUser);
    storage.set('users', existingUser);
    storage.set('user', newUser);
    storage.set('auth', true);
    
    return { success: true, user: newUser };
}

// ==================== LOGOUT ====================
function handleLogout() {
    storage.remove('user');
    storage.remove('auth');
}

// ==================== CHECK AUTH STATUS ====================
function isAuthenticated() {
    return storage.get('auth') === true && storage.get('user') !== null;
}

// ==================== GET CURRENT USER ====================
function getCurrentUser() {
    return storage.get('user');
}

// ==================== PROTECT PAGES ====================
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = '../pages/login.html';
    }
}

// ==================== REDIRECT IF AUTHENTICATED ====================
function redirectIfAuth() {
    if (isAuthenticated()) {
        window.location.href = '../pages/profile.html';
    }
}

// Export functions
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.handleLogout = handleLogout;
window.isAuthenticated = isAuthenticated;
window.getCurrentUser = getCurrentUser;
window.requireAuth = requireAuth;
window.redirectIfAuth = redirectIfAuth;