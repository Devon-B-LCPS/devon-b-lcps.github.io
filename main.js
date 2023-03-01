const navBarContainer = document.getElementById('navBarContainer');
const ourMissionContainer = document.getElementById('ourMissionContainer');
const learnMoreContainer = document.getElementById('learnMoreContainer');
const aboutUsContainer = document.getElementById('aboutUsContainer');
const ourMissionBtn = document.getElementById('ourMission');
const learnMoreBtn = document.getElementById('learnMore');
const aboutUsBtn = document.getElementById('aboutUs');

function activePage(value) {
    if (value == 0) {
        ourMissionBtn.style.color = 'orange';
    } else {
        ourMissionBtn.style.color = 'white';
    }
    if (value == 1) {
        learnMoreBtn.style.color = 'orange';
    } else {
        learnMoreBtn.style.color = 'white';
    }
    if (value == 2) {
        aboutUsBtn.style.color = 'orange';
    } else {
        aboutUsBtn.style.color = 'white';
    }
};

// Update the active page on click.
function setActivePage(value) {
    ourMissionContainer.style.display = (value == 0) ? 'block' : 'none';
    learnMoreContainer.style.display = (value == 1) ? 'block' : 'none';
    aboutUsContainer.style.display = (value == 2) ? 'block' : 'none';
    activePage(value);
};

// Set active page to "Our Mission" on startup.
setActivePage(0);