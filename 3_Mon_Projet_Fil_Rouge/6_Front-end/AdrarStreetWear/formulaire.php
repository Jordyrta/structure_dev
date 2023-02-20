<?php 
    $DB_NAME = "jradrar";
    $DB_USER = "root";
    $DB_PASS = "";
    // Connexion à la base de données
    $bdd = new PDO('mysql:host=localhost;dbname=' . $DB_NAME, $DB_USER, $DB_PASS, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    // Préparation de la requête SQL nous stockons dans une variable $req la requête à exécuter
    if(isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['message'])){
        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $insert = " INSERT INTO contact(nom, prenom, email, message) VALUES ('$nom','$prenom','$email','$message');";
        $req = $bdd->prepare($insert);
        // Exécution de la requête SQL
        $req->execute();
    }
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="contact.css">
    <title>Contact</title>
</head>
<body>
    <header>
        <nav>
          <div class="nav">
            <img src="image/jr_logo.jpg" class="JR-logo" alt="">
            
            <a class="lien-accueil" href="accueil.html">Accueil</a>
            <a class="lien-accueil" href="formulaire.html">Contactez-nous</a>
            <a class="lien-accueil" href="#">Panier</a>
            
            <div class="search">
              <input type="text" class="search-box" placeholder="Rechercher des articles">
              <input type="submit" class="search-btn" value="Rechercher">
            </div>
    
            <div>
              <a class="utilisateur" href="#"><img src="image/utilisateur.png" alt=""></a>
              <a class="utilisateur" href="#"><img src="image/panier.png" alt=""></a>
              <a class="utilisateur"><img src="image/france.png" alt=""></a>
            </div>
          </div>
        </nav>
    </header>

    <section class="section-formulaire">
        <div class="contact">
          <h2 class="titre-contact">Contactez-nous</h2>

          <div class="telephone">
            <img class="svg" src="image/telephone.svg" alt="">
            <p class="num">06 07 08 09 10</p>
          </div>

          <div class="email">
            <img class="svg" src="image/email.svg" alt="">
            <p class="mail">email@Adrar.com</p>
          </div>
        </div>

        <form class="form" method="POST">
          <p class="text">Nom</p>
          <input type="text" name="nom" class="textform">
          <br>
          <p  class="text">Prénom</p>
          <input type="text" name="prenom" class="textform">
          <br>
          <p  class="text">Adresse e-mail<span class="star"></span></p>
          <input type="text" name="email" class="textform" required>
          <br>
          <p  class="text">Message<span class="star"></span></p>
          <textarea type="text" name="message" class="message" required></textarea>
          <br>
          <p class="etoile"><span class="star">*</span>informations obligatoires</p>
          <input type="submit" value="Envoyer" class="btn_envoyer">
        </form>

        <img src="image/teeshirt.gif" alt="">
    </section>

    <footer>
        <div class="footer-credit">
            <div class="logo-payement">
              <img src="image/visa.svg" class="logo-payement" alt="">
              <img src="image/paypal.svg" class="logo-payement" alt="">
              <img src="image/apple-pay.svg" class="logo-payement" alt="">
              <img src="image/mastercard.svg" class="logo-payement" alt="">
            </div>
      
            <div class="credit">
              <p>© 2022 - AdrarStreetWear.com</p>
            </div>
      
            <div class="footer-haut-droit">
              <a href="https://twitter.com/Astrow_Boi"><img src="image/twitter.svg" class="logo-reseaux" alt=""></a>
              <a href=""><img src="image/snapchat.svg" class="logo-reseaux" alt=""></a>
              <a href=""><img src="image/facebook.svg" class="logo-reseaux" alt=""></a>
              <a href="https://www.instagram.com/jordy.rta/"><img src="image/instagram.svg" class="logo-reseaux" alt=""></a>
            </div>
      
          </div>
    </footer>
</body>
</html>