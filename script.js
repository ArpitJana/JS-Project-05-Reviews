// local reviews data
const reviews = [{
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// Functions :
// Word First Letter Capital !
function capitalizeWordFirstLetter(inputString) {
    let resultString = "";
    let myArray = inputString.split(' ');
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = myArray[i].slice(0, 1).toUpperCase() + myArray[i].slice(1, myArray[i].length).toLowerCase();
        resultString += `${myArray[i]} `
    }
    return resultString;
}



// Select Items :-
const img = document.getElementById("person-img");
const auther = document.getElementById("name-title");
const job = document.getElementById("job-title");
const info = document.getElementById("review-text");

const prevBtn = document.getElementById("left-button");
const nextBtn = document.getElementById("right-button");
const randomBtn = document.getElementById("random-button");

let itemNo = 0;

function showPerson(itemNo) {
    const data = reviews[itemNo];
    img.src = data.img;
    auther.innerText = capitalizeWordFirstLetter(data.name);
    job.innerText = data.job.toUpperCase();
    info.innerText = data.text;
}

function getRandomNumber() {
    var randomNum = Math.floor(Math.random() * reviews.length);
    let finalRandomNumber = (randomNum === itemNo) ? getRandomNumber() : randomNum;
    itemNo = finalRandomNumber;
    return finalRandomNumber;
}

window.addEventListener('DOMContentLoaded', () => {
    showPerson(getRandomNumber());

})

prevBtn.addEventListener('click', () => {
    itemNo--;
    if (itemNo < 0) itemNo = reviews.length - 1;
    showPerson(itemNo);
});

nextBtn.addEventListener('click', () => {
    itemNo++;
    if (itemNo > reviews.length - 1) itemNo = 0;
    showPerson(itemNo);
});

randomBtn.addEventListener('click', () => {
    showPerson(getRandomNumber());
});