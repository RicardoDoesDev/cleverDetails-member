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
          logo: "/images/logo/cool-charters.jpg",
          description: "Experience luxury boat tours along the stunning Algarve coast with Cool Charters Vilamoura",
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
            type: "Commission & Discount",
            description: "15% Comissão = 10%com + 5%Desconto"
          },
          rootFolder: "Cool Charters",
          images: ["3e7042db-69f6-4f1f-b8b0-487e20a38ce7.jpeg", "boat2.jpg"]
        },
        {
          id: 2,
          name: "Passeios Ria Formosa",
          email: "reservas@passeios-ria-formosa.com",
          logo: "/images/logo/ria-formosa.jpg",
          description: "Discover the natural beauty of Ria Formosa with our guided boat tours",
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
            type: "Commission",
            description: "15% Comissão"
          },
          rootFolder: "Passeios Ria Formosa",
          images: ["BarcoCasa_BarraVelha.webp", "boat2.jpg"]
        },
        {
          id: 3,
          name: "Formosamar",
          email: "info@formosamar.com",
          logo: "/images/logo/formosamar.jpg",
          description: "Experience the best of Ria Formosa with Formosamar's expert guided tours",
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
            type: "Commission & Discount",
            description: "15% Comissão = 10%com + 5%Desconto"
          },
          rootFolder: "Formosamar",
          images: ["dolphin-watching-boat.jpg", "boat2.jpg"]
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
          description: "Fine dining experience with a focus on local cuisine",
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
            description: "Copo de champanhe à chegada"
          },
          rootFolder: "A ver Tavira",
          images: ["borrego-feijao-bago-de.jpg", "avertavira.jpg"]
        },
        {
          id: 2,
          name: "Authentic",
          email: "reservations@authentic-restaurant.pt",
          type: "Fine Dining",
          description: "Authentic Portuguese dining experience",
          locationId: 2,
          rating: 5,
          logo: "authentic.jpg",
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
            type: "Discount & Drink",
            description: "Welcome drink e 5% de desconto no jantar"
          },
          rootFolder: "Authentic",
          images: ["4d07f2e9-70b3-4b8b-a1e1-91fe37279165.avif", "authentic.jpg"]
        },
        {
          id: 3,
          name: "CaféZique",
          email: "cafeziquept@gmail.com",
          type: "Fine Dining",
          description: "Modern Portuguese cuisine in an elegant setting",
          locationId: 3,
          rating: 5,
          logo: "cafezique.jpg",
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
            description: "Copo de espumante"
          },
          rootFolder: "CaféZique",
          images: ["0c8e01ad-d9ca-4b18-af60-26a700b19e31.avif", "cafezique.jpg"]
        },
        {
          id: 4,
          name: "Fancy Kitchen Algarve",
          email: "info@fancykitchenalgarve.com",
          type: "Personal Chef",
          description: "Exclusive personal chef service for private dining",
          locationId: 4,
          rating: 5,
          logo: "fancykitchen.jpg",
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
            description: "Oferta de copo de espumante e 2 canapés por pessoa"
          },
          rootFolder: "Fancy Kitchen",
          images: ["image1.webp", "image2.webp"]
        },
        {
          id: 5,
          name: "Gran Sorvete",
          email: "info@gransorvete.com",
          type: "Brunch Café",
          description: "Casual brunch and café experience",
          locationId: 5,
          rating: 4,
          logo: "gransorvete.jpg",
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
            description: "10% Desconto"
          },
          rootFolder: "Gran Sorvete",
          images: ["crepes-also-served-with.jpg", "gransorvete.jpg"]
        },
        {
          id: 6,
          name: "Retinto - Rodízio & Wine",
          email: "retinto.vilamoura@gmail.com",
          type: "Steakhouse",
          description: "Premium steakhouse and wine experience",
          locationId: 6,
          rating: 5,
          logo: "retinto.jpg",
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
            description: "Welcome Drink de espumante"
          },
          rootFolder: "Retinto - Rodízio & Wine",
          images: ["5c594138-f690-4ea1-add1-3fce2e15ef55.avif", "retinto.jpg"]
        },
        {
          id: 7,
          name: "Chef André Simão",
          email: "asimao2@hotmail.com",
          phone: "9251500",
          type: "Personal Chef",
          description: "Exclusive personal chef service with regional specialties",
          locationId: 7,
          rating: 5,
          logo: "andresimao.jpg",
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
            description: "Garrafa de porto e doces regionais algarvios"
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
          logo: "/images/logo/aia-racing.jpg",
          description: "Experience the thrill of professional racing at the Algarve International Circuit",
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
            type: "Commission",
            description: "15% Comissão"
          },
          rootFolder: "Aia Racing School",
          images: ["295303780_10159273014723531_8030419394435337216_n.jpg", "racing2.jpg"]
        },
        {
          id: 2,
          name: "Karting Portimão",
          email: "kia@parkalgar.com",
          logo: "/images/logo/karting-portimao.jpg",
          description: "Experience the excitement of karting at one of Europe's finest tracks",
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
            type: "Commission",
            description: "15% Comissão"
          },
          rootFolder: "Karting Portimão",
          images: ["39129269_2071071279603968_9122454272632422400_n.jpg", "karting2.jpg"]
        },
        {
          id: 3,
          name: "Slide & Splash",
          email: "info@slidesplash.com",
          logo: "/images/logo/slide-splash.jpg",
          description: "Experience thrilling water attractions at one of Algarve's premier waterparks",
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
            type: "Commission",
            description: "25% Comissão"
          },
          rootFolder: "Slide&Splash",
          images: ["atracoes39.jpg", "waterpark2.jpg"]
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
          logo: "/images/logo/quinta-do-canhoto.jpg",
          description: "Experience the authentic wine tasting experience at Quinta do Canhoto",
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
            description: "15% desconto na entrada"
          },
          rootFolder: "Quinta do Canhoto",
          images: ["almoco-vinico.jpg", "winery2.jpg"]
        },
        {
          id: 2,
          name: "Morgado do Quintão",
          email: "info@morgadodoquintao.pt",
          logo: "/images/logo/morgado-do-quintao.jpg",
          description: "Visit the historic Morgado do Quintão winery and enjoy our premium wine selection",
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
            description: "15% desconto ao valor total da reserva"
          },
          rootFolder: "Morgado do Quintão",
          images: ["a-beautiful-plate-to.jpg", "winery2.jpg"]
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
          logo: "/wellness1.jpg",
          description: "Indulge in a full day of relaxation with our luxury spa treatments. Includes massage, facial, and access to all spa facilities.",
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
            description: "10% OFF"
          },
          rootFolder: "7 Seven Spa Vilamoura",
          images: ["7-Seven-Spa_-scaled.jpg", "wellness1.jpg"]
        },
        {
          id: 2,
          name: "Duo Spa & Life Care",
          email: "info@duospa.com",
          logo: "/images/logo/duo-spa.jpg",
          description: "Premium wellness and spa treatments with personalized care",
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
            description: "20% desconto de Tratamento Premium - 5€ desconto Menu + Add ON 10min pescoço e cabeça - OFERTA - acesso ao Circuito Detox"
          },
          rootFolder: "Duo Spa & Life Care",
          images: ["474105319_527080770383605_5631574254499945256_n.jpg", "spa2.jpg"]
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
          logo: "/images/logo/teresa.jpg",
          description: "Professional beauty treatments and skincare services",
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
            description: "15% desconto"
          },
          rootFolder: "Teresa Estética",
          images: ["480701348_4010568695930914_2910058108693305940_n.jpg", "beauty2.jpg"]
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
          specialOffer: {
            type: "Discount",
            description: "15% desconto"
          },
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