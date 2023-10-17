const popUpDiv = document.querySelector('.pop-up-div');
const popUpClose = document.querySelector('.pop-up-close');
const popUpContainer = document.querySelector('.pop-up-container');
const button1 = document.querySelector('.button1');

const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const button6 = document.querySelector('.button6');
const button7 = document.querySelector('.button7');
const button8 = document.querySelector('.button8');
const button9 = document.querySelector('.button9');
const button10 = document.querySelector('.button10');

button1.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">WHATSAPP SCAVENGER</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;"> Complete various challenges right here in the chat. Look out for clues, emojis, and riddles, and have fun solving them to advance.
        </p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp; VIGNESH
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+917904540990'">+91 7904540990        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;: &nbsp; &nbsp; 100Rs/Team
        </h4>
        </br>
      </br>
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>Maximum number of participants in a Team is 4.</li>
<li>Bring your college ID-Card  on event day.</li>
<li>Round elimination is followed</li>
<li>Complete the given task in 1 hour</li>
<li>The winners will be awarded with the grand prize.</li>
</ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ziaVah3xzPsG4hSq6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='../views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});

button4.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PUBG/FREE FIRE</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Scavenge for weapons, and strive to be the last person or team standing in a thrilling battle royale experience.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  SIBIRAJ & SAKTHIVEL 
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+916369968719'">+91 6369968719
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;: &nbsp; &nbsp; 100Rs/Team
        </h4>
        </br>
        </br>
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>Teams must consist of 4 members and no solo entry.</li>
<li>Registration prior to the day of the event is required to ensure participation.</li>
<li>Late entries are not allowed. </li>
<li>Only Squad match is allowed</li>
<li>The winners will be awarded with the grand prize</li>

            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ziaVah3xzPsG4hSq6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='../views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});

button3.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">VALORANT</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Choose agents with special abilities and work together to complete objectives like planting or defusing a spike. It's a game of strategy, precision, and teamwork that's gained popularity in the world of competitive gaming.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp; SIBIRAJ
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+916369968719
        '">+91 6369968719
        </button></h4>
        </br>
		<h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;: &nbsp; &nbsp; 100Rs/Team
        </h4>
		</br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>Teams must consist of 5 members and no solo entry.</li>
<li>Registration prior to the day of the event is required to ensure participation.</li>
<li>Late entries are not allowed. </li>
<li>Only Squad match is allowed</li>
<li>The winners will be awarded with the grand prize</li>
</ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ziaVah3xzPsG4hSq6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='../views/events.html'">Back to events</button></div>            
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