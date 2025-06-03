import { AppData } from '../types';

export const appData: AppData = {
  categories: [
    {
      id: "boat-tours",
      title: "Boat Tours",
      route: "/boat-tours",
      description: "Explore the Algarve coastline with our luxury boat tours",
      image: "ai-generated-boat-picture.jpg",
      items: [
        {
          id: 1,
          name: "Cool Charters",
          email: "info@coolchartersvilamoura.com",
          logo: "Cool-Charters-BSQUAREwhite.png",
          type: "Boat Tours",
          description: "Oferece experiências náuticas personalizadas, ideais para ocasiões especiais como aniversários, despedidas de solteiro(a), casamentos ou eventos corporativos. Os passeios incluem visitas a grutas, praias isoladas e observação de golfinhos, além de atividades aquáticas como jet ski. A equipa dedicada assegura um serviço de excelência, criando memórias inesquecíveis no mar.",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "09:00 - 00:00" },
            { day: "Tuesday", hours: "09:00 - 00:00" },
            { day: "Wednesday", hours: "09:00 - 00:00" },
            { day: "Thursday", hours: "09:00 - 00:00" },
            { day: "Friday", hours: "09:00 - 00:00" },
            { day: "Saturday", hours: "09:00 - 00:00" },
            { day: "Sunday", hours: "09:00 - 00:00" }
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
            type: "Discount",
            description: "5% OFF"
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
          email: "reservas@passeios-ria-formosa.com",
          logo: "Passeios ria formosa.png",
          type: "Boat Tours",
          description: "O Passeios Ria Formosa, em Olhão, oferece experiências únicas no Parque Natural da Ria Formosa. Além de passeios de barco pelas ilhas da região, disponibiliza alojamento em barcos-casa ecológicos, ideais para quem deseja dormir com as estrelas e explorar a natureza local. Os passeios incluem observação de golfinhos, cavalos-marinhos e aves, proporcionando uma imersão completa na fauna e flora da área.",
          locationIds: [5],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "08:00 - 20:00" },
            { day: "Tuesday", hours: "08:00 - 20:00" },
            { day: "Wednesday", hours: "08:00 - 20:00" },
            { day: "Thursday", hours: "08:00 - 20:00" },
            { day: "Friday", hours: "08:00 - 20:00" },
            { day: "Saturday", hours: "08:00 - 20:00" },
            { day: "Sunday", hours: "08:00 - 20:00" }
          ],
          address: "Ria Formosa",
          phone: "+351 912 345 679",
          socialMedia: {
            facebook: "https://www.facebook.com/passeiosbarcoriaformosa",
            instagram: "https://www.instagram.com/passeiosriaformosa/",
            website: "https://passeios-ria-formosa.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101892.91828023992!2d-7.896293302734396!3d37.05382039999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd05530a88105cfb%3A0x696d59f8bd24833d!2sPasseios%20Ria%20Formosa!5e0!3m2!1spt-PT!2spt!4v1748883183737!5m2!1spt-PT!2spt",
          rootFolder: "Passeios Ria Formosa",
          images: ["sailing-tour.jpg", "featured-2-horas-fuseta.webp", "birdwatching.jpg", "sealife-observation.jpg", "dolphins-observation.jpg", "DJI_20240427_200812_220.webp", "dji_fly_20240425_145136_206_1714164247660_timed.webp"]
        },
        {
          id: 3,
          name: "Formosamar",
          email: "info@formosamar.com",
          logo: "formosamar-main-logo-landscape-white.svg",
          type: "Boat Tours",
          description: "A Formosamar, localizada em Faro, oferece experiências autênticas no Parque Natural da Ria Formosa. Disponibiliza passeios de barco, observação de aves e golfinhos, bem como aluguer de barcos, caiaques, bicicletas e equipamentos de desporto náutico. Ideal para quem deseja explorar a natureza e cultura local com guias experientes. A empresa é certificada em ecoturismo e compromete-se com práticas sustentáveis.",
          locationIds: [5],
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
            description: "5% OFF"
          },
          rootFolder: "Formosamar",
          images: ["dolphin-watching-boat.jpg", "formosamar-sailboats-ria-formosa-island.jpg", "ria-formosa-islands-boat.jpg", "ilha-deserta-and-farol.jpg", "guided-boat-trip-in-ria.jpg", "formosamar-private-tour-cruise-ria-formosa-900x500.jpg", "formosamar.jpg", "formosamar (1).jpg", "formosamar (2).jpg"]
        },
        {
          id: 4,
          name: "AlgarExperience",
          email: "info@algarexperience.com",
          logo: "algarexperience-vect.svg",
          type: "Boat Tours",
          description: "A AlgarExperience é líder em turismo marítimo no Algarve, oferecendo experiências únicas como passeios às grutas de Benagil, observação de golfinhos, parasailing e churrascos na praia. Com uma frota moderna e uma equipa dedicada, proporciona momentos inesquecíveis no mar.",
          locationIds: [3],
          rating: 5,
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
            description: "10% OFF"
          },
          rootFolder: "AlgarExperience",
          images: ["caves-coastline-tour.jpg", "dolphin-caves-catamaran.jpg", "gruta-de-benagil.jpg", "sunset.jpg", "grutas.jpg", "vista-aerea.jpg", "barbecue-na-praia.jpg", "parasailing.jpg", "belize-segundo-costa.jpg", "boat-party.jpg"]
        },
        {
          id: 5,
          name: "Condor de Vilamoura",
          email: "info@condorvilamoura.com",
          logo: "condor_logo branco.avif",
          type: "Hotel",
          description: "Descubra a costa algarvia a bordo do majestoso Condor de Vilamoura, um veleiro de 34 metros inspirado nas escunas americanas do século XIX. Com capacidade para até 120 passageiros, oferece cruzeiros de 3 horas até à Praia da Galé e passeios de dia inteiro até Benagil, com paragens para nadar, explorar grutas e desfrutar de um delicioso churrasco na praia. Uma experiência única para toda a família, combinando conforto, tradição e paisagens deslumbrantes.",
          locationIds: [3],
          rating: 5,
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
            description: "10% OFF"
          },
          rootFolder: "condor vilamoura",
          images: ["photo0jpg.jpg", "caption (1).jpg", "vamos-para-a-praia.jpg", "caption (2).jpg", "caption.jpg", "21d228_8a694355938d49048feaba57ef829db2~mv2-1.avif", "condor-de-vilamoura (1).jpg", "condor-de-vilamoura.jpg", "21d228_28814368cb5446c1b0a8d17d8459fd48~mv2.avif", "21d228_8a694355938d49048feaba57ef829db2~mv2.avif"]
        },
        {
          id: 6,
          name: "Ocean Quest",
          email: "info@oceanquest.com",
          logo: "Ocean Quest.png",
          type: "Boat Tours",
          description: "Explora o melhor da costa algarvia com a Ocean Quest. Passeios de barco, grutas, golfinhos e parasailing desde Vilamoura, com uma equipa apaixonada por proporcionar experiências únicas no mar. Porque a vida é bela.",
          locationIds: [3],
          rating: 5,
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
            description: "10% OFF"
          },
          rootFolder: "ocean quest",
          images: ["see-the-wonderful-algarvian.jpg", "swimming-stop.jpg", "traditional-cultural (1).jpg", "vilamoura-yacht-charter.jpg", "vilamoura-speed-boat-trips.jpeg", "cesar-live-on-the-guitar.jpg", "traditional-cultural.jpg", "life-is-beautiful.jpg", "exceptional-view.jpg", "dolphin-quest.jpg"]
        },
        {
          id: 7,
          name: "Vilamoura Water Sports Centre",
          email: "info@vilamourawatersportscentre.com",
          logo: "Vilamoura-Watersports-Centre-logo-Design-01-e1602070771419.webp",
          type: "Water Sports",
          description: "Situado na Marina de Vilamoura, o Vilamoura Watersports Centre oferece uma vasta gama de atividades aquáticas para todas as idades. Desde passeios de barco às grutas de Benagil, observação de golfinhos, parasailing, jet ski, wakeboard, pesca e aluguer de barcos privados, há opções para todos os gostos. Com uma equipa experiente e equipamentos de qualidade, garantem segurança e diversão em todas as experiências. Aberto diariamente, é o local perfeito para explorar a costa algarvia de uma forma única.",
          locationIds: [3],
          rating: 5,
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
            description: "10% OFF"
          },
          rootFolder: "watersports vilamoura",
          images: ["IMG_1046-scaled.webp", "photo5jpg.jpg", "foto1.webp", "jet-boat-ride-vilamoura.jpg", "Parasailing-Vilamoura-Experience-scaled.webp", "speed-boat-algarvexcite.jpg", "parasailing-boat-trips.jpg", "common-dolphin.jpg", "Fishing-In-Algarve.webp", "Dolphins-Algarve-.webp"]
        }
      ]
    },
    {
      id: "gastronomy",
      title: "Gastronomy",
      route: "/gastronomy",
      description: "Experience exquisite cuisine at selected restaurants",
      image: "pexels-pixabay-262978.jpg",
      items: [
        {
          id: 1,
          name: "A ver Tavira",
          email: "restaurante@avertavira.pt",
          logo: "AverTavira.png",
          type: "Fine Dining",
          description: "O restaurante A Ver Tavira, galardoado com uma estrela Michelin, oferece uma experiência gastronómica única no coração histórico de Tavira, com sabores algarvios e uma vista deslumbrante. Sob o comando do chef Luís Brito, junta tradição e criatividade num menu inovador.",
          locationIds: [0],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "Closed" },
            { day: "Tuesday", hours: "18:30 - 21:30" },
            { day: "Wednesday", hours: "12:00 - 14:30, 18:30 - 21:30" },
            { day: "Thursday", hours: "12:00 - 14:30, 18:30 - 21:30" },
            { day: "Friday", hours: "12:00 - 14:30, 18:30 - 21:30" },
            { day: "Saturday", hours: "12:00 - 14:30, 18:30 - 21:30" },
            { day: "Sunday", hours: "Closed" }
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
            type: "Welcome Drink",
            description: "Welcome Glass of Champagne"
          },
          rootFolder: "A ver Tavira",
          images: ["borrego-feijao-bago-de.jpg", "rooftop-tavira.webp", "chefe-luis-brito.jpg", "cavala-marinada-e-gaspacho.jpg", "peixe-de-linha.jpg", "carabineiro-caril-couve.jpg", "the-detailed-combinations.jpg", "each-plate-prepared-with.jpg", "caption.jpg", "ce86969e3cec4b7bb0d0cde9e123fa0c.webp"]
        },
        {
          id: 2,
          name: "Authentic",
          email: "reservations@authentic-restaurant.pt",
          logo: "Logo-Authentic-dourado.png",
          type: "Fine Dining",
          description: "O restaurante Authentic, localizado na Quinta do Lago, oferece uma experiência gastronómica sofisticada, combinando cozinha clássica portuguesa com um toque contemporâneo, num ambiente de luxo e requinte.",
          locationIds: [1],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "Closed" },
            { day: "Tuesday", hours: "Closed" },
            { day: "Wednesday", hours: "18:00 - 23:00" },
            { day: "Thursday", hours: "18:00 - 23:00" },
            { day: "Friday", hours: "18:00 - 23:00" },
            { day: "Saturday", hours: "18:00 - 23:00" },
            { day: "Sunday", hours: "18:00 - 23:00" }
          ],
          address: "Rua Authentic, 45",
          phone: "912 345 679",
          socialMedia: {
            facebook: "https://www.facebook.com/p/Restaurante-Authentic-61557286149118/",
            instagram: "https://www.instagram.com/authentic_restaurant/",
            website: "https://authentic-restaurant.pt/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12822.135700162466!2d-8.047785783215549!3d37.07197186103477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab5007ddbbb2f%3A0xe5b9924c281ad489!2sAuthentic%20Restaurant!5e0!3m2!1spt-PT!2spt!4v1748882756760!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Welcome Drink",
            description: "Glass of Champagne"
          },
          rootFolder: "Authentic",
          images: ["83dcbf96-9726-4f1b-a1c7-c13c5f223b98.avif", "5e949c5e-060e-457b-ad67-b7597677c446.avif", "44aa29bd-0300-47b5-9ba5-83d8b8b19bd1.avif", "4d07f2e9-70b3-4b8b-a1e1-91fe37279165.avif", "843ccb2d-bf51-4c6a-bf0d-24ab6463b44c.avif", "ff05a4b6-f867-4243-9e4b-7141f87220af.avif", "c4bd01b2-7c29-405a-94d6-b566a0328e36.avif", "44cf2c78-1fec-4650-9ed2-eedaf4708a25.avif", "036d2880-7465-460b-9c18-61260a3de321.avif", "f818d5b4-5d61-4cc5-b0eb-e90fd92ac501.avif"]
        },
        {
          id: 3,
          name: "CafeZique",
          email: "cafeziquept@gmail.com",
          logo: "CAFEZIQUE-487bb404-679w.webp",
          type: "Fine Dining",
          description: "O restaurante CaféZique, em Loulé, combina sabores algarvios com técnicas contemporâneas, oferecendo uma experiência gastronómica única num ambiente descontraído junto ao castelo.",
          locationIds: [2],
          rating: 5,
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
            description: "Glass of Sparkling Wine"
          },
          rootFolder: "CafeZique",
          images: ["0c8e01ad-d9ca-4b18-af60-26a700b19e31.avif", "b7455fd9-1912-4dc4-9d75-b6e3c18c21e1.avif", "c10b8475-9033-4f81-96a7-89723f3537a6.avif", "562a5999-384a-4fcf-876a-191a283c4417.avif", "1fc2a2ef-0625-4d3c-a43b-538301aad3c4.avif", "eb5af52c-c6c9-411a-87ba-578fa3de1e3f.avif", "47a07484-d88c-447f-91ed-4c7bf0a542c3.avif", "d59e735d-141e-4359-b024-3352c31e5b83.avif", "cff64c57-1e91-4133-a445-f033ab8f5838.avif", "98b3ee01-5726-41de-93f9-23ce6da1c1b7.avif"]
        },
        {
          id: 4,
          name: "Gran Sorvete",
          email: "info@gransorvete.com",
          logo: "GranSorvete.avif",
          type: "Brunch Café",
          description: "O Gran Sorvete, na Marina de Vilamoura, é conhecido pelo seu gelado artesanal italiano, crepes e waffles, servidos num ambiente acolhedor com vista para o mar.",
          locationIds: [3],
          rating: 4,
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
            description: "10% OFF"
          },
          rootFolder: "Gran Sorvete",
          images: ["crepes-also-served-with.jpg", "gran-gelato.jpg", "gran-sorvete-in-the-heart.jpg", "in-the-heart-of-the-vilamoura.jpg", "our-delicious-mini-pancakes.jpg", "hot-chocolate-served.jpg", "enjoy-the-delicious-combinatio.jpg", "gran-gelato (1).jpg"]
        },
        {
          id: 5,
          name: "Retinto - Rodízio & Wine",
          email: "retinto.vilamoura@gmail.com",
          logo: "Retinto+Vilamoura-330w.webp",
          type: "Steakhouse",
          description: "O Retinto Rodízio & Wine, em Vilamoura, destaca-se pelo rodízio de carnes argentinas e brasileiras, acompanhado por uma seleção cuidada de vinhos. Ambiente acolhedor e serviço de excelência.",
          locationIds: [3],
          rating: 5,
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
            type: "Welcome Drink",
            description: "Welcome Drink"
          },
          rootFolder: "Retinto",
          images: ["5c594138-f690-4ea1-add1-3fce2e15ef55.avif", "photo0jpg.jpg", "entrecote-argentino-ribye.jpg", "ff1ed75b-d71b-42f7-9d93-7f3a39464c45.jpg", "59f45f21-e373-42d3-8ed2-8946008e0b3f.jpg", "b15f5500-b73f-421d-b7bc-a9412784f5d8.webp", "b8685ec1-a1b4-4cbd-bd41-3b8cdb1bfa11.avif", "d56aaf4a-be2e-4cd3-99d9-f70d63c5826c.avif", "7701aa02-a0c2-4ec5-9af1-e1c80a4263d6.webp"]
        }
      ]
    },
    {
      id: "activities",
      title: "Activities",
      route: "/activities",
      description: "Enjoy exclusive access to premium activities",
      image: "card_slides.jpg",
      items: [
        {
          id: 1,
          name: "Aia Racing School",
          email: "racingschool@autodromodoalgarve.com",
          logo: "Autódromo_Internacional_Algarve_logo.png",
          type: "Racing Experience",
          description: "Localizada no Autódromo Internacional do Algarve em Portimão, oferece experiências de condução desportiva em carros de alta performance como Porsche, Mercedes entre outros. Com instrutores experientes e uma infraestrutura de excelência, proporciona uma imersão segura e emocionante no mundo do automobilismo",
          locationIds: [6],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "09:00 - 18:00" },
            { day: "Tuesday", hours: "09:00 - 18:00" },
            { day: "Wednesday", hours: "09:00 - 18:00" },
            { day: "Thursday", hours: "09:00 - 18:00" },
            { day: "Friday", hours: "09:00 - 18:00" },
            { day: "Saturday", hours: "09:00 - 18:00" },
            { day: "Sunday", hours: "09:00 - 18:00" }
          ],
          address: "Autódromo Internacional do Algarve",
          phone: "+351 282 405 600",
          socialMedia: {
            facebook: "https://www.facebook.com/AutodromodoAlgarve/",
            instagram: "https://www.instagram.com/autodromodoalgarve/",
            website: "https://autodromodoalgarve.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.7022489145315!2d-8.633461223223954!3d37.23104267212726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b255615ca13d7%3A0x1383e062c6c8f3e2!2sAia%20Racing%20School!5e0!3m2!1spt-PT!2spt!4v1748882929910!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "5% OFF"
          },
          rootFolder: "Aia Racing School",
          images: ["295303780_10159273014723531_8030419394435337216_n.jpg", "racing-school.jpg", "AIA-Classe-A-AMG-9-scaled.jpg", "AIA-AMG-GT-Preto-27-scaled-e1744045842936.jpg", "Davanti-AIA-Racing-School.jpg"]
        },
        {
          id: 2,
          name: "Karting Portimão",
          email: "kia@parkalgar.com",
          logo: "Kartodromoalgarve.png",
          type: "Karting",
          description: "O Kartódromo Internacional do Algarve, em Portimão, é uma das maiores pistas de kart da Europa, com 1,531 km de extensão. Oferece experiências para todas as idades, desde crianças até adultos, com karts adaptados às diferentes faixas etárias e níveis de experiência. Além de ser palco de competições oficiais e eventos privados, dispõe de infraestrutura completa, incluindo restaurante, boxes e lojas.",
          locationIds: [6],
          rating: 5,
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
            description: "10% OFF"
          },
          rootFolder: "KartingPortimao",
          images: ["39129269_2071071279603968_9122454272632422400_n.jpg", "Kartodromo2-scaled.jpg", "490851637_1218406543617808_2741633398730202739_n.jpg", "488211910_1210059391119190_5497740365812582147_n.jpg", "489446312_1210956781029451_2393478272773825535_n.jpg", "kartodromo6-pqchj12nib2vumiq0zqzcru0robuxlzilx7rhu5n6o.jpg", "kartodromo3-pqchj12nib2vumiq0zqzcru0robuxlzilx7rhu5n6o.jpg", "490229418_1218688256922970_8436650453256995830_n.jpg", "IMG_2422.jpg"]
        },
        {
          id: 3,
          name: "Slide & Splash",
          email: "info@slidesplash.com",
          logo: "logo_slidesplash.png",
          type: "Waterpark",
          description: "O Slide & Splash, em Lagoa, é um parque aquático familiar com diversas atrações para todas as idades. Além de escorregas emocionantes, oferece áreas infantis, zonas de relaxamento e espetáculos com animais. Ideal para um dia de diversão no Algarve.\n\nHorário Sazonal:\n- Junho: 10:00 - 17:30\n- 1 Julho a 12 Setembro: 10:00 - 18:00\n- 13 Setembro a 31 Outubro: 10:00 - 17:00",
          locationIds: [7],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "10:00 - 18:00 (horário varia por época)" },
            { day: "Tuesday", hours: "10:00 - 18:00 (horário varia por época)" },
            { day: "Wednesday", hours: "10:00 - 18:00 (horário varia por época)" },
            { day: "Thursday", hours: "10:00 - 18:00 (horário varia por época)" },
            { day: "Friday", hours: "10:00 - 18:00 (horário varia por época)" },
            { day: "Saturday", hours: "10:00 - 18:00 (horário varia por época)" },
            { day: "Sunday", hours: "10:00 - 18:00 (horário varia por época)" }
          ],
          address: "Vale de Deus, 8401-901 Estombar, Lagoa",
          phone: "+351 282 340 800",
          socialMedia: {
            facebook: "https://www.facebook.com/AquashowParque/?locale=pt_PT",
            instagram: "https://www.instagram.com/aquashowparkhotel/",
            website: "https://aquashowpark.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1590.2913559327294!2d-8.474625460970353!3d37.1388415930381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ad7dcb0aff5c5%3A0xbe389806c01894c5!2sSlide%20%26%20Splash!5e0!3m2!1spt-PT!2spt!4v1748883086894!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "12% OFF"
          },
          rootFolder: "Slide&Splash",
          images: ["Slide-Splash-Torre-sector-4-e-aereas_3-e1679392334545.webp", "atracoes31.jpg", "Slide-Splash-Water-Park-Algarve-Portugal.jpg", "atracoes39.jpg", "slide-splash-water-slide.jpg", "new-ride-2018-disco-river.jpg", "new-rides-2018.jpg", "black-hole.jpg", "slide-splash-2019 (1).jpg", "the-big-wave.jpg", "big-slides-tower.jpg", "slide-splash-2019.jpg", "slide-2020.jpg"]
        },
        {
          id: 4,
          name: "Family Golf Park",
          email: "info@familygolfpark.com",
          logo: "family-golf-park-logo-white.png",
          type: "Golf",
          description: "Situado no coração de Vilamoura, o Family Golf Park é um destino imperdível para famílias e grupos que procuram diversão e lazer. Com dois percursos de mini golfe temáticos inspirados na Roma Antiga, o Via Áppia e o Via Lusitânia, o parque oferece uma experiência única em meio a jardins exuberantes e arquitetura romana. Além disso, dispõe de uma área de jogos para crianças, sala de jogos, snack-bar com esplanada e até um comboio turístico que percorre os principais pontos de Vilamoura. Aberto diariamente, o Family Golf Park é perfeito para um dia de diversão em família.",
          locationIds: [3],
          rating: 5,
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
            description: "10% OFF"
          },
          rootFolder: "Family Golf Park",
          images: ["family-golf-park-gallery-05-min.jpg", "family-golf-park-gallery-10-min.jpg", "Legionario_2.webp", "Family-Golf-Park_2.webp", "Looping-Crazygolfe_2.webp", "family-golf-park.jpg", "lisbon-bridge.jpg", "relaxing-and-clever-minigolf.jpg", "vulcanos.jpg", "2sd-hole.jpg", "1st-hole.jpg", "welcome-to-the-best-europe.jpg"]
        },
        {
          id: 5,
          name: "Zoomarine",
          email: "info@zoomarine.pt",
          logo: "logozoomarine.png",
          type: "Theme Park",
          description: "O Zoomarine, localizado perto de Albufeira, é um parque temático que combina diversão, educação e natureza. Com espetáculos de golfinhos, leões-marinhos, aves tropicais, escorregas aquáticos e uma praia artificial, é perfeito para um dia inesquecível em família. Uma aventura mágica no coração do Algarve!\n\nHorário Sazonal:\n- Março, Outubro, Novembro: 10:00 - 17:00\n- Abril a 22 de Junho & 10 Setembro a 28 de Setembro: 10:00 - 18:00\n- 23 de Junho a 7 Setembro: 10:00 - 19:30",
          locationIds: [4],
          rating: 5,
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
          images: ["145.jpg", "145 (1).jpg", "145 (2).jpg", "145 (3).jpg", "145 (4).jpg", "145 (5).jpg", "145 (6).jpg", "145 (7).jpg", "145 (8).jpg", "145 (9).jpg", "145 (10).jpg", "image_processing20240617-9-uc4gqx.jpg", "Zoomarine_2.jpg", "zoomarine.jpg"]
        },
        {
          id: 7,
          name: "Algarve Riders",
          email: "info@algarveriders.com",
          logo: "logo_algarveriders.png",
          type: "Theme Park",
          description: "Algarve Riders é uma empresa de aluguer de motos que oferece uma experiência única com motos de alta performance. É um local ideal para desfrutar de uma tarde de diversão.",
          locationIds: [3],
          rating: 5,
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
            description: "10% OFF -Tours ; 5% OFF - Scooter"
          },
          rootFolder: "Algarve Riders",
          images: ["algarve-riders-available.jpg", "algarve-riders-off-road (7).jpg", "algarve-riders-off-road (6).jpg", "algarve-riders-off-road (5).jpg", "algarve-riders-off-road (4).jpg", "algarve-riders-off-road (3).jpg", "algarve-riders-off-road (2).jpg", "algarve-riders-off-road (1).jpg", "algarve-quad-tours-fun.jpg", "team-building-buggy-tour.jpg", "algarve-riders-off-road.jpg"]
        },
        {
          id: 8,
          name: "Aquashow",
          email: "info@aquashow.com",
          logo: "aquashow_logo.png",
          type: "Theme Park",
          description: "O Aquashow Outdoor é o maior parque aquático ao ar livre de Portugal, situado no coração do Algarve. Com escorregas gigantes, piscina de ondas, atrações para todas as idades e muita animação, é o local ideal para um dia de verão cheio de diversão, adrenalina e memórias em família ou entre amigos.",
          locationIds: [8],
          rating: 5,
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
            description: "10% OFF"
          },
          rootFolder: "Aquashow",
          images: ["IMG_2075.jpg", "Galeria-03.jpg", "aquashow-park (6).jpg", "air-race.jpg", "aquashow-park (5).jpg", "aquashow-park (4).jpg", "aquashow-park (3).jpg", "aquashow-park (2).jpg", "aquashow-park (1).jpg", "aquashow-park.jpg"]
        },
      ]
    },
    {
      id: "winery-tours",
      title: "Winery Tours",
      route: "/winery-tours",
      description: "Discover the finest wines of the region",
      image: "vertical-shot-person-holding-glass-wine-vineyard-sunlight.jpg",
      items: [
        {
          id: 1,
          name: "Quinta do Canhoto",
          email: "info@quintadocanhoto.com",
          logo: "LOGO_QDC_WHITE_NEW.png",
          type: "Winery Tours",
          description: "A Quinta do Canhoto, em Albufeira, é uma referência em vinhos do Algarve, combinando tradição familiar com inovação, e oferece provas de vinhos e experiências únicas em enoturismo.",
          locationIds: [4],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Tuesday", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Wednesday", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Thursday", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Friday", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Saturday", hours: "Closed" },
            { day: "Sunday", hours: "Closed" }
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
            type: "Discount",
            description: "15% OFF"
          },
          rootFolder: "Quinta do Canhoto",
          images: ["almoco-vinico.jpg", "as-vinhas.jpg", "espaco-exterior.jpg", "provas-de-vinho.jpg", "o-deck-da-adega.jpg", "great-day-out-lovely.jpg", "caption.jpg", "great-day-out-lovely (1).jpg", "great-day-out-lovely (2).jpg"]
        },
        {
          id: 2,
          name: "Morgado do Quintão",
          email: "info@morgadodoquintao.pt",
          logo: "Morgado do quintao.png",
          type: "Winery Tours",
          description: "O Morgado do Quintão, em Lagoa, une tradição e sustentabilidade na produção de vinhos autênticos. Oferece provas e almoços vínicos, proporcionando uma experiência genuína e memorável no Algarve.",
          locationIds: [7],
          rating: 5,
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
            description: "15% OFF"
          },
          rootFolder: "Morgado do Quintão",
          images: ["a-beautiful-plate-to.jpg", "morgado-do-quintao.jpg", "there-is-nothing-like.jpg", "wine-tasting-in-an-old.jpg", "palhete-our-best-selling.jpg", "typical-carapaus-alimados.jpg", "photo0jpg.jpg", "caption.jpg", "palhete-our-best-selling (1).jpg"]
        },
        {
          id: 3,
          name: "Adega do Cantor",
          email: "info@adegadocantor.com",
          logo: "Adega do Cantor.webp",
          type: "Winery Tours",
          description: "Descubra os sabores do Algarve na Adega do Cantor, em Albufeira. Visite as vinhas, conheça o processo de produção e prove vinhos premiados numa experiência única de enoturismo. Uma paragem obrigatória para amantes de vinho e da natureza.",
          locationIds: [7],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "10:00 - 13:00, 14:00 - 17:00" },
            { day: "Tuesday", hours: "10:00 - 13:00, 14:00 - 17:00" },
            { day: "Wednesday", hours: "10:00 - 13:00, 14:00 - 17:00" },
            { day: "Thursday", hours: "10:00 - 13:00, 14:00 - 17:00" },
            { day: "Friday", hours: "10:00 - 13:00, 14:00 - 17:00" },
            { day: "Saturday", hours: "Closed" },
            { day: "Sunday", hours: "Closed" }
          ],
          address: "Adega do Cantor",
          phone: "+351 282 912 345",
          socialMedia: {
            facebook: "https://www.facebook.com/adegadocantor/?locale=pt_PT",
            instagram: "https://www.instagram.com/adegadocantor_oficial/",
            website: "https://winesvidanova.com/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.212284376655!2d-8.281359223227659!3d37.12386427215656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ace2f02922bbf%3A0x915f96b6f61d0948!2sAdega%20do%20Cantor!5e0!3m2!1spt-PT!2spt!4v1748883379193!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Discount",
            description: "5% OFF"
          },
          rootFolder: "Adega do Cantor",
          images: ["photo4jpg.jpg", "photo5jpg.jpg", "photo2jpg (1).jpg", "photo4jpg (1).jpg", "photo0jpg.jpg", "photo3jpg.jpg", "photo0jpg (1).jpg", "img-20190507-145609-largejpg.jpg", "img-20190507-142303-largejpg.jpg", "beautiful-cellar.jpg", "photo3jpg (1).jpg", "photo2jpg.jpg", "20181004-154037-largejpg.jpg"]
        }
      ]
    },
    {
      id: "wellness",
      title: "Wellness",
      route: "/wellness",
      description: "Relax and rejuvenate with our wellness partners",
      image: "close-up-therapist-hand-massaging-woman-s-back-with-hot-towel-spa.jpg",
      items: [
        {
          id: 1,
          name: "7 Seven Spa Vilamoura",
          email: "7 Seven Spa Vilamoura@cleverdetails.com",
          logo: "7spa.svg",
          type: "Full Day Spa",
          description: "O 7 Seven Spa, no Hilton Vilamoura As Cascatas Golf Resort & Spa, oferece uma experiência de bem-estar com 14 salas de tratamento, circuito de hidroterapia, sauna, banho turco, jacuzzi e jardim zen. Ideal para relaxar e renovar energias.",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "09:45 - 21:00" },
            { day: "Tuesday", hours: "09:45 - 21:00" },
            { day: "Wednesday", hours: "09:45 - 21:00" },
            { day: "Thursday", hours: "09:45 - 21:00" },
            { day: "Friday", hours: "09:45 - 21:00" },
            { day: "Saturday", hours: "09:45 - 20:00" },
            { day: "Sunday", hours: "09:45 - 20:00" }
          ],
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/7SevenSpaVilamoura",
            instagram: "https://www.instagram.com/7_spa_vilamoura/",
            website: "https://www.hilton.com/pt/hotels/faohihi-hilton-vilamoura-as-cascatas-golf-resort-and-spa/spa/"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.274995797757!2d-8.123854023229336!3d37.074756772170275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab5c74ac631f5%3A0xfa424fad702ea513!2sCondor%20de%20Vilamoura!5e0!3m2!1spt-PT!2spt!4v1748883412407!5m2!1spt-PT!2spt",
          specialOffer: {
            type: "Special Offer",
            description: "15% OFF the Menu & €5 OFF Therapeutic Circuit"
          },
          rootFolder: "7 Seven Spa Vilamoura",
          images: ["7-Seven-Spa_-scaled.jpg", "7Spa6.jpg", "7spa-02.jpg", "7spa-01.jpg", "FAO_70271_Hilton_Vilamoura_Golf_Resort_&_Spa_0623_07.jpg", "7-seven-spa-hilton-vilamoura-bem-estar-algarve_F.webp", "faohi-spa19-hilton-vilamoura.avif", "faohi-spa25-hilton-vilamoura.avif", "faohi-spa28-hilton-vilamoura.avif", "faohi-spa11-hilton-vilamoura.avif", "faohi-spa21-hilton-vilamoura.avif"]
        },
        {
          id: 2,
          name: "Duo Spa & Life Care",
          email: "info@duospa.com",
          logo: "DuoSpacare.png",
          type: "Wellness",
          description: "O Duo Spa & Life Care, no Cegonha Country Club em Vilamoura, oferece experiências de bem-estar com circuito de spa, sauna, banho turco e tratamentos como esfoliação ou Iyashi Dome, para momentos de relaxamento e rejuvenescimento.",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Tuesday", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Wednesday", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Thursday", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Friday", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Saturday", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Sunday", hours: "Closed" }
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
            type: "Premium Package",
            description: "20% OFF Premium Treatment; €5 OFF Menu; Detox Circuit Access..."
          },
          rootFolder: "Duo Spa & Life Care",
          images: ["474105319_527080770383605_5631574254499945256_n.jpg", "474381410_527080747050274_4179998407528808811_n.jpg", "479886329_544365938655088_6110947825713535078_n.jpg", "IMG_1721-1024x683.jpg", "piscina-interior-duo-spa-life-care-cegonha-country-club-quarteira-algarve_F.jpg"]
        },
        {
          id: 3,
          name: "DMed Clinic",
          email: "info@dmedclinic.com",
          logo: "DmedClinic.png",
          type: "Wellness",
          description: "A DMed Clinic oferece serviços médicos ao domicílio em toda a região, incluindo consultas de Medicina Geral, Psicologia, Nutrição, Psiquiatria e Telemedicina, evitando deslocações desnecessárias.",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Monday", hours: "24h" },
            { day: "Tuesday", hours: "24h" },
            { day: "Wednesday", hours: "24h" },
            { day: "Thursday", hours: "24h" },
            { day: "Friday", hours: "24h" },
            { day: "Saturday", hours: "24h" },
            { day: "Sunday", hours: "24h" }
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
          images: ["468288652_122196529190067954_5219035909363135589_n.jpg", "382379297_6903254336363281_5117175850526879907_n.jpg", "468219820_122196529196067954_5403389782633898697_n.jpg"]
        }
      ]
    },
    {
      id: "beauty-and-hair-salons",
      title: "Beauty & Hair Salons",
      route: "/beauty-and-hair-salons",
      description: "Private dining experience in your accommodation",
      image: "pexels-valeriya-939836.jpg",
      items: [
        {
          id: 1,
          name: "Teresa",
          email: "teresa.estetica@live.com.pt",
          logo: "277158294_3199246580396467_9054406006485547937_n-removebg-preview.png",
          type: "Beauty Services",
          description: "Teresa é esteticista especializada em serviços como extensão de unhas (gel/acrílico), pedicure/manicure, depilações, extensões de pestanas e tratamentos faciais. Oferece também massagens de relaxamento, tratamentos corporais como cavitação e drenagem linfática, além de maquilhagem profissional. Com uma abordagem personalizada, Teresa proporciona cuidados que visam realçar a beleza e promover o bem-estar dos seus clientes.",
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
            type: "Discount",
            description: "15% OFF"
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
          description: "Expert beauty and aesthetic treatments",
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
      title: "Chef at Home",
      route: "/chef-at-home",
      description: "Experience gourmet dining in the comfort of your home",
      image: "professional-chef-preparing-food-kitchen.jpg",
      items: [
        {
          id: 1,
          name: "Chef André Simão",
          email: "asimao2@hotmail.com",
          logo: "Captura_de_ecrã_2025-06-03__às_11.54.00-removebg-preview.png",
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
          images: ["rs=w_700,cg_true,m.webp", "rs=w_800,cg_true,m.webp", "rs=w_612,cg_true,m.webp", "rs=w_1200,cg_true,m (2).webp", "rs=w_1200,cg_true,m (3).webp", "rs=w_1200,cg_true,m.webp", "rs=w_1200,cg_true,m (1).webp"]
        }
      ]
    }
  ],
  locations: [
    {
      id: 0,
      name: "Tavira",
      image: "/location1.jpg",
      description: "Tavira is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 1,
      name: "Quinta do Lago",
      image: "/location2.jpg",
      description: "Quinta do Lago is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 2,
      name: "Loulé",
      image: "/location3.jpg",
      description: "Loulé is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 3,
      name: "Vilamoura",
      image: "/location4.jpg",
      description: "Vilamoura is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 4,
      name: "Albufeira",
      image: "/location5.jpg",
      description: "Albufeira is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 5,
      name: "Faro",
      image: "/location5.jpg",
      description: "Faro is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 6,
      name: "Portimão",
      image: "/location5.jpg",
      description: "Portimão is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 7,
      name: "Lagoa",
      image: "/location5.jpg",
      description: "Lagoa is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 8,
      name: "Quarteira",
      image: "/location5.jpg",
      description: "Quarteira is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    }
  ]
}; 