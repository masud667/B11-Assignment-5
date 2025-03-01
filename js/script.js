document.getElementById('middleBox').addEventListener("click", function(){
    window.location.href = 'blogs.html'
})



const buttons = document.querySelectorAll(".completedBtn");
for(const button of buttons ){
    button.addEventListener('click', function(){
        alert("Click OK");

        // checkbox counting 
        const count1 = parseInt(document.getElementById('count1').innerText);
        const count2 = parseInt(document.getElementById('count2').innerText);
        document.getElementById('count1').innerText = Math.max(0, count1 + 1);
        document.getElementById('count2').innerText =Math.max(0, count2 - 1);

        // disable button 
        this.disabled = true;
        
    })
}



