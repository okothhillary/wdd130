const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');


const getProphetData = async() => {
    const response = await fetch(url);    
    const data = await response.json();
    //console.table(data);  
    displayProphets(data.prophets);   
    
};

getProphetData();

const getOrdinalSuffix = (index) => {
    if (index === 1) return '1st';
    if (index === 2) return '2nd';
    if (index === 3) return '3rd';
    return `${index}th`;
};   

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        
        const section = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        const index = prophets.indexOf(prophet);

        const attributes = {
            src: prophet.iageurl,
            alt: `Image of Prophet ${prophet.name} ${prophet.lastname} - ${getOrdinalSuffix(index+1)} President of The Church`,
            loading: 'lazy',
            width: '400',
            height: '300'

        };

        for (const key in attributes) {
            portrait.setAttribute(key, attributes[key]);
        }

        section.appendChild(fullName);
        section.appendChild(portrait);

        cards.appendChild(section);
    });

};

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');


const getProphetData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
};

getProphetData();

const getOrdinalSuffix = (index) => {
    if (index === 1) return '1st';
    if (index === 2) return '2nd';
    if (index === 3) return '3rd';
    return `${index}th`;
};

const displayProphets = (prophets) => {
    // Clear existing cards
    cards.innerHTML = '';

    prophets.forEach((prophet, index) => {
        const section = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        const attributes = {
            src: prophet.imageurl, // Corrected typo from 'iageurl'
            alt: `Image of Prophet ${prophet.name} ${prophet.lastname} - ${getOrdinalSuffix(index + 1)} President of The Church`,
            loading: 'lazy',
            width: '400',
            height: '300'
        };

        for (const key in attributes) {
            portrait.setAttribute(key, attributes[key]);
        }

        section.appendChild(fullName);
        section.appendChild(portrait);

        cards.appendChild(section);
    });
};

// const filterProphets = async () => {
//     const filterText = filterInput.value.toLowerCase();
    
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
        
//         const filteredProphets = data.prophets.filter(prophet => 
//             prophet.name.toLowerCase().includes(filterText) || 
//             prophet.lastname.toLowerCase().includes(filterText)
//         );
        
//         displayProphets(filteredProphets);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// // Adding event listener to the filter button
// filterButton.addEventListener('click', filterProphets);

    







// const displayProphets = (prophets) => {
//     prophets.forEach((prophet) => {
//       // Create elements to add to the div.cards element
//       let card = document.createElement('section');
//       let fullName = document.createElement('h2'); // fill in the blank
//       let portrait = document.createElement('img');
  
//       // Build the h2 content out to show the prophet's full name
//       fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
//       // Build the image portrait by setting all the relevant attributes
//       portrait.setAttribute('src', prophet.imageurl);
//       portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
//       portrait.setAttribute('loading', 'lazy');
//       portrait.setAttribute('width', '340');
//       portrait.setAttribute('height', '440');
  
//       // Append the section(card) with the created elements
//       card.appendChild(fullName); //fill in the blank
//       card.appendChild(portrait);
  
//       cards.appendChild(card);
//     }); // end of arrow function and forEach loop
//   }


// const getOrdinalSuffix = (number) => {
//     const tens = number % 100; // Get the last two digits
//     const units = number % 10; // Get the last digit

//     // Handle special cases for 11, 12, and 13
//     if (tens === 11 || tens === 12 || tens === 13) {
//         return `${number}th`;
//     }

//     // Determine suffix based on the last digit
//     switch (units) {
//         case 1:
//             return `${number}st`;
//         case 2:
//             return `${number}nd`;
//         case 3:
//             return `${number}rd`;
//         default:
//             return `${number}th`;
//     }
// };


  // Create the input field and button dynamically
// const filterInput = document.createElement('input');
// filterInput.id = 'filterInput';
// filterInput.placeholder = 'Enter prophet name...';

// const filterButton = document.createElement('button');
// filterButton.id = 'filterButton';
// filterButton.textContent = 'Filter';

// // Insert the input and button into the DOM before the cards section
// cards.parentNode.insertBefore(filterInput, cards);
// cards.parentNode.insertBefore(filterButton, cards);
