create database JrAdrar;
use JrAdrar;

CREATE TABLE utilisateur (
id_utilisateur       int primary key auto_increment not null,
pronom_utilisateur   varchar (50) not null,
nom_utilisateur      varchar (50) not null,
email_utilisateur    varchar (50) not null,
mot_de_passe_utilisateur varchar (100) not null,
id_role int not null
)ENGINE=InnoDB;

CREATE TABLE role_utilisateur(
id_role  int primary key auto_increment not null,
nom_role varchar (50) not null
)ENGINE=InnoDB;

CREATE TABLE article(
id_article  int primary key auto_increment not null,
nom_article varchar (50) not null,
prix_article float,
marque_titre_article varchar (50) not null,
marque_image_article varchar (50) not null,
marque_taille_article varchar (50) not null,
id_utilisateur int not null
)ENGINE=InnoDB;

CREATE TABLE categorie(
id_categorie  int primary key auto_increment not null,
nom_categorie varchar (50) not null,
image_categorie varchar (50) not null
)ENGINE=InnoDB;

CREATE TABLE commande(
id_commande    int primary key auto_increment not null,
nom_commande   varchar (50) not null,
id_utilisateur int not null
)ENGINE=InnoDB;

create table attribuer(
id_categorie int not null,
id_article int not null,
primary key(id_categorie, id_article)
)Engine=InnoDB;

alter table utilisateur
add constraint fk_posseder_role
foreign key(id_role)
references role_utilisateur(id_role);

alter table attribuer
add constraint fk_attribuer_article
foreign key (id_article)
references article(id_article);

alter table attribuer
add constraint fk_attribuer_categorie
foreign key (id_categorie)
references categorie(id_categorie);
