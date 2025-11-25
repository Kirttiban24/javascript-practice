var arr = [
    {
        team: "CSK",
        primary: "CSK.jpeg",
        secondary: "CSK.jpeg",
    },
    {
        team: "MI",
        primary:"MI.jpeg",
        secondary: "MI.jpeg",
    },
    {
        team: "RCB",
        primary:"RCB.jpeg",
        secondary: "RCB.jpeg",
    },
    {
        team: "GT",
        primary:"GT.jpeg",
        secondary: "GT.jpeg",
    },
    {
        team: "SRH",
        primary:"SRH.jpeg",
        secondary: "SRH.jpeg",
    },
    {
        team: "RR",
        primary:"RR.jpeg",
        secondary: "RR.jpeg",
    },
    {
        team: "PBKS",
        primary:"PBKS.jpeg",
        secondary: "PBKS.jpeg",
    },
    {
        team: "LSG",
        primary:"LSG.jpeg",
        secondary: "LSG.jpeg",
    },
    {
        team: "KKR",
        primary:"KKR.jpeg",
        secondary: "KKR.jpeg",
    },
    {
        team: "DC",
        primary:"DC.jpeg",
        secondary: "DC.jpeg",
    },
];

let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let main = document.querySelector('main');

btn.addEventListener('click',function(){

    var winner = arr[Math.floor(Math.random()*arr.length)];
    
    h1.innerHTML = winner.team;

    main.style.backgroundImage = `url(${winner.primary})`;
    main.style.backgroundSize = "cover";
    main.style.backgroundPosition = "center";

    h1.style.backgroundImage = `url(${winner.secondary})`;
    h1.style.backgroundSize = "cover";
    h1.style.backgroundPosition = "center";

})