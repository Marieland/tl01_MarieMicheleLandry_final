

    document.addEventListener('DOMContentLoaded', function () {
        class Article {
            constructor(title, description, details, img, auteur, temps, nbMots) {
                this.title = title;
                this.description = description;
                this.details = details;
                this.img = img;
                this.auteur = auteur;
                this.temps = temps;
                this.nbMots = nbMots;
            }
        }
    
        const articlesData = [
            
        {
            title: 'Mes difficultés',
            description: 'Dans un monde de Javascript.',
            details: 'La plus grande difficulté rencontrée a été de réussir à concilier études, famille, maison. Jai du réécouter la plupart des Cours afin de mettre en place les éléments demandés', 
            img: 'https://images.unsplash.com/photo-1618767451283-c9705dff0874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE9ic3RhY2xlfGVufDB8fDB8fHww',
            auteur: 'Marie-Michèle Landry',
            temps:'1 minute', 
            nbMots:'250mots'
        },
        {
            title: 'La Jamaique',
            description: 'Quoi faire en Jamaïque?',
            details: 'Année après année, la Jamaïque continue de charmer et d’attirer de nombreux voyageurs grâce à ses kilomètres de plages de sable blanc, à ses imposantes chaînes de montagnes, à sa végétation luxuriante et à ses eaux cristallines aux multiples nuances de bleu. Si vous recherchez la tranquillité et la détente, la Jamaïque saura vous apaiser et vous faire oublier le stress du quotidien avec la beauté de ses paysages et l’atmosphère relaxante que dégagent ses habitants.',
            img: 'https://voyagesarabais.com/crop/countryphoto/1200/550/sans-titre-2.jpg',
            auteur: 'Voyage à rabais',
            temps:'1 minute', 
            nbMots:'40mots'
        },
        {
            title: 'Cuba',
            description: 'Quoi faire à Cuba?',
            details: 'Des kilomètres et des kilomètres de plage de sable blanc longent la mer tout autour de la magnifique île, attirant les touristes venus de partout dans le monde pour admirer la splendeur de l’endroit. Connue pour sa grande production de rhum, Cuba ne laisse pas non plus sa place lorsqu’il s’agit de fabrication de cigares haut de gamme. Véritable berceau de la musique latine, Cuba saura certainement vous séduire avec ses sons à saveur tropicale!',
            img:'https://voyagesarabais.com/crop/countryphoto/1200/550/cuba-plage.jpg',
            auteur: 'Voyage à rabais',
            temps:'1 minute', 
            nbMots:'30mots'
        },
        {
            title: 'République dominicaine',
            description: 'Quoi faire en République dominicaine?',
            details: 'La République dominicaine attire plusieurs touristes chaque année en raison de la beauté de ses plages et de sa météo exceptionnelle. On trouve dans ce pays des Caraïbes non seulement de magnifiques plages, mais aussi une culture riche en ce qui a trait à la musique, à l’art et au baseball. Imprégnez-vous du pays en dansant au son de la musique latine à Puerto Plata, tard dans la nuit, ou encore en relaxant avec vos enfants à Punta Cana. L’essayer, c’est l’adopter!',
            img: 'https://voyagesarabais.com/crop/countryphoto/1200/550/plage-republique-dominicaine.jpg',
            auteur: 'Voyage à rabais',
            temps:'3 minute', 
            nbMots:'20mots'

        },
        {
            title: 'Bermudes',
            description: 'Quoi faire aux Bermudes?',
            details: 'Les Bermudes sont un archipel paradisiaque du territoire britannique faisant partie de la communauté caribéenne. Connues pour leurs splendides plages bordées d’une mer turquoise, ses 8 îles principales vous surprendront par leur beauté naturelle. Que ce soit en raison de ses jolies maisons colorées au toit blanc, de ses grottes qui se laissent facilement explorer, de ses plages de sable rosé ou de ses activités nautiques toutes aussi divertissantes les unes que les autres, les Bermudes vous promettent un séjour remarquable. Sa capitale, Hamilton, accueille de nombreux yachts luxueux, alors que les îles Grande Bermude, Saint George’s, Saint David’s et Somerset sont prêtes à vous recevoir.',
            img: 'https://voyagesarabais.com/crop/countryphoto/1200/550/yacht-hamilton.jpg',
            auteur: 'Voyage à rabais',
            temps:'2 minute', 
            nbMots:'35mots'
        },
        {
            title: 'Porto Rico',
            description: 'Quoi faire à Porto Rico?',
            details: 'Porto Rico, voisine de Vieques, est une île des Caraïbes située à l’est de la République dominicaine. Ce petit paradis aux beautés naturelles est composé de plages de sable blanc bordées par une mer cristalline à la couleur turquoise. Son panorama offre également un magnifique décor montagneux et tropical. Pour les amoureux de la nature, la forêt sèche de Guánica abrite de nombreux oiseaux et plus de 700 espèces de végétaux. Porto Rico est une destination connue en raison de sa capitale, San Juan, aux bâtiments coloniaux et aux maisons colorées. Plusieurs hôtels sont disponibles à Porto Rico pour vos séjours ensoleillés.',
            img: 'https://voyagesarabais.com/crop/countryphoto/1200/550/plage-porto-rico.png',
            auteur: 'Voyage à rabais',
            temps:'3 minute', 
            nbMots:'25mots'
        },
        {
            title: 'Australie',
            description: 'Quoi faire en Australie?',
            details: 'L’Australie, c’est tout un continent à découvrir. En explorant son vaste territoire, vous serez frappé par la diversité des paysages et du climat – qui va de désertique à tropical – et aurez sans doute du mal à croire qu’il s’agit d’un seul et même pays! Profitez du charme cosmopolite de Sydney et de Melbourne, aventurez-vous au cœur du désert ou de la jungle, arpentez des plages semblant s’étendre à l’infini, plongez à la découverte de la Grande Barrière de corail… L’Australie recèle de nombreux trésors qui en font un pays absolument incomparable. Préparez-vous à vivre l’expérience d’une vie!',
            img: 'https://voyagesarabais.com/crop/countryphoto/1200/550/australie-sydney-opera-1.jpg',
            auteur: 'Voyage à rabais',
            temps:'2 minute', 
            nbMots:'42mots'
        },
        {
            title: 'Bahamas',
            description: 'Quoi faire au Bahamas?',
            details: 'Qui n’a jamais rêvé de partir pour les Bahamas? Cet archipel bien connu pour la transparence de ses eaux et ses fonds marins abritant parmi les plus beaux coraux du monde ne laisse personne indifférent. Les Bahamas sont situées à l’est de la Floride, dans la mer des Caraïbes, et sont constituées d’environ 700 îles et îlots. Nassau et Freeport, qui ressemblent un peu à des villes américaines, sont les destinations préférées des vacanciers en raison de leurs nombreux complexes balnéaires tout inclus et ports d’escales pour les navires de croisières.',
            img: 'https://voyagesarabais.com/crop/countryphoto/1200/550/plage-bahamas-coucher-soleil.jpg',
            auteur: 'Voyage à rabais',
            temps:'3 minute', 
            nbMots:'46mots'
        },
        {
            title: 'Honduras',
            description: 'Quoi faire au Honduras?',
            details: 'Situé au cœur de l’Amérique centrale, le Honduras est un endroit à découvrir. Reconnu pour ses splendides sites de plongée et sa faune diversifiée, ce pays comblera les voyageurs amoureux de nature. Avec plus de 760 km de plages paradisiaques, il n’est pas étonnant que le tourisme du Honduras soit en plein essor. Son climat tropical en fait une destination par excellence pour les amateurs de chaleur et de beau temps.',
            img: 'https://voyagesarabais.com/crop/countryphoto/1200/550/8-ile-tropicale.jpg',
            auteur: 'Voyage à rabais',
            temps:'2 minute', 
            nbMots:'50mots'
        },
        
    ];
       
    
        const articles = articlesData.map(data => new Article(data.title, data.description, data.details, data.img, data.auteur, data.temps, data.nbMots));
    
        const container = document.getElementById('blog-cards-container');
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDetails = document.getElementById('modal-details');
        const modalAuthor = document.getElementById('modal-author');
        const modalWords = document.getElementById('modal-words');
        const modalTime = document.getElementById('modal-time');
        const closeButton = document.querySelector('.close-button');
        const toggleViewButton = document.getElementById('toggle-view-button');
        const searchInput = document.getElementById('search-input');
    
        articles.forEach(article => {
            const card = document.createElement('div');
            card.className = 'blog-card';
    
            const img = document.createElement('img');
            img.src = article.img;
            img.alt = article.title;
            card.appendChild(img);
    
            const title = document.createElement('h2');
            title.textContent = article.title;
            card.appendChild(title);
    
            const description = document.createElement('p');
            description.textContent = article.description;
            card.appendChild(description);
    
            const button = document.createElement('button');
            button.textContent = 'Lire la suite';
            button.addEventListener('click', () => {
                modalTitle.textContent = article.title;
                modalDetails.textContent = article.details;
                modalAuthor.textContent = `Auteur: ${article.auteur}`;
                modalWords.textContent = `Nombre de mots: ${article.nbMots}`;
                modalTime.textContent = `Temps de lecture: ${article.temps}`;
                modal.style.display = 'block';
            });
            card.appendChild(button);
    
            container.appendChild(card);
        });
    
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        toggleViewButton.addEventListener('click', () => {
            container.classList.toggle('list-view');
            container.classList.toggle('grid-view');
        });

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm));
            displayArticles(filteredArticles);
        });
        
        displayArticles(articles);
    });
    
