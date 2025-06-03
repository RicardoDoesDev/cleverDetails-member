import { AppData } from '../types/index';

export const appDataPT: AppData = {
  categories: [
    {
      id: "boat-tours",
      title: "Passeios de Barco",
      route: "/boat-tours",
      description: "Explore a costa do Algarve com os nossos passeios de barco de luxo",
      image: "ai-generated-boat-picture.jpg",
      items: [
        {
          id: 1,
          name: "Cool Charters",
          email: "info@coolchartersvilamoura.com",
          logo: "Cool-Charters-BSQUAREwhite.png",
          type: "Passeios de Barco",
          description: "Oferece experiências náuticas personalizadas, ideais para ocasiões especiais como aniversários, despedidas de solteiro(a), casamentos ou eventos corporativos. Os passeios incluem visitas a grutas, praias isoladas e observação de golfinhos, além de atividades aquáticas como jet ski. A equipa dedicada assegura um serviço de excelência, criando memórias inesquecíveis no mar.",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Segunda", hours: "09:00 - 00:00" },
            { day: "Terça", hours: "09:00 - 00:00" },
            { day: "Quarta", hours: "09:00 - 00:00" },
            { day: "Quinta", hours: "09:00 - 00:00" },
            { day: "Sexta", hours: "09:00 - 00:00" },
            { day: "Sábado", hours: "09:00 - 00:00" },
            { day: "Domingo", hours: "09:00 - 00:00" }
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
            type: "Desconto",
            description: "5% DE DESCONTO"
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
          type: "Passeios de Barco",
          description: "Descubra a beleza natural da Ria Formosa com nossos passeios guiados. Observe aves marinhas, descubra ilhas desertas e aprenda sobre o ecossistema único desta área protegida. Passeios disponíveis para grupos pequenos e grandes, com guias experientes e conhecedores.",
          locationIds: [0],
          rating: 4.8,
          openingHours: [
            { day: "Segunda", hours: "09:00 - 18:00" },
            { day: "Terça", hours: "09:00 - 18:00" },
            { day: "Quarta", hours: "09:00 - 18:00" },
            { day: "Quinta", hours: "09:00 - 18:00" },
            { day: "Sexta", hours: "09:00 - 18:00" },
            { day: "Sábado", hours: "09:00 - 18:00" },
            { day: "Domingo", hours: "09:00 - 18:00" }
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
            type: "Desconto",
            description: "10% DE DESCONTO EM GRUPOS"
          },
          rootFolder: "Passeios Ria Formosa",
          images: ["sailing-tour.jpg", "featured-2-horas-fuseta.webp", "birdwatching.jpg", "sealife-observation.jpg", "dolphins-observation.jpg", "DJI_20240427_200812_220.webp", "dji_fly_20240425_145136_206_1714164247660_timed.webp"]
        }
      ]
    },
    {
      id: "gastronomy",
      title: "Gastronomia",
      route: "/gastronomy",
      description: "Experimente a excelente culinária em restaurantes selecionados",
      image: "pexels-pixabay-262978.jpg",
      items: [
        {
          id: 1,
          name: "A ver Tavira",
          email: "restaurante@avertavira.pt",
          logo: "AverTavira.png",
          type: "Restaurante Gourmet",
          description: "O restaurante A Ver Tavira, galardoado com uma estrela Michelin, oferece uma experiência gastronómica única no coração histórico de Tavira, com sabores algarvios e uma vista deslumbrante. Sob o comando do chef Luís Brito, junta tradição e criatividade num menu inovador.",
          locationIds: [0],
          rating: 5,
          openingHours: [
            { day: "Segunda", hours: "Fechado" },
            { day: "Terça", hours: "18:30 - 21:30" },
            { day: "Quarta", hours: "12:00 - 14:30, 18:30 - 21:30" },
            { day: "Quinta", hours: "12:00 - 14:30, 18:30 - 21:30" },
            { day: "Sexta", hours: "12:00 - 14:30, 18:30 - 21:30" },
            { day: "Sábado", hours: "12:00 - 14:30, 18:30 - 21:30" },
            { day: "Domingo", hours: "Fechado" }
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
            type: "Bebida de Boas-vindas",
            description: "Taça de Champanhe de Boas-vindas"
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
          type: "Restaurante Gourmet",
          description: "O restaurante Authentic, localizado na Quinta do Lago, oferece uma experiência gastronómica sofisticada, combinando cozinha clássica portuguesa com um toque contemporâneo, num ambiente de luxo e requinte.",
          locationIds: [1],
          rating: 5,
          openingHours: [
            { day: "Segunda", hours: "Fechado" },
            { day: "Terça", hours: "Fechado" },
            { day: "Quarta", hours: "18:00 - 23:00" },
            { day: "Quinta", hours: "18:00 - 23:00" },
            { day: "Sexta", hours: "18:00 - 23:00" },
            { day: "Sábado", hours: "18:00 - 23:00" },
            { day: "Domingo", hours: "18:00 - 23:00" }
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
            type: "Menu Degustação",
            description: "Menu Degustação com 5 Pratos"
          },
          rootFolder: "Authentic",
          images: ["83dcbf96-9726-4f1b-a1c7-c13c5f223b98.avif", "5e949c5e-060e-457b-ad67-b7597677c446.avif", "44aa29bd-0300-47b5-9ba5-83d8b8b19bd1.avif", "4d07f2e9-70b3-4b8b-a1e1-91fe37279165.avif", "843ccb2d-bf51-4c6a-bf0d-24ab6463b44c.avif", "ff05a4b6-f867-4243-9e4b-7141f87220af.avif", "c4bd01b2-7c29-405a-94d6-b566a0328e36.avif", "44cf2c78-1fec-4650-9ed2-eedaf4708a25.avif", "036d2880-7465-460b-9c18-61260a3de321.avif", "f818d5b4-5d61-4cc5-b0eb-e90fd92ac501.avif"]
        }
      ]
    },
    {
      id: "activities",
      title: "Atividades",
      route: "/activities",
      description: "Desfrute de acesso exclusivo a atividades premium",
      image: "card_slides.jpg",
      items: [
        {
          id: 1,
          name: "Aia Racing School",
          email: "racingschool@autodromodoalgarve.com",
          logo: "Autódromo_Internacional_Algarve_logo.png",
          type: "Experiência de Corrida",
          description: "Situada no Autódromo Internacional do Algarve em Portimão, oferece experiências de condução desportiva em carros de alta performance como Porsche, Mercedes e outros. Com instrutores experientes e infraestrutura de excelência, proporciona uma imersão segura e emocionante no mundo do automobilismo.",
          locationIds: [6],
          rating: 5,
          openingHours: [
            { day: "Segunda", hours: "09:00 - 18:00 Sob Marcação" },
            { day: "Terça", hours: "09:00 - 18:00 Sob Marcação" },
            { day: "Quarta", hours: "09:00 - 18:00 Sob Marcação" },
            { day: "Quinta", hours: "09:00 - 18:00 Sob Marcação" },
            { day: "Sexta", hours: "09:00 - 18:00 Sob Marcação" },
            { day: "Sábado", hours: "09:00 - 18:00 Sob Marcação" },
            { day: "Domingo", hours: "09:00 - 18:00 Sob Marcação" }
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
            type: "Desconto",
            description: "10% DE DESCONTO"
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
          type: "Parque Aquático",
          description: "O Slide & Splash, em Lagoa, é um parque aquático familiar com diversas atrações para todas as idades. Além dos escorregas emocionantes, oferece áreas infantis, espaços de relaxamento e shows com animais. Ideal para um dia de diversão no Algarve.\n\nHorários Sazonais:\n- Junho: 10:00 - 17:30\n- 1 Julho a 12 Setembro: 10:00 - 18:00\n- 13 Setembro a 31 Outubro: 10:00 - 17:00",
          locationIds: [7],
          rating: 5,
          openingHours: [
            { day: "Segunda", hours: "10:00 - 18:00 (horários variam conforme a época)" },
            { day: "Terça", hours: "10:00 - 18:00 (horários variam conforme a época)" },
            { day: "Quarta", hours: "10:00 - 18:00 (horários variam conforme a época)" },
            { day: "Quinta", hours: "10:00 - 18:00 (horários variam conforme a época)" },
            { day: "Sexta", hours: "10:00 - 18:00 (horários variam conforme a época)" },
            { day: "Sábado", hours: "10:00 - 18:00 (horários variam conforme a época)" },
            { day: "Domingo", hours: "10:00 - 18:00 (horários variam conforme a época)" }
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
            type: "Desconto",
            description: "15% DE DESCONTO"
          },
          rootFolder: "Slide&Splash",
          images: ["Slide-Splash-Torre-sector-4-e-aereas_3-e1679392334545.webp", "atracoes31.jpg", "Slide-Splash-Water-Park-Algarve-Portugal.jpg", "atracoes39.jpg", "slide-splash-water-slide.jpg", "new-ride-2018-disco-river.jpg", "new-rides-2018.jpg", "black-hole.jpg", "slide-splash-2019 (1).jpg", "the-big-wave.jpg", "big-slides-tower.jpg", "slide-splash-2019.jpg", "slide-2020.jpg"]
        }
      ]
    },
    {
      id: "winery-tours",
      title: "Visitas às Adegas",
      route: "/winery-tours",
      description: "Descubra os melhores vinhos da região",
      image: "vertical-shot-person-holding-glass-wine-vineyard-sunlight.jpg",
      items: [
        {
          id: 1,
          name: "Quinta do Canhoto",
          email: "info@quintadocanhoto.com",
          logo: "LOGO_QDC_WHITE_NEW.png",
          type: "Visitas às Adegas",
          description: "A Quinta do Canhoto, em Albufeira, é uma referência em vinhos do Algarve, combinando tradição familiar com inovação, e oferece provas de vinhos e experiências únicas em enoturismo. As visitas devem ser previamente marcadas com 24h de antecedência.",
          locationIds: [4],
          rating: 5,
          openingHours: [
            { day: "Segunda", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Terça", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Quarta", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Quinta", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Sexta", hours: "11:00 - 13:00, 14:30 - 18:30" },
            { day: "Sábado", hours: "Fechado" },
            { day: "Domingo", hours: "Fechado" }
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
            type: "Desconto",
            description: "15% DE DESCONTO"
          },
          rootFolder: "Quinta do Canhoto",
          images: ["almoco-vinico.jpg", "as-vinhas.jpg", "espaco-exterior.jpg", "provas-de-vinho.jpg", "o-deck-da-adega.jpg", "great-day-out-lovely.jpg", "caption.jpg", "great-day-out-lovely (1).jpg", "great-day-out-lovely (2).jpg"]
        },
        {
          id: 2,
          name: "Adega do Cantor",
          email: "info@adegadocantor.com",
          logo: "adega-do-cantor.png",
          type: "Visitas às Adegas",
          description: "A Adega do Cantor, propriedade do famoso cantor Sir Cliff Richard, produz vinhos premiados como o Vida Nova. Oferece visitas guiadas às vinhas e adega, com provas de vinho e experiências gastronómicas únicas.",
          locationIds: [4],
          rating: 5,
          openingHours: [
            { day: "Segunda", hours: "10:00 - 17:00" },
            { day: "Terça", hours: "10:00 - 17:00" },
            { day: "Quarta", hours: "10:00 - 17:00" },
            { day: "Quinta", hours: "10:00 - 17:00" },
            { day: "Sexta", hours: "10:00 - 17:00" },
            { day: "Sábado", hours: "Fechado" },
            { day: "Domingo", hours: "Fechado" }
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
            type: "Experiência Premium",
            description: "Visita Guiada + Prova de Vinhos Premium"
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
      title: "Bem-estar",
      route: "/wellness",
      description: "Relaxe e rejuvenesça com os nossos parceiros de bem-estar",
      image: "close-up-therapist-hand-massaging-woman-s-back-with-hot-towel-spa.jpg",
      items: [
        {
          id: 1,
          name: "7 Seven Spa Vilamoura",
          email: "7 Seven Spa Vilamoura@cleverdetails.com",
          logo: "7spa.svg",
          type: "Spa Completo",
          description: "O 7 Seven Spa, no Hilton Vilamoura As Cascatas Golf Resort & Spa, oferece uma experiência de bem-estar com 14 salas de tratamento, circuito de hidroterapia, sauna, banho turco, jacuzzi e jardim zen. Ideal para relaxar e renovar energias.",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Segunda", hours: "09:45 - 21:00" },
            { day: "Terça", hours: "09:45 - 21:00" },
            { day: "Quarta", hours: "09:45 - 21:00" },
            { day: "Quinta", hours: "09:45 - 21:00" },
            { day: "Sexta", hours: "09:45 - 21:00" },
            { day: "Sábado", hours: "09:45 - 20:00" },
            { day: "Domingo", hours: "09:45 - 20:00" }
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
            type: "Oferta Especial",
            description: "15% DE DESCONTO no Menu & €5 DE DESCONTO no Circuito Terapêutico"
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
          type: "Bem-estar",
          description: "O Duo Spa & Life Care, no Cegonha Country Club em Vilamoura, oferece experiências de bem-estar com circuito de spa, sauna, banho turco e tratamentos como esfoliação ou Iyashi Dome, para momentos de relaxamento e rejuvenescimento.",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Segunda", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Terça", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Quarta", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Quinta", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Sexta", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Sábado", hours: "10:00 - 13:00, 14:30 - 19:00" },
            { day: "Domingo", hours: "Fechado" }
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
            type: "Pacote Premium",
            description: "20% DE DESCONTO em Tratamento Premium; €5 DE DESCONTO no Menu; Acesso ao Circuito Detox..."
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
          type: "Bem-estar",
          description: "A DMed Clinic oferece serviços médicos ao domicílio em toda a região, incluindo consultas de Medicina Geral, Psicologia, Nutrição, Psiquiatria e Telemedicina, evitando deslocações desnecessárias.",
          locationIds: [3],
          rating: 5,
          openingHours: [
            { day: "Segunda", hours: "24h" },
            { day: "Terça", hours: "24h" },
            { day: "Quarta", hours: "24h" },
            { day: "Quinta", hours: "24h" },
            { day: "Sexta", hours: "24h" },
            { day: "Sábado", hours: "24h" },
            { day: "Domingo", hours: "24h" }
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
      title: "Salões de Beleza",
      route: "/beauty-and-hair-salons",
      description: "Cuide da sua beleza com os melhores profissionais",
      image: "pexels-valeriya-939836.jpg",
      items: [
        //translate from appData.ts
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
          description: "Expertise em beleza e tratamentos estéticos",
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
      title: "Chef em Casa",
      route: "/chef-at-home",
      description: "Desfrute de uma experiência gastronómica única no conforto da sua casa",
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
      description: "Tavira é uma bela cidade no Algarve, Portugal. É conhecida pelas suas belas praias e vida noturna vibrante.",
    },
    {
      id: 1,
      name: "Quinta do Lago",
      image: "/location2.jpg",
      description: "Quinta do Lago é um resort de luxo no Algarve, Portugal. É conhecido pelos seus campos de golfe de classe mundial e praias pristinas.",
    },
    {
      id: 2,
      name: "Loulé",
      image: "/location3.jpg",
      description: "Loulé é uma cidade histórica no coração do Algarve, famosa pelo seu mercado tradicional e eventos culturais.",
    },
    {
      id: 3,
      name: "Vilamoura",
      image: "/location4.jpg",
      description: "Vilamoura é um resort sofisticado conhecido pela sua marina luxuosa, campos de golfe e vida noturna animada.",
    },
    {
      id: 4,
      name: "Albufeira",
      image: "/location5.jpg",
      description: "Albufeira é um destino turístico popular, conhecido pelas suas praias douradas, vida noturna animada e centro histórico encantador.",
    },
    {
      id: 5,
      name: "Faro",
      image: "/location5.jpg",
      description: "Faro é a capital do Algarve, com um centro histórico bem preservado e acesso privilegiado à Ria Formosa.",
    },
    {
      id: 6,
      name: "Portimão",
      image: "/location5.jpg",
      description: "Portimão é uma cidade costeira conhecida pela famosa Praia da Rocha e sua rica história marítima.",
    },
    {
      id: 7,
      name: "Lagoa",
      image: "/location5.jpg",
      description: "Lagoa é famosa pelas suas vinhas e praias espetaculares, incluindo a Praia do Carvoeiro e Benagil.",
    },
    {
      id: 8,
      name: "Quarteira",
      image: "/location5.jpg",
      description: "Quarteira é uma cidade costeira tradicional com um extenso passeio marítimo e excelentes restaurantes de peixe e marisco.",
    }
  ]
}; 