const popUpDiv = document.querySelector('.pop-up-div');
const popUpClose = document.querySelector('.pop-up-close');
const popUpContainer = document.querySelector('.pop-up-container');
const button1 = document.querySelector('.button-js-1');


button1.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">QUREKA</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Here’s an exciting opportunity to know around on growing technologies. Test your memory by
            the quirky questions coming your way. Showcase your knowledge with your partner by answering
            the questions and become a Tech geek among your group.</p> <br>
            <div><button class="button-js-1 btn" style="width: 50%;" onclick="window.location.href='button-js-1'">CUSTOMARY RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
                <li>Before going ahead, Find the general rules attatched above</li>
                <li>The event includes one round of twenty questions.</li>
                <li>All participants will be provided with a college map.</li>
                <li>Participants should find the location with the hint where the question will be available with one of our team's organizers.</li>
                <li>The organiser will give the next question with a hint of the place after giving the answer to the question, and this will continue until the end of the questions.</li>
                <li>The allocation of points will be based on the position in which you find the answer.</li>
                <li>If there is a tie, there will be a ten-question on-the-spot quiz.</li>
                <li>Participation certificate will be provided for all the participants while an achievement certificate will be provided for the 1st & 2nd place holders with a cash prize.</li>
                <li>Panel decision is final</li>
            </ul>
            <ul>
                <li>Round 1: General Topic</li>
                <li>Round 2: Technical Topic</li>
            </ul>
            <h4>Student coordinator: Gokul N Ph. +91 8754411553</h4>
            <button class="button-js btn" style="width: 65%;" onclick="window.location.href='/views/technical-events.html'">Back to events</button>
        </div>
    </div>
    `;
});


function closeTag() {
	popUpDiv.style.display = 'none';
}
const video = document.querySelector('.section-container video source');

const setHeroVideoSize = () => {
	if (innerWidth <= 800) {
		video.setAttribute('src', '../assets/hero-1.mp4');
	} else {
		video.setAttribute('src', '../assets/hero.mp4');
	}
};

window.addEventListener('resize', setHeroVideoSize);
window.addEventListener('load', setHeroVideoSize);