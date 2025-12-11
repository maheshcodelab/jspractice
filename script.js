let user = [
    {
        image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWV8ZW58MHx8MHx8fDA%3D",
        name: "Devis",
        roles: "Fullstack Developer • UI Designer",
        skills: "React • Node • MongoDB",
        contactText: "Contact Me"
    },
    {
        image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D",
        name: "Alex",
        roles: "DevOps Engineer",
        skills: "AWS • Docker • Kubernetes",
        contactText: "Message"
    },
    {
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1lfGVufDB8fDB8fHww",
        name: "James",
        roles: "Digital Marketer • SEO Specialist",
        skills: "SEO • SEM • Analytics",
        contactText: "Work With Me"
    },
    {
        image: "https://images.unsplash.com/photo-1716045168176-15d310a01dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFuaW1lfGVufDB8fDB8fHww",
        name: "Ethan",
        roles: "Cybersecurity Analyst",
        skills: "Network Security • Pen Testing",
        contactText: "Contact"
    },
];

let val = ''

user.forEach(function (user) {
    val = val + `<div class="card">
        <div class="img-box">
  <img class="card-img" src="${user.image}" alt="">
</div>


        <div class="card-content">
            <h2 class="name">${user.name}</h2>

            <p class="roles">${user.roles}</p>

            <div class="tag">${user.skills}</div>

            <button class="contact">${user.contactText}</button>
        </div>

    </div>` ;
})

let main = document.querySelector('main');

main.innerHTML = val;