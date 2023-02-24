<header>
    <nav>
        <div class="nav" aria-label="navbar">
            <img src="../image/jr_logo.webp" class="JR-logo" alt="">

            <a class="lien-accueil" href="../views/accueil.php" aria-label="Acuueil">Accueil</a>
            <a class="lien-accueil" href="../views/formulaire.php" aria-label="Contactez-nous">Contactez-nous</a>
            <a class="lien-accueil" href="#" aria-label="Panier">Panier</a>
            <a class="lien-accueil" href="../views/admin.php">Admin</a>

            <div class="search">
                <input type="text" class="search-box" placeholder="Rechercher des articles">
                <input type="submit" class="search-btn" value="Rechercher">
            </div>

            <div>
                <a class="utilisateur" href="../views/form_connexion.php" id="connexion" aria-label="Icon utilisateur"><img src="../image/utilisateur.png" alt=""></a>
                <a class="utilisateur" href="#" aria-label="Icon panier"><img src="../image/panier.png" alt=""></a>
                <a class="utilisateur" href="#" aria-label="Icon langue"><img src="../image/france.png" alt=""></a>
                <?php
                if (isset($_SESSION['user']) && $_SESSION['user'] !== null) { ?>
                    <a class="utilisateur" href="../controllers/deconnexion.php"><img src="../image/logout.png" alt=""></a>
                <?php }
                ?>

            </div>
        </div>
    </nav>
</header>