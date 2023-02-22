<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../contact.css">
    <title>Connexion</title>
</head>

<body>
    <?php
    require "./nav.php";
    ?>

    <h1>Adrar Street Wear</h1>

    <h2>Bienvenue</h2>

    <form action="../controllers/connexion.php" method="post" class="form">
        <input type="hidden" name="form_connexion" value="1">
        <label for="form_email">E-mail</label>
        <input class="textform" type="email" name="form_email" required>
        <label for="form_password">Mot de passe</label>
        <input class="textform" type="password" name="form_password">
        <input class="btn_envoyer" type="submit" value="Se connecter" id="btnconnect">
    </form>
    <?php
    if (isset($message)) {
        echo $message;
    } ?>

    <p>Pas encore inscrit ? <a href="../views/register.php">Inscrivez-vous</a></p>

    <?php
    require "./footer.php";
    ?>
</body>

</html>