const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="Image/jr_logo.jpg" class="logo" alt="">
        <img src="Image/facebook.png" class="logo-reseaux" alt="">
        <img src="Image/twitter.png" class="logo-reseaux" alt="">
        <img src="Image/tiktok.png" class="logo-reseaux" alt="">
        <img src="Image/instagram.png" class="logo-reseaux" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">CATÉGORIES</li>
                <li><a href="#" class="footer-link">T-shirts</a></li>
                <li><a href="#" class="footer-link">Sweats</a></li>
                <li><a href="#" class="footer-link">Vestes</a></li>
                <li><a href="#" class="footer-link">Jeans</a></li>
                <li><a href="#" class="footer-link">Ensemble</a></li>
                <li><a href="#" class="footer-link">Baskets</a></li>
                <li><a href="#" class="footer-link">Casquettes</a></li>
                <li><a href="#" class="footer-link">Pulls</a></li>
                <li><a href="#" class="footer-link">Polos</a></li>
                <li><a href="#" class="footer-link">Accesoires</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">TOP MARQUES</li>
                <li><a href="#" class="footer-link">Nike</a></li>
                <li><a href="#" class="footer-link">ASW</a></li>
                <li><a href="#" class="footer-link">Adidas</a></li>
                <li><a href="#" class="footer-link">NewEra</a></li>
                <li><a href="#" class="footer-link">Levi's</a></li>
                <li><a href="#" class="footer-link">Calvin Klein</a></li>
                <li><a href="#" class="footer-link">Jack & Jones</a></li>
                <li><a href="#" class="footer-link">The North Face</a></li>
                <li><a href="#" class="footer-link">Tommy Hilfiger</a></li>
                <li><a href="#" class="footer-link">Comme Des Graçon</a></li>
            </ul>
        </div>
    </div>

    <p class="footer-title">Qui somme nous ?</p>
    <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
    <p class="info">mail de contact - help@AdrarStreetWear.com, sav@AdrarStreetWear.com</p>
    <p class="info">téléphone - 01 02 03 04 05, 06 07 08 09 10</p>
    
    <div class="footer-social-container">
        <div>
            <ul class="social-link">
                <li>
                    <img src="Image/livraison-de-colis.png" class="logo-social" alt="">
                    <p>Satisfait ou remboursé <br> 14 jours pour changer d'avis</p>
                </li>
                <li>
                    <img src="Image/livraison-rapide.png" class="logo-social" alt="">
                    <p>Livraison en 48H <br> Domicile ou point relais</p>
                </li>
                <li>
                    <img src="Image/fast-delivery.png" class="logo-social" alt="">
                    <p>Livraison gratuite dès 99€</p>
                </li>
                <li>
                    <img src="Image/paiement-securise.png" class="logo-social" alt="">
                    <p>Paiement en ligne sécurisé</p>
                </li>
            </ul>
            
        </div>
        <div>
        <ul class="payement-link">
            <li>
            <p>Payement</p>
                <img src="Image/visa.png" class="logo-payement" alt="">
            </li>
            <li>
                <img src="Image/money.png" class="logo-payement" alt="">
            </li>
        </ul>
        </div>
    </div>
    <p class="footer-credit">© 2022 - AdrarStreetWear.com</p>
    `;
}

createFooter();