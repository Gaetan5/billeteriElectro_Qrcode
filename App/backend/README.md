# Documentation de l'application Backend

## Vue d'ensemble

Ceci est le backend de l'application, construit avec Flask. Il gère les données des invités, génère des codes QR et crée des billets électroniques.

## Structure du projet

- `app.py`: Point d'entrée de l'application Flask.
- `models.py`: Définit les modèles de données, y compris le modèle Guest.
- `routes.py`: Contient les définitions des routes pour gérer les requêtes.
- `templates/`: Répertoire pour les modèles HTML.
- `static/`: Répertoire pour les fichiers statiques comme le CSS.
- `requirements.txt`: Liste les dépendances Python.

## Instructions d'installation

1. **Cloner le dépôt:**

   ```bash
   git clone <repository-url>
   cd my-app/backend
   ```

   ![Cloner le dépôt](https://example.com/clone-repo.png)

2. **Créer un environnement virtuel:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # Sur Windows utilisez `venv\Scripts\activate`
   ```

   ![Créer un environnement virtuel](https://example.com/create-venv.png)

3. **Installer les dépendances:**

   ```bash
   pip install -r requirements.txt
   ```

   ![Installer les dépendances](https://example.com/install-dependencies.png)

4. **Exécuter l'application:**

   ```bash
   python app.py
   ```

   ![Exécuter l'application](https://example.com/run-app.png)

## Utilisation

- Accédez à l'application à `http://localhost:5000`.
- Utilisez les routes fournies pour gérer les données des invités et générer des billets.

## Licence

Ce projet est sous licence MIT.
