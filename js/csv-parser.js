// Parser pour les données CSV des féminicides
class FeminicidesCSVParser {
    constructor() {
        this.data = [];
        this.testimonials = [];
    }

    // Fonction pour charger et parser le CSV
    async loadCSV() {
        console.log('Tentative de chargement du CSV...');
        try {
            const response = await fetch('./femmages.csv');
            console.log('Réponse fetch:', response.status, response.statusText);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const csvText = await response.text();
            console.log('CSV chargé, taille:', csvText.length, 'caractères');
            console.log('Premières lignes du CSV:', csvText.substring(0, 200) + '...');
            
            this.parseCSV(csvText);
            this.generateTestimonials();
            
            console.log('Parsing CSV terminé, témoignages générés:', this.testimonials.length);
        } catch (error) {
            console.error('Erreur lors du chargement du CSV:', error);
            // En cas d'erreur, on garde les témoignages par défaut
            this.fallbackTestimonials();
            console.log('Témoignages de secours activés');
        }
    }

    // Parser le contenu CSV
    parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        
        // Ignorer la ligne d'en-tête si elle existe
        const dataLines = lines.slice(1);
        
        dataLines.forEach(line => {
            // Parser CSV avec des virgules et gérer les guillemets
            const columns = this.parseCSVLine(line);
            if (columns.length >= 4) {
                const [nom, age, localite, conditions] = columns;
                
                // Filtrer les entrées valides
                if (nom && age && localite && conditions) {
                    this.data.push({
                        nom: nom.trim(),
                        age: age.trim(),
                        localite: localite.trim(),
                        conditions: conditions.trim()
                    });
                }
            }
        });
        
        console.log(`${this.data.length} entrées chargées depuis le CSV`);
    }

    // Parser une ligne CSV en gérant les guillemets
    parseCSVLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                result.push(current);
                current = '';
            } else {
                current += char;
            }
        }
        
        result.push(current);
        return result;
    }

    // Générer les témoignages à partir des données CSV
    generateTestimonials() {
        // Mélanger les données pour avoir une sélection aléatoire
        const shuffledData = [...this.data].sort(() => 0.5 - Math.random());
        
        // Prendre 15-20 témoignages pour la rotation
        const selectedData = shuffledData.slice(0, 20);
        
        this.testimonials = selectedData.map(victim => {
            let testimonial = ` ${victim.nom}`;
            
            // Ajouter l'âge si disponible
            if (victim.age && victim.age !== '') {
                testimonial += `, ${victim.age} ans`;
            }
            
            // Ajouter la localité
            if (victim.localite && victim.localite !== '') {
                testimonial += `, de ${victim.localite}`;
            }
            
            // Ajouter les conditions exactes du féminicide de façon respectueuse
            if (victim.conditions && victim.conditions !== '') {
                // Nettoyer légèrement le texte pour la présentation mais garder l'essentiel
                let conditions = victim.conditions;
                
                // Simplifier certaines formulations trop techniques tout en gardant l'information
                conditions = conditions.replace(/mise en examen/g, 'auteur arrêté');
                conditions = conditions.replace(/garde à vue/g, 'auteur interpellé');
                conditions = conditions.replace(/homicide volontaire/g, 'meurtre');
                
                testimonial += `, ${conditions}`;
            }
            
            return testimonial;
        });
        
        console.log('Témoignages générés:', this.testimonials.length);
    }

    // Témoignages de secours en cas d'erreur
    fallbackTestimonials() {
        this.testimonials = [
            " Clarisse, 23 ans, étudiante en droit, tuée par son ex-petit ami",
            " Marie, 35 ans, infirmière et mère de 3 enfants, assassinée par son mari",
            " Fatima, 28 ans, professeure, poignardée par son compagnon",
            " Léa, 31 ans, artiste peintre, étranglée par son conjoint",
            " Sandrine, 42 ans, commerçante, abattue par son ex-mari",
            " Isabelle, 51 ans, de Haumont, victime de féminicide",
            " Sandy, 34 ans, de Bretigny-sur-Orge, tuée par son compagnon",
            " Nasrine, 41 ans, de Cenon, assassinée par son mari"
        ];
    }

    // Retourner les témoignages formatés pour le système de rotation
    getFormattedTestimonials() {
        return this.testimonials;
    }

    // Mettre à jour le système de rotation existant
    updateRotatingText() {
        console.log('updateRotatingText appelée, nombre de témoignages:', this.testimonials.length);
        
        if (this.testimonials.length === 0) {
            console.warn('Aucun témoignage disponible, conservation des données par défaut');
            return;
        }

        // Trouver l'élément de rotation
        const rotatingElement = document.querySelector('.txt-rotate');
        if (rotatingElement) {
            console.log('Élément de rotation trouvé, mise à jour en cours...');
            console.log('Nouveaux témoignages:', this.testimonials.slice(0, 3));
            
            // Attendre que l'animation actuelle termine son cycle avant de changer
            setTimeout(() => {
                // Mettre à jour l'attribut data-rotate avec les nouvelles données
                rotatingElement.setAttribute('data-rotate', JSON.stringify(this.testimonials));
                console.log('Attribut data-rotate mis à jour avec', this.testimonials.length, 'témoignages CSV');
                
                // Forcer le redémarrage de l'animation
                if (window.TxtRotate && rotatingElement.txtRotateInstance) {
                    // Arrêter l'ancienne instance
                    clearTimeout(rotatingElement.txtRotateInstance.timeout);
                }
                
                // Créer une nouvelle instance spécialisée pour le HTML
                const period = rotatingElement.getAttribute('data-period') || 2000;
                rotatingElement.txtRotateInstance = new TxtRotateHTML(rotatingElement, this.testimonials, parseInt(period, 10));
                
            }, 3000); // Attendre 3 secondes pour laisser l'animation initiale se stabiliser
        } else {
            console.error('Élément de rotation non trouvé');
        }
    }

    // Mise à jour des statistiques basées sur les données CSV
    updateStatistics() {
        const currentYear = new Date().getFullYear();
        const currentYearData = this.data.filter(victim => 
            victim.date && victim.date.includes(currentYear.toString())
        );
        
        // Mettre à jour le chiffre des féminicides de l'année en cours
        const statElement = document.querySelector('.stat-number');
        if (statElement && currentYearData.length > 0) {
            // Calcul approximatif pour l'année complète
            const daysPassed = Math.floor((new Date() - new Date(currentYear, 0, 1)) / (1000 * 60 * 60 * 24));
            const estimatedYearlyTotal = Math.round((currentYearData.length / daysPassed) * 365);
            
            // Utiliser soit les données réelles si on est en fin d'année, soit l'estimation
            const finalNumber = daysPassed > 300 ? currentYearData.length : estimatedYearlyTotal;
            
            statElement.textContent = Math.min(finalNumber, 200); // Plafonnement à 200 pour cohérence
        }
    }
}

// Variable globale pour le parser
window.feminicidesParser = null;

// Version simplifiée sans liens
window.addEventListener('load', async function() {
    console.log('🚀 Initialisation du parser CSV...');
    
    const parser = new FeminicidesCSVParser();
    window.feminicidesParser = parser;
    
    try {
        await parser.loadCSV();
        
        if (parser.testimonials.length > 0) {
            console.log('✅ CSV chargé avec', parser.testimonials.length, 'témoignages');
            
            // Attendre que l'animation initiale soit stable puis forcer le remplacement
            setTimeout(() => {
                const rotatingElement = document.querySelector('.txt-rotate');
                if (rotatingElement && rotatingElement.txtRotateInstance) {
                    console.log('🔄 Remplacement par les données CSV...');
                    
                    // Arrêter l'ancienne instance
                    if (rotatingElement.txtRotateInstance.timeout) {
                        clearTimeout(rotatingElement.txtRotateInstance.timeout);
                    }
                    
                    // Mettre à jour les données et redémarrer
                    rotatingElement.setAttribute('data-rotate', JSON.stringify(parser.testimonials));
                    
                    // Créer une nouvelle instance normale
                    const period = rotatingElement.getAttribute('data-period') || 2000;
                    rotatingElement.txtRotateInstance = new TxtRotate(rotatingElement, parser.testimonials, parseInt(period, 10));
                    
                    console.log('✅ Animation mise à jour avec les données réelles');
                } else {
                    console.error('❌ Instance TxtRotate non trouvée');
                }
            }, 4000); // Attendre 4 secondes
        } else {
            console.warn('⚠️ Aucun témoignage chargé depuis le CSV');
        }
        
    } catch (error) {
        console.error('❌ Erreur CSV:', error);
    }
});
