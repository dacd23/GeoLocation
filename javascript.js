//GeoLocation API
let button = document.getElementById('geolocation');


function geoLocation() {

  let location = document.getElementById('location');
  let mapLink = document.getElementById('map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    location.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    location.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    location.textContent = 'Geolocation is not supported by your browser';
  } else {
    location.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

};


button.addEventListener('click', geoLocation);





/*Object creation

class Persona{
  consturctor(name, surname, age){
    this.name = name
    this.surname = surname
    this.age = age

    this.datos = `my name is ${this.name} ${this.surname} and I am ${this.age} years old`
  }

  greet(){
    return `hi, i'm ${this.name} and I'm ${this.age} years old.`
  }

}
*/

/*how to delete elements*/
/*
const right = document.getElementById('right');
const newElement = document.createElement('h1');
newElement.textContent = 'You can do this.'

//right.remove();

right.addEventListener('click', ()=>{
  setTimeout(()=>{
    const left = document.getElementById('left');
    left.textContent = 'now i am right';

  }, 3000)
});
*/

/*Asynchronous JavaScript and XML http protocol*/
/*
const ajax = document.getElementById('ajax');

ajax.addEventListener('click', ()=>{
  let xhr

  if(window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

  xhr.addEventListener('load', (data) => {
    const dataJSON = JSON.parse(data.target.response);
  

    const par =  document.getElementById('par');
  for(const userinfo of dataJSON) {
    const listItem = document.createElement('p');
    listItem.textContent = `${userinfo.id} - ${userinfo.name}`;
    par.append(listItem);
  }
})

  xhr.send()
})*/

/*Fetch - It supplies an interface enabling the user to access and manipulate a HTTP streamline of fetches and answers. It's based on promises.
Thus, you may create a request information from API's sources and obtain date asynchronously with the information requested to use it on your website or app.*/

/* HOW TO PROOVE WHETHER THE BROWSER SUPPORTS FETCH
ajax.addEventListener('click', () => {
  if(window.fetch != undefined) {
    console.log('Fetch ok');
  } else {
    console.log('fetch does\'t work');
  }
})*/
/*
const ajax = document.getElementById('ajax');


ajax.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res)) //chekcing whether the resquest was successfull or not
  .then(res => res.json())  // json() convert the json data into a javascript object
  .then(res => {
    const par = document.getElementById('par');
    const fragment = document.createDocumentFragment()
    for (const userInfo of res) {
      const parItem = document.createElement('li');
      parItem.textContent = `${userInfo.id} - ${userInfo.name} & ${userInfo.website}`;
      fragment.appendChild(parItem);
    }
    par.appendChild(fragment);
  })
  })
Create a constant to target the element taking in the event then, inside the callback function
instantiate the fetch request with a URL, fetch works with a GET method the data will be
returned, the .then method will listen the response, firstly check whether the response was accepted 
or not using promises, next, you shall use another .then to convert data from a JSON format to an javascript objet using the 
.json() method on the response,  finally the last .then must contain a callback function depicting what will be done with
the data, usually you would use a for loop to itirate through the JS object looking for the attribute needed inside the response (res)
finally the string operator will be use to render the data on the screen using the '.' mehotd to access the necessar attribute. 
Ultimately, outside of the loop you must target the element that will manifest the data on the browser. */

/*Fetch API POST Request it's use to send data to a server

create the fetch function including the URL where the data will be sent. the method must be specified "POST"
then, the body which is the data sent to the server, such data must be convert from an object to a JSON format
using JSON.stringify(data.), lastly, you must include headers, here you can look up all the available headers
() 

Example: 

const ajax = document.getElementById('ajax');

ajax.addEventListener('click', () => {
  const newPost = {
    //you create an object with the data to be sent.
    //It must include a title, a body and a user Id.
    title: 'A new Post',
    body: 'dummy text',
    userId: 1
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json"
    }
    //the headers indicates the type of data that has been sent.
  })
    .then(res => res.json())
    .then(data => console.log(data));


*/