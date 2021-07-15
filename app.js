const data =[
    {
        name:'TAHAR',
        age:23,
        gender:'male',
        lookingfor : 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/20.jpg'
    },
    {
        name:'smith',
        age:36,
        gender:'male',
        lookingfor : 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/30.jpg'
    },
    {
        name:'John',
        age:40,
        gender:'male',
        lookingfor : 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/70.jpg'
    },
    {
        name:'marry',
        age:30,
        gender:'female',
        lookingfor : 'male',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/women/83.jpg'
    }
];

const profiles = profileIterator(data);
nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);


function nextProfile() {
        const currentProfile = profiles.next().value;
      
        if(currentProfile !== undefined) {
          document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
              <li class="list-group-item">Name: ${currentProfile.name}</li>
              <li class="list-group-item">Age: ${currentProfile.age}</li>
              <li class="list-group-item">Location: ${currentProfile.location}</li>
              <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
            </ul>
          `;
      
          document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
        } else {
          // No more profiles
          window.location.reload();
        }
      }  

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}