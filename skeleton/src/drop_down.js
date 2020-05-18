
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


const dogLinkCreator = (dogs) => {
  const keys = Object.keys(dogs);
  const completed = [];
  keys.forEach(key=>{
    let aTag = document.createElement('a');
    aTag.innerHTML = key;
    aTag.href = dogs[key];
    let liTag = document.createElement('li');
    liTag.className = 'dog-link';
    liTag.appendChild(aTag);
    completed.push(liTag);
  })
  return completed;
}

const AttachDogLinks = () => {
  const dogLinks = dogLinkCreator(dogs);
  let ulTag = document.querySelector('.drop-down-dog-list')
  dogLinks.forEach(el => {
    ulTag.appendChild(el);
  })
}

AttachDogLinks();

const handleEnter = () => {
  let dogliTag = document.querySelectorAll('.dog-link')
  dogliTag.forEach(dog => dog.className = "dog-show");
}


const handleLeave = () => {
  let dogliTag = document.querySelectorAll('.dog-show');
  dogliTag.forEach(dog => dog.className = "dog-link");
}

const dogUl = document.querySelector('.drop-down-dog-nav');
dogUl.addEventListener('mouseenter', handleEnter);
dogUl.addEventListener('mouseleave', handleLeave);


