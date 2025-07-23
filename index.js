let homeScore = 0;
let guestScore = 0;

function addPoints(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById('home-score').textContent = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        document.getElementById('guest-score').textContent = guestScore;
    }
    
    // Update leader highlighting
    updateLeader();
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById('home-score').textContent = '0';
    document.getElementById('guest-score').textContent = '0';
    
    // Remove leader highlighting
    document.querySelector('.team-section').classList.remove('leader');
    document.querySelectorAll('.team-section')[1].classList.remove('leader');
}

function updateLeader() {
    const homeSection = document.querySelector('.team-section');
    const guestSection = document.querySelectorAll('.team-section')[1];
    
    // Remove leader class from both sections
    homeSection.classList.remove('leader');
    guestSection.classList.remove('leader');
    
    // Add leader class to the team with higher score
    if (homeScore > guestScore) {
        homeSection.classList.add('leader');
    } else if (guestScore > homeScore) {
        guestSection.classList.add('leader');
    }
    // If scores are equal, neither team is highlighted
}
