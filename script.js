async function getID() {
   const response = await fetch('https://randomuser.me/api/');
   const data = await response.json();
   return data.results;
   
}

getID()