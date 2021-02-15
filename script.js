document.addEventListener('DOMContentLoaded', function() {
   const checkbox = document.querySelector('input[type="checkbox"]'),
   API_KEY = 'get your own api key from https://developers.giphy.com/',
   bg = document.querySelector('.bg'),
   stopBtn = document.querySelector('.stop'),
   recommendedPlan = document.querySelector('.recommended-plan'),
   teamPlan = document.querySelector('.team-plan'),
   pricingTitle = document.querySelector('.pricing-title'),
   pricingCards = document.querySelector('.pricing-columns'),
   toggleColor = document.querySelector('.toggle'),
   darkGrey = '#303030',
   white = '#fff';

   pricingTitle.style.color = pricingCards.style.color = toggleColor.style.color = darkGrey;

   


   checkbox.addEventListener('change', function() {

    pricingTitle.style.color = pricingCards.style.color = toggleColor.style.color = white;

      
    const randomNumData = Math.floor(Math.random() * 49),
    randomWordData = Math.floor(Math.random() * 3);


       if (checkbox.checked) {
           //console.log(checkbox.checked)
           const goodFunc = async () => {
               try {
                   teamPlan.innerHTML = '£90/ year';
                   recommendedPlan.innerHTML = '£72/ year';
                   const wordsGood = ['approve', 'happy', 'thumbs up'];
                   const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${wordsGood[randomWordData]}`);
                   const json = await response.json();
                   bg.style.backgroundImage = `url('${json.data[randomNumData].images.original.url}')`


               } catch(err) {
                   console.log(err)
               }
           }
           goodFunc();
       } else {
        //console.log(checkbox.checked)
        const badFunc = async () => {
            try {
                teamPlan.innerHTML = '£12/ month';
                recommendedPlan.innerHTML = '£9/ month';
                const wordsBad = ['sad', 'crying', 'shocked'];
                const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${wordsBad[randomWordData]}`);
                const json = await response.json();
                bg.style.backgroundImage = `url('${json.data[randomNumData].images.original.url}')`

            } catch(err) {
                console.log(err)
            }
        }
        badFunc();

       }
   });
   stopBtn.addEventListener('click', function() {
       bg.style.backgroundImage = "url('none')";
       pricingTitle.style.color = pricingCards.style.color = toggleColor.style.color = darkGrey;

   })


});