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
    <h1 class="heading-pop-up">PAPER PRESENTATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">There is no innovation and creativity without failure. An opportunity to showcase your ability and comprehensive understanding of your disciplines. Mesmerize and attract your audience with your innovative presentation.
        </p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp; DINESH BOOPATHY
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+916380658862'">+91 7092580070        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>Maximum number of participants in a Team is 3.</li>
<li>Bring your college ID-Card on event day.</li>
<li>Kindly submit your PowerPoint presentation at elektronix2k23@gmail.com</li>
<li>The teams will get 10 minutes for presentation then followed by question and answer session.</li>
<li>Paper must be preceded by a cover page specifying the title of the paper, names of authors and their college names.</li>
<li>The decision of judges will be final and no arguments or appeal will be entertained.</li>
</ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ziaVah3xzPsG4hSq6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='../views/technical-events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});

button4.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">TECH QUIZ</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Demonstrate your technical abilities to become the all-time prodigy of tech quizzes.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  NITHIYA KUMAR
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+916380960199'">+91 6380960199
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>All participants must have their college Identification cards to be eligible for the event.</li>
<li>Registration prior to the day of the event is required to ensure participation.</li>
<li>There will be a total of 2 rounds.</li>
<li>A team of 2 participants are only permitted to take part. </li>
<li>The decision of the panel will be considered as final.</li>
<li>The quiz will constitute questions from core electronic field, Latest Science & Technology and Practical knowledge.</li>
<li>Participants will go through two rounds with bonus questions on their way to the finale round which will be a showdown between the top two teams.</li>
              
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ziaVah3xzPsG4hSq6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='../views/technical-events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});

button3.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">CONNEXXIONS</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Are you an expert in wordplay? wordsmith pro? Good at guessing? Then Buckle up with your buddies because this event is for you.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp; GUGANESH RAJ
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+918778482424
        '">+91 8778482424
        </button></h4>
        
		
		</br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>Only college teams are permitted to compete (team of 2 to 4) </li>
<li>There will be a total of 2 rounds.</li>
<li>Students from different colleges can form a team.</li>
<li>Each hint will be given in 30 seconds. </li>
<li>If the timer runs out, the speaker must stop speaking or lose points.</li>
<li>The winners will be awarded with the grand prize.</li>
<li>Judges decision is final</li>
</ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ziaVah3xzPsG4hSq6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='../views/technical-events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});
window.addEventListener("DOMContentLoaded", (event) => {
const button2 = document.querySelector('.button2');
if (elbutton2) {
button2.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PAPER PRESENTATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">There is no innovation and creativity without failure. An opportunity to showcase your ability and 
        comprehensive understanding of your disciplines. Mesmerize and attract your audience with your 
        innovative presentation.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;MAHARAJAN
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+918248230268
        '">+91 8248230268
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>Maximum number of participants in a Team is 3. </li>
<li>Abstract should not exceed more than 250 words and Paper should not exceed 15 pages. </li>
<li>Bring your college ID-Card & receipt on event day. </li>
<li>Kindly bring your PowerPoint presentation on a CD or on a pen-drive </li>
<li>Soft-copies of the submitted paper and PowerPoint presentations must be in the .docx format. </li>
<li>The teams will get 10 minutes for presentation then followed by question and answer session. </li>
<li>Paper must be preceded by a cover page specifying the title of the paper, names of authors and their college names. </li>
<li>The decision of judges will be final and no arguments or appeal will be entertained.</li>
</ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ziaVah3xzPsG4hSq6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='../views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;

});
}
});

button5.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PROJECT EXPO</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Efficacious way to present your ideas and explaining about it in a aspiring way. Engage & attract the audience by your mastery.
        </p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;ADITHYA

</h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919384949866'">+91 9384949866</button></h4>
        
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>Both Analysis projects and Functioning models are welcomed.</li>
<li>Functioning models need to be brought to the event for explanation presentation isn’t mandatory.</li>
<li>Analysis projects kindly follow the following specified framework for the presentation:
<ul>
<li>All competitors must have their college Identity cards to be eligible for the event.</li>
<li>Maximum number of members in a Team is 3,</li>
<li>15-minute time will be allotted for the team's presentation (including Q&A)</li>
<li>Aim for a maximum of 10 slides</li>
<li>While utilizing videos, generate a backup slide with screen shots of the key results. In case of using (Canva) template have your presentation in a PDF format, additionally for the assurance of compatibility.</li>
<li>The decision of jury will be final and no further appeal will be entertained.</li>
</ul>
</li>
</ul>
            
            
             <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ziaVah3xzPsG4hSq6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='../views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});
button6.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">MR. MACHINIST</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Precision and perfection are distinguishing characteristics in the mechanical sphere. Demonstrate 
        your ability to create.
        </p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  ADITHYA
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+918300354249
        '">+91 8300354249
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>Please find below the details of the two rounds, </li>
            <ul>
            <li>ROUND1: Tool/Machine identification o Round</li>
            <li>ROUND2: Model creation for the given diagram job.</li>
            <ul>
<li>Time consumption and accuracy of the job will be taken into account for the final</li>
<li>decision.</li>
<li>Tool room safety precautions are to be followed by the participants throughout</li>
<li>the event.</li>
<li>Damaging of tools or machines will lead to disqualification.</li>
<li>The Judges’ decision is conclusive.</li>
<li>Viva questions will be asked for final selection in the event of a tie.</li>
</ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/9abFUoQBVuzCyp359'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});
button7.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PROJECT PRESENTATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Efficacious way to present your ideas and explaining about it in a aspiring way. Engage & attract the 
        audience by your mastery.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  TAMILSELVAN, KAVIN KARTHIK V T
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919600728468
        '">+91 9600728468
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>Both Analysis projects and Functioning models are welcomed.</li>
            <li>     Functioning models need to be brought to the event for explanation presentation isn’t mandatory.</li>
            <li>     Analysis projects kindly follow the following specified framework for the presentation:</li>
            <ul>
            <li>All competitors must have their college Identity cards to be eligible for the event.</li>
                <li>Maximum number of members in a Team is 2,</li>
                <li>15-minute time will be allotted for the team's presentation (including Q&A)</li>
                <li>Aim for a maximum of 10 slides,</li>
                <li>Ensure sure all axes in graphs are labelled. and add one topic per slide.</li>
                <li>While utilizing videos, generate a backup slide with screen shots of the key results. In case of using (Canva) template have your presentation in a PDF format, additionally for the assurance of compatibility.</li>
                <li>The decision of jury will be final and no further appeal will be entertained.</li>
            </ul>
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/T6mpxZaBjGANNUUy8'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});
button8.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">FINDERS KEEPERS</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Too tired with the conventional treasure hunt? Prepare your heads and put on your thinking caps! 
        Let's make the Hunt more exciting.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  NITHISH
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919042763522
        '">+91 9042763522
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>Contest will be conducted in Batch wise segregation.</li>
<li>Participants will be segregated into 3 teams at random.</li>
<li>Each team consists of 2 participants.</li>
<li>Clues will be displayed as QR code.</li>
<li>Participants are requested to scan their respective QR with their team name on them.</li>
<li>6 clues will be provided.</li>
<li>The team to find the clues and the parts will be finalized as winners.</li>
<li>Teams which find the parts will be awarded bonus points.</li>
<li>Team will be finalized by means of time</li>
<li>Bonus points will used for time reduction</li>
</ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/YQWffsYRZpckWdVD8'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});
button9.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">CYCLE ASSEMBLY</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Life is similar like riding a bicycle. You must keep moving to maintain your equilibrium. Here's a test 
        to determine how quickly you can assemble components of dismantled bicycles.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  ARUNACHALAM
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='+916385160996'">+91 6385160996</button></h4>
        
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>Teams should consist of 2 to 3 members only. </li>
<li>An ID Card or Bonafide is mandatory.</li>
<li>Round 1 is the MCQ Question. </li>
<li>Only after clearing first round, team will move to Round 2. </li>
<li>Round 2 is cycle assembly. </li>
<li>Time will be considered and monitored. </li>
<li>There will be Round 3 in case of a tie.</li>
<li>Panel decision will be final.</li>
<li>Not allowed to use electric gadgets in the room</li>
</ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/FxCPREQtXAfMmYPr9'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});
button10.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">TECH PUZZLE</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">It's a puzzle! Not the type you believe it's unique in every way. Look out for a Tech</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  SHAKTHIVEL
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='9840442033
        '">+919840442033
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
<li>In order to participate in Tech Puzzle, participants should register in the link below. </li>
<li>A team of three participants are only permitted to take part in the event. </li>
<li>Puzzles were based on the parts and process involved in Mechanical field. </li>
<li>Participants can discuss with their team members and answer the question. </li>
<li>A member of the participants needs to arrange the puzzle by the instructions given by their other two team members. </li>
<li>45 seconds will be given to answer the questions. </li>
<li>Participants were allowed to use their one lifeline for the hint. </li>
<li>Hints are given only by the panel members. </li>
<li>The winners will be selected according to the score.</li>
</ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/LGWtz39eMemanEx99'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>            
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