import { AppData } from '../types/index';

export const appDataFR: AppData = {
  categories: [
    {
      id: "boat-tours",
      title: "Excursions en Bateau",
      route: "/boat-tours",
      description: "Explorez la côte de l'Algarve avec nos excursions en bateau de luxe",
      image: "ai-generated-boat-picture.jpg",
      items: [
        {
          id: 1,
          name: "Ocean Quest",
          email: "info@oceanquest.com",
          logo: "Ocean Quest.png",
          description: "Explorez le meilleur de la côte de l'Algarve avec Ocean Quest. Croisières en bateau, grottes, dauphins et parasailing à Vilamoura, avec une équipe passionnée de fournir des expériences uniques à la mer. Parce que la vie est belle.",
          locationIds: [3],
          openingHours: [
            { day: "Monday", hours: "09:00 - 18:00" },
            { day: "Tuesday", hours: "09:00 - 18:00" },
            { day: "Wednesday", hours: "09:00 - 18:00" },
            { day: "Thursday", hours: "09:00 - 18:00" },
            { day: "Friday", hours: "09:00 - 18:00" },
            { day: "Saturday", hours: "09:00 - 18:00" },
            { day: "Sunday", hours: "09:00 - 18:00" }
          ],
          address: "Vilamoura",
          phone: "+351 912 345 683",
          socialMedia: {
            facebook: "https://www.facebook.com/boattripsvilamoura",
            instagram: "https://www.instagram.com/oceanquestalgarve/",
            website: "https://oceanquestalgarve.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.1293522678575!2d-8.12651112322924!3d37.07822597216927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab5921a12b7dd%3A0x8c7a9a7499808406!2sOcean%20Quest!5e0!3m2!1spt-PT!2spt!4v1748883359829!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "10% DE RÉDUCTION"
          },
          rootFolder: "ocean quest",
          images: ["see-the-wonderful-algarvian.jpg", "swimming-stop.jpg", "traditional-cultural (1).jpg", "vilamoura-yacht-charter.jpg", "vilamoura-speed-boat-trips.jpeg", "cesar-live-on-the-guitar.jpg", "traditional-cultural.jpg", "life-is-beautiful.jpg", "exceptional-view.jpg", "dolphin-quest.jpg"]
        },
        {
          id: 2,
          name: "Cool Charters",
          email: "info@coolchartersvilamoura.com",
          logo: "Cool-Charters-BSQUAREwhite.png",
          description: "Offre des expériences nautiques personnalisées, idéales pour les occasions spéciales comme les anniversaires, les enterrements de vie de garçon/jeune fille, les mariages ou les événements d'entreprise. Les excursions comprennent des visites de grottes, de plages isolées et l'observation des dauphins, ainsi que des activités nautiques comme le jet ski. L'équipe dévouée assure un service exceptionnel, créant des souvenirs inoubliables en mer.",
          locationIds: [3],
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
          id: 3,
          name: "AlgarExperience",
          email: "info@algarexperience.com",
          logo: "algarexperience-vect.svg",
          description: "AlgarExperience est un leader dans le tourisme maritime dans l'Algarve, offrant des expériences uniques comme des visites de grottes, des observations de dauphins, du parasailing et des barbecues sur la plage. Avec un parc de bateaux modernes et une équipe dédiée, il offre des moments inoubliables à la mer.",
          locationIds: [3],
          openingHours: [
            { day: "Monday", hours: "09:00 - 20:00" },
            { day: "Tuesday", hours: "09:00 - 20:00" },
            { day: "Wednesday", hours: "09:00 - 20:00" },
            { day: "Thursday", hours: "09:00 - 20:00" },
            { day: "Friday", hours: "09:00 - 20:00" },
            { day: "Saturday", hours: "09:00 - 20:00" },
            { day: "Sunday", hours: "09:00 - 20:00" }
          ],
          address: "Algarve",
          phone: "+351 912 345 681",
          socialMedia: {
            facebook: "https://www.facebook.com/algarexperiencee",
            instagram: "https://www.instagram.com/algarexperience/",
            website: "https://algarexperience.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.162307877745!2d-8.126925009001342!3d37.077441000410495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab57f81075ba9%3A0x7aa138f8f2a3e9ed!2sAlgarExperience%20-%20Marina%20de%20Vilamoura!5e0!3m2!1spt-PT!2spt!4v1748883329499!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "10% DE RÉDUCTION"
          },
          rootFolder: "AlgarExperience",
          images: ["caves-coastline-tour.jpg", "dolphin-caves-catamaran.jpg", "gruta-de-benagil.jpg", "sunset.jpg", "grutas.jpg", "vista-aerea.jpg", "barbecue-na-praia.jpg", "parasailing.jpg", "belize-segundo-costa.jpg", "boat-party.jpg"]
        },
        {
          id: 4,
          name: "Condor de Vilamoura",
          email: "info@condorvilamoura.com",
          logo: "condor_logo branco.avif",
          description: "Découvrez la côte de l'Algarve sur le majestueux Condor de Vilamoura, un schooner de 34 mètres de long inspiré par les schooners américains du 19ème siècle. Avec une capacité pour 120 passagers, il offre des croisières de 3 heures à Praia da Galé et des croisières de journée à Benagil, avec des escales pour la plage, l'exploration des grottes et la dégustation d'un délicieux barbecue sur la plage. Une expérience unique pour toute la famille, combinant confort, tradition et paysages impressionnants.",
          locationIds: [3],
          openingHours: [
            { day: "Monday", hours: "09:00 - 18:00" },
            { day: "Tuesday", hours: "09:00 - 18:00" },
            { day: "Wednesday", hours: "09:00 - 18:00" },
            { day: "Thursday", hours: "09:00 - 18:00" },
            { day: "Friday", hours: "09:00 - 18:00" },
            { day: "Saturday", hours: "09:00 - 18:00" },
            { day: "Sunday", hours: "09:00 - 18:00" }
          ],
          address: "Vilamoura",
          phone: "+351 912 345 682",
          socialMedia: {
            facebook: "https://www.facebook.com/CondorDeVilamoura/",
            instagram: "https://www.instagram.com/condordevilamoura/",
            website: "https://condorvilamoura.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.126789!3d37.076543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "10% DE RÉDUCTION"
          },
          rootFolder: "condor vilamoura",
          images: ["photo0jpg.jpg", "caption (1).jpg", "vamos-para-a-praia.jpg", "caption (2).jpg", "caption.jpg", "21d228_8a694355938d49048feaba57ef829db2~mv2-1.avif", "condor-de-vilamoura (1).jpg", "condor-de-vilamoura.jpg", "21d228_28814368cb5446c1b0a8d17d8459fd48~mv2.avif", "21d228_8a694355938d49048feaba57ef829db2~mv2.avif"]
        },
        {
          id: 5,
          name: "Vilamoura WaterSports Centre",
          email: "info@vilamourawatersportscentre.com",
          logo: "Vilamoura-Watersports-Centre-logo-Design-01-e1602070771419.webp",
          description: "Situé à Vilamoura Marina, le Vilamoura Watersports Centre offre une large gamme d'activités aquatiques pour tous les âges. Des croisières en bateau aux grottes de Benagil, observation de dauphins, parasailing, jet ski, wakeboard, pêche et locations de bateaux privés, il y a des options pour tout le monde. Avec une équipe expérimentée et des équipements de qualité, ils garantissent la sécurité et le plaisir dans toutes les expériences. Ouvert quotidiennement, c'est le lieu idéal pour explorer la côte de l'Algarve de manière unique.",
          locationIds: [3],
          openingHours: [
            { day: "Monday", hours: "09:00 - 23:00" },
            { day: "Tuesday", hours: "09:00 - 23:00" },
            { day: "Wednesday", hours: "09:00 - 23:00" },
            { day: "Thursday", hours: "09:00 - 23:00" },
            { day: "Friday", hours: "09:00 - 23:00" },
            { day: "Saturday", hours: "09:00 - 23:00" },
            { day: "Sunday", hours: "09:00 - 23:00" }
          ],
          address: "Vilamoura",
          phone: "+351 912 345 684",
          socialMedia: {
            facebook: "https://www.facebook.com/VilamouraWatersportsCentre/?locale=pt_PT",
            instagram: "https://www.instagram.com/vilamoura_watersportscentre/",
            website: "https://www.watersportsvilamoura.com/pt-pt/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.1531357987783!2d-8.124483123229288!3d37.07765947216944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab591f6e9b21f%3A0x407948f711a9e5ab!2sVilamoura%20Watersports%20Centre!5e0!3m2!1spt-PT!2spt!4v1748883466872!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "10% DE RÉDUCTION"
          },
          rootFolder: "watersports vilamoura",
          images: ["IMG_1046-scaled.webp", "photo5jpg.jpg", "foto1.webp", "jet-boat-ride-vilamoura.jpg", "Parasailing-Vilamoura-Experience-scaled.webp", "speed-boat-algarvexcite.jpg", "parasailing-boat-trips.jpg", "common-dolphin.jpg", "Fishing-In-Algarve.webp", "Dolphins-Algarve-.webp"]
        },
        {
          id: 6,
          name: "Passeios Ria Formosa",
          email: "info@passeiosriaformosa.com",
          logo: "riaformosa.png",
          description: "Explorez la beauté naturelle de la Ria Formosa avec nos visites guidées. Observez les oiseaux marins, découvrez des îles désertes et apprenez-en davantage sur l'écosystème unique de cette zone protégée. Visites disponibles pour petits et grands groupes, avec des guides expérimentés et compétents.",
          locationIds: [0],
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
            description: "10% DE RÉDUCTION"
          },
          rootFolder: "Passeios Ria Formosa",
          images: ["sailing-tour.jpg", "featured-2-horas-fuseta.webp", "birdwatching.jpg", "sealife-observation.jpg", "dolphins-observation.jpg", "DJI_20240427_200812_220.webp", "dji_fly_20240425_145136_206_1714164247660_timed.webp"]
        },
        {
          id: 7,
          name: "Formosamar",
          email: "info@formosamar.com",
          logo: "formosamar-main-logo-landscape-white.svg",
          description: "Formosamar, située à Faro, propose des expériences authentiques dans le Parc Naturel de la Ria Formosa. Elle propose des excursions en bateau, des observations d'oiseaux et de dauphins, ainsi que des locations de bateaux, de kayaks, de vélos et d'équipements nautiques. Idéal pour ceux qui souhaitent explorer la nature et la culture locale avec des guides expérimentés. L'entreprise est certifiée en écotourisme et s'engage dans des pratiques durables.",
          locationIds: [5],
          openingHours: [
            { day: "Monday", hours: "09:00 - 19:00" },
            { day: "Tuesday", hours: "09:00 - 19:00" },
            { day: "Wednesday", hours: "09:00 - 19:00" },
            { day: "Thursday", hours: "09:00 - 19:00" },
            { day: "Friday", hours: "09:00 - 19:00" },
            { day: "Saturday", hours: "09:00 - 19:00" },
            { day: "Sunday", hours: "09:00 - 19:00" }
          ],
          address: "Ria Formosa",
          phone: "+351 912 345 680",
          socialMedia: {
            facebook: "https://www.facebook.com/formosamar/",
            instagram: "https://www.instagram.com/formosamar/",
            website: "https://formosamar.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.8047220482727!2d-7.9389662732313235!3d37.014454772187065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd05533874923d89%3A0xd4bf971caf98216!2sFormosamar%20-%20Boat%20Tours%20Passeios%20na%20Ria%20Formosa!5e0!3m2!1spt-PT!2spt!4v1748883209882!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "5% DE RÉDUCTION"
          },
          rootFolder: "Formosamar",
          images: ["dolphin-watching-boat.jpg", "formosamar-sailboats-ria-formosa-island.jpg", "ria-formosa-islands-boat.jpg", "ilha-deserta-and-farol.jpg", "guided-boat-trip-in-ria.jpg", "formosamar-private-tour-cruise-ria-formosa-900x500.jpg", "formosamar.jpg", "formosamar (1).jpg", "formosamar (2).jpg"]
        },
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
          name: "Gran Sorvete",
          email: "info@gransorvete.com",
          logo: "GranSorvete.avif",
          type: "Café et glace",
          description: "Le Gran Sorvete, à Vilamoura Marina, est connu pour son sorbet italien artisanal, ses crêpes et ses gaufres, servis dans un environnement chaleureux avec une vue sur la mer.",
          locationIds: [3],
          priceRange: 1,
          openingHours: [
            { day: "Monday", hours: "11:00 - 23:00" },
            { day: "Tuesday", hours: "11:00 - 23:00" },
            { day: "Wednesday", hours: "11:00 - 23:00" },
            { day: "Thursday", hours: "11:00 - 23:00" },
            { day: "Friday", hours: "11:00 - 23:00" },
            { day: "Saturday", hours: "11:00 - 23:00" },
            { day: "Sunday", hours: "11:00 - 23:00" }
          ],
          address: "Rua Gran Sorvete, 23",
          phone: "912 345 682",
          socialMedia: {
            facebook: "https://www.facebook.com/GranSorveteVilamoura/",
            instagram: "https://www.instagram.com/gransorvete/",
            website: "https://gransorvete.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.113234707878!2d-8.12375902322921!3d37.078609872169125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab5d5d983cd55%3A0xec7bb7c81350d92!2sGran%20sorvete!5e0!3m2!1spt-PT!2spt!4v1748882811766!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "10% DE RÉDUCTION"
          },
          rootFolder: "Gran Sorvete",
          images: ["crepes-also-served-with.jpg", "gran-gelato.jpg", "gran-sorvete-in-the-heart.jpg", "in-the-heart-of-the-vilamoura.jpg", "our-delicious-mini-pancakes.jpg", "hot-chocolate-served.jpg", "enjoy-the-delicious-combinatio.jpg", "gran-gelato (1).jpg"]
        },
        {
          id: 2,
          name: "Retinto - Rodízio & Wine",
          email: "retinto.vilamoura@gmail.com",
          logo: "Retinto+Vilamoura-330w.webp",
          type: "Steakhouse",
          description: "Le Retinto Rodízio & Wine, à Vilamoura, se distingue par son buffet de viande brésilienne et argentine, accompagné d'une sélection de vins soigneuse. Ambiance chaleureuse et excellent service.",
          locationIds: [3],
          priceRange: 2,
          openingHours: [
            { day: "Monday", hours: "18:30 - 23:30" },
            { day: "Tuesday", hours: "18:30 - 23:30" },
            { day: "Wednesday", hours: "18:30 - 23:30" },
            { day: "Thursday", hours: "18:30 - 23:30" },
            { day: "Friday", hours: "18:30 - 23:30" },
            { day: "Saturday", hours: "18:30 - 23:30" },
            { day: "Sunday", hours: "Closed" }
          ],
          address: "Rua Retinto, 56",
          phone: "912 345 683",
          socialMedia: {
            facebook: "https://www.facebook.com/Retinto.Vilamoura/",
            instagram: "https://www.instagram.com/retinto.vilamoura/",
            website: "https://www.restauranteretinto.com/retinto-rodizio-n-wine"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.0845960567867!2d-8.121846809000903!3d37.07929200040834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab5940c8ecbd9%3A0x6755304fce06bfca!2sRetinto%20-%20Rod%C3%ADzio%20%26%20Wine%20-%20Vilamoura!5e0!3m2!1spt-PT!2spt!4v1748882848562!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Boisson de bienvenue",
            description: "Boisson de bienvenue au vin mousseux"
          },
          rootFolder: "Retinto",
          images: ["5c594138-f690-4ea1-add1-3fce2e15ef55.avif", "photo0jpg.jpg", "entrecote-argentino-ribye.jpg", "ff1ed75b-d71b-42f7-9d93-7f3a39464c45.jpg", "59f45f21-e373-42d3-8ed2-8946008e0b3f.jpg", "b15f5500-b73f-421d-b7bc-a9412784f5d8.webp", "b8685ec1-a1b4-4cbd-bd41-3b8cdb1bfa11.avif", "d56aaf4a-be2e-4cd3-99d9-f70d63c5826c.avif", "7701aa02-a0c2-4ec5-9af1-e1c80a4263d6.webp"]
        },
        {
          id: 3,
          name: "Authentic",
          email: "reservations@authentic-restaurant.pt",
          logo: "Logo-Authentic-dourado.png",
          type: "Cuisine internationale",
          description: "Le restaurant Authentic, situé à Quinta do Lago, offre une expérience gastronomique sophistiquée, combinant la cuisine portugaise classique avec une touche contemporaine, dans une ambiance luxueuse et raffinée.",
          locationIds: [1],
          priceRange: 3,
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
            type: "Boisson de Bienvenue",
            description: "Boisson de bienvenue et 5 % de réduction sur le dîner"
          },
          rootFolder: "Authentic",
          images: ["83dcbf96-9726-4f1b-a1c7-c13c5f223b98.avif", "5e949c5e-060e-457b-ad67-b7597677c446.avif", "44aa29bd-0300-47b5-9ba5-83d8b8b19bd1.avif", "4d07f2e9-70b3-4b8b-a1e1-91fe37279165.avif", "843ccb2d-bf51-4c6a-bf0d-24ab6463b44c.avif", "ff05a4b6-f867-4243-9e4b-7141f87220af.avif", "c4bd01b2-7c29-405a-94d6-b566a0328e36.avif", "44cf2c78-1fec-4650-9ed2-eedaf4708a25.avif", "036d2880-7465-460b-9c18-61260a3de321.avif", "f818d5b4-5d61-4cc5-b0eb-e90fd92ac501.avif"]
        },
        {
          id: 4,
          name: "CafeZique",
          email: "cafeziquept@gmail.com",
          logo: "CAFEZIQUE-487bb404-679w.webp",
          type: "Internationale & Méditerranéenne",
          description: "Le restaurant CaféZique, à Loulé, combine les saveurs algarviennes avec des techniques contemporaines, offrant une expérience gastronomique unique dans un environnement relaxé près du château.",
          locationIds: [2],
          priceRange: 2,
          openingHours: [
            { day: "Monday", hours: "19:00 - 22:30" },
            { day: "Tuesday", hours: "19:00 - 22:30" },
            { day: "Wednesday", hours: "19:00 - 22:30" },
            { day: "Thursday", hours: "19:00 - 22:30" },
            { day: "Friday", hours: "19:00 - 22:30" },
            { day: "Saturday", hours: "19:00 - 22:30" },
            { day: "Sunday", hours: "Closed" }
          ],
          address: "Rua Cafezique, 78",
          phone: "912 345 680",
          socialMedia: {
            facebook: "https://www.facebook.com/Cafeziquept/?locale=pt_BR",
            instagram: "https://www.instagram.com/cafeziquept/",
            website: "https://www.cafezique.pt/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.5625743653195!2d-8.026760923227188!3d37.13932057215254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab18b3c096f37%3A0x3d8742940db522f6!2zQ2Fmw6law69xdWU!5e0!3m2!1spt-PT!2spt!4v1748882784435!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Welcome Drink",
            description: "Verre de vin mousseux"
          },
          rootFolder: "CafeZique",
          images: ["0c8e01ad-d9ca-4b18-af60-26a700b19e31.avif", "b7455fd9-1912-4dc4-9d75-b6e3c18c21e1.avif", "c10b8475-9033-4f81-96a7-89723f3537a6.avif", "562a5999-384a-4fcf-876a-191a283c4417.avif", "1fc2a2ef-0625-4d3c-a43b-538301aad3c4.avif", "eb5af52c-c6c9-411a-87ba-578fa3de1e3f.avif", "47a07484-d88c-447f-91ed-4c7bf0a542c3.avif", "d59e735d-141e-4359-b024-3352c31e5b83.avif", "cff64c57-1e91-4133-a445-f033ab8f5838.avif", "98b3ee01-5726-41de-93f9-23ce6da1c1b7.avif"]
        },
        {
          id: 5,
          name: "A ver Tavira",
          email: "restaurante@avertavira.pt",
          logo: "AverTavira.png",
          type: "Restaurant Gastronomique",
          description: "Le restaurant A Ver Tavira, récompensé d'une étoile Michelin, offre une expérience gastronomique unique au cœur historique de Tavira, avec des saveurs de l'Algarve et une vue imprenable. Sous la direction du chef Luís Brito, il allie tradition et créativité dans un menu innovant.",
          locationIds: [0],
          priceRange: 3,
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
          name: "Family Golf Park",
          email: "info@familygolfpark.com",
          logo: "family-golf-park-logo-white.png",
          description: "Situé au cœur de Vilamoura, le Family Golf Park est un lieu incontournable pour les familles et les groupes à la recherche de divertissement et de loisir. Avec deux parcours de mini-golf thématiques inspirés de la Via Appia et de la Via Lusitânia, le parc offre une expérience unique au milieu de jardins luxurieux et d'architecture romaine. En outre, il dispose d'une zone de jeux pour les enfants, d'une salle de jeux, d'une bar-snack avec esplanade et même d'un train touristique qui passe par les points principaux de Vilamoura. Ouvert tous les jours, le Family Golf Park est parfait pour un jour de divertissement avec la famille.",
          locationIds: [3],
          openingHours: [
            { day: "Monday", hours: "10:00 - 19:00" },
            { day: "Tuesday", hours: "10:00 - 19:00" },
            { day: "Wednesday", hours: "10:00 - 19:00" },
            { day: "Thursday", hours: "10:00 - 19:00" },
            { day: "Friday", hours: "10:00 - 19:00" },
            { day: "Saturday", hours: "10:00 - 19:00" },
            { day: "Sunday", hours: "10:00 - 19:00" }
          ],
          address: "Family Golf Park",
          phone: "+351 282 912 345",
          socialMedia: {
            facebook: "https://www.facebook.com/familygolfpark.pt",
            instagram: "https://www.instagram.com/familygolfpark/",
            website: "https://familygolfpark.pt/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.1293522678575!2d-8.12651112322924!3d37.07822597216927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab5921a12b7dd%3A0x8c7a9a7499808406!2sFamily%20Golf%20Park!5e0!3m2!1spt-PT!2spt!4v1748883359829!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "10% DE RÉDUCTION"
          },
          rootFolder: "Family Golf Park",
          images: ["family-golf-park-gallery-05-min.jpg", "family-golf-park-gallery-10-min.jpg", "Legionario_2.webp", "Family-Golf-Park_2.webp", "Looping-Crazygolfe_2.webp", "family-golf-park.jpg", "lisbon-bridge.jpg", "relaxing-and-clever-minigolf.jpg", "vulcanos.jpg", "2sd-hole.jpg", "1st-hole.jpg", "welcome-to-the-best-europe.jpg"]
        },
        {
          id: 2,
          name: "Algarve Riders",
          email: "info@algarveriders.com",
          logo: "logo_algarveriders.png",
          description: "Algarve Riders est une entreprise de location de motos qui offre une expérience unique avec des motos de haute performance. C'est un endroit idéal pour profiter d'un après-midi de divertissement.",
          locationIds: [4],
          openingHours: [
            { day: "Monday", hours: "8:30 - 18:00" },
            { day: "Tuesday", hours: "8:30 - 18:00" },
            { day: "Wednesday", hours: "8:30 - 18:00" },
            { day: "Thursday", hours: "8:30 - 18:00" },
            { day: "Friday", hours: "8:30 - 18:00" },
            { day: "Saturday", hours: "8:30 - 18:00" },
            { day: "Sunday", hours: "8:30 - 18:00" }
          ],
          address: "Algarve Riders",
          phone: "+351 289 560 300",
          socialMedia: {
            facebook: "https://www.facebook.com/algarveriders/?locale=pt_PT",
            instagram: "https://www.instagram.com/algarveriders/",
            website: "https://www.algarveriders.com/pt"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.5144440743125!2d-8.241512908997843!3d37.09286990039514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1acc1c47179d53%3A0xae8f92aa7c2a4f1e!2sAlgarve%20Riders!5e0!3m2!1spt-PT!2spt!4v1748883603455!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "10% DE RÉDUCTION -Tours ; 5% DE RÉDUCTION - Scooter"
          },
          rootFolder: "Algarve Riders",
          images: ["algarve-riders-available.jpg", "algarve-riders-off-road (7).jpg", "algarve-riders-off-road (6).jpg", "algarve-riders-off-road (5).jpg", "algarve-riders-off-road (4).jpg", "algarve-riders-off-road (3).jpg", "algarve-riders-off-road (2).jpg", "algarve-riders-off-road (1).jpg", "algarve-quad-tours-fun.jpg", "team-building-buggy-tour.jpg", "algarve-riders-off-road.jpg"]
        },
        {
          id: 3,
          name: "Aia Racing School",
          email: "racingschool@autodromodoalgarve.com",
          logo: "Autódromo_Internacional_Algarve_logo.png",
          description: "Située sur l'Autodrome International de l'Algarve à Portimão, elle propose des expériences de conduite sportive dans des voitures haute performance comme Porsche, Mercedes et autres. Avec des instructeurs expérimentés et une infrastructure d'excellence, elle offre une immersion sûre et passionnante dans le monde du sport automobile.",
          locationIds: [6],
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
            description: "5 % de réduction"
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
          id: 4,
          name: "Karting Portimão",
          email: "kia@parkalgar.com",
          logo: "Kartodromoalgarve.png",
          description: "Le Karting International de l'Algarve, à Portimão, est l'un des plus grands circuits de karting d'Europe, avec 1.531 km de longueur. Il offre des expériences pour toutes les âges, des enfants aux adultes, avec des karts adaptés à différents groupes d'âge et niveaux d'expérience. En plus d'être un lieu pour les compétitions officielles et les événements privés, il dispose d'une infrastructure complète, y compris un restaurant, des boxes et des boutiques.",
          locationIds: [6],
          openingHours: [
            { day: "Monday", hours: "09:00 - 13:00, 14:00 - 17:30" },
            { day: "Tuesday", hours: "09:00 - 13:00, 14:00 - 17:30" },
            { day: "Wednesday", hours: "09:00 - 13:00, 14:00 - 17:30" },
            { day: "Thursday", hours: "09:00 - 13:00, 14:00 - 17:30" },
            { day: "Friday", hours: "09:00 - 13:00, 14:00 - 17:30" },
            { day: "Saturday", hours: "09:00 - 13:00, 14:00 - 17:30" },
            { day: "Sunday", hours: "09:00 - 13:00, 14:00 - 17:30" }
          ],
          address: "Parkalgar, Portimão",
          phone: "+351 282 405 650",
          socialMedia: {
            facebook: "https://www.facebook.com/kartodromo.algarve",
            instagram: "https://www.instagram.com/kartodromodoalgarve/",
            website: "https://autodromodoalgarve.com/pt/the-park/kartodromo/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.658452607274!2d-8.638724023223917!3d37.23208217212703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b2498b60682cb%3A0xa6b4e4ed93bd2a1e!2sKart%C3%B3dromo%20Internacional%20do%20Algarve!5e0!3m2!1spt-PT!2spt!4v1748882967187!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "10% DE RÉDUCTION"
          },
          rootFolder: "KartingPortimao",
          images: ["39129269_2071071279603968_9122454272632422400_n.jpg", "Kartodromo2-scaled.jpg", "490851637_1218406543617808_2741633398730202739_n.jpg", "488211910_1210059391119190_5497740365812582147_n.jpg", "489446312_1210956781029451_2393478272773825535_n.jpg", "kartodromo6-pqchj12nib2vumiq0zqzcru0robuxlzilx7rhu5n6o.jpg", "kartodromo3-pqchj12nib2vumiq0zqzcru0robuxlzilx7rhu5n6o.jpg", "490229418_1218688256922970_8436650453256995830_n.jpg", "IMG_2422.jpg"]
        },
        {
          id: 5,
          name: "Slide & Splash",
          email: "info@slidesplash.com",
          logo: "logo_slidesplash.png",
          description: "Le Slide & Splash, à Lagoa, est un parc aquatique familial avec diverses attractions pour tous les âges. En plus des toboggans excitants, il propose des zones pour enfants, des espaces de détente et des spectacles d'animaux. Idéal pour une journée de divertissement en Algarve.\n\nHoraires Saisonniers:\n- Juin: 10:00 - 17:30\n- 1 Juillet au 12 Septembre: 10:00 - 18:00\n- 13 Septembre au 31 Octobre: 10:00 - 17:00",
          locationIds: [7],
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
            description: "12% DE RÉDUCTION"
          },
          rootFolder: "Slide&Splash",
          images: ["Slide-Splash-Torre-sector-4-e-aereas_3-e1679392334545.webp", "atracoes31.jpg", "Slide-Splash-Water-Park-Algarve-Portugal.jpg", "atracoes39.jpg", "slide-splash-water-slide.jpg", "new-ride-2018-disco-river.jpg", "new-rides-2018.jpg", "black-hole.jpg", "slide-splash-2019 (1).jpg", "the-big-wave.jpg", "big-slides-tower.jpg", "slide-splash-2019.jpg", "slide-2020.jpg"]
        },
        {
          id: 6,
          name: "Zoomarine",
          email: "info@zoomarine.pt",
          logo: "logozoomarine.png",
          description: "Zoomarine, situé près d'Albufeira, est un parc thématique qui combine divertissement, éducation et nature. Avec des spectacles de dauphins, des lions-marins, des oiseaux tropicaux, des toboggans d'eau et une plage artificielle, c'est parfait pour un jour inoubliable avec la famille. Une aventure magique au cœur de l'Algarve!\n\nHoraires Saisonniers:\n- Mars, Octobre, Novembre: 10:00 - 17:00\n- Avril à 22 Juin et Septembre 10 à 28: 10:00 - 18:00\n- 23 Juin à 7 Septembre: 10:00 - 19:30",
          locationIds: [4],
          openingHours: [
            { day: "Monday", hours: "10:00 - 19:30 (horário varia por época)" },
            { day: "Tuesday", hours: "10:00 - 19:30 (horário varia por época)" },
            { day: "Wednesday", hours: "10:00 - 19:30 (horário varia por época)" },
            { day: "Thursday", hours: "10:00 - 19:30 (horário varia por época)" },
            { day: "Friday", hours: "10:00 - 19:30 (horário varia por época)" },
            { day: "Saturday", hours: "10:00 - 19:30 (horário varia por época)" },
            { day: "Sunday", hours: "10:00 - 19:30 (horário varia por época)" }
          ],
          address: "EN 125, Km 65, 8201-864 Guia, Albufeira",
          phone: "+351 289 560 300",
          socialMedia: {
            facebook: "https://www.facebook.com/ZoomarineAlgarve/?locale=pt_PT",
            instagram: "https://www.instagram.com/zoomarine_algarve_oficial/",
            website: "https://www.zoomarine.pt/pt/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.16183350874!2d-8.317631323227639!3d37.12506467215641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ace4ed8ed7ec7%3A0x8cf7b5092d8538af!2sZoomarine%20Algarve!5e0!3m2!1spt-PT!2spt!4v1748883516694!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "-3,5€ Normal; -2,5€ Sénior/Júnior; -12€ Dolphin Emotions"
          },
          rootFolder: "Zoomarine",
          images: ["145.jpg", "145 (1).jpg", "145 (2).jpg", "145 (3).jpg", "145 (4).jpg", "145 (5).jpg", "145 (6).jpg", "145 (7).jpg", "145 (8).jpg", "145 (9).jpg", "145 (10).jpg", "image_processing20240617-9-uc4gqx.jpg", "Zoomarine_2.jpg", "zoomarine.jpg"],
          isVisible: false
        },
        {
          id: 7,
          name: "Aquashow",
          email: "info@aquashow.com",
          logo: "aquashow_logo.png",
          description: "Aquashow Outdoor est le plus grand parc aquatique en plein air de Portugal, situé au cœur de l'Algarve. Avec des toboggans géants, une piscine à vagues, des attractions pour toutes les âges et beaucoup d'animation, c'est le lieu idéal pour un jour d'été plein de divertissement, d'adrénaline et de souvenirs familiaux ou entre amis.",
          locationIds: [8],
          openingHours: [
            { day: "Monday", hours: "10:00 - 18:00" },
            { day: "Tuesday", hours: "10:00 - 18:00" },
            { day: "Wednesday", hours: "10:00 - 18:00" },
            { day: "Thursday", hours: "10:00 - 18:00" },
            { day: "Friday", hours: "10:00 - 18:00" },
            { day: "Saturday", hours: "10:00 - 18:00" },
            { day: "Sunday", hours: "10:00 - 18:00" }
          ],
          address: "Aquashow",
          phone: "+351 289 560 300",
          socialMedia: {
            facebook: "https://www.facebook.com/AquashowParque/?locale=pt_PT",
            instagram: "https://www.instagram.com/aquashowparkhotel/",
            website: "https://aquashowpark.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.5023582651565!2d-8.074484223228705!3d37.09315767216503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab575a4f4c3dd%3A0xfddc87f54582acc1!2sAQUASHOW%20-%20Waterpark%20Outdoor%20%26%20Indoor!5e0!3m2!1spt-PT!2spt!4v1748883493782!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "10% DE RÉDUCTION"
          },
          rootFolder: "Aquashow",
          images: ["IMG_2075.jpg", "Galeria-03.jpg", "aquashow-park (6).jpg", "air-race.jpg", "aquashow-park (5).jpg", "aquashow-park (4).jpg", "aquashow-park (3).jpg", "aquashow-park (2).jpg", "aquashow-park (1).jpg", "aquashow-park.jpg"]
        },
         {
          id: 8,
          name: "Aqualand Algarve",
          email: "aqualandalgarve@asproparks.com",
          logo: "aqualand.webp",
          description: "Aqualand Algarve est l’un des plus grands parcs aquatiques du pays, avec des zones adaptées aux familles, des espaces pour les plus petits et des endroits relaxants pour recharger les batteries. Entre éclaboussures, piscines à vagues et rivières tranquilles, c’est la destination idéale pour une journée complète de divertissement en famille.",
          locationIds: [9],
          openingHours: [
                { day: "Lundi", hours: "10:00 - 18:00 (horaires variables selon la saison)" },
            { day: "Mardi", hours: "10:00 - 18:00 (horaires variables selon la saison)" },
            { day: "Mercredi", hours: "10:00 - 18:00 (horaires variables selon la saison)" },
            { day: "Jeudi", hours: "10:00 - 18:00 (horaires variables selon la saison)" },
            { day: "Vendredi", hours: "10:00 - 18:00 (horaires variables selon la saison)" },
            { day: "Samedi", hours: "10:00 - 18:00 (horaires variables selon la saison)" },
            { day: "Dimanche", hours: "10:00 - 18:00 (horaires variables selon la saison)" }
          ],
          address: "Aqualand Algarve",
          phone: "+351 282 320 230",
          socialMedia: {
            facebook: "https://www.facebook.com/aqualandalgarve",
            instagram: "https://www.instagram.com/aqualandalgarveoficial/",
            website: "https://www.aqualand.pt/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101808.49895831558!2d-8.355817944620606!3d37.116646827524605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ad0e39d6bfd4b%3A0x81a56dd58df0e845!2sAqualand%20Algarve!5e0!3m2!1spt-PT!2spt!4v1749485410610!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "9€ de Réduction: Billet Adulte"
          },
          rootFolder: "aqualand",
          images: ["ALG-Banzai-1-1-scaled.webp", "ALG-Kamikaze-scaled.webp", "ALG-rapids-scaled.webp", "Hydra-scaled.webp", "atracciones-1-scaled-w.webp", "banner-atracciones-1-w-1.webp", "hydra.jpg", "king-cobra.jpg", "plano-parque-scaled.webp"]
        },
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
          description: "La Quinta do Canhoto, à Albufeira, est une référence en matière de vins de l'Algarve, alliant tradition familiale et innovation. Elle propose des dégustations de vins et des expériences uniques d'œnotourisme. Les visites doivent être réservées 24h à l'avance.",
          locationIds: [4],
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
          name: "Morgado do Quintão",
          email: "info@morgadodoquintao.pt",
          logo: "Morgado do quintao.png",
          description: "Le Morgado do Quintão, à Lagoa, combine tradition et durabilité dans la production de vins authentiques. Il propose des dégustations de vins et des expériences uniques dans le domaine de l'enotourisme.",
          locationIds: [7],
          openingHours: [
            { day: "Monday", hours: "09:00 - 22:00" },
            { day: "Tuesday", hours: "09:00 - 22:00" },
            { day: "Wednesday", hours: "09:00 - 22:00" },
            { day: "Thursday", hours: "09:00 - 22:00" },
            { day: "Friday", hours: "09:00 - 22:00" },
            { day: "Saturday", hours: "09:00 - 22:00" },
            { day: "Sunday", hours: "Closed" }
          ],
          address: "Morgado do Quintão",
          phone: "+351 282 912 345",
          socialMedia: {
            facebook: "https://www.facebook.com/morgadoquintao/",
            instagram: "https://www.instagram.com/morgadodoquintao/",
            website: "https://www.morgadodoquintao.pt/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.790358516998!2d-8.4519159232265!3d37.157684072147326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ad78519c4f4e1%3A0xe72edb7d0b164be9!2sMorgado%20do%20Quint%C3%A3o!5e0!3m2!1spt-PT!2spt!4v1748882911445!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "15% DE RÉDUCTION"
          },
          rootFolder: "Morgado do Quintão",
          images: ["a-beautiful-plate-to.jpg", "morgado-do-quintao.jpg", "there-is-nothing-like.jpg", "wine-tasting-in-an-old.jpg", "palhete-our-best-selling.jpg", "typical-carapaus-alimados.jpg", "photo0jpg.jpg", "caption.jpg", "palhete-our-best-selling (1).jpg"]
        },
        {
          id: 3,
          name: "Adega do Cantor",
          email: "info@adegadocantor.com",
          logo: "adega-do-cantor.png",
          description: "L'Adega do Cantor, propriété du célèbre chanteur Sir Cliff Richard, produit des vins primés comme le Vida Nova. Elle propose des visites guidées des vignobles et de la cave, avec des dégustations de vins et des expériences gastronomiques uniques.",
          locationIds: [4],
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
            description: "5 % de réduction"
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
          description: "Le 7 Seven Spa, situé au Hilton Vilamoura As Cascatas Golf Resort & Spa, offre une expérience bien-être avec 14 salles de soins, un circuit d'hydrothérapie, sauna, hammam, jacuzzi et jardin zen. Idéal pour se détendre et se ressourcer.",
          locationIds: [3],
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
          description: "Le Duo Spa & Life Care, situé au Cegonha Country Club à Vilamoura, propose des expériences bien-être avec circuit spa, sauna, hammam et soins comme l'exfoliation ou l'Iyashi Dome, pour des moments de détente et de rajeunissement.",
          cardInfo:"Vous devez présenter votre carte de membre à votre arrivée.",
          locationIds: [3],
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
          description: "La DMed Clinic propose des services médicaux à domicile dans toute la région, incluant des consultations de Médecine Générale, Psychologie, Nutrition, Psychiatrie et Télémédecine, évitant les déplacements inutiles.",
          cardInfo:"Pour toute assistance médicale, veuillez contacter directement la clinique DMed au +351 916 546 408 et indiquer que vous êtes client de Clever Details.",
          locationIds: [3],
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
          description: "Teresa est un esthéticien spécialisé dans les services de manucure (gel/acrylique), pédicure/manucure, dépilations, extensions de cils et des traitements visage. Elle offre également des massages de relaxation, des traitements corporels comme la cavitation et la démangeaison lymphatique, ainsi que la maquillage professionnel. Avec une approche personnalisée, Teresa offre des soins qui visent à mettre en valeur la beauté et à promouvoir le bien-être de ses clients.",
          locationIds: [3],
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
          description: "Expertise en beauté et traitements esthétiques",
          locationIds: [3],
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
          images: ["beauty3.jpg", "beauty4.jpg"],
          isVisible: false
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
          description: "Chef executivo de cozinha do Monte Rei onde se encontra o restaurante recomendado pelo guia Michelin, Vistas Monte Rei. Proporciona estilos de cozinha descontraídos, para juntar amigos e familia à mesa com menus de tapas & drinks, barbecue, menu algarvio ou menu de degustação em 5 momentos para celebrações mais pormenorizadas.",
          locationIds: [],
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
            description: "Vin de Porto et douceurs traditionnelles de l’Algarve"
          },
          rootFolder: "ChefAndreSimao",
          images: ["Captura de ecrã 2025-05-30, às 14.00.44.png", "Captura de ecrã 2025-05-30, às 14.01.45.png", "Captura de ecrã 2025-05-30, às 14.01.52.png", "Captura de ecrã 2025-05-30, às 14.01.18.png", "Captura de ecrã 2025-05-30, às 14.01.05.png", "Captura de ecrã 2025-05-30, às 14.02.12.png", "Captura de ecrã 2025-05-30, às 14.02.29.png", "Captura de ecrã 2025-05-30, às 14.00.58.png"]
        },
        {
          id: 2,
          name: "Fancy Kitchen Algarve",
          email: "info@fancykitchenalgarve.com",
          logo: "Fancy kitchen.webp",
          description: "A Fancy Kitchen Algarve oferece experiências gastronómicas exclusivas com chefs privados e catering personalizado, elevando cada momento com requinte e sabor.",
          locationIds: [],
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
            description: "Verre de vin mousseux et 2 canapés par personne"
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
      description: "Ville côtière historique connue pour son pont romain, ses ruines de château et ses belles plages accessibles en bateau.",
    },
    {
      id: 1,
      name: "Quinta do Lago",
      image: "/location2.jpg",
      description: "Station balnéaire de luxe avec des parcours de golf de classe mondiale, une cuisine raffinée et des plages immaculées.",
    },
    {
      id: 2,
      name: "Loulé",
      image: "/location3.jpg",
      description: "Ville de marché traditionnelle célèbre pour son bâtiment de marché historique et son atmosphère portugaise authentique.",
    },
    {
      id: 3,
      name: "Vilamoura",
      image: "/location4.jpg",
      description: "Ville marina moderne offrant des yachts de luxe, des parcours de golf, des plages et une vie nocturne animée.",
    },
    {
      id: 4,
      name: "Albufeira",
      image: "/location5.jpg",
      description: "Station balnéaire populaire connue pour ses belles plages, sa vie nocturne animée et sa vieille ville charmante.",
    },
    {
      id: 5,
      name: "Faro",
      image: "/location5.jpg",
      description: "Capitale de l'Algarve, avec une vieille ville historique, des attractions culturelles et une porte d'entrée vers la Ria Formosa.",
    },
    {
      id: 6,
      name: "Portimão",
      image: "/location5.jpg",
      description: "Grand port de pêche et station balnéaire, célèbre pour ses plages et ses activités nautiques.",
    },
    {
      id: 7,
      name: "Lagoa",
      image: "/location5.jpg",
      description: "Charmante ville connue pour sa production de vin et sa proximité avec de belles plages et grottes.",
    },
    {
      id: 8,
      name: "Quarteira",
      image: "/location5.jpg",
      description: "Ville de pêche traditionnelle devenue station balnéaire, offrant une longue promenade en bord de mer et des restaurants de fruits de mer frais.",
    },
    {
      id: 9,
      name: "Alcantarilha",
      image: "/location5.jpg",
      description: "Quarteira é uma cidade costeira tradicional com um extenso passeio marítimo e excelentes restaurantes de peixe e marisco.",
    }
  ],
  ui: {
    header: {
      phoneLabel: "(Réseau fixe national)",
      menu: {
        advantages: "Avantages",
        access: "Accès",
        partnership: "Partenariat",
        contact: "Contact"
      }
    },
    sidebar: {
      categories: "Catégories",
      other: "Autres",
      language: "Langue"
    },
    searchBar: {
      searchPlaceholder: "Rechercher des expériences...",
      allCategories: "Toutes les Catégories",
      allLocations: "Toutes les Localités"
    },
    listPage: {
      specialOffer: "Offre Spéciale"
    },
    footer: {
      bookHoliday: "Réservez votre maison de vacances",
      allRightsReserved: "Tous droits réservés"
    },
    homepage: {
      title: "Clever Member",
      subtitle: "Profitez des récompenses exclusives",
      seeMore: "voir plus"
    },
    access: {
      mainText1: "Ces avantages sont réservés à ceux qui réservent leurs vacances avec Clever Details ou nous confient leur propriété. C'est notre façon de vous remercier en rendant votre séjour ou votre investissement encore plus gratifiant.",
      mainText2: "Explorez la liste complète des avantages partenaires et profitez de bien plus qu'un simple séjour.",
      mainText3: "Avec Clever Details, vos vacances ou votre maison viennent avec bien plus qu'une simple clé.",
      exploreHomes: "Explorez nos maisons"
    },
    partnership: {
      title: "Pourquoi devenir partenaire de Clever Details ?",
      benefit1: {
        title: "Touchez plus de 6 000 clients de qualité par an",
        description: "Notre réseau comprend des milliers de touristes nationaux et internationaux qui valorisent les expériences locales"
      },
      benefit2: {
        title: "Augmentez la visibilité de votre entreprise",
        description: "Nous mettons en valeur votre entreprise sur notre site web et nos réseaux sociaux, augmentant votre portée."
      },
      form: {
        title: "Demande de partenariat",
        businessName: "Nom de l'entreprise",
        contactName: "Nom du contact",
        email: "Email",
        phone: "Téléphone",
        businessType: {
          label: "Type d'entreprise",
          placeholder: "Sélectionnez un type d'entreprise",
          options: {
            boatTours: "Tours en bateau",
            restaurants: "Restaurants",
            activities: "Activités",
            winery: "Cave à vin",
            wellness: "Bien-être",
            chefService: "Service de chef",
            other: "Autre"
          }
        },
        description: "Description de l'entreprise",
        submit: "Soumettre la demande",
        submitting: "Soumission en cours..."
      }
    },
    contact: {
      title: "Contactez-nous",
      form: {
        name: {
          label: "Nom",
          placeholder: "Votre nom"
        },
        phone: {
          label: "Téléphone",
          placeholder: "Votre numéro de téléphone"
        },
        email: {
          label: "Email",
          placeholder: "votre.email@exemple.com"
        },
        subject: {
          label: "Sujet",
          placeholder: "Sujet du message"
        },
        message: {
          label: "Message",
          placeholder: "Votre message ici..."
        },
        submit: "Envoyer le message",
        sending: "Envoi en cours..."
      }
    },
    itemDetails: {
      reviews: "avis",
      bookNow: "Réserver maintenant",
      specialOffer: "Vous le méritez !",
      bookingNotice: "Les réservations doivent être effectuées directement auprès de l'équipe Clever Details",
      bookingNotice2: "Vous devez présenter votre carte de membre à votre arrivée.",
      details: "Détails",
      openingHours: "Heures d'ouverture",
      location: "Emplacement",
      bookingRequest: "Demande de Réservation",
      bookingMessage: "Bonjour, je suis intéressé(e) par la réservation de {itemName} avec l'offre spéciale suivante : {specialOffer}.\\n\\nMerci de me fournir plus d'informations.",
      reviewsSection: {
        title: "Avis",
        leaveReview: "Laisser un avis",
        rating: "Note",
        writeReview: "Écrire un avis",
        authorPlaceholder: "Votre nom",
        commentPlaceholder: "Écrivez votre commentaire...",
        submit: "Envoyer l'avis",
        submitting: "Envoi en cours...",
        yourName: "Votre nom",
        writeComment: "Écrivez votre commentaire..."
      },
      dateList: {
        monday: "Lundi",
        tuesday: "Mardi",
        wednesday: "Mercredi",
        thursday: "Jeudi",
        friday: "Vendredi",
        saturday: "Samedi",
        sunday: "Dimanche"
      }
    }
  }
}; 
