document.getElementById('middleBox').addEventListener("click", function(){
    window.location.href = 'blogs.html'
})



const buttons = document.querySelectorAll(".completedBtn");
let newAlert = 0;
for(const button of buttons ){
    button.addEventListener('click', function(){
        alert("Board Update Successfully");

        // checkbox counting 
        const count1 = parseInt(document.getElementById('count1').innerText);
        const count2 = parseInt(document.getElementById('count2').innerText);
        document.getElementById('count1').innerText = Math.max(0, count1 + 1);
        document.getElementById('count2').innerText =Math.max(0, count2 - 1);

        // disable button 
        this.disabled = true;


        // current date and time 


        const time = new Date();
        const currentTime= time.toLocaleTimeString('en-US', 
          {
              hour: 'numeric',
              minute: 'numeric',
              second : 'numeric',
              hour12 : true 
          })
      
        // History Container
        const historyContainer = document.getElementById('historyContainer');
         const card = this.closest('.card-body');
         const title = card.querySelector(".card-title").innerText;
       const history = document.createElement('p');
       history.innerHTML= `
        You Have Compeleted the ${title} at ${currentTime}
       `
       history.style.backgroundColor = '#F4F7FF'
       history.style.padding = '16px'
       historyContainer.appendChild(history);

    newAlert++;
    if (newAlert === buttons.length) {
        alert('Congrats!! You have compeleted all the current task')
    }
    })
}

// clean history 
    document.getElementById('clearHistory').addEventListener('click', function(){
    document.getElementById('historyContainer').innerHTML = "";
})

// currentDate
    const timeNow = new Date();
    const currentDate= timeNow.toLocaleDateString('en-US', 
    {
        day: 'numeric',
        month : 'long',
        year : 'numeric'
    })
    const day = timeNow.toLocaleDateString('en-US',{ weekday:"short"} );

     document.getElementById('weekenDay').innerText = day;
     document.getElementById('currentDateId').innerText = currentDate;