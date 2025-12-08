let users = [
    {
        name: "Aarav Mehta",
        age: 24,
        profession: "Web Developer",
        tags: ["JavaScript", "Frontend", "React", "UI"],
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
        description: "A passionate frontend developer who loves building beautiful and interactive websites."
    },
    {
        name: "Sara Khan",
        age: 22,
        profession: "Graphic Designer",
        tags: ["Photoshop", "Illustrator", "Branding", "Logo Design"],
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        description: "Creative designer focused on modern, minimalistic, and aesthetic designs."
    },
    {
        name: "Rohit Sharma",
        age: 29,
        profession: "Software Engineer",
        tags: ["Python", "Backend", "APIs", "Database"],
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
        description: "Backend engineer experienced in building robust server-side applications."
    },
    {
        name: "Priya Verma",
        age: 26,
        profession: "Digital Marketer",
        tags: ["SEO", "Content Writing", "Analytics", "Brand Growth"],
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        description: "Helps businesses grow digitally with smart content and SEO strategies."
    },
    {
        name: "Aditya Singh",
        age: 28,
        profession: "Mobile App Developer",
        tags: ["Flutter", "Android", "iOS", "Firebase"],
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        description: "Builds smooth and reliable mobile applications for Android and iOS."
    }
];

let sum = ""

users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.name}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div> `
    
})
var main = document.querySelector("main")

main.innerHTML = sum;