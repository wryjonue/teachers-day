


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

let hue = Math.floor(Math.random() * 361);

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

-Julianna (Mayor)
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

-dattebayo`





]