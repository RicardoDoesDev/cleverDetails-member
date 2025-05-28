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
          logo: "cool-charters.jpg",
          description: "Oferece experiências náuticas personalizadas, ideais para ocasiões especiais como aniversários, despedidas de solteiro(a), casamentos ou eventos corporativos. Os passeios incluem visitas a grutas, praias isoladas e observação de golfinhos, além de atividades aquáticas como jet ski. A equipa dedicada assegura um serviço de excelência, criando memórias inesquecíveis no mar.",
          locationId: 1,
          rating: 5,
          type: "Boat Tours",
          openingHours: "09:00 - 19:00",
          address: "Marina de Vilamoura",
          phone: "+351 912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/coolchartersvilamoura",
            instagram: "https://www.instagram.com/coolchartersvilamoura",
            website: "https://www.coolchartersvilamoura.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.122345!3d37.082651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "5%"
          },
          rootFolder: "Cool Charters",
          images: ["3e7042db-69f6-4f1f-b8b0-487e20a38ce7.jpeg", "discover-algarve-s-famous.jpg", "b8ce1f17-7758-47d7-9ad8-f4e8d68f6bc5.jpeg", "caption.jpg", "background5.jpg", "you-will-find-a-wonderful.jpg", "kerry-is-vilamoura-s.jpg"]
        },
        {
          id: 2,
          name: "Passeios Ria Formosa",
          email: "reservas@passeios-ria-formosa.com",
          logo: "Passeios ria formosa.png",
          description: "O Passeios Ria Formosa, em Olhão, oferece experiências únicas no Parque Natural da Ria Formosa. Além de passeios de barco pelas ilhas da região, disponibiliza alojamento em barcos-casa ecológicos, ideais para quem deseja dormir com as estrelas e explorar a natureza local. Os passeios incluem observação de golfinhos, cavalos-marinhos e aves, proporcionando uma imersão completa na fauna e flora da área.",
          locationId: 2,
          rating: 5,
          type: "Boat Tours",
          openingHours: "09:00 - 18:00",
          address: "Ria Formosa",
          phone: "+351 912 345 679",
          socialMedia: {
            facebook: "https://www.facebook.com/passeiosriaformosa",
            instagram: "https://www.instagram.com/passeiosriaformosa",
            website: "https://www.passeios-ria-formosa.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.126789!3d37.076543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "Blue Lagoon 5% - Birds & Seahorses Observation 10%"
          },
          rootFolder: "Passeios Ria Formosa",
          images: ["BarcoCasa_BarraVelha.webp", "DJI_20240427_200812_220.webp", "IMG_4864.webp", "birdwatching.jpg", "sealife-observation.jpg", "sailing-tour.jpg", "dolphins-observation.jpg", "featured-2-horas-fuseta.webp"]
        },
        {
          id: 3,
          name: "Formosamar",
          email: "info@formosamar.com",
          logo: "formosamar-main-logo-landscape-white.svg",
          description: "A Formosamar, localizada em Faro, oferece experiências autênticas no Parque Natural da Ria Formosa. Disponibiliza passeios de barco, observação de aves e golfinhos, bem como aluguer de barcos, caiaques, bicicletas e equipamentos de desporto náutico. Ideal para quem deseja explorar a natureza e cultura local com guias experientes. A empresa é certificada em ecoturismo e compromete-se com práticas sustentáveis.",
          locationId: 2,
          rating: 5,
          type: "Boat Tours",
          openingHours: "09:00 - 18:00",
          address: "Ria Formosa",
          phone: "+351 912 345 680",
          socialMedia: {
            facebook: "https://www.facebook.com/formosamar",
            instagram: "https://www.instagram.com/formosamar",
            website: "https://www.formosamar.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.134567!3d37.091234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "5%"
          },
          rootFolder: "Formosamar",
          images: ["dolphin-watching-boat.jpg", "formosamar-sailboats-ria-formosa-island.jpg", "ria-formosa-islands-boat.jpg", "ilha-deserta-and-farol.jpg", "guided-boat-trip-in-ria.jpg", "formosamar-private-tour-cruise-ria-formosa-900x500.jpg"]
        },
        {
          id: 4,
          name: "AlgarExperience",
          email: "info@algarexperience.com",
          type: "Boat Tours",
          description: "Experience the best of Algarve with AlgarExperience's expert guided tours",
          locationId: 2,
          rating: 5,
          logo: "algarexperience.jpg",
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.126789!3d37.076543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          openingHours: "09:00 - 18:00",
          address: "Algarve",
          phone: "+351 912 345 681",
          socialMedia: {
            facebook: "https://www.facebook.com/algarexperience",
            instagram: "https://www.instagram.com/algarexperience",
            website: "https://www.algarexperience.com"
          },
          specialOffer: {
            type: "Discount",
            description: "10%"
          },
          rootFolder: "AlgarExperience",
          images: ["algarexperience.jpg", "algarexperience2.jpg", "algarexperience3.jpg", "algarexperience4.jpg", "algarexperience5.jpg", "algarexperience6.jpg", "algarexperience7.jpg"]
        },
        {
          id: 5,
          name: "Condor de Vilamoura",
          email: "info@condorvilamoura.com",
          type: "Hotel",
          description: "Experience the best of Algarve with Condor de Vilamoura's expert guided tours",
          locationId: 2,
          rating: 5,
          logo: "condor-de-vilamoura.jpg",
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.126789!3d37.076543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          openingHours: "09:00 - 18:00",
          address: "Vilamoura",
          phone: "+351 912 345 682",
          socialMedia: {
            facebook: "https://www.facebook.com/condorvilamoura",
            instagram: "https://www.instagram.com/condorvilamoura",
            website: "https://www.condorvilamoura.com"
          },
          specialOffer: {
            type: "Discount",
            description: "10%"
          },
          rootFolder: "Condor de Vilamoura",
          images: ["condor-de-vilamoura.jpg", "condor-de-vilamoura-2.jpg", "condor-de-vilamoura-3.jpg", "condor-de-vilamoura-4.jpg", "condor-de-vilamoura-5.jpg", "condor-de-vilamoura-6.jpg", "condor-de-vilamoura-7.jpg"]
        },
        {
          id: 6,
          name: "Ocean Quest",
          email: "info@oceanquest.com",
          type: "Boat Tours",
          description: "Experience the best of Algarve with Ocean Quest's expert guided tours",
          locationId: 2,
          rating: 5,
          logo: "ocean-quest.jpg",
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.126789!3d37.076543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          openingHours: "09:00 - 18:00",
          address: "Vilamoura",
          phone: "+351 912 345 683",
          socialMedia: {
            facebook: "https://www.facebook.com/oceanquest",
            instagram: "https://www.instagram.com/oceanquest",
            website: "https://www.oceanquest.com"
          },
          specialOffer: {
            type: "Discount",
            description: "10%"
          },
          rootFolder: "Ocean Quest",
          images: ["ocean-quest.jpg", "ocean-quest-2.jpg", "ocean-quest-3.jpg", "ocean-quest-4.jpg", "ocean-quest-5.jpg", "ocean-quest-6.jpg", "ocean-quest-7.jpg"]
        },
        {
          id: 7,
          name: "Vilamoura Water Sports Centre",
          email: "info@vilamourawatersportscentre.com",
          type: "Water Sports",
          description: "Experience the best of Algarve with Vilamoura Water Sports Centre's expert guided tours",
          locationId: 2,
          rating: 5,
          logo: "vilamourawatersportscentre.jpg",
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.126789!3d37.076543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          openingHours: "09:00 - 18:00",
          address: "Vilamoura",
          phone: "+351 912 345 684",
          socialMedia: {
            facebook: "https://www.facebook.com/vilamourawatersportscentre",
            instagram: "https://www.instagram.com/vilamourawatersportscentre",
            website: "https://www.vilamourawatersportscentre.com"
          },
          specialOffer: {
            type: "Discount",
            description: "10%"
          },
          rootFolder: "Vilamoura Water Sports Centre",
          images: ["vilamourawatersportscentre.jpg", "vilamourawatersportscentre-2.jpg", "vilamourawatersportscentre-3.jpg", "vilamourawatersportscentre-4.jpg", "vilamourawatersportscentre-5.jpg", "vilamourawatersportscentre-6.jpg", "vilamourawatersportscentre-7.jpg"]
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
          type: "Fine Dining",
          description: "O restaurante A Ver Tavira, galardoado com uma estrela Michelin, oferece uma experiência gastronómica única no coração histórico de Tavira, com sabores algarvios e uma vista deslumbrante. Sob o comando do chef Luís Brito, junta tradição e criatividade num menu inovador.",
          locationId: 1,
          rating: 5,
          logo: "AverTavira.png",
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.122345!3d37.082651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          openingHours: "12pm - 11pm",
          address: "Rua de Tavira, 12",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/avertavira",
            instagram: "https://www.instagram.com/avertavira",
            website: "https://www.avertavira.pt"
          },
          specialOffer: {
            type: "Welcome Drink",
            description: "Welcome Glass of Champagne"
          },
          rootFolder: "A ver Tavira",
          images: ["borrego-feijao-bago-de.jpg", "rooftop-tavira.webp", "chefe-luis-brito.jpg", "cavala-marinada-e-gaspacho.jpg", "peixe-de-linha.jpg", "carabineiro-caril-couve.jpg"]
        },
        {
          id: 2,
          name: "Authentic",
          email: "reservations@authentic-restaurant.pt",
          type: "Fine Dining",
          description: "O restaurante Authentic, localizado na Quinta do Lago, oferece uma experiência gastronómica sofisticada, combinando cozinha clássica portuguesa com um toque contemporâneo, num ambiente de luxo e requinte.",
          locationId: 2,
          rating: 5,
          logo: "Logo-Authentic-dourado.png",
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.126789!3d37.076543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          openingHours: "12pm - 11pm",
          address: "Rua Authentic, 45",
          phone: "912 345 679",
          socialMedia: {
            facebook: "https://www.facebook.com/authentic",
            instagram: "https://www.instagram.com/authentic",
            website: "https://www.authentic-restaurant.pt"
          },
          specialOffer: {
            type: "Drink & Discount",
            description: "Welcome Drink and 5% Discount on Dinner"
          },
          rootFolder: "Authentic",
          images: ["4d07f2e9-70b3-4b8b-a1e1-91fe37279165.avif", "c4bd01b2-7c29-405a-94d6-b566a0328e36.avif", "5e949c5e-060e-457b-ad67-b7597677c446.avif", "ff05a4b6-f867-4243-9e4b-7141f87220af.avif", "44cf2c78-1fec-4650-9ed2-eedaf4708a25.avif"]
        },
        {
          id: 3,
          name: "CaféZique",
          email: "cafeziquept@gmail.com",
          type: "Fine Dining",
          description: "O restaurante CaféZique, em Loulé, combina sabores algarvios com técnicas contemporâneas, oferecendo uma experiência gastronómica única num ambiente descontraído junto ao castelo.",
          locationId: 3,
          rating: 5,
          logo: "CAFEZIQUE-487bb404-679w.webp",
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.134567!3d37.091234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          openingHours: "12pm - 11pm",
          address: "Rua Cafezique, 78",
          phone: "912 345 680",
          socialMedia: {
            facebook: "https://www.facebook.com/cafezique",
            instagram: "https://www.instagram.com/cafezique",
            website: "https://www.cafezique.pt"
          },
          specialOffer: {
            type: "Welcome Drink",
            description: "Glass of Sparkling Wine"
          },
          rootFolder: "CaféZique",
          images: ["0c8e01ad-d9ca-4b18-af60-26a700b19e31.avif", "b7455fd9-1912-4dc4-9d75-b6e3c18c21e1.avif", "c10b8475-9033-4f81-96a7-89723f3537a6.avif", "562a5999-384a-4fcf-876a-191a283c4417.avif", "1fc2a2ef-0625-4d3c-a43b-538301aad3c4.avif"]
        },
        {
          id: 4,
          name: "Fancy Kitchen Algarve",
          email: "info@fancykitchenalgarve.com",
          type: "Personal Chef",
          description: "A Fancy Kitchen Algarve oferece experiências gastronómicas exclusivas com chefs privados e catering personalizado, elevando cada momento com requinte e sabor.",
          locationId: 4,
          rating: 5,
          logo: "Fancy kitchen.webp",
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.142345!3d37.087654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          openingHours: "By appointment",
          address: "Service at your location",
          phone: "912 345 681",
          socialMedia: {
            facebook: "https://www.facebook.com/fancykitchen",
            instagram: "https://www.instagram.com/fancykitchen",
            website: "https://www.fancykitchenalgarve.com"
          },
          specialOffer: {
            type: "Welcome Package",
            description: "Glass of Sparkling Wine and 2 Canapés per Person"
          },
          rootFolder: "Fancy Kitchen",
          images: ["image1.webp", "image2.webp", "image3.webp", "image4.webp", "image5.webp", "image6.webp", "image7.webp"]
        },
        {
          id: 5,
          name: "Gran Sorvete",
          email: "info@gransorvete.com",
          type: "Brunch Café",
          description: "O Gran Sorvete, na Marina de Vilamoura, é conhecido pelo seu gelado artesanal italiano, crepes e waffles, servidos num ambiente acolhedor com vista para o mar.",
          locationId: 5,
          rating: 4,
          logo: "GranSorvete.avif",
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.156789!3d37.098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          openingHours: "8am - 8pm",
          address: "Rua Gran Sorvete, 23",
          phone: "912 345 682",
          socialMedia: {
            facebook: "https://www.facebook.com/gransorvete",
            instagram: "https://www.instagram.com/gransorvete",
            website: "https://www.gransorvete.com"
          },
          specialOffer: {
            type: "Discount",
            description: "10%"
          },
          rootFolder: "Gran Sorvete",
          images: ["crepes-also-served-with.jpg", "gran-gelato.jpg", "gran-sorvete-in-the-heart.jpg", "in-the-heart-of-the-vilamoura.jpg", "our-delicious-mini-pancakes.jpg", "hot-chocolate-served.jpg", "enjoy-the-delicious-combinatio.jpg"]
        },
        {
          id: 6,
          name: "Retinto - Rodízio & Wine",
          email: "retinto.vilamoura@gmail.com",
          type: "Steakhouse",
          description: "O Retinto Rodízio & Wine, em Vilamoura, destaca-se pelo rodízio de carnes argentinas e brasileiras, acompanhado por uma seleção cuidada de vinhos. Ambiente acolhedor e serviço de excelência.",
          locationId: 6,
          rating: 5,
          logo: "Retinto+Vilamoura-330w.webp",
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.167890!3d37.102345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          openingHours: "12pm - 11pm",
          address: "Rua Retinto, 56",
          phone: "912 345 683",
          socialMedia: {
            facebook: "https://www.facebook.com/retinto",
            instagram: "https://www.instagram.com/retinto",
            website: "https://www.retinto.pt"
          },
          specialOffer: {
            type: "Welcome Drink",
            description: "Sparkling Wine Welcome Drink"
          },
          rootFolder: "Retinto - Rodízio & Wine",
          images: ["5c594138-f690-4ea1-add1-3fce2e15ef55.avif", "photo0jpg.jpg", "entrecote-argentino-ribye.jpg", "ff1ed75b-d71b-42f7-9d93-7f3a39464c45.jpg", "59f45f21-e373-42d3-8ed2-8946008e0b3f.jpg"]
        },
        {
          id: 7,
          name: "Chef André Simão",
          email: "asimao2@hotmail.com",
          phone: "9251500",
          type: "Personal Chef",
          description: "Chef executivo de cozinha do Monte Rei onde se encontra o restaurante recomendado pelo guia Michelin, Vistas Monte Rei. Proporciona estilos de cozinha descontraídos, para juntar amigos e familia à mesa com menus de tapas & drinks, barbecue, menu algarvio ou menu de degustação em 5 momentos para celebrações mais pormenorizadas.",
          locationId: 7,
          rating: 5,
          logo: "ChefAndréSimao.jpg",
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.178901!3d37.112345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          openingHours: "By appointment",
          address: "Service at your location",
          socialMedia: {
            facebook: "https://www.facebook.com/chefandresimao",
            instagram: "https://www.instagram.com/chefandresimao",
            website: "https://www.chefandresimao.pt"
          },
          specialOffer: {
            type: "Welcome Package",
            description: "Porto wine and traditional Algarve sweets"
          },
          rootFolder: "Chef André Simão",
          images: ["andresimao.jpg", "andresimao.jpg"]
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
          logo: "Autódromo_Internacional_Algarve_logo.png",
          description: "Localizada no Autódromo Internacional do Algarve em Portimão, oferece experiências de condução desportiva em carros de alta performance como Porsche, Mercedes entre outros. Com instrutores experientes e uma infraestrutura de excelência, proporciona uma imersão segura e emocionante no mundo do automobilismo",
          locationId: 1,
          rating: 5,
          type: "Racing Experience",
          openingHours: "09:00 - 18:00",
          address: "Autódromo Internacional do Algarve",
          phone: "+351 282 405 600",
          socialMedia: {
            facebook: "https://www.facebook.com/autodromoalgarve",
            instagram: "https://www.instagram.com/autodromoalgarve",
            website: "https://www.autodromodoalgarve.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.156789!3d37.098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "5%"
          },
          rootFolder: "Aia Racing School",
          images: ["295303780_10159273014723531_8030419394435337216_n.jpg", "racing-school.jpg", "AIA-Classe-A-AMG-9-scaled.jpg", "AIA-AMG-GT-Preto-27-scaled-e1744045842936.jpg", "Davanti-AIA-Racing-School.jpg"]
        },
        {
          id: 2,
          name: "Karting Portimão",
          email: "kia@parkalgar.com",
          logo: "Kartodromoalgarve.png",
          description: "O Kartódromo Internacional do Algarve, em Portimão, é uma das maiores pistas de kart da Europa, com 1,531 km de extensão. Oferece experiências para todas as idades, desde crianças até adultos, com karts adaptados às diferentes faixas etárias e níveis de experiência. Além de ser palco de competições oficiais e eventos privados, dispõe de infraestrutura completa, incluindo restaurante, boxes e lojas.",
          locationId: 1,
          rating: 5,
          type: "Karting",
          openingHours: "10:00 - 19:00",
          address: "Parkalgar, Portimão",
          phone: "+351 282 405 650",
          socialMedia: {
            facebook: "https://www.facebook.com/kartingportimao",
            instagram: "https://www.instagram.com/kartingportimao",
            website: "https://www.parkalgar.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.167890!3d37.102345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: ""
          },
          rootFolder: "Karting Portimão",
          images: ["39129269_2071071279603968_9122454272632422400_n.jpg", "Kartodromo2-scaled.jpg", "490851637_1218406543617808_2741633398730202739_n.jpg", "488211910_1210059391119190_5497740365812582147_n.jpg", "489446312_1210956781029451_2393478272773825535_n.jpg", "kartodromo6-pqchj12nib2vumiq0zqzcru0robuxlzilx7rhu5n6o.jpg"]
        },
        {
          id: 3,
          name: "Slide & Splash",
          email: "info@slidesplash.com",
          logo: "logo_slidesplash.png",
          description: "O Slide & Splash, em Lagoa, é um parque aquático familiar com diversas atrações para todas as idades. Além de escorregas emocionantes, oferece áreas infantis, zonas de relaxamento e espetáculos com animais. Ideal para um dia de diversão no Algarve.",
          locationId: 1,
          rating: 5,
          type: "Waterpark",
          openingHours: "10:00 - 17:00",
          address: "Vale de Deus, 8401-901 Estombar, Lagoa",
          phone: "+351 282 340 800",
          socialMedia: {
            facebook: "https://www.facebook.com/slidesplash",
            instagram: "https://www.instagram.com/slidesplash",
            website: "https://www.slidesplash.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.502345!3d37.143210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: ""
          },
          rootFolder: "Slide&Splash",
          images: ["atracoes39.jpg", "the-big-wave.jpg", "slide-splash-water-slide.jpg", "new-rides-2018.jpg", "slide-2020.jpg", "big-slides-tower.jpg", "black-hole.jpg", "Slide-Splash-Water-Park-Algarve-Portugal.jpg"]
        },
        {
          id: 4,
          name: "Family Golf Park",
          email: "info@familygolfpark.com",
          logo: "familygolfpark.png",
          description: "Experience the beauty of the Family Golf Park",
          locationId: 1,
          rating: 5,
          type: "Golf",
          openingHours: "09:00 - 18:00",
          address: "Family Golf Park",
          phone: "+351 282 912 345",
          socialMedia: {
            facebook: "https://www.facebook.com/familygolfpark",
            instagram: "https://www.instagram.com/familygolfpark",
            website: "https://www.familygolfpark.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.178901!3d37.112345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "10%"
          },
          rootFolder: "Family Golf Park",
          images: ["familygolfpark.jpg", "golf2.jpg"]
        }
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
          description: "A Quinta do Canhoto, em Albufeira, é uma referência em vinhos do Algarve, combinando tradição familiar com inovação, e oferece provas de vinhos e experiências únicas em enoturismo.",
          locationId: 3,
          rating: 5,
          type: "Winery Tours",
          openingHours: "09:00 - 18:00",
          address: "Quinta do Canhoto",
          phone: "+351 912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/quintadocanhoto",
            instagram: "https://www.instagram.com/quintadocanhoto",
            website: "https://www.quintadocanhoto.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.178901!3d37.112345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "15%"
          },
          rootFolder: "Quinta do Canhoto",
          images: ["almoco-vinico.jpg", "as-vinhas.jpg", "espaco-exterior.jpg", "provas-de-vinho.jpg", "o-deck-da-adega.jpg", "great-day-out-lovely.jpg"]
        },
        {
          id: 2,
          name: "Morgado do Quintão",
          email: "info@morgadodoquintao.pt",
          logo: "Morgado do quintao.png",
          description: "O Morgado do Quintão, em Lagoa, une tradição e sustentabilidade na produção de vinhos autênticos. Oferece provas e almoços vínicos, proporcionando uma experiência genuína e memorável no Algarve.",
          locationId: 4,
          rating: 5,
          type: "Winery Tours",
          openingHours: "10:00 - 19:00",
          address: "Morgado do Quintão",
          phone: "+351 282 912 345",
          socialMedia: {
            facebook: "https://www.facebook.com/morgadodoquintao",
            instagram: "https://www.instagram.com/morgadodoquintao",
            website: "https://www.morgadodoquintao.pt"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.189012!3d37.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "15%"
          },
          rootFolder: "Morgado do Quintão",
          images: ["a-beautiful-plate-to.jpg", "morgado-do-quintao.jpg", "there-is-nothing-like.jpg", "wine-tasting-in-an-old.jpg", "palhete-our-best-selling.jpg", "typical-carapaus-alimados.jpg"]
        },
        {
          id: 3,
          name: "Adega do Cantor",
          email: "info@adegadocantor.com",
          logo: "Adega do Cantor.png",
          description: "Experience the best of Algarve with Adega do Cantor's expert guided tours",
          locationId: 4,
          rating: 5,
          type: "Winery Tours",
          openingHours: "09:00 - 18:00",
          address: "Adega do Cantor",
          phone: "+351 282 912 345",
          socialMedia: {
            facebook: "https://www.facebook.com/adegadocantor",
            instagram: "https://www.instagram.com/adegadocantor",
            website: "https://www.adegadocantor.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.198765!3d37.134567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "5%"
          },
          rootFolder: "Adega do Cantor",
          images: ["adega-do-cantor.jpg", "adega-do-cantor-2.jpg", "adega-do-cantor-3.jpg", "adega-do-cantor-4.jpg", "adega-do-cantor-5.jpg", "adega-do-cantor-6.jpg", "adega-do-cantor-7.jpg"]
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
          description: "O 7 Seven Spa, no Hilton Vilamoura As Cascatas Golf Resort & Spa, oferece uma experiência de bem-estar com 14 salas de tratamento, circuito de hidroterapia, sauna, banho turco, jacuzzi e jardim zen. Ideal para relaxar e renovar energias.",
          locationId: 1,
          rating: 5,
          type: "Full Day Spa",
          openingHours: "09am - 18pm",
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/cleverdetails",
            instagram: "https://www.instagram.com/cleverdetails",
            website: "https://www.cleverdetails.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.198765!3d37.134567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Special Offer",
            description: "15% Off the Menu & Therapeutic Circuit for €35"
          },
          rootFolder: "7 Seven Spa Vilamoura",
          images: ["7-Seven-Spa_-scaled.jpg", "7Spa6.jpg", "7spa-02.jpg", "7spa-01.jpg", "FAO_70271_Hilton_Vilamoura_Golf_Resort_&_Spa_0623_07.jpg"]
        },
        {
          id: 2,
          name: "Duo Spa & Life Care",
          email: "info@duospa.com",
          logo: "DuoSpacare.png",
          description: "O Duo Spa & Life Care, no Cegonha Country Club em Vilamoura, oferece experiências de bem-estar com circuito de spa, sauna, banho turco e tratamentos como esfoliação ou Iyashi Dome, para momentos de relaxamento e rejuvenescimento.",
          locationId: 1,
          rating: 5,
          type: "Wellness",
          openingHours: "09:00 - 18:00",
          address: "Vilamoura",
          phone: "+351 282 000 000",
          socialMedia: {
            facebook: "https://www.facebook.com/duospa",
            instagram: "https://www.instagram.com/duospa",
            website: "https://www.duospa.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.123456!3d37.134567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Premium Package",
            description: "20% Off Premium Treatment; €5 Off Menu + 10min Neck/Head; Detox Circuit Access"
          },
          rootFolder: "Duo Spa & Life Care",
          images: ["474105319_527080770383605_5631574254499945256_n.jpg", "474381410_527080747050274_4179998407528808811_n.jpg", "479886329_544365938655088_6110947825713535078_n.jpg", "IMG_1721-1024x683.jpg", "piscina-interior-duo-spa-life-care-cegonha-country-club-quarteira-algarve_F.jpg"]
        },
        {
          id: 3,
          name: "DMed Clinic",
          email: "info@dmedclinic.com",
          logo: "DMed Clinic.png",
          description: "A DMed Clinic oferece serviços médicos ao domicílio em toda a região, incluindo consultas de Medicina Geral, Psicologia, Nutrição, Psiquiatria e Telemedicina, evitando deslocações desnecessárias.",
          locationId: 1,
          rating: 5,
          type: "Wellness",
          openingHours: "09:00 - 18:00",
          address: "DMed Clinic",
          phone: "+351 282 000 000",
          socialMedia: {
            facebook: "https://www.facebook.com/dmedclinic",
            instagram: "https://www.instagram.com/dmedclinic",
            website: "https://www.dmedclinic.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.123456!3d37.134567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          rootFolder: "DMed Clinic",
          images: ["dmed-clinic.jpg", "dmed-clinic-2.jpg", "dmed-clinic-3.jpg", "dmed-clinic-4.jpg", "dmed-clinic-5.jpg", "dmed-clinic-6.jpg", "dmed-clinic-7.jpg"]
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
          logo: "Teresa Estética.jpg",
          description: "Teresa é esteticista especializada em serviços como extensão de unhas (gel/acrílico), pedicure/manicure, depilações, extensões de pestanas e tratamentos faciais. Oferece também massagens de relaxamento, tratamentos corporais como cavitação e drenagem linfática, além de maquilhagem profissional. Com uma abordagem personalizada, Teresa proporciona cuidados que visam realçar a beleza e promover o bem-estar dos seus clientes.",
          locationId: 1,
          rating: 5,
          type: "Beauty Services",
          openingHours: "09:00 - 19:00",
          address: "Vilamoura",
          phone: "+351 282 000 000",
          socialMedia: {
            facebook: "https://www.facebook.com/teresaestetica",
            instagram: "https://www.instagram.com/teresaestetica",
            website: "https://www.teresaestetica.pt"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.123456!3d37.134567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "15%"
          },
          rootFolder: "Teresa Estética",
          images: ["480701348_4010568695930914_2910058108693305940_n.jpg", "491933473_4066849246969525_5195761018195095810_n.jpg", "492114092_4066954960292287_2649987048273042468_n.jpg", "492200895_4066850363636080_3484388594312717179_n.jpg", "277158294_3199246580396467_9054406006485547937_n.jpg"]
        },
        {
          id: 2,
          name: "Matilde",
          email: "teresa.estetica@live.com.pt",
          logo: "/images/logo/matilde.jpg",
          description: "Expert beauty and aesthetic treatments",
          locationId: 1,
          rating: 5,
          type: "Beauty Services",
          openingHours: "09:00 - 19:00",
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
    }
  ],
  locations: [
    {
      id: 0,
      name: "At Your Location",
      image: "/location0.jpg",
      description: "We come to you! Our services are available at your accommodation.",
    },
    {
      id: 1,
      name: "Vilamoura",
      image: "/location1.jpg",
      description: "Vilamoura is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 2,
      name: "Quarteira",
      image: "/location2.jpg",
      description: "Quarteira is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 3,
      name: "Lagoa",
      image: "/location3.jpg",
      description: "Lagoa is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 4,
      name: "São Brás de Alportel",
      image: "/location4.jpg",
      description: "São Brás de Alportel is a charming town in the Algarve, known for its traditional architecture and wine production.",
    }
  ]
}; 