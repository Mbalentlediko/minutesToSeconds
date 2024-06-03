const minutesInput = document.getElementById('minutesInput');
 const calculateButton = document.getElementById('calculateButton');
 const secondsOutput = document.getElementById('secondsOutput');
 
 calculateButton.addEventListener('click', () => {
     const minutes = parseFloat(minutesInput.value);
     if (!isNaN(minutes)) {
         const seconds = minutes * 60;
         secondsOutput.textContent = `${minutes} minutes is equal to ${seconds} seconds.`;
     } else {
         secondsOutput.textContent = 'Please enter a valid number of minutes.';
     }
 });