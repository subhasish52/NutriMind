// Authentication Functions

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Demo authentication
    if (username === 'demo' && password === 'demo123') {
        const user = {
            username: username,
            email: 'demo@nutrimind.ai',
            name: 'Demo User',
            membershipPlan: 'Premium',
            fitnessGoals: ['Weight Loss', 'Muscle Gain']
        };
        
        localStorage.setItem('nutrimind_user', JSON.stringify(user));
        showToast('Login successful! Welcome back!');
        
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);
    } else {
        showToast('Invalid credentials. Try demo/demo123', 'error');
    }
}

function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!validateEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    if (password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }
    
    const user = {
        username: email.split('@')[0],
        email: email,
        name: name,
        membershipPlan: 'Basic',
        fitnessGoals: []
    };
    
    localStorage.setItem('nutrimind_user', JSON.stringify(user));
    showToast('Account created successfully!');
    
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1500);
}

function handleProfileUpdate(event) {
    event.preventDefault();
    
    const user = JSON.parse(localStorage.getItem('nutrimind_user'));
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    user.name = document.getElementById('name').value;
    user.email = document.getElementById('email').value;
    user.phone = document.getElementById('phone').value || '';
    user.fitnessGoals = Array.from(document.querySelectorAll('input[name="goals"]:checked')).map(el => el.value);
    
    localStorage.setItem('nutrimind_user', JSON.stringify(user));
    showToast('Profile updated successfully!');
}

// Check auth on protected pages
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('nutrimind_user'));
    if (!user) {
        window.location.href = 'login.html';
    }
    return user;
}