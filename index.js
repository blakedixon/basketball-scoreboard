let homeScore = 0;
let awayScore = 0;

function addPoints(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById('home-score').textContent = homeScore;
    } else if (team === 'away') {
        awayScore += points;
        document.getElementById('away-score').textContent = awayScore;
    }
    
    // Update leader highlighting
    updateLeader();
}

function newGame() {
    homeScore = 0;
    awayScore = 0;
    document.getElementById('home-score').textContent = '0';
    document.getElementById('away-score').textContent = '0';
    
    // Remove leader highlighting
    document.querySelector('.team-section').classList.remove('leader');
    document.querySelectorAll('.team-section')[1].classList.remove('leader');
}

function updateLeader() {
    const homeSection = document.querySelector('.team-section');
    const awaySection = document.querySelectorAll('.team-section')[1];
    
    // Remove leader class from both sections
    homeSection.classList.remove('leader');
    awaySection.classList.remove('leader');
    
    // Add leader class to the team with higher score
    if (homeScore > awayScore) {
        homeSection.classList.add('leader');
    } else if (awayScore > homeScore) {
        awaySection.classList.add('leader');
    }
    // If scores are equal, neither team is highlighted
}
