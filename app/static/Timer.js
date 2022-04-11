export default class Timer {
    constructor(root){
     console.log(root);
     root.innerHTML = Timer.getHTML();
    }    

    static getHTML() {
        return `
         <h1>Countdown Timer page</h1>
         <span class="timer-part timer-part-minute">00</span>
         <span class="timer-part">:</span>
         <span class="timer-part timer-part-minute">00</span>
         <button type="button" class="timer-button timer-button-control timer-button-start" >Start</button>
         <button type="button" class="timer-button timer-button-reset" >Reset</button>


        `;
    }
}