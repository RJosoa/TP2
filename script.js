async function getID() {
   const response = await fetch('https://randomuser.me/api/');
   const data = await response.json();
   const result = data.results[0]
   const imgProfile = document.querySelector('img');
   imgProfile.src = result.picture.large
   
   const nom = document.querySelector('.nom');
   nom.textContent = "nom: " + result.name.first +" "+ result.name.last;
   
   const email = document.querySelector('.email')
   email.textContent = "email: "+result.email

   const genre = document.querySelector('.genre');
   genre.textContent = result.gender
   
   const nationnalite = document.querySelector('.nationnalite')
   nationnalite.textContent = "nat: " + result.nat

   const age = document.querySelector('.age')
   age.textContent = result.dob.age + " ans"

   const contry = document.querySelector('.contry')
   contry.textContent = "pays: " + result.location.country

   const state = document.querySelector('.state')
   state.textContent = "region: " + result.location.state
   
   const city = document.querySelector('.city')
   city.textContent = "ville: " + result.location.city
   


   
}

getID()