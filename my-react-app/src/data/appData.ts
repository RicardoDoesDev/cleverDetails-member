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
          images: ["3e7042db-69f6-4f1f-b8b0-487e20a38ce7.jpeg", "discover-algarve-s-famous.jpg", "b8ce1f17-7758-47d7-9ad8-f4e8d68f6bc5.jpeg", "caption.jpg", "background5.jpg", "you-will-find-a-wonderful.jpg", "kerry-is-vilamoura-s.jpg", "cool.jpg", "cc5c2fdf-0363-4d44-a721-5c1e3dd2343d.jpeg", "caption (1).jpg", "caption (2).jpg", "c7a1cfb6-68cf-4491-b024-306646e95c5e.jpeg", "the-detailed-combinations.jpg", "each-plate-prepared-with.jpg", "caption.jpg", "ce86969e3cec4b7bb0d0cde9e123fa0c.webp"]
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
          images: ["sailing-tour.jpg", "featured-2-horas-fuseta.webp", "birdwatching.jpg", "sealife-observation.jpg", "dolphins-observation.jpg", "DJI_20240427_200812_220.webp", "dji_fly_20240425_145136_206_1714164247660_timed.webp"]
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
          images: ["dolphin-watching-boat.jpg", "formosamar-sailboats-ria-formosa-island.jpg", "ria-formosa-islands-boat.jpg", "ilha-deserta-and-farol.jpg", "guided-boat-trip-in-ria.jpg", "formosamar-private-tour-cruise-ria-formosa-900x500.jpg", "formosamar.jpg", "formosamar (1).jpg", "formosamar (2).jpg"]
        },
        {
          id: 4,
          name: "AlgarExperience",
          email: "info@algarexperience.com",
          type: "Boat Tours",
          description: "A AlgarExperience é líder em turismo marítimo no Algarve, oferecendo experiências únicas como passeios às grutas de Benagil, observação de golfinhos, parasailing e churrascos na praia. Com uma frota moderna e uma equipa dedicada, proporciona momentos inesquecíveis no mar.",
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
          images: ["caves-coastline-tour.jpg", "dolphin-caves-catamaran.jpg", "gruta-de-benagil.jpg", "sunset.jpg", "grutas.jpg", "vista-aerea.jpg", "barbecue-na-praia.jpg", "parasailing.jpg", "belize-segundo-costa.jpg", "boat-party.jpg"]
        },
        {
          id: 5,
          name: "Condor de Vilamoura",
          email: "info@condorvilamoura.com",
          type: "Hotel",
          description: "Descubra a costa algarvia a bordo do majestoso Condor de Vilamoura, um veleiro de 34 metros inspirado nas escunas americanas do século XIX. Com capacidade para até 120 passageiros, oferece cruzeiros de 3 horas até à Praia da Galé e passeios de dia inteiro até Benagil, com paragens para nadar, explorar grutas e desfrutar de um delicioso churrasco na praia. Uma experiência única para toda a família, combinando conforto, tradição e paisagens deslumbrantes.",
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
          rootFolder: "condor vilamoura",
          images: ["photo0jpg.jpg", "caption (1).jpg", "vamos-para-a-praia.jpg", "caption (2).jpg", "caption.jpg", "21d228_8a694355938d49048feaba57ef829db2~mv2-1.avif", "condor-de-vilamoura (1).jpg", "condor-de-vilamoura.jpg", "21d228_28814368cb5446c1b0a8d17d8459fd48~mv2.avif", "21d228_8a694355938d49048feaba57ef829db2~mv2.avif"]
        },
        {
          id: 6,
          name: "Ocean Quest",
          email: "info@oceanquest.com",
          type: "Boat Tours",
          description: "Explora o melhor da costa algarvia com a Ocean Quest. Passeios de barco, grutas, golfinhos e parasailing desde Vilamoura, com uma equipa apaixonada por proporcionar experiências únicas no mar. Porque a vida é bela.",
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
          rootFolder: "ocean quest",
          images: ["see-the-wonderful-algarvian.jpg", "swimming-stop.jpg", "traditional-cultural (1).jpg", "vilamoura-yacht-charter.jpg", "vilamoura-speed-boat-trips.jpeg", "cesar-live-on-the-guitar.jpg", "traditional-cultural.jpg", "life-is-beautiful.jpg", "exceptional-view.jpg", "dolphin-quest.jpg"]
        },
        {
          id: 7,
          name: "Vilamoura Water Sports Centre",
          email: "info@vilamourawatersportscentre.com",
          type: "Water Sports",
          description: "Situado na Marina de Vilamoura, o Vilamoura Watersports Centre oferece uma vasta gama de atividades aquáticas para todas as idades. Desde passeios de barco às grutas de Benagil, observação de golfinhos, parasailing, jet ski, wakeboard, pesca e aluguer de barcos privados, há opções para todos os gostos. Com uma equipa experiente e equipamentos de qualidade, garantem segurança e diversão em todas as experiências. Aberto diariamente, é o local perfeito para explorar a costa algarvia de uma forma única.",
          locationId: 2,
          rating: 5,
          logo: "Vilamoura-Watersports-Centre-logo-Design-01-e1602070771419.webp",
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
          images: ["borrego-feijao-bago-de.jpg", "rooftop-tavira.webp", "chefe-luis-brito.jpg", "cavala-marinada-e-gaspacho.jpg", "peixe-de-linha.jpg", "carabineiro-caril-couve.jpg", "the-detailed-combinations.jpg", "each-plate-prepared-with.jpg", "caption.jpg", "ce86969e3cec4b7bb0d0cde9e123fa0c.webp"]
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
          images: ["4d07f2e9-70b3-4b8b-a1e1-91fe37279165.avif", "c4bd01b2-7c29-405a-94d6-b566a0328e36.avif", "5e949c5e-060e-457b-ad67-b7597677c446.avif", "ff05a4b6-f867-4243-9e4b-7141f87220af.avif", "44cf2c78-1fec-4650-9ed2-eedaf4708a25.avif", "44aa29bd-0300-47b5-9ba5-83d8b8b19bd1.avif", "f818d5b4-5d61-4cc5-b0eb-e90fd92ac501.avif", "83dcbf96-9726-4f1b-a1c7-c13c5f223b98.avif", "843ccb2d-bf51-4c6a-bf0d-24ab6463b44c.avif", "036d2880-7465-460b-9c18-61260a3de321.avif"]
        },
        {
          id: 3,
          name: "CafeZique",
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
          images: ["0c8e01ad-d9ca-4b18-af60-26a700b19e31.avif", "b7455fd9-1912-4dc4-9d75-b6e3c18c21e1.avif", "c10b8475-9033-4f81-96a7-89723f3537a6.avif", "562a5999-384a-4fcf-876a-191a283c4417.avif", "1fc2a2ef-0625-4d3c-a43b-538301aad3c4.avif", "eb5af52c-c6c9-411a-87ba-578fa3de1e3f.avif", "47a07484-d88c-447f-91ed-4c7bf0a542c3.avif", "d59e735d-141e-4359-b024-3352c31e5b83.avif", "cff64c57-1e91-4133-a445-f033ab8f5838.avif", "98b3ee01-5726-41de-93f9-23ce6da1c1b7.avif"]
        },
        {
          id: 4,
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
          images: ["crepes-also-served-with.jpg", "gran-gelato.jpg", "gran-sorvete-in-the-heart.jpg", "in-the-heart-of-the-vilamoura.jpg", "our-delicious-mini-pancakes.jpg", "hot-chocolate-served.jpg", "enjoy-the-delicious-combinatio.jpg", "gran-gelato (1).jpg"]
        },
        {
          id: 5,
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
          rootFolder: "KartingPortimao",
          images: ["39129269_2071071279603968_9122454272632422400_n.jpg", "Kartodromo2-scaled.jpg", "490851637_1218406543617808_2741633398730202739_n.jpg", "488211910_1210059391119190_5497740365812582147_n.jpg", "489446312_1210956781029451_2393478272773825535_n.jpg", "kartodromo6-pqchj12nib2vumiq0zqzcru0robuxlzilx7rhu5n6o.jpg", "kartodromo3-pqchj12nib2vumiq0zqzcru0robuxlzilx7rhu5n6o.jpg", "490229418_1218688256922970_8436650453256995830_n.jpg", "IMG_2422.jpg"]
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
          images: ["Slide-Splash-Torre-sector-4-e-aereas_3-e1679392334545.webp", "atracoes31.jpg", "Slide-Splash-Water-Park-Algarve-Portugal.jpg", "atracoes39.jpg", "slide-splash-water-slide.jpg", "new-ride-2018-disco-river.jpg", "new-rides-2018.jpg", "black-hole.jpg", "slide-splash-2019 (1).jpg", "the-big-wave.jpg", "big-slides-tower.jpg", "slide-splash-2019.jpg", "slide-2020.jpg"]
        },
        {
          id: 4,
          name: "Family Golf Park",
          email: "info@familygolfpark.com",
          logo: "familygolfpark.png",
          description: "Situado no coração de Vilamoura, o Family Golf Park é um destino imperdível para famílias e grupos que procuram diversão e lazer. Com dois percursos de mini golfe temáticos inspirados na Roma Antiga, o Via Áppia e o Via Lusitânia, o parque oferece uma experiência única em meio a jardins exuberantes e arquitetura romana. Além disso, dispõe de uma área de jogos para crianças, sala de jogos, snack-bar com esplanada e até um comboio turístico que percorre os principais pontos de Vilamoura. Aberto diariamente, o Family Golf Park é perfeito para um dia de diversão em família.",
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
          images: ["Family-Golf-Park_2.webp", "vulcanos.jpg", "relaxing-and-clever-minigolf.jpg", "family-golf-park-gallery-05-min.jpg", "welcome-to-the-best-europe.jpg", "lisbon-bridge.jpg", "family-golf-park.jpg", "1st-hole.jpg", "family-golf-park-gallery-10-min.jpg", "2sd-hole.jpg", "Legionario_2.webp", "Looping-Crazygolfe_2.webp"]
        },
        {
          id: 5,
          name: "Zoomarine",
          email: "info@zoomarine.pt",
          logo: "zoomarine.png",
          description: "O Zoomarine, localizado perto de Albufeira, é um parque temático que combina diversão, educação e natureza. Com espetáculos de golfinhos, leões-marinhos, aves tropicais, escorregas aquáticos e uma praia artificial, é perfeito para um dia inesquecível em família. Uma aventura mágica no coração do Algarve!",
          locationId: 3,
          rating: 5,
          type: "Theme Park",
          openingHours: "10:00 - 19:00",
          address: "EN 125, Km 65, 8201-864 Guia, Albufeira",
          phone: "+351 289 560 300",
          socialMedia: {
            facebook: "https://www.facebook.com/zoomarinealgarve",
            instagram: "https://www.instagram.com/zoomarinealgarve",
            website: "https://www.zoomarine.pt"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.312345!3d37.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "10% off tickets"
          },
          rootFolder: "Zoomarine",
          images: ["145.jpg", "145 (1).jpg", "145 (2).jpg", "145 (3).jpg", "145 (4).jpg", "145 (5).jpg", "145 (6).jpg", "145 (7).jpg", "145 (8).jpg", "145 (9).jpg", "145 (10).jpg", "image_processing20240617-9-uc4gqx.jpg", "Zoomarine_2.jpg", "zoomarine.jpg"]
        },
        {
          id: 6,
          name: "Slide & Splash",
          email: "info@slideandsplash.com",
          logo: "slideandsplash.png",
          description: "Slide & Splash é um parque aquático que oferece uma experiência única com piscinas, slides e atrações aquáticas. É um local ideal para relaxar e desfrutar de uma tarde de diversão.",
          locationId: 3,
          rating: 5,
          type: "Theme Park",
          openingHours: "10:00 - 19:00",
          address: "Slide & Splash",
          phone: "+351 289 560 300",
          socialMedia: {
            facebook: "https://www.facebook.com/slideandsplash",
            instagram: "https://www.instagram.com/slideandsplash",
            website: "https://www.slideandsplash.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.312345!3d37.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "10% off tickets"
          },
          rootFolder: "Slide&Splash",
          images: ["Slide-Splash-Torre-sector-4-e-aereas_3-e1679392334545.webp", "atracoes31.jpg", "Slide-Splash-Water-Park-Algarve-Portugal.jpg", "atracoes39.jpg", "slide-splash-water-slide.jpg", "new-ride-2018-disco-river.jpg", "new-rides-2018.jpg", "black-hole.jpg", "slide-splash-2019 (1).jpg", "the-big-wave.jpg", "big-slides-tower.jpg", "slide-splash-2019.jpg", "slide-2020.jpg"]
        },

        //add Algarve Riders
        {
          id: 7,
          name: "Algarve Riders",
          email: "info@algarveriders.com",
          logo: "algarveriders.png",
          description: "Algarve Riders é uma empresa de aluguer de motos que oferece uma experiência única com motos de alta performance. É um local ideal para desfrutar de uma tarde de diversão.",
          locationId: 3,
          rating: 5,
          type: "Theme Park",
          openingHours: "10:00 - 19:00",
          address: "Algarve Riders",
          phone: "+351 289 560 300",
          socialMedia: {
            facebook: "https://www.facebook.com/algarveriders",
            instagram: "https://www.instagram.com/algarveriders",
            website: "https://www.algarveriders.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.312345!3d37.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "10% off tickets"
          },
          rootFolder: "Algarve Riders",
          images: ["algarve-riders-available.jpg", "algarve-riders-off-road (7).jpg", "algarve-riders-off-road (6).jpg", "algarve-riders-off-road (5).jpg", "algarve-riders-off-road (4).jpg", "algarve-riders-off-road (3).jpg", "algarve-riders-off-road (2).jpg", "algarve-riders-off-road (1).jpg", "algarve-quad-tours-fun.jpg", "team-building-buggy-tour.jpg", "algarve-riders-off-road.jpg"]
        },
        //add aquashow
        {
          id: 8,
          name: "Aquashow",
          email: "info@aquashow.com",
          logo: "aquashow.png",
          description: "O Aquashow Outdoor é o maior parque aquático ao ar livre de Portugal, situado no coração do Algarve. Com escorregas gigantes, piscina de ondas, atrações para todas as idades e muita animação, é o local ideal para um dia de verão cheio de diversão, adrenalina e memórias em família ou entre amigos.",
          locationId: 3,
          rating: 5,
          type: "Theme Park",
          openingHours: "10:00 - 19:00",
          address: "Aquashow",
          phone: "+351 289 560 300",
          socialMedia: {
            facebook: "https://www.facebook.com/aquashow",
            instagram: "https://www.instagram.com/aquashow",
            website: "https://www.aquashow.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.312345!3d37.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Discount",
            description: "10% off tickets"
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
          images: ["almoco-vinico.jpg", "as-vinhas.jpg", "espaco-exterior.jpg", "provas-de-vinho.jpg", "o-deck-da-adega.jpg", "great-day-out-lovely.jpg", "caption.jpg", "great-day-out-lovely (1).jpg", "great-day-out-lovely (2).jpg"]
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
          images: ["a-beautiful-plate-to.jpg", "morgado-do-quintao.jpg", "there-is-nothing-like.jpg", "wine-tasting-in-an-old.jpg", "palhete-our-best-selling.jpg", "typical-carapaus-alimados.jpg", "photo0jpg.jpg", "caption.jpg", "palhete-our-best-selling (1).jpg"]
        },
        {
          id: 3,
          name: "Adega do Cantor",
          email: "info@adegadocantor.com",
          logo: "Adega do Cantor.png",
          description: "Descubra os sabores do Algarve na Adega do Cantor, em Albufeira. Visite as vinhas, conheça o processo de produção e prove vinhos premiados numa experiência única de enoturismo. Uma paragem obrigatória para amantes de vinho e da natureza.",
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
          images: ["7-Seven-Spa_-scaled.jpg", "7Spa6.jpg", "7spa-02.jpg", "7spa-01.jpg", "FAO_70271_Hilton_Vilamoura_Golf_Resort_&_Spa_0623_07.jpg", "7-seven-spa-hilton-vilamoura-bem-estar-algarve_F.webp", "faohi-spa19-hilton-vilamoura.avif", "faohi-spa25-hilton-vilamoura.avif", "faohi-spa28-hilton-vilamoura.avif", "faohi-spa11-hilton-vilamoura.avif", "faohi-spa21-hilton-vilamoura.avif"]
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
          rootFolder: "Teresa",
          images: ["480701348_4010568695930914_2910058108693305940_n.jpg", "491933473_4066849246969525_5195761018195095810_n.jpg", "492114092_4066954960292287_2649987048273042468_n.jpg", "492200895_4066850363636080_3484388594312717179_n.jpg", "277158294_3199246580396467_9054406006485547937_n.jpg", "489830761_1237845965017546_3086407899245374858_n.jpg"]
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
          phone: "9251500",
          type: "Personal Chef",
          description: "Chef executivo de cozinha do Monte Rei onde se encontra o restaurante recomendado pelo guia Michelin, Vistas Monte Rei. Proporciona estilos de cozinha descontraídos, para juntar amigos e familia à mesa com menus de tapas & drinks, barbecue, menu algarvio ou menu de degustação em 5 momentos para celebrações mais pormenorizadas.",
          locationId: 7,
          rating: 5,
          logo: "ChefAndréSimao.jpg",
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
          rootFolder: "ChefAndreSimao",
          images: ["Captura de ecrã 2025-05-30, às 14.00.44.png", "Captura de ecrã 2025-05-30, às 14.01.45.png", "Captura de ecrã 2025-05-30, às 14.01.52.png", "Captura de ecrã 2025-05-30, às 14.01.18.png", "Captura de ecrã 2025-05-30, às 14.01.05.png", "Captura de ecrã 2025-05-30, às 14.02.12.png", "Captura de ecrã 2025-05-30, às 14.02.29.png", "Captura de ecrã 2025-05-30, às 14.00.58.png"]
        },
        {
          id: 2,
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
          images: ["rs=w_700,cg_true,m.webp", "rs=w_800,cg_true,m.webp", "rs=w_612,cg_true,m.webp", "rs=w_1200,cg_true,m (2).webp", "rs=w_1200,cg_true,m (3).webp", "rs=w_1200,cg_true,m.webp", "rs=w_1200,cg_true,m (1).webp"]
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