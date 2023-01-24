const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="Image/jr_logo.jpg" class="JR-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Rechercher des articles">
                    <button class="search-btn">Rechercher</button>
                </div>
                <a href="#"><img src="Image/utilisateur.png" alt=""></a>
                <a href="#"><img src="Image/panier.png" alt=""></a>
                <a><img src="Image/france.png" alt=""></a>
            </div>
        </div>

        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Accueil</a></li>
            <li class="link-item"><a href="#" class="link">Homme</a></li>
            <li class="link-item"><a href="#" class="link">Femme</a></li>
            <li class="link-item"><a href="#" class="link">Enfants</a></li>
            <li class="link-item"><a href="#" class="link">Accessoire</a></li>
        </ul>
    `;
}

createNav();

document.addEventListener("scroll", (event) => {
    console.log(document.getElementById("hero-section").scrollTop);
    
});

