export default class Timer {
    constructor(root){
     console.log(root);
     root.innerHTML = Timer.getHTML();

     this.el = {
         minutes: root.querySelector(".timer-part-minute"),
         seconds: root.querySelector(".timer-part-seconds"),
         control: root.querySelector(".timer-button-control"),
         reset: root.querySelector(".timer-button-reset")
     };

     console.log(this.el);

     this.interval = null;
     this.remainingSeconds = 0;

     this.start();
     

     this.el.control.addEventListener("click", () => {
        if(this.interval === null){
            this.start();
        }else {
            this.stop();
        }

    });

     this.el.reset.addEventListener("click", ()=> {
            const inputMin = prompt("Enter # of mins: ")

            if(inputMin <= 60) {
                this.stop();
                this.remainingSeconds = inputMin * 60;
                this.updateInterfaceTime();
            }else{
                alert("Cannot enter time more than 60 min");
            }

        });
    }    

    updateInterfaceTime(){
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;
    
    this.el.minutes.textContent = minutes.toString().padStart(2,"0")
    this.el.seconds.textContent = seconds.toString().padStart(2,"0")
    }

    updateInterfaceControl(){
        if (this.interval === null){
            document.querySelector("#controlButton").textContent = "Start";
            this.el.control.classList.add(".timer-button-start");
            this.el.control.classList.remove(".timer-button-stop");
        }else{
            document.querySelector("#controlButton").textContent = "Pause";
            this.el.control.classList.add(".timer-button-stop");
            this.el.control.classList.remove(".timer-button-start");
            
        }

    }

    start() {
        if(this.remainingSeconds === 0 )
            return;

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();

        if(this.remainingSeconds === 0 ) {
            this.stop();
            var linkJournal = confirm("Congratulations \nYou've complete this work session!!\nGo to 'Entries' to journal your thoughts ")
            console.log(linkJournal)
            if (linkJournal == true){
                console.log("I pressed Okay");
            }
            else {
                console.log("I pressed cancel");
            }
            
            ;
        }
        }, 1000);

        this.updateInterfaceControl();
    }

    stop() {
       clearInterval(this.interval);

       this.interval = null;

       this.updateInterfaceControl();
    }

    


    static getHTML() {
        return `
         <h1 class="timerTitle" >Countdown Timer page</h1>
         <br>
         
         <img src="/static/treeGif.gif" class="treeGif">
         <br>
         <br>
         <div class="timerOther1">
         <div class="border border-primary timerOther border border-4">
         <span class="timer-part timer-part-minute">00</span>
         <span class="timer-part">:</span>
         <span class="timer-part timer-part-seconds">00</span>
         <button type="button" class="timer-button timer-button-control timer-button-start" id="controlButton">Start</button>
         <button type="button" class="timer-button timer-button-reset" >Reset</button>
         </div>
         </div>

        `;
    }
}