async function init() {
    for (let i of messages) {
        await sleep(200);
        let thecard = document.createElement("div");
        thecard.classList.add("flip-container");
        let thebutton = document.createElement("button");
        thebutton.classList.add("flip-card");
        thebutton.onclick = (evt) => {
            thebutton.style.transform = "rotateY(180deg)";
        }
        thebutton.innerHTML = `
            <div class="flip-card-front"></div>
            <div class="flip-card-back" style="background: hsl(${getHue() * 4},80%,80%)">${i.replace(/\n/g, "<br>")}</div>
        `
        thecard.appendChild(thebutton);
        document.body.appendChild(thecard);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = () => {
  console.log("DOM is ready!");
  init();
};

function getHue() {
    return Math.floor(Math.random() * 91);
}


const messages = [

`sana passing po kami sa comprog, more worksheets to come! 

ps. lagay na po kayo maid cos sa amazon wishlist nyo, ako na bibili 🤭

-Dimitri`,

`“Hello po sir roberts, kahit po madami po kayong pinapacode, may natututunan nmn po aku , happy teacher’s day and also nya nya nyah!”

-Mayor
`,

`Sana po mabatak ng madaming activities ang grade po namin happy teacher's day po and thank you po 🥰 nakaka inspire gumawa ng sariling web at app


- Ate Gella`,

`Happy Teachers' Day, Sir Robert! We just want to say thank you for your dedication, your endless patience, and for making every lesson not just educational, but genuinely fun.

-rei`,


`Hello po sir irish Thank you for your tireless understanding of us and for the efforts you give us.happy teachers day and take care:>

-Jas`,

`ty sir!

- dondi`,

`Happy Teacher's Day, Sir Robert! You are a wonderful role model to us as our professor, always wanting what's best for your students :))

-Aliyah`,

`happy teacher's day, sana mabuhay ka po ng matagal!

-dattebayo`,

`
Happy Teacher's Day Sir Irish  Thank you for teaching and inspiring us.

-Aeron
`,

`Happy teachers day sir Robert Naway maging mabait po kayo na guro sa aming lahat arigato amen

-Nico`,

`Thank you po, Sir Robert! Kahit minsan sumasakit na utak ko sa lessons, worth it kasi ang dami kong natututunan. You make learning feel like a challenge sa ML hirap pero panalo sa dulo!!

-youli `,

`Happy Teacher's Day, Sir Robert !

{\\_/}
( ^-^)
(>💐

- ghail`,

`.-.. --- -. --. / .-.. .. ...- . / ... .. .-. / .-. --- -... . .-. - -.-.-- -.-.-- -.-.-- -.-.-- -.-.-- / -. . -.- --- / -. . -.- --- / -. -.-- .- -.-.-- -.-.-- -.-.-- -.-.-- -.-.--

-Achi`,

`//Happy teacher day po ser irish !

public class Main {
	public static void main(String[] args) {
		
	}
}

- derick`,


`import java. util. Scanner; 

Ayy.,,,..mali :{}

Hi, Sir Robert!

Thank you so much for your endless patience in teaching us programming. Even though the subject can be really challenging, you’ve always been there to guide us with dedication and understanding. 

Happy Teacher’s Day po! 

—vnuei`,

`Happy teachers month po sir, thank you po.

—ken`,

`hello po sir robert!! halos maiyak na po ako sa sub na ito pero i'm glad na kayo po yung nagtuturo kasi na eenjoy po namin way of teaching niyo hehe. Kahit mahirap mga worksheets, I can say na marami po kaming natutunan sainyo. Thank you po sir!!

-margago`,

`
Hi po sir! Happy Teacher's Month po! wala po ako maisip pero thank youuu po for teaching us kahit wala na akong tulog sa subj nyo hehe love lots!

—syd`,

`labyou ser

-j`,

`︵‿︵‿୨♡୧‿︵‿︵
 
˚₊· ͟͟͞͞➳❥HAPPY TEACHERS DAY SIR⋆. 𐙚˚࿔ ROBERT 𝜗𝜚˚⋆◛⑅·˚ ༘ ♡
•┈••✦  ✦••┈•

From:♡*ೃ˚ :ZYRELL:;✎ (❁ᴗ͈ˬᴗ͈) ༉‧ ♡*.✧`

]