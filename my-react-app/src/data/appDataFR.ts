import { AppData } from '../types/index';

export const appDataFR: AppData = {
  categories: [
    {
      id: "boat-tours",
      title: "Tours en Bateau",
      route: "/boat-tours",
      description: "Explorez la côte de l'Algarve avec nos excursions en bateau de luxe",
      image: "ai-generated-boat-picture.jpg",
      items: [
        {
          id: 1,
          name: "Cool Charters",
          email: "info@coolchartersvilamoura.com",
          logo: "Cool-Charters-BSQUAREwhite.png",
          type: "Tours en Bateau",
          description: "Propose des expériences nautiques personnalisées, idéales pour les occasions spéciales comme les anniversaires, les enterrements de vie de garçon/fille, les mariages ou les événements d'entreprise. Les excursions comprennent des visites de grottes, des plages isolées et l'observation des dauphins, ainsi que des activités nautiques comme le jet ski. L'équipe dévouée assure un service d'excellence, créant des souvenirs inoubliables en mer.",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Lundi", hours: "09:00 - 00:00" },
            { day: "Mardi", hours: "09:00 - 00:00" },
            { day: "Mercredi", hours: "09:00 - 00:00" },
            { day: "Jeudi", hours: "09:00 - 00:00" },
            { day: "Vendredi", hours: "09:00 - 00:00" },
            { day: "Samedi", hours: "09:00 - 00:00" },
            { day: "Dimanche", hours: "09:00 - 00:00" }
          ],
          address: "Marina de Vilamoura",
          phone: "+351 912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/coolchartersvilamoura",
            instagram: "https://www.instagram.com/coolchartersvilamoura/",
            website: "https://coolchartersvilamoura.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.114271710697!2d-8.121552223229203!3d37.078585172169184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab593e20c0315%3A0xdbad05ad5ff33887!2sCool%20Charters!5e0!3m2!1spt-PT!2spt!4v1748883117704!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Réduction",
            description: "5% DE RÉDUCTION"
          },
          rootFolder: "Cool Charters",
          images: [
            "3e7042db-69f6-4f1f-b8b0-487e20a38ce7.jpeg",
            "b8ce1f17-7758-47d7-9ad8-f4e8d68f6bc5.jpeg",
            "c7a1cfb6-68cf-4491-b024-306646e95c5e.jpeg",
            "cc5c2fdf-0363-4d44-a721-5c1e3dd2343d.jpeg",
            "caption.jpg",
            "caption (1).jpg",
            "caption (2).jpg",
            "discover-algarve-s-famous.jpg",
            "you-will-find-a-wonderful.jpg",
            "background5.jpg",
            "kerry-is-vilamoura-s.jpg",
            "cool.jpg"
          ]
        },
        {
          id: 2,
          name: "Passeios Ria Formosa",
          email: "info@passeiosriaformosa.com",
          logo: "riaformosa.png",
          type: "Tours en Bateau",
          description: "Découvrez la beauté naturelle de la Ria Formosa avec nos visites guidées. Observez les oiseaux marins, découvrez des îles désertes et apprenez-en davantage sur l'écosystème unique de cette zone protégée. Visites disponibles pour petits et grands groupes, avec des guides expérimentés et compétents.",
          locationIds: [0],
          rating: 4.8,
          openingHours: [
            { day: "Lundi", hours: "09:00 - 18:00" },
            { day: "Mardi", hours: "09:00 - 18:00" },
            { day: "Mercredi", hours: "09:00 - 18:00" },
            { day: "Jeudi", hours: "09:00 - 18:00" },
            { day: "Vendredi", hours: "09:00 - 18:00" },
            { day: "Samedi", hours: "09:00 - 18:00" },
            { day: "Dimanche", hours: "09:00 - 18:00" }
          ],
          address: "Marina de Tavira",
          phone: "+351 923 456 789",
          socialMedia: {
            facebook: "https://www.facebook.com/passeiosriaformosa",
            instagram: "https://www.instagram.com/passeiosriaformosa/",
            website: "https://passeiosriaformosa.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.114271710697!2d-8.121552223229203!3d37.078585172169184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab593e20c0315%3A0xdbad05ad5ff33887!2sCool%20Charters!5e0!3m2!1spt-PT!2spt!4v1748883117704!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Réduction",
            description: "10% DE RÉDUCTION POUR LES GROUPES"
          },
          rootFolder: "Passeios Ria Formosa",
          images: ["sailing-tour.jpg", "featured-2-horas-fuseta.webp", "birdwatching.jpg", "sealife-observation.jpg", "dolphins-observation.jpg", "DJI_20240427_200812_220.webp", "dji_fly_20240425_145136_206_1714164247660_timed.webp"]
        }
      ]
    },
    {
      id: "gastronomy",
      title: "Gastronomie",
      route: "/gastronomy",
      description: "Découvrez une cuisine exquise dans des restaurants sélectionnés",
      image: "pexels-pixabay-262978.jpg",
      items: [
        {
          id: 1,
          name: "A ver Tavira",
          email: "restaurante@avertavira.pt",
          logo: "AverTavira.png",
          type: "Restaurant Gastronomique",
          description: "Le restaurant A Ver Tavira, récompensé d'une étoile Michelin, offre une expérience gastronomique unique au cœur historique de Tavira, avec des saveurs de l'Algarve et une vue imprenable. Sous la direction du chef Luís Brito, il allie tradition et créativité dans un menu innovant.",
          locationIds: [0],
          rating: 5,
          openingHours: [
            { day: "Lundi", hours: "Fermé" },
            { day: "Mardi", hours: "18:30 - 21:30" },
            { day: "Mercredi", hours: "12:00 - 14:30, 18:30 - 21:30" },
            { day: "Jeudi", hours: "12:00 - 14:30, 18:30 - 21:30" },
            { day: "Vendredi", hours: "12:00 - 14:30, 18:30 - 21:30" },
            { day: "Samedi", hours: "12:00 - 14:30, 18:30 - 21:30" },
            { day: "Dimanche", hours: "Fermé" }
          ],
          address: "Rua de Tavira, 12",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/avertavira.restaurante/",
            instagram: "https://www.instagram.com/avertavirarestaurante/",
            website: "https://avertavira.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.1350356455455!2d-7.653902723227645!3d37.125702272156204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd100379c4264773%3A0xca74ccd84b4f6fa!2sRestaurante%20A%20Ver%20Tavira!5e0!3m2!1spt-PT!2spt!4v1748882657083!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Verre de Bienvenue",
            description: "Coupe de Champagne de Bienvenue"
          },
          rootFolder: "A ver Tavira",
          images: [
            "borrego-feijao-bago-de.jpg",
            "rooftop-tavira.webp",
            "chefe-luis-brito.jpg",
            "cavala-marinada-e-gaspacho.jpg",
            "peixe-de-linha.jpg",
            "carabineiro-caril-couve.jpg",
            "the-detailed-combinations.jpg",
            "each-plate-prepared-with.jpg",
            "caption.jpg",
            "ce86969e3cec4b7bb0d0cde9e123fa0c.webp"
          ]
        },
        {
          id: 2,
          name: "Authentic",
          email: "reservations@authentic-restaurant.pt",
          logo: "Logo-Authentic-dourado.png",
          type: "Restaurant Gastronomique",
          description: "Le restaurant Authentic, situé à Quinta do Lago, offre une expérience gastronomique sophistiquée, combinant la cuisine portugaise classique avec une touche contemporaine, dans une ambiance luxueuse et raffinée.",
          locationIds: [1],
          rating: 5,
          openingHours: [
            { day: "Lundi", hours: "Fermé" },
            { day: "Mardi", hours: "Fermé" },
            { day: "Mercredi", hours: "18:00 - 23:00" },
            { day: "Jeudi", hours: "18:00 - 23:00" },
            { day: "Vendredi", hours: "18:00 - 23:00" },
            { day: "Samedi", hours: "18:00 - 23:00" },
            { day: "Dimanche", hours: "18:00 - 23:00" }
          ],
          address: "Rua Authentic, 45",
          phone: "912 345 679",
          socialMedia: {
            facebook: "https://www.facebook.com/authenticrestaurant",
            instagram: "https://www.instagram.com/authenticrestaurant",
            website: "https://www.authenticrestaurant.pt"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.123456!3d37.134567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Menu Dégustation",
            description: "Menu Dégustation 5 Plats"
          },
          rootFolder: "Authentic",
          images: ["83dcbf96-9726-4f1b-a1c7-c13c5f223b98.avif", "5e949c5e-060e-457b-ad67-b7597677c446.avif", "44aa29bd-0300-47b5-9ba5-83d8b8b19bd1.avif", "4d07f2e9-70b3-4b8b-a1e1-91fe37279165.avif", "843ccb2d-bf51-4c6a-bf0d-24ab6463b44c.avif", "ff05a4b6-f867-4243-9e4b-7141f87220af.avif", "c4bd01b2-7c29-405a-94d6-b566a0328e36.avif", "44cf2c78-1fec-4650-9ed2-eedaf4708a25.avif", "036d2880-7465-460b-9c18-61260a3de321.avif", "f818d5b4-5d61-4cc5-b0eb-e90fd92ac501.avif"]
        }
      ]
    },
    {
      id: "activities",
      title: "Activités",
      route: "/activities",
      description: "Profitez d'un accès exclusif aux activités premium",
      image: "card_slides.jpg",
      items: [
        {
          id: 1,
          name: "Aia Racing School",
          email: "racingschool@autodromodoalgarve.com",
          logo: "Autódromo_Internacional_Algarve_logo.png",
          type: "Expérience de Course",
          description: "Située sur l'Autodrome International de l'Algarve à Portimão, elle propose des expériences de conduite sportive dans des voitures haute performance comme Porsche, Mercedes et autres. Avec des instructeurs expérimentés et une infrastructure d'excellence, elle offre une immersion sûre et passionnante dans le monde du sport automobile.",
          locationIds: [6],
          rating: 5,
          openingHours: [
            { day: "Lundi", hours: "09:00 - 18:00 Sur rendez-vous" },
            { day: "Mardi", hours: "09:00 - 18:00 Sur rendez-vous" },
            { day: "Mercredi", hours: "09:00 - 18:00 Sur rendez-vous" },
            { day: "Jeudi", hours: "09:00 - 18:00 Sur rendez-vous" },
            { day: "Vendredi", hours: "09:00 - 18:00 Sur rendez-vous" },
            { day: "Samedi", hours: "09:00 - 18:00 Sur rendez-vous" },
            { day: "Dimanche", hours: "09:00 - 18:00 Sur rendez-vous" }
          ],
          address: "Autódromo Internacional do Algarve",
          phone: "+351 282 405 600",
          socialMedia: {
            facebook: "https://www.facebook.com/AutodromoInternacionaldoAlgarve",
            instagram: "https://www.instagram.com/autodromodoalgarve/",
            website: "https://autodromodoalgarve.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.675044142391!2d-8.231442223228038!3d37.11285207215955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1acf3201d06d49%3A0xa8045a2667997fdb!2sAut%C3%B3dromo%20Internacional%20do%20Algarve!5e0!3m2!1spt-PT!2spt!4v1748882885204!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Réduction",
            description: "10% DE RÉDUCTION"
          },
          rootFolder: "Aia Racing School",
          images: [
            "295303780_10159273014723531_8030419394435337216_n.jpg",
            "racing-school.jpg",
            "AIA-Classe-A-AMG-9-scaled.jpg",
            "AIA-AMG-GT-Preto-27-scaled-e1744045842936.jpg",
            "Davanti-AIA-Racing-School.jpg",
            "NunOrganistA_048a.jpg",
            "parceiro_70_racing_school_cf026414_3__2___1_tonemapped2b_1__2.jpg"
          ]
        },
        {
          id: 3,
          name: "Slide & Splash",
          email: "info@slidesplash.com",
          logo: "logo_slidesplash.png",
          type: "Parc Aquatique",
          description: "Le Slide & Splash, à Lagoa, est un parc aquatique familial avec diverses attractions pour tous les âges. En plus des toboggans excitants, il propose des zones pour enfants, des espaces de détente et des spectacles d'animaux. Idéal pour une journée de divertissement en Algarve.\n\nHoraires Saisonniers:\n- Juin: 10:00 - 17:30\n- 1 Juillet au 12 Septembre: 10:00 - 18:00\n- 13 Septembre au 31 Octobre: 10:00 - 17:00",
          locationIds: [7],
          rating: 5,
          openingHours: [
            { day: "Lundi", hours: "10:00 - 18:00 (horaires variables selon la saison)" },
            { day: "Mardi", hours: "10:00 - 18:00 (horaires variables selon la saison)" },
            { day: "Mercredi", hours: "10:00 - 18:00 (horaires variables selon la saison)" },
            { day: "Jeudi", hours: "10:00 - 18:00 (horaires variables selon la saison)" },
            { day: "Vendredi", hours: "10:00 - 18:00 (horaires variables selon la saison)" },
            { day: "Samedi", hours: "10:00 - 18:00 (horaires variables selon la saison)" },
            { day: "Dimanche", hours: "10:00 - 18:00 (horaires variables selon la saison)" }
          ],
          address: "Vale de Deus, 8401-901 Estombar, Lagoa",
          phone: "+351 282 340 800",
          socialMedia: {
            facebook: "https://www.facebook.com/slidesplash",
            instagram: "https://www.instagram.com/slidesplash",
            website: "https://www.slidesplash.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.675044142391!2d-8.231442223228038!3d37.11285207215955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1acf3201d06d49%3A0xa8045a2667997fdb!2sSlide%20%26%20Splash!5e0!3m2!1spt-PT!2spt!4v1748882885204!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Réduction",
            description: "15% DE RÉDUCTION"
          },
          rootFolder: "Slide&Splash",
          images: ["Slide-Splash-Torre-sector-4-e-aereas_3-e1679392334545.webp", "atracoes31.jpg", "Slide-Splash-Water-Park-Algarve-Portugal.jpg", "atracoes39.jpg", "slide-splash-water-slide.jpg", "new-ride-2018-disco-river.jpg", "new-rides-2018.jpg", "black-hole.jpg", "slide-splash-2019 (1).jpg", "the-big-wave.jpg", "big-slides-tower.jpg", "slide-splash-2019.jpg", "slide-2020.jpg"]
        }
      ]
    },
    {
      id: "winery-tours",
      title: "Visites de Caves",
      route: "/winery-tours",
      description: "Découvrez les meilleurs vins de la région",
      image: "vertical-shot-person-holding-glass-wine-vineyard-sunlight.jpg",
      items: [
        {
          id: 1,
          name: "Quinta do Canhoto",
          email: "info@quintadocanhoto.com",
          logo: "LOGO_QDC_WHITE_NEW.png",
          type: "Visites de Caves",
          description: "La Quinta do Canhoto, à Albufeira, est une référence en matière de vins de l'Algarve, alliant tradition familiale et innovation. Elle propose des dégustations de vins et des expériences uniques d'œnotourisme. Les visites doivent être réservées 24h à l'avance.",
          locationIds: [4],
          rating: 5,
          openingHours: [
            { day: "Lundi", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Mardi", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Mercredi", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Jeudi", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Vendredi", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Samedi", hours: "Fermé" },
            { day: "Dimanche", hours: "Fermé" }
          ],
          address: "Quinta do Canhoto",
          phone: "+351 912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/p/Quinta-do-Canhoto-100049285896978/",
            instagram: "https://www.instagram.com/quinta_do_canhoto/",
            website: "https://www.quintadocanhoto.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.675044142391!2d-8.231442223228038!3d37.11285207215955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1acf3201d06d49%3A0xa8045a2667997fdb!2sQuinta%20do%20Canhoto%20Adega!5e0!3m2!1spt-PT!2spt!4v1748882885204!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Réduction",
            description: "15% DE RÉDUCTION"
          },
          rootFolder: "Quinta do Canhoto",
          images: ["almoco-vinico.jpg", "as-vinhas.jpg", "espaco-exterior.jpg", "provas-de-vinho.jpg", "o-deck-da-adega.jpg", "great-day-out-lovely.jpg", "caption.jpg", "great-day-out-lovely (1).jpg", "great-day-out-lovely (2).jpg"]
        },
        {
          id: 2,
          name: "Adega do Cantor",
          email: "info@adegadocantor.com",
          logo: "adega-do-cantor.png",
          type: "Visites de Caves",
          description: "L'Adega do Cantor, propriété du célèbre chanteur Sir Cliff Richard, produit des vins primés comme le Vida Nova. Elle propose des visites guidées des vignobles et de la cave, avec des dégustations de vins et des expériences gastronomiques uniques.",
          locationIds: [4],
          rating: 5,
          openingHours: [
            { day: "Lundi", hours: "10:00 - 17:00" },
            { day: "Mardi", hours: "10:00 - 17:00" },
            { day: "Mercredi", hours: "10:00 - 17:00" },
            { day: "Jeudi", hours: "10:00 - 17:00" },
            { day: "Vendredi", hours: "10:00 - 17:00" },
            { day: "Samedi", hours: "Fermé" },
            { day: "Dimanche", hours: "Fermé" }
          ],
          address: "Adega do Cantor",
          phone: "+351 912 345 679",
          socialMedia: {
            facebook: "https://www.facebook.com/adegadocantor",
            instagram: "https://www.instagram.com/adegadocantor",
            website: "https://www.adegadocantor.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.675044142391!2d-8.231442223228038!3d37.11285207215955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1acf3201d06d49%3A0xa8045a2667997fdb!2sAdega%20do%20Cantor!5e0!3m2!1spt-PT!2spt!4v1748882885204!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Expérience Premium",
            description: "Visite Guidée + Dégustation de Vins Premium"
          },
          rootFolder: "Adega do Cantor",
          images: [
            "photo4jpg.jpg",
            "photo5jpg.jpg",
            "photo2jpg (1).jpg",
            "photo4jpg (1).jpg",
            "photo0jpg.jpg",
            "photo3jpg.jpg",
            "photo0jpg (1).jpg",
            "img-20190507-145609-largejpg.jpg",
            "img-20190507-142303-largejpg.jpg",
            "beautiful-cellar.jpg",
            "photo3jpg (1).jpg",
            "photo2jpg.jpg",
            "20181004-154037-largejpg.jpg"
          ]
        }
      ]
    },
    {
      id: "wellness",
      title: "Bien-être",
      route: "/wellness",
      description: "Détendez-vous et ressourcez-vous avec nos partenaires bien-être",
      image: "close-up-therapist-hand-massaging-woman-s-back-with-hot-towel-spa.jpg",
      items: [
        {
          id: 1,
          name: "7 Seven Spa Vilamoura",
          email: "7 Seven Spa Vilamoura@cleverdetails.com",
          logo: "7spa.svg",
          type: "Spa Complet",
          description: "Le 7 Seven Spa, situé au Hilton Vilamoura As Cascatas Golf Resort & Spa, offre une expérience bien-être avec 14 salles de soins, un circuit d'hydrothérapie, sauna, hammam, jacuzzi et jardin zen. Idéal pour se détendre et se ressourcer.",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Lundi", hours: "09:45 - 21:00" },
            { day: "Mardi", hours: "09:45 - 21:00" },
            { day: "Mercredi", hours: "09:45 - 21:00" },
            { day: "Jeudi", hours: "09:45 - 21:00" },
            { day: "Vendredi", hours: "09:45 - 21:00" },
            { day: "Samedi", hours: "09:45 - 20:00" },
            { day: "Dimanche", hours: "09:45 - 20:00" }
          ],
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/7SevenSpaVilamoura",
            instagram: "https://www.instagram.com/7_spa_vilamoura/",
            website: "https://www.hilton.com/pt/hotels/faohihi-hilton-vilamoura-as-cascatas-golf-resort-and-spa/spa/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.675044142391!2d-8.231442223228038!3d37.11285207215955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1acf3201d06d49%3A0xa8045a2667997fdb!2s7%20Seven%20Spa%20Vilamoura!5e0!3m2!1spt-PT!2spt!4v1748882885204!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Offre Spéciale",
            description: "15% DE RÉDUCTION sur le Menu & €5 DE RÉDUCTION sur le Circuit Thérapeutique"
          },
          rootFolder: "7 Seven Spa Vilamoura",
          images: [
            "7-Seven-Spa_-scaled.jpg",
            "7Spa6.jpg",
            "7spa-01.jpg",
            "7spa-02.jpg",
            "FAO_70271_Hilton_Vilamoura_Golf_Resort_&_Spa_0623_07.jpg",
            "7-seven-spa-hilton-vilamoura-bem-estar-algarve_F.webp",
            "faohi-spa19-hilton-vilamoura.avif",
            "faohi-spa25-hilton-vilamoura.avif",
            "faohi-spa28-hilton-vilamoura.avif",
            "faohi-spa11-hilton-vilamoura.avif",
            "faohi-spa21-hilton-vilamoura.avif"
          ]
        },
        {
          id: 2,
          name: "Duo Spa & Life Care",
          email: "info@duospa.com",
          logo: "DuoSpacare.png",
          type: "Bien-être",
          description: "Le Duo Spa & Life Care, situé au Cegonha Country Club à Vilamoura, propose des expériences bien-être avec circuit spa, sauna, hammam et soins comme l'exfoliation ou l'Iyashi Dome, pour des moments de détente et de rajeunissement.",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Lundi", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Mardi", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Mercredi", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Jeudi", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Vendredi", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Samedi", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Dimanche", hours: "Fermé" }
          ],
          address: "Vilamoura",
          phone: "+351 282 000 000",
          socialMedia: {
            facebook: "https://www.facebook.com/profile.php?id=100092450604778",
            instagram: "https://www.instagram.com/duospalifecare/",
            website: "https://duospalifecare.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.683821499002!2d-8.153268823228066!3d37.11264317215962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ac975c94113ab%3A0xcc82fe0af660f648!2sDuoSpa%20%26%20Life%20Care!5e0!3m2!1spt-PT!2spt!4v1748882994473!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Pack Premium",
            description: "20% DE RÉDUCTION sur le Soin Premium; €5 DE RÉDUCTION sur le Menu; Accès au Circuit Détox..."
          },
          rootFolder: "Duo Spa & Life Care",
          images: [
            "474105319_527080770383605_5631574254499945256_n.jpg",
            "474381410_527080747050274_4179998407528808811_n.jpg",
            "479886329_544365938655088_6110947825713535078_n.jpg",
            "IMG_1721-1024x683.jpg",
            "piscina-interior-duo-spa-life-care-cegonha-country-club-quarteira-algarve_F.jpg",
            "Captura de ecrã 2025-05-27, às 10.50.39.png",
            "Captura de ecrã 2025-05-27, às 10.46.17.png"
          ]
        },
        {
          id: 3,
          name: "DMed Clinic",
          email: "info@dmedclinic.com",
          logo: "DmedClinic.png",
          type: "Bien-être",
          description: "La DMed Clinic propose des services médicaux à domicile dans toute la région, incluant des consultations de Médecine Générale, Psychologie, Nutrition, Psychiatrie et Télémédecine, évitant les déplacements inutiles.",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Lundi", hours: "24h" },
            { day: "Mardi", hours: "24h" },
            { day: "Mercredi", hours: "24h" },
            { day: "Jeudi", hours: "24h" },
            { day: "Vendredi", hours: "24h" },
            { day: "Samedi", hours: "24h" },
            { day: "Dimanche", hours: "24h" }
          ],
          address: "DMed Clinic",
          phone: "+351 282 000 000",
          socialMedia: {
            facebook: "https://www.facebook.com/dmedclinic",
            instagram: "https://www.instagram.com/dmedclinic",
            website: "https://www.dmedclinic.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.123456!3d37.134567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          rootFolder: "DmedClinic",
          images: [
            "468288652_122196529190067954_5219035909363135589_n.jpg",
            "382379297_6903254336363281_5117175850526879907_n.jpg",
            "468219820_122196529196067954_5403389782633898697_n.jpg"
          ]
        }
      ]
    },
    {
      id: "beauty-and-hair-salons",
      title: "Salons de Beauté",
      route: "/beauty-and-hair-salons",
      description: "Prenez soin de votre beauté avec les meilleurs professionnels",
      image: "pexels-valeriya-939836.jpg",
      items: [
        //translate from appData.ts
        {
          id: 1,
          name: "Teresa",
          email: "teresa.estetica@live.com.pt",
          logo: "277158294_3199246580396467_9054406006485547937_n-removebg-preview.png",
          type: "Beauty Services",
          description: "Teresa est un esthéticien spécialisé dans les services de manucure (gel/acrylique), pédicure/manucure, dépilations, extensions de cils et des traitements visage. Elle offre également des massages de relaxation, des traitements corporels comme la cavitation et la démangeaison lymphatique, ainsi que la maquillage professionnel. Avec une approche personnalisée, Teresa offre des soins qui visent à mettre en valeur la beauté et à promouvoir le bien-être de ses clients.",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "Closed" },
            { day: "Tuesday", hours: "10:00 - 19:00" },
            { day: "Wednesday", hours: "10:00 - 19:00" },
            { day: "Thursday", hours: "10:00 - 19:00" },
            { day: "Friday", hours: "10:00 - 19:00" },
            { day: "Saturday", hours: "10:00 - 19:00" },
            { day: "Sunday", hours: "Closed" }
          ],
          address: "Vilamoura",
          phone: "+351 282 000 000",
          socialMedia: {
            facebook: "https://www.facebook.com/teresa.estetica.1/?locale=pt_PT",
            instagram: "https://www.instagram.com/teresaestetica/",
            website: "https://teresaestetica.blogspot.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.2410575051053!2d-8.119969409001797!3d37.075565200412285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab596853f1e61%3A0x4311763f59cdf941!2sTeresa%20Esteticista!5e0!3m2!1spt-PT!2spt!4v1748883059998!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Réduction",
            description: "15% DE RÉDUCTION"
          },
          rootFolder: "Teresa",
          images: ["480701348_4010568695930914_2910058108693305940_n.jpg", "491933473_4066849246969525_5195761018195095810_n.jpg", "492114092_4066954960292287_2649987048273042468_n.jpg", "492200895_4066850363636080_3484388594312717179_n.jpg", "277158294_3199246580396467_9054406006485547937_n.jpg", "489830761_1237845965017546_3086407899245374858_n.jpg"]
        },
        {
          id: 2,
          name: "Matilde",
          email: "teresa.estetica@live.com.pt",
          logo: "/images/logo/matilde.jpg",
          type: "Beauty Services",
          description: "Expertise en beauté et traitements esthétiques",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "09:00 - 19:00" },
            { day: "Tuesday", hours: "09:00 - 19:00" },
            { day: "Wednesday", hours: "09:00 - 19:00" },
            { day: "Thursday", hours: "09:00 - 19:00" },
            { day: "Friday", hours: "09:00 - 19:00" },
            { day: "Saturday", hours: "09:00 - 19:00" },
            { day: "Sunday", hours: "09:00 - 19:00" }
          ],
          address: "Vilamoura",
          phone: "+351 282 000 000",
          socialMedia: {
            facebook: "https://www.facebook.com/matildeestetica",
            instagram: "https://www.instagram.com/matildeestetica",
            website: "https://www.matildeestetica.pt"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.123456!3d37.134567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          rootFolder: "Matilde",
          images: ["beauty3.jpg", "beauty4.jpg"]
        }

      ]
    },
    {
      id: "chef-at-home",
      title: "Chef à Domicile",
      route: "/chef-at-home",
      description: "Profitez d'une expérience gastronomique unique dans le confort de votre maison",
      image: "professional-chef-preparing-food-kitchen.jpg",
      items: [
        {
          id: 1,
          name: "Chef André Simão",
          email: "asimao2@hotmail.com",
          logo: "teste",
          type: "Personal Chef",
          description: "Chef executivo de cozinha do Monte Rei onde se encontra o restaurante recomendado pelo guia Michelin, Vistas Monte Rei. Proporciona estilos de cozinha descontraídos, para juntar amigos e familia à mesa com menus de tapas & drinks, barbecue, menu algarvio ou menu de degustação em 5 momentos para celebrações mais pormenorizadas.",
          locationIds: [6],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "By appointment" },
            { day: "Tuesday", hours: "By appointment" },
            { day: "Wednesday", hours: "By appointment" },
            { day: "Thursday", hours: "By appointment" },
            { day: "Friday", hours: "By appointment" },
            { day: "Saturday", hours: "By appointment" },
            { day: "Sunday", hours: "By appointment" }
          ],
          address: "Service at your location",
          phone: "9251500",
          socialMedia: {
            facebook: "https://www.facebook.com/chefandresimao",
            instagram: "https://www.instagram.com/chefandresimao",
            website: "https://www.chefandresimao.pt"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.178901!3d37.112345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Welcome Package",
            description: "Porto wine and traditional Algarve sweets"
          },
          rootFolder: "ChefAndreSimao",
          images: ["Captura de ecrã 2025-05-30, às 14.00.44.png", "Captura de ecrã 2025-05-30, às 14.01.45.png", "Captura de ecrã 2025-05-30, às 14.01.52.png", "Captura de ecrã 2025-05-30, às 14.01.18.png", "Captura de ecrã 2025-05-30, às 14.01.05.png", "Captura de ecrã 2025-05-30, às 14.02.12.png", "Captura de ecrã 2025-05-30, às 14.02.29.png", "Captura de ecrã 2025-05-30, às 14.00.58.png"]
        },
        {
          id: 2,
          name: "Fancy Kitchen Algarve",
          email: "info@fancykitchenalgarve.com",
          logo: "Fancy kitchen.webp",
          type: "Personal Chef",
          description: "A Fancy Kitchen Algarve oferece experiências gastronómicas exclusivas com chefs privados e catering personalizado, elevando cada momento com requinte e sabor.",
          locationIds: [4],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "By appointment" },
            { day: "Tuesday", hours: "By appointment" },
            { day: "Wednesday", hours: "By appointment" },
            { day: "Thursday", hours: "By appointment" },
            { day: "Friday", hours: "By appointment" },
            { day: "Saturday", hours: "By appointment" },
            { day: "Sunday", hours: "By appointment" }
          ],
          address: "Service at your location",
          phone: "912 345 681",
          socialMedia: {
            facebook: "https://www.facebook.com/fancykitchen",
            instagram: "https://www.instagram.com/fancykitchen",
            website: "https://www.fancykitchenalgarve.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.142345!3d37.087654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Welcome Package",
            description: "Glass of Sparkling Wine and 2 Canapés per Person"
          },
          rootFolder: "Fancy Kitchen",
          images: [
            "rs=w_700,cg_true,m.webp",
            "rs=w_800,cg_true,m.webp",
            "rs=w_612,cg_true,m.webp",
            "rs=w_1200,cg_true,m (2).webp",
            "rs=w_1200,cg_true,m (3).webp",
            "rs=w_1200,cg_true,m.webp",
            "rs=w_1200,cg_true,m (1).webp"
          ]
        }
      ]
    }
  ],
  locations: [
    {
      id: 0,
      name: "Tavira",
      image: "/location1.jpg",
      description: "Tavira est une belle ville de l'Algarve, au Portugal. Elle est connue pour ses belles plages et sa vie nocturne animée.",
    },
    {
      id: 1,
      name: "Quinta do Lago",
      image: "/location2.jpg",
      description: "Quinta do Lago est une station balnéaire de luxe en Algarve, Portugal. Elle est connue pour ses terrains de golf de classe mondiale et ses plages immaculées.",
    },
    {
      id: 2,
      name: "Loulé",
      image: "/location3.jpg",
      description: "Loulé est une ville historique au cœur de l'Algarve, célèbre pour son marché traditionnel et ses événements culturels.",
    },
    {
      id: 3,
      name: "Vilamoura",
      image: "/location4.jpg",
      description: "Vilamoura est une station balnéaire sophistiquée connue pour sa marina luxueuse, ses terrains de golf et sa vie nocturne animée.",
    },
    {
      id: 4,
      name: "Albufeira",
      image: "/location5.jpg",
      description: "Albufeira est une destination touristique populaire, connue pour ses plages dorées, sa vie nocturne animée et son centre historique charmant.",
    },
    {
      id: 5,
      name: "Faro",
      image: "/location5.jpg",
      description: "Faro est la capitale de l'Algarve, avec un centre historique bien préservé et un accès privilégié à la Ria Formosa.",
    },
    {
      id: 6,
      name: "Portimão",
      image: "/location5.jpg",
      description: "Portimão est une ville côtière connue pour la célèbre Praia da Rocha et son riche patrimoine maritime.",
    },
    {
      id: 7,
      name: "Lagoa",
      image: "/location5.jpg",
      description: "Lagoa est célèbre pour ses vignobles et ses plages spectaculaires, notamment Praia do Carvoeiro et Benagil.",
    },
    {
      id: 8,
      name: "Quarteira",
      image: "/location5.jpg",
      description: "Quarteira est une ville côtière traditionnelle avec une longue promenade maritime et d'excellents restaurants de poissons et fruits de mer.",
    }
  ]
}; 