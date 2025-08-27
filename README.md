# Avant Noël - Sensibilisation aux féminicides

<img width="1896" height="957" alt="Capture-2025-08-26-143831" src="https://github.com/user-attachments/assets/caf5182f-2f14-447b-895f-39801010f71d" />

---

## 🕯️ **BUT ET OBJECTIF DU PROJET**

### Mission de sensibilisation

Ce projet constitue une initiative solennelle de sensibilisation aux violences conjugales et aux féminicides en France. Il transforme l'attente joyeuse de Noël en un rappel poignant de la réalité tragique que vivent de nombreuses femmes.

L'objectif principal est de **maintenir la mémoire des victimes** et de **sensibiliser le public** à cette problématique sociale grave, en utilisant la symbolique de Noël pour créer une prise de conscience collective.

### Approche respectueuse des données

Le site présente de **véritables témoignages** basés sur des cas réels de féminicides survenus en France, tirés d'un fichier CSV contenant 100 témoignages authentiques avec :
- Les noms ou mentions anonymes des victimes
- Leurs âges respectifs
- Les localités où sont survenus les drames
- Les circonstances précises de chaque féminicide

Ces données sont traitées avec la plus grande dignité, transformant chaque statistique en un hommage personnel à une vie perdue.

### Impact et message

**"N'oublions pas que derrière chaque statistique se cache une personne."**

Le contraste saisissant entre la période festive de Noël et la réalité des violences conjugales crée un impact émotionnel fort, destiné à :
- Honorer la mémoire des victimes
- Alerter sur l'urgence de cette cause
- Encourager la solidarité et la prévention
- Rappeler l'existence des ressources d'aide

---

## ⚙️ **ASPECTS TECHNIQUES ET PARTICULARITÉS**

### Architecture moderne et performante

Le site est développé avec les technologies web les plus récentes, privilégiant les performances et l'accessibilité :

- **HTML5 sémantique** : Structure accessible et référencée
- **CSS3 avancé** : Grid, Flexbox, animations fluides
- **JavaScript ES6** : Code moderne et optimisé
- **jQuery** (83KB) : Manipulation DOM fluide
- **GSAP** (59KB) : Animations professionnelles haute performance

### Fonctionnalités techniques avancées

#### � **Système de rotation intelligent des témoignages**
- **Parser CSV personnalisé** : Lecture et traitement des données réelles
- **Algorithme de rotation** : Affichage aléatoire et respectueux des témoignages
- **Animation temps réel** : Effet de machine à écrire optimisé (25-50ms par caractère)
- **Timing intelligent** : Pause de 3 secondes pour la lecture, disparition rapide

#### 🗓️ **Compteur temporel automatique**
- Calcul automatique des jours restants jusqu'à Noël
- Mise à jour quotidienne automatique
- Gestion du changement d'année
- Affichage dynamique et fluide

#### ❄️ **Effet de neige saisonnier**
- **Activation conditionnelle** : Uniquement du 1er au 31 décembre
- **50 flocons animés** : Symboles Unicode variés (❄, ❅, ❆, ⋄, ◦, ∘)
- **Mouvements réalistes** : 3 trajectoires différentes avec vitesses variables
- **Performance optimisée** : CSS animations pures, `pointer-events: none`

### Navigation et expérience utilisateur

#### 🎨 **Interface adaptative**
- **Design Mobile-First** : Optimisé pour tous les écrans
- **Navigation fluide GSAP** : Transitions entre sections (600ms)
- **Thèmes de couleurs** : 4 variantes breaker (rouge, styles alternatifs)
- **Curseur personnalisé** : Interaction visuelle améliorée

#### 📱 **Responsive Design complet**
- **Mobile** (< 550px) : Navigation simplifiée, layout vertical
- **Tablette** (551px - 1024px) : Grille adaptée
- **Desktop** (> 1025px) : Expérience complète avec tous les effets

### Sections informatives structurées

#### 📊 **Statistiques en temps réel**
- Chiffres officiels des violences conjugales
- Données mises à jour et contextualisées
- Présentation visuelle impactante

#### 🆘 **Ressources d'urgence**
- **Numéros intégrés** : 3919 (gratuit 24h/24), 17, 15, 114
- **Organisations spécialisées** : Liens vers les structures d'aide
- **Accessibilité** : Support pour personnes sourdes/malentendantes

#### 🕯️ **Section mémoire**
- Hommage respectueux aux victimes
- Témoignages authentiques en rotation
- Atmosphère recueillie et digne

### Optimisations de performance

#### 📈 **Code optimisé en production**
- **Total projet** : 515KB (hors images)
- **HTML** : 19.6KB (nettoyé des commentaires inutiles)
- **CSS** : 60.8KB (styles essentiels maintenus)
- **JavaScript** : 162KB total (debug logs supprimés)
- **Images** : 246KB (4 images essentielles uniquement)

#### 🚀 **Fonctionnalités d'optimisation**
- **Chargement intelligent** : Effet neige seulement en décembre
- **Lazy loading** : Ressources chargées à la demande
- **Fallback système** : Témoignages de secours en cas d'erreur CSV
- **Gestion d'erreurs** : Logs essentiels maintenus, debug supprimé

### Palette couleurs symbolique

- **Noir profond (#000000)** : Gravité, recueillement
- **Rouge sang (#c70039)** : Urgence, alerte, vie
- **Blanc pur (#ffffff)** : Espoir, mémoire, dignité
- **Gris sombre (#191919)** : Profondeur, réflexion

---

## 🔧 **Installation et déploiement**

```bash
# Cloner le projet
git clone https://github.com/david-guia/avant-noel.git

# Naviguer dans le dossier
cd avant-noel

# Ouvrir avec un serveur local (recommandé pour le CSV)
python -m http.server 8000
# ou
npx serve .
```

**Note** : Un serveur local est recommandé pour éviter les restrictions CORS lors du chargement du fichier CSV.

---

*Projet créé avec respect et dignité dans le cadre de la sensibilisation aux violences conjugales et de la mémoire des victimes de féminicides.*
