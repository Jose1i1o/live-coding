

var request = require("request");

// const options = {
//   method: 'POST',
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     key: "21e87ffeb3a477857f9a82f21fa43603"
//   },
//   body: JSON.stringify({
//     name: "Jose",
//     lastName: "Valenzuela",
//     email: "jose@gmail.com",
//     sendInvite: true
//   })
// };

// fetch('https://api.holded.com/api/team/v1/employees', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// const options = {
//   method: 'GET',
//   headers: {Accept: 'application/json', key: '21e87ffeb3a477857f9a82f21fa43603'}
// };

// fetch('https://api.holded.com/api/invoicing/v1/contacts', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


  // async function getUser() {
  //   try {
  //     const response = await fetch('https://api.holded.com/api/invoicing/v1/contacts', {
  //       method: 'GET',
  //       headers: {
  //         key: '21e87ffeb3a477857f9a82f21fa43603',
  //         accept: 'application/json'
  //       },
  //     });
  
  //     if(!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }
  
  //     const result = await response.json();
  //     return result;
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }
  
  // getUser();

  // fetch without failing to fetch
  


  const contactOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      key: '21e87ffeb3a477857f9a82f21fa43603'
    },
  body: JSON.stringify({
    name: "Jose",
    lastName: "Valenzuela",
    email: "jose@gmail.com",
    sendInvite: true
  })
};

  console.log('creating contact...');

  const result = fetch('https://api.holded.com/api/team/v1/employees', contactOptions)
  .then(response => response.json())
  .then(response => (
          console.log("contact created"),
          console.log(response)
  ))
  .catch(err => console.error(err));

  var options = {
    method: 'GET',
    url: 'https://api.holded.com/api/team/v1/employees',
    headers: {accept: 'application/json', key: '21e87ffeb3a477857f9a82f21fa43603'}
  };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    let array = JSON.parse(body)
    let suppliers = []
    //fs.writeFile("contacts.json", JSON.stringify(array) , function(err) {
    //    if(err) {
    //        return console.log(err);
    //    }
    //    console.log("The file was saved!");
    //}); 
  
    //array.forEach(function(contact){
    //	if (contact.type == "supplier") {
    //		console.log(contact.name)
    //	}
    //})
  
    //array.filter(function(contact){
    //	if (contact.type == "supplier") {
        //console.log(contact)
    //		return contact
    //	}
    //})
  });