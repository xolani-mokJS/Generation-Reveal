const form = document.getElementById("my-form");

form.addEventListener("submit", function genReveal(event){
    event.preventDefault();
    
    const yearOfBirth = document.getElementById("year-of-birth").value;
    console.log (yearOfBirth);

    if (yearOfBirth >= 1928 && yearOfBirth <= 1945){
        console.log('silent');
    } else if(yearOfBirth >= 1946 && yearOfBirth <= 1964){
        console.log('Boomer');
    }else if(yearOfBirth >= 1965 && yearOfBirth <= 1980){
        console.log('GenZ');
    }else if(yearOfBirth >= 1981 && yearOfBirth <= 1997){
        console.log('Millenial');
    }else if( yearOfBirth >= 1998 && yearOfBirth <= 2012){
        console.log('GenY');
    }else {
        console.log('still working');
    }

})

