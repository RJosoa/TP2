async function getID() {
   const response = await fetch('https://randomuser.me/api/');
   const data = await response.json();
   console.log(data.results[0].id);
   return data.results;
   
}

getID()