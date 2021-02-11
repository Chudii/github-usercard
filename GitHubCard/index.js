import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github cardInfo):
    https://api.github.com/users/<your cardInfo>
*/

const cardsHolder = document.querySelector('.cards');

const cardMaker = (data) => {

  //installments
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const handle = document.createElement('h3');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileURL = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  //adding classes 
  card.classList.add('card');
  name.classList.add('name');
  handle.classList.add('username');
  cardInfo.classList.add('card-info');
  

  //text-content
  cardImg.src = data.avatar_url;
  name.textContent = data.name;
  handle.textContent = data.login;
  location.textContent = `Location: ${data.location}`;
  profileURL.href = data.html_url;
  profile.textContent = `Profile: `;
  profileURL.textContent = data.html_url;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

  //hierarchy
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name)
  cardInfo.appendChild(handle);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileURL);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}

axios.get('https://api.github.com/users/Chudii')
    .then(res => {
      console.log(res.data);
      const card = cardMaker(res.data);
      cardsHolder.appendChild(card);
    })
    .catch(err => {
      debugger; 
    })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github cardInfo>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(person => {
  axios.get(`https://api.github.com/users/${person}`)
    .then(res => {
      const newCard = cardMaker(res.data);
      cardsHolder.appendChild(newCard);
    })
    .catch(err => {
      debugger;
    })
})



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="cardInfo">{users cardInfo}</h3>
        <p class="username">{users user cardInfo}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
