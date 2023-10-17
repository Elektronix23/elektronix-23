const popUpDiv = document.querySelector('.pop-up-div');
const popUpClose = document.querySelector('.pop-up-close');
const popUpContainer = document.querySelector('.pop-up-container');
const button1 = document.querySelector('.button1');


button1.addEventListener('click', () => {
    popUpDiv.style.display = 'block';
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">DATA SCIENCE</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Discover the world of data science at our workshop, sponsored by LIVEWIRE and CADD Training Centre, Vellore. Gain insights into data analysis, machine learning, and decision-making with real-world data.
        </p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='../views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp; MOHAMMED IMRAN
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919566059602'">+91 9566059602        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;: &nbsp; &nbsp; 100Rs/Team
        </h4>
		</br>
        </br>
      
        

            <h1>WORKSHOP DETAILS</h1>
            <ul>
<li>Only college students are permitted to compete.</li>
<li>A valid college ID is mandatory.</li>
<li>Prior registration is required, either online or on spot before (9:00 AM)</li>
<li>No re-entry is permitted and the entry fee is non-refundable.</li>
<li>Certificates will be provided.</li>
</ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ziaVah3xzPsG4hSq6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='../views/workshop.html'">Back to events</button></div>            
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