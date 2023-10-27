## Introduction
Ce document d'exploitation vous guide à travers l'utilisation du Gestionnaire de mots de passe Python. Ce programme vous permet de stocker en toute sécurité vos mots de passe et de les gérer. Le programme est écrit en Python et utilise la bibliothèque "cryptography" pour chiffrer les mots de passe.

## Prérequis
- Python 3.9 minimum installé sur votre système.
- Les bibliothèques Python nécessaires sont installées via `pip install cryptography colorama...`.

## Fonctionnalités

### Présentation du Menu:

1. Add password manually
2. Add random password
3. List passwords
4. Delete password
5. Modify Password
6. Quit

Pour utiliser le menu, il suffit de rentrer une valeur comprise entre 1 et 6. Toute autre valeur lèvera une erreur.

Exemple : je souhaite utiliser la suppression du mot de passe, je vais donc rentrer 4 et 6 pour quitter le programme.

Le gestionnaire de mots de passe offre les fonctionnalités suivantes :

- Ajout manuel de mots de passe :
  - Vous pouvez ajouter un service (par exemple, un site Web) et son mot de passe associé manuellement.
  - Le mot de passe est chiffré avant d'être stocké.
- Génération de mots de passe aléatoires :
  - Vous pouvez générer un mot de passe aléatoire pour un service spécifié.
  - Le mot de passe généré est chiffré avant d'être stocké.
- Liste des mots de passe :
  - Vous pouvez afficher la liste de services et de mots de passe stockés.
  - Les mots de passe sont déchiffrés pour l'affichage.
- Suppression de mots de passe :
  - Vous pouvez supprimer un mot de passe pour un service spécifié.
- Modification de mots de passe :
  - Vous pouvez modifier le mot de passe pour un service spécifié.
- Quitter :
  - Vous pouvez quitter le programme.

## Utilisation
1. Exécutez le programme en utilisant Python : `python nom_du_programme.py` (assurez-vous que le code est sauvegardé dans un fichier .py).
2. Un menu s'affiche avec des options numérotées. Vous pouvez choisir une option en entrant le numéro correspondant et en appuyant sur Entrée.
3. Selon l'option choisie, suivez les instructions pour ajouter, générer, lister, supprimer, ou modifier des mots de passe.
4. Tous les mots de passe sont stockés dans un fichier JSON chiffré appelé "ma_phrase.json". Assurez-vous de le conserver en lieu sûr.
5. Lorsque vous avez terminé, utilisez l'option "Quitter" pour sortir du programme.

## Notes supplémentaires
- Les mots de passe sont chiffrés à l'aide de la bibliothèque cryptography, ce qui garantit leur sécurité.
- Assurez-vous de conserver le fichier de clé ("ma_cle.key") en sécurité, car il est essentiel pour le déchiffrement des mots de passe.
- Le programme utilise la bibliothèque "colorama" pour afficher le texte en couleurs.
- Si vous perdez la clé ou le fichier de clé, vous ne pourrez pas récupérer les mots de passe stockés.

C'est tout ! Vous pouvez maintenant utiliser le gestionnaire de mots de passe Python pour stocker et gérer en toute sécurité vos informations de connexion. Assurez-vous de prendre des précautions appropriées pour protéger votre fichier de clé.
