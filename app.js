// dino Array 
const arr = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": 372,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
];

// image sorce file Array
/* imgArr added all the img source if we iterate this array added one by one img */
const imgArr = ["images/triceratops.png", "images/tyrannosaurus rex.png", "images/anklyosaurus.png", "images/brachiosaurus.png", "images/stegosaurus.png", "images/elasmosaurus.png", "images/pteranodon.png", "images/pigeon.png"];


// Create Dino Constructor
class Dino {
    constructor(data) {
        this.species = data.species;
        this.weight = data.weight;
        this.height = data.height;
        this.diet = data.diet;
        this.where = data.where;
        this.when = data.when;
        this.fact = data.fact;
    }
}


// Create Human Object
/* human functin collect form data and when call human function provide human data */
function humanInfo() {
    let name, height, weight, diet;
    let feet = document.getElementById('feet').value;
    let inches = document.getElementById("inches").value;
    height = feet *12 + inches;
    const hm = {
        name: document.getElementById('name').value,
        height: height,
        weight: document.getElementById('weight').value,
        diet: document.getElementById('diet').value,
    }
    return hm;
}


// Add tiles to DOM

/*  make Tiles function main purpose is add all the images and  to grid and  add name and data*/
function makeTiles(name) {
    let gd = ``;

    const human = humanInfo();
    const grid = document.getElementById("grid")
    // Generate Tiles for each Dino in Array
    for (let i = 0; i < arr.length; i++) {
        const ele = new Dino(arr[i]);
        if (i === 4) {
            gd += `
            <div class ="grid-item">
                <h3>Human</h3>
                <img src="images/human.png" alt="Human">
                <p>${human.name}</p>
            </div>`
        }
        if (i === 7) {
            gd += `
            <div class= "grid-item">
                 <h3>${ele.species}</h3>
                 <img src="${imgArr[i]}" alt="${ele.species}">
                 <p>All birds are Dinosaurs.</p>
            </div>`;
            break;
        }

        gd += `
       <div class= "grid-item">
            <h3>${ele.species}</h3>
            <img src="${imgArr[i]}" alt="${ele.species}">
            <p>${ele.fact}</p>
       </div>`

    }

    grid.innerHTML += gd;

}


// Create Dino Compare Method 1

/* compare height function compare height of human and differnt differn species of dinosors
and return diff of dinosaur weight and  human weight*/
function compareHeight(humanHeight, dHeight) {
    let ht = dHeight - humanHeight;
    return ht;
}


// Create Dino Compare Method 2
/* compare weight function compare height of human and differnt differnt species of dinosors 
and return diff of dinosour height and human height */
function compareWeight(humanWeight, dWeight) {
    let x = dWeight - humanWeight
    return x;
}


// Create Dino Compare Method 3
/* compare Diet function comparet the human diet and differnt differnt species of dinosors
and returns string similar or differnt
*/
function compareDiet(humanDiet, dDiet) {
    if (dDiet === humanDiet) {
        return "Same Diet";
    }
    else {
        return "Differnt Diet";
    }
}


// comparision table 1(height comparision table)
/* this function main purpose make Height comparision table and using compare function return t
he value diffence all this data show in table
 */
function heightComparisionTable() {
    let compHt = ``;

    const human = humanInfo();
    compHt += `<h4> Height Comparision</h4>
    <table class="centre">
    
    <tr>
        <th>Species</th>
        <th>Height</th>
        <th>Human Name</th>
        <th>Height</th>
        <th>height difference</th>
    </tr>`;
    arr.forEach(ele => {
        let diff = compareHeight(human.height, ele.height);

        compHt += `
        <tr>
            <td>${ele.species}</td>
            <td>${ele.height}</td>
            <td>${human.name}</td>
            <td>${human.height}</td>
            <td>${diff}</td>
        </tr>`;

    });
    compHt += `</table>`;
    return compHt;

}


// comparision table 2(weight comparision)
/* this function main purpose make Weight comparision table and using compare function comparision
all this data show in table  */
function weightComparisionTable() {
    let compWt = ``;
    const human = humanInfo();
    compWt += `<h4> weight Comparision</h4>
    <table class="centre">
    
    <tr>
        <th>Species</th>
        <th>Weight</th>
        <th>Human Name</th>
        <th>Weight</th>
        <th>Weight difference</th>
    </tr>`;
    arr.forEach(ele => {
        let diff = compareWeight(human.weight, ele.weight);

        compWt += `
        <tr>
            <td>${ele.species}</td>
            <td>${ele.weight}</td>
            <td>${human.name}</td>
            <td>${human.weight}</td>
            <td>${diff}</td>
        </tr>`;

    });
    compWt += `</table>`;
    return compWt;
}


// comparision table 3(diet comparision)
/* this function main purpose make Diet comparision table and using compare function comparision
all this data show in table */
function dietComparisionTable() {
    let compDt = ``;
    const human = humanInfo();
    compDt += `<h4> Diet Comparision</h4>
    <table class="centre">
    
    <tr>
        <th>Species</th>
        <th>Diet</th>
        <th>Human Name</th>
        <th>Diet</th>
        <th>Remark</th>
    </tr>`;
    arr.forEach(ele => {
        let currentDiet = human.diet.toLowerCase();
        let diff = compareDiet(currentDiet, ele.diet);

        compDt += `
        <tr>
            <td>${ele.species}</td>
            <td>${ele.diet}</td>
            <td>${human.name}</td>
            <td>${currentDiet}</td>
            <td>${diff}</td>
        </tr>`;

    });
    compDt += `</table>`;
    return compDt;

}


// Error function
// if any data mis or Not filed then alert 
/* in this function check the data all data filled or not if any data empty then alert and show massage */
function error() {
    const human = humanInfo();
    

    if(human.name === ''){
        alert('Fill the Name');
    }
    
    else if(human.height === '0'){
        alert('Height null or 0 not acceptable');
    }
    else if (human.weight === '' || human.weight === '0') {
        alert('Weight null or 0 not acceptable');
    } 
    else{
        return true;
    }
    return false;
    
}

// make table and compare data call function
// call the make table functions and add to the DOM
function creteCompareTable() {
    const newDiv = document.getElementById("tab");
    const table1 = heightComparisionTable();
    const table2 = weightComparisionTable();
    const table3 = dietComparisionTable();
    newDiv.innerHTML = table1 + table2 + table3;
    
}


// On button click, prepare and display infographic
/* this the main function after click button first call the error function if all data 
   correct then hide the form and call to make tile function and crete compare table function
*/
document.getElementById('btn').addEventListener('click', () => {
    if(error()){
        // Remove form from screen
        document.getElementById("dino-compare").style.display = "none";
       // for Adding tiles in Dom
        makeTiles();
        // adding table in Dom
        creteCompareTable();
    }
    

});


