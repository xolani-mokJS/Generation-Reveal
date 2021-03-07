const form = document.getElementById("my-form");
const outputWrapper = document.querySelector('.output-text');

/*
 Source: https://edition.cnn.com/2013/11/06/us/baby-boomer-generation-fast-facts/index.html
 */
const calcGen = (yob) => {
    if (yob <= 1924) {
        return 'GI'; // Or, the Great Generation
    } else if (yob <= 1945) { // I think it's anytime upto 1945?
        return 'silent';
    } else if (yob <= 1964) { // we don't need to mention the lower year, since the 'if' above handles it...
        return 'Boomer';
    } else if (yob <= 1980) {
        return 'GenX';
    } else if (yob <= 1996) {
        return 'Millenial'; // aka Gen Y
    } else {
        return 'GenZ';
    }
}

const displayGen1 = function(gen) {
    let ot = document.getElementById('output-text');
    // Prefixing with 'you're a -' doesn't always make sense (eg, for You're a silent)
    //   I just did it to show string templates.
    ot.innerText = `You're a ${gen}!`;
}

function displayGen2(gen) {
    // Remove any children. In case a <p> was already printed.
    outputWrapper.textContent = '';
    let ot = document.createElement('P');
    ot.id = 'output-text';
    ot.innerText = `You are part of the ${gen} generation!`;
    outputWrapper.appendChild(ot);
}

// If you're not gonna use a function's name, then you don't need to give it a name.
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const yearOfBirth = document.getElementById("year-of-birth").value;
    console.log(yearOfBirth);
    displayGen2(calcGen(yearOfBirth));
})
