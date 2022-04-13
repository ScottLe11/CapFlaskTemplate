export default class Timer {
    constructor(root){
     console.log(root);
     root.innerHTML = Timer.getHTML();

     this.el = {
         minutes: root.querySelector("timer-part-minute"),
         seconds: root.querySelector("timer-part-seconds"),
         control: root.querySelector("timer-button-control"),
         reset: root.querySelector("timer-button-reset")
     };

     console.log(this.el);

     this.interval = null;
     this.remainingSeconds = 90;

     this.updateInterfaceTime();

     this.el.control.addEventListener("click", () => {


        });

     this.el.reset.addEventListener("click", ()=> {


        });
    }    

    updateInterfaceTime(){
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;
    console.log(minutes, seconds);

    }

    static getHTML() {
        return `
         <h1>Countdown Timer page</h1>
         <span class="timer-part timer-part-minute">00</span>
         <span class="timer-part">:</span>
         <span class="timer-part timer-part-seconds">00</span>
         <button type="button" class="timer-button timer-button-control timer-button-start" >Start</button>
         <button type="button" class="timer-button timer-button-reset" >Reset</button>


        `;
    }
}