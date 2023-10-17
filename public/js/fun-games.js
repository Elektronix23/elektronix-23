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
    <h1 class="heading-pop-up">GET RID OF PYRAMID</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">It's all about balance and teamwork!
        </p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp; SRIDHAR
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+917092501329'">+91 7092501329        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>Each team consists of 7 members.</li>
<li>No substitutions are allowed once the game begins.</li>
<li>All team members must carry the paper cups inverted on their heads.</li>
<li>Participants are not allowed to use their hands or any other body parts to hold the cups during transportation.</li>
<li>The teams must follow the designated path to the endpoint and deviating from the path is not allowed and may result in penalties.</li>
<li>At the endpoint, one team member will be responsible for collecting the inverted cups from their teammates.</li>
<li>The collected cups will be used to construct the pyramid.</li>
<li>The game has a time limit for both transportation and pyramid construction phases and teams must complete both phases within the allocated time.</li>
<li>Points are awarded for successfully transporting the cups and constructing the pyramid and the team with the highest score wins.</li>
</ul>
            
            
           <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ziaVah3xzPsG4hSq6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='../views/fun-games.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});

button4.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">CATCH ME IF U CAN</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">A high-speed showdown to grab a bottle when the instructor says 'bottle.' Fastest hand wins!"</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  ADITHYA 
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919384949866'">+91 9384949866
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>Each team consists of 2 members.</li>
<li>Participants must stand facing each other with a bottle placed equidistant between them.</li>
<li>The instructor will provide a series of instructions and when the instructor says "bottle," participants must attempt to grab the bottle. </li>
<li>Participants are only allowed to grab the bottle when the instructor says "bottle."</li>
<li>Any attempts to grab the bottle before the cue are not allowed.</li>
<li>The participant or team that successfully grabs the bottle first, following the instructor's cue, is the winner of that round.</li>
<li>The instructor's decisions are final in all matters related to the game.</li>
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ziaVah3xzPsG4hSq6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='../views/fun-games.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});

button3.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">WHAT'S THE WORD</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">"It's all about non-verbal communication and quick thinking!"</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  GUGANESH RAJ
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+918778482424
        '">+91 8778482424
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>Each team consists of 3 members and one member of the team will wear the Boom Headset. </li>
<li>An instructor is responsible for providing the word that needs to be conveyed.</li>
<li>The instructor selects a word and informs the person wearing the Boom Headset discreetly.</li>
<li>The person with the Boom Headset must communicate the word to their teammates without using any verbal language or written communication.They can use gestures, facial expressions, body language, and actions to convey the word. </li>
<li>The teammates have a limited time to guess the word.</li>
<li>Emphasize that no verbal communication or spoken hints are allowed.</li>
<li>The instructor's decisions regarding word selection, scoring, and adherence to rules are final.</li>
</ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ziaVah3xzPsG4hSq6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='../views/fun-games.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});

button5.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">OPEN TALENT</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">A showcase of diverse skills and abilities from people of all backgrounds. From music to dance, art to innovation, this event celebrates the incredible talents of individuals, creating a space for self-expression and recognition.
        </p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;SIBIRAJ

</h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+916369968719'">+91 6369968719</button></h4>
        
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>Participants must register or sign up to take part.</li>
<li>Specify the talent categories (e.g., music, dance, art, innovation) for participants to choose from.</li>
<li>Define a time limit for each performance to ensure fairness and a smooth event flow.</li>
<li>Participants are encouraged to present original acts or routines.</li>
<li>Plagiarism or copyright infringement is strictly prohibited.</li>
<li>Participants are responsible for bringing their own props.</li>
<li>The judges' decisions will be considered final.</li>
</ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ziaVah3xzPsG4hSq6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='../views/fun-games.html'">Back to events</button></div>            
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