// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      invest: "INVEST IN GIDDY UP",
      language: "EN",
      giddyUpApp: "Giddy Up! Application",
      discover: "Discover",
      introText: "The all-in-one mobile app designed to revolutionize your daily life. From social media and ride-sharing to e-commerce and entertainment, Giddy Up has it all. Watch our introductory video to learn how our innovative platform can simplify and improve your daily routine, offering you maximum convenience and efficiency in a single application. Join the Giddy Up revolution and transform the way you manage your daily activities!",
      learnMore: "LEARN MORE",
      investNow: "INVEST NOW",
      introParagraph: "The all-in-one mobile app designed to revolutionize your daily life. From social media and ride-sharing to e-commerce and entertainment, Giddy Up has it all. Watch our introductory video to learn how our innovative platform can simplify and improve your daily routine, offering you maximum convenience and efficiency in a single application. Join the Giddy Up revolution and transform the way you manage your daily activities!",
      missionTitle: "Our Mission",
      missionContent: "Our mission at <span class=\"font-medium text-neutral-600\">Giddy Up</span> is to simplify and improve our users' daily lives by offering an all-in-one mobile application that seamlessly integrates essential services. We are dedicated to providing an innovative platform that combines social networking, ride-hailing, e-commerce, entertainment and more, all from a single, easy-to-use interface. We seek to make the management of daily activities more efficient, convenient and enjoyable for all our users.",
      visionTitle: "Our Vision",
      visionContent: "Our vision is to become the world's reference application for managing daily activities, offering a comprehensive and accessible solution that revolutionizes the way people interact with technology in their daily lives. We aspire to be an industry leader in integrated digital services, providing our users with maximum convenience and an exceptional user experience, and continually expanding our functionalities to meet the changing needs of a dynamic and constantly evolving society.",

      // Textos de la sección Feedback
      feedbackTitle: "Your opinion is important to us!",
      feedbackDescription: "At Giddy Up, we value feedback from our users and visitors...",
      feedbackHelp: "Your collaboration will help us:",
      feedbackPoints: [
        {
          title: "Improve our services",
          description: "Identify areas of improvement and new functionalities."
        },
        {
          title: "Personalize the experience",
          description: "Adapt the application to your needs and preferences."
        },
        {
          title: "Continuously innovate",
          description: "Develop innovative solutions based on your feedback."
        }
      ],
      feedbackThankYou: "Thank you for taking the time to help us improve! Your participation is essential to create the best all-in-one application for managing your daily activities.",
      feedbackPlan: "Planning and Use of Financing at Giddy Up",
      surveyData: {
        "title": "Giddy Up! Survey",
        "pages": [
          {
            "name": "personal_information",
            "elements": [
              {
                "type": "comment",
                "name": "name",
                "title": "What's your name?",
                "id": "q1"
              },
              {
                "type": "comment",
                "name": "email",
                "title": "What's your email?",
                "id": "q2"
              },
              {
                "type": "comment",
                "name": "phone",
                "title": "What's your phone number?",
                "id": "q3"
              }
            ]
          },
          {
            "name": "demographic_information",
            "elements": [
              {
                "type": "radiogroup",
                "name": "age",
                "title": "What's your age?",
                "id": "q4",
                "choices": [
                  { "value": "1", "text": "Under 18" },
                  { "value": "2", "text": "18-24" },
                  { "value": "3", "text": "25-34" },
                  { "value": "4", "text": "35-44" },
                  { "value": "5", "text": "45-54" },
                  { "value": "6", "text": "55-64" },
                  { "value": "7", "text": "65 and over" }
                ]
              },
              {
                "type": "radiogroup",
                "name": "gender",
                "title": "What's your gender?",
                "id": "q5",
                "choices": [
                  { "value": "1", "text": "Male" },
                  { "value": "2", "text": "Female" },
                  { "value": "3", "text": "Non-binary" },
                  { "value": "4", "text": "Prefer not to say" },
                  { "value": "5", "text": "Other (please specify)" }
                ]
              },
              {
                "type": "text",
                "name": "country_of_residence",
                "title": "Which country do you reside in?",
                "id": "q6"
              },
              {
                "type": "radiogroup",
                "name": "occupation",
                "title": "What's your current occupation?",
                "id": "q7",
                "choices": [
                  { "value": "1", "text": "Student" },
                  { "value": "2", "text": "Full-time employee" },
                  { "value": "3", "text": "Part-time employee" },
                  { "value": "4", "text": "Self-employed" },
                  { "value": "5", "text": "Unemployed" },
                  { "value": "6", "text": "Retired" },
                  { "value": "7", "text": "Other (please specify)" }
                ]
              }
            ]
          },
          {
            "name": "mobile_app_usage",
            "elements": [
              {
                "type": "radiogroup",
                "name": "hours_spent_on_apps",
                "title": "On average, how many hours a day do you spend using mobile apps?",
                "id": "q8",
                "choices": [
                  { "value": "1", "text": "Very few hours" },
                  { "value": "2", "text": "1-2 hours" },
                  { "value": "3", "text": "3-4 hours" },
                  { "value": "4", "text": "5-6 hours" },
                  { "value": "5", "text": "More than 6 hours" }
                ]
              },
              {
                "type": "radiogroup",
                "name": "types_of_apps",
                "title": "Which types of mobile apps do you use most frequently? (Select all that apply)",
                "id": "q9",
                "choices": [
                  { "value": "1", "text": "Social networks" },
                  { "value": "2", "text": "Shopping" },
                  { "value": "3", "text": "Entertainment" },
                  { "value": "4", "text": "Travel" },
                  { "value": "5", "text": "Productivity" },
                  { "value": "6", "text": "Health and fitness" },
                  { "value": "7", "text": "Education" },
                  { "value": "8", "text": "Other" }
                ]
              },
              {
                "type": "radiogroup",
                "name": "using_separate_apps",
                "title": "Do you currently use separate apps to manage different activities (e.g., social networks, shopping, entertainment)?",
                "id": "q10",
                "choices": [
                  { "value": "1", "text": "Yes, exclusively" },
                  { "value": "2", "text": "Yes, sometimes" },
                  { "value": "3", "text": "No, I use apps that combine multiple activities" },
                  { "value": "4", "text": "No, I prefer separate apps" }
                ]
              }
            ]
          },
          {
            "name": "giddyup_app_concept",
            "elements": [
              {
                "type": "radiogroup",
                "name": "concept_attractiveness",
                "title": "Based on the description provided, how appealing do you find the concept of the Giddy Up! app?",
                "id": "q11",
                "choices": [
                  { "value": "1", "text": "Very appealing" },
                  { "value": "2", "text": "Somewhat appealing" },
                  { "value": "3", "text": "Neutral" },
                  { "value": "4", "text": "Slightly appealing" },
                  { "value": "5", "text": "Not appealing" }
                ]
              },
              {
                "type": "radiogroup",
                "name": "interesting_features",
                "title": "Which features of the Giddy Up! concept do you find most interesting? (Select all that apply)",
                "id": "q12",
                "choices": [
                  { "value": "1", "text": "Social platform" },
                  { "value": "2", "text": "Money service" },
                  { "value": "3", "text": "Transport services" },
                  { "value": "4", "text": "Marketplace" },
                  { "value": "5", "text": "Short videos" },
                  { "value": "6", "text": "Long videos" },
                  { "value": "7", "text": "Music streaming" },
                  { "value": "8", "text": "Movie streaming" },
                  { "value": "9", "text": "Dating services" },
                  { "value": "10", "text": "Web browser" },
                  { "value": "11", "text": "Team meeting services" },
                  { "value": "12", "text": "Streaming services" },
                  { "value": "13", "text": "Ticket sales services" }
                ]
              },
              {
                "type": "comment",
                "name": "unnecessary_features",
                "title": "Are there any features of the Giddy Up! app concept that you consider unnecessary or less attractive? If so, please specify.",
                "id": "q13"
              }
            ]
          },
          {
            "name": "user_experience_convenience",
            "elements": [
              {
                "type": "radiogroup",
                "name": "importance_of_multiservice",
                "title": "How important is it to you to access multiple services and features from a single app?",
                "id": "q14",
                "choices": [
                  { "value": "1", "text": "Very important" },
                  { "value": "2", "text": "Somewhat important" },
                  { "value": "3", "text": "Neutral" },
                  { "value": "4", "text": "Slightly important" },
                  { "value": "5", "text": "Not important" }
                ]
              },
              {
                "type": "radiogroup",
                "name": "discomfort_switching_apps",
                "title": "Do you currently find it uncomfortable to switch between different apps for various activities?",
                "id": "q15",
                "choices": [
                  { "value": "1", "text": "Very uncomfortable" },
                  { "value": "2", "text": "Somewhat uncomfortable" },
                  { "value": "3", "text": "Neutral" },
                  { "value": "4", "text": "Slightly uncomfortable" },
                  { "value": "5", "text": "Not uncomfortable" }
                ]
              },
              {
                "type": "radiogroup",
                "name": "app_integration",
                "title": "Would you be more likely to use the Giddy Up! app if it offered seamless integration and a unified experience for different services?",
                "id": "q16",
                "choices": [
                  { "value": "1", "text": "Very likely" },
                  { "value": "2", "text": "Likely" },
              { "value": "3", "text": "Neutral" },
              { "value": "4", "text": "Unlikely" },
              { "value": "5", "text": "Very unlikely" }
            ]
          }
        ]
       },
       {
        "name": "monetization_subscriptions",
        "elements": [
          {
            "type": "radiogroup",
            "name": "opinion_on_monetization",
            "title": "How do you feel about the proposed revenue generation methods, such as a free ad-supported tier, premium subscriptions, and commission on purchases?",
            "id": "q17",
            "choices": [
              { "value": "1", "text": "Very positive" },
              { "value": "2", "text": "Positive" },
              { "value": "3", "text": "Neutral" },
              { "value": "4", "text": "Negative" },
              { "value": "5", "text": "Very negative" }
            ]
          },
          {
            "type": "radiogroup",
            "name": "premium_subscription",
            "title": "Would you be willing to pay for a premium subscription to access enhanced features and an ad-free experience within the app?",
            "id": "q18",
            "choices": [
              { "value": "1", "text": "Definitely yes" },
              { "value": "2", "text": "Probably yes" },
              { "value": "3", "text": "Neutral" },
              { "value": "4", "text": "Probably not" },
              { "value": "5", "text": "Definitely not" }
            ]
          }
        ]
       },
       {
        "name": "future_feature_expansion",
        "elements": [
          {
            "type": "radiogroup",
            "name": "future_features_attractiveness",
            "title": "How appealing do you find the planned future features (e.g., map integration, translator, cloud storage, etc.)?",
            "id": "q19",
            "choices": [
              { "value": "1", "text": "Very appealing" },
              { "value": "2", "text": "Somewhat appealing" },
              { "value": "3", "text": "Neutral" },
              { "value": "4", "text": "Slightly appealing" },
              { "value": "5", "text": "Not appealing" }
            ]
          },
          {
            "type": "radiogroup",
            "name": "localized_content",
            "title": "How likely would you be to use Giddy Up! if it incorporated localized content and services tailored to your region?",
            "id": "q20",
            "choices": [
              { "value": "1", "text": "Very likely" },
              { "value": "2", "text": "Likely" },
              { "value": "3", "text": "Neutral" },
              { "value": "4", "text": "Unlikely" },
              { "value": "5", "text": "Very unlikely" }
            ]
          }
        ]
       },
       {
        "name": "general_interest_comments",
        "elements": [
          {
            "type": "comment",
            "name": "additional_comments",
            "title": "Please share any additional thoughts, suggestions, or concerns you have about the Giddy Up! app concept.",
            "id": "q21"
          },
          {
            "type": "radiogroup",
            "name": "app_usage_likelihood",
            "title": "On a scale of 1 to 5, how likely are you to use the Giddy Up! app based on the information provided?",
            "id": "q22",
            "choices": [
              { "value": "1", "text": "Very unlikely" },
              { "value": "2", "text": "Somewhat unlikely" },
              { "value": "3", "text": "Neutral" },
              { "value": "4", "text": "Somewhat likely" },
              { "value": "5", "text": "Very likely" }
            ]
          }
        ]
      }
    ]
  }, carouselItems: [
    {
      title: "Our Goals",
      content: [
        {title: "Improve User Experience",
          description: "An intuitive and efficient experience."
        },
        {title: "Seamless Integration",
          description: "Access social networks, transportation, shopping and entertainment in one place."
        },
        {title: "Continuous Innovation",
          description: "We constantly incorporate new features."
        },
        {title: "Simplify Daily Management",
          description: "A single platform for all your daily activities."
        }
      ]
    },
    {
      title: "Needs Addressed",
      content: [
        {title: "Convenience and Efficiency",
          description: "Forget about switching between multiple applications."
        },
        {title: "Connectivity",
          description: "Stay connected to your loved ones and essential services."
        },
        {title: "Entertainment and Commerce",
          description: "Instant access to content and purchases."
        },
        {title: "Time Saving",
          description: "Perform everyday tasks quickly."
        }
      ]
    },
    {
      title: "Short Terms Plans",
      content: [
        {title: "Application Launch",
          description: "Available in Apple App Store, Google Play Store and App Gallery."
        },
        {title: "Marketing and Advertising",
          description: "Robust strategies to increase visibility."
        },
        {title: "Development and Continuous Improvement",
          description: "Regular updates based on user feedback."
        },
        {title: "Alliance Formation",
          description: "Strategic collaborations with service and content providers."
        }
      ]
    },
    {
      title: "Long Terms Plans",
      content: [
        {title: "International Growth",
          description: "Adaptation to global markets."
        },
        {title: "Expansion of Services",
          description: "New features such as maps, translators and mini-games."
        },
        {title: "Improving User Experience",
          description: "Constant innovation and personalized solutions."
        },
        {title: "Revenue Diversification",
          description: "Premium subscriptions and collaborations with brands."
        }
      ]
    }
  ],
  Need: "Need Adressed",
  Ours: "Our Goals",
  ShortTerms: "Short Terms Plants",
  projectPlanningTitle: "Project Planning",
  useOfFinancingTitle: "Use of Financing",
  investButtonText: "INVEST NOW",
  projectPlanning: {
    researchAndDesign: {
      title: "Research and Design",
      description: "Definition of key functionalities and interface design."
    },
    initialDevelopment: {
      title: "Initial Development",
      description: "Building the application with essential functions."
    },
    testingAndImprovements: {
      title: "Testing and Improvements",
      description: "Refinement based on alpha and beta testing."
    },
    launchAndMarketing: {
      title: "Launch and Marketing",
      description: "Strategies for launch and promotion in application stores."
    }
  },
  useOfFinancing: {
    technologicalDevelopment: {
      title: "Technological Development",
      description: "Hiring of developers and acquisition of infrastructure."
    },
    marketingAndAdvertising: {
      title: "Marketing and Advertising",
      description: "Campaigns to increase visibility and attract users."
    },
    operationsAndPersonnel: {
      title: "Operations and Personnel",
      description: "Compensation for the team and operating expenses."
    },
    licensesAndContent: {
      title: "Licenses and Content",
      description: "Strategies for launch and promotion in application stores."
    },
    transparencyAndCommunication: {
      title: "Transparency and Communication",
      description: "We will keep our backers informed with regular updates through newsletters, social media, and our project blog."
    },
    SupportDevelopment: {
      title: "Support the Development of Giddy Up",
      "description": "Join our crowdfunding campaign to make this innovative application a reality. Your contribution will be essential to transform the management of daily activities."
    }
  },
    supportTitle: "How to Support the",
  supportSubtitle: "Development of Giddy Up",
  supportIntro: "Your support is essential to make Giddy Up a reality. Although the application is still in development, with your contributions we can move forward quickly and launch an innovative platform that will revolutionize the management of daily activities.",
  howToHelp: "Here's how you can help",
  support: {
    directDonations: {
      title: "Direct Donations",
      description: "Your donation will allow us to fund the development and launch of Giddy Up. Any amount, large or small, is valuable and brings us closer to our goal.",
      buttonText: "INVEST NOW"
    },
    crowdfunding: {
      title: "Participate in Our Crowdfunding",
      description: "We have launched a crowdfunding campaign to raise the necessary funds. Visit our page on www.crowdfunding.com to learn more details and contribute. Every contribution counts!",
      buttonText: "INVEST NOW"
    },
    feedback: {
      title: "Provide Feedback",
      description: "Although we are still in the development phase, we would love to hear your thoughts on the mockups and vision for the app. Participate in our questionnaire and give us your opinion.",
      buttonText: "INVEST NOW"
    },
    shareCampaign: {
      title: "Share Our Campaign",
      description: "Help us reach more people by sharing our crowdfunding campaign on your social networks, with friends, family, and colleagues. The more people know about our project, the closer we will be to reaching our goal.",
      buttonText: "INVEST NOW"
    },
  },
  contactSection: {
    questionsTitle: "You Have Questions?",
    questionsDescription: "For scouting agents, this platform represents the shortest path you could have in order to find the",
    nameLabel: "Your Name",
    namePlaceholder: "First Name",
    emailLabel: "Email",
    emailPlaceholder: "Email address",
    messageLabel: "Message",
    messagePlaceholder: "Write here...",
    sendButton: "Send Message"
  },
  footer: {
    logoAlt: "Company logo",
    newsletterTitle: "Subscribe to our Newsletter",
    newsletterDescription: "Stay updated with the latest news and promotions by subscribing to our newsletter. We promise not to spam your inbox.",
    emailPlaceholder: "Enter your email",
    subscribeButton: "Subscribe",
    socialTitle: "Follow us on Social Networks",
    socialDescription: "Follow our accounts on social networks to stay up to date with the latest news and share our publications. Your support on social networks is crucial to expanding our community.",
    socialIconsAlt: "Social network icons"
  }
    }
  },
  es: {
    translation: {
      invest: "INVIERTE EN GIDDY UP",
      language: "ES",
      giddyUpApp: "Aplicación Giddy Up!",
      discover: "Descubre",
      introText: "La aplicación móvil todo en uno diseñada para revolucionar tu vida diaria. Desde redes sociales y transporte compartido hasta comercio electrónico y entretenimiento, Giddy Up lo tiene todo. Mira nuestro video introductorio para aprender cómo nuestra plataforma innovadora puede simplificar y mejorar tu rutina diaria, ofreciéndote la máxima comodidad y eficiencia en una sola aplicación. ¡Únete a la revolución de Giddy Up y transforma la forma en que gestionas tus actividades diarias!",
      learnMore: "SABER MÁS",
      investNow: "INVIERTE AHORA",
      introParagraph: "La aplicación móvil todo en uno diseñada para revolucionar tu vida diaria. Desde redes sociales y transporte compartido hasta comercio electrónico y entretenimiento, Giddy Up lo tiene todo. Mira nuestro video introductorio para aprender cómo nuestra innovadora plataforma puede simplificar y mejorar tu rutina diaria, ofreciéndote la máxima comodidad y eficiencia en una sola aplicación. ¡Únete a la revolución de Giddy Up y transforma la forma en que manejas tus actividades diarias!",
      missionTitle: "Nuestra Misión",
      missionContent: "Nuestra misión en <span class=\"font-medium text-neutral-600\">Giddy Up</span> es simplificar y mejorar la vida diaria de nuestros usuarios ofreciendo una aplicación móvil todo en uno que integre servicios esenciales de manera perfecta. Nos dedicamos a proporcionar una plataforma innovadora que combine redes sociales, transporte compartido, comercio electrónico, entretenimiento y más, todo desde una única interfaz fácil de usar. Buscamos hacer que la gestión de las actividades diarias sea más eficiente, conveniente y placentera para todos nuestros usuarios.",
      visionTitle: "Nuestra Visión",
      visionContent: "Nuestra visión es convertirnos en la aplicación de referencia mundial para la gestión de actividades diarias, ofreciendo una solución integral y accesible que revolucione la forma en que las personas interactúan con la tecnología en su vida cotidiana. Aspiramos a ser líderes en servicios digitales integrados, proporcionando a nuestros usuarios la máxima comodidad y una experiencia de usuario excepcional, y ampliando continuamente nuestras funcionalidades para satisfacer las necesidades cambiantes de una sociedad dinámica y en constante evolución.",

      // Textos de la sección Feedback
      feedbackTitle: "Tu opinión es importante para nosotros!",
      feedbackDescription: "En Giddy Up, valoramos los comentarios de nuestros usuarios...",
      feedbackHelp: "Tu colaboración nos ayudará a:",
      feedbackPoints: [
        {
          title: "Mejorar nuestros servicios",
          description: "Identificar áreas de mejora y nuevas funcionalidades."
        },
        {
          title: "Personalizar la experiencia",
          description: "Adaptar la aplicación a tus necesidades y preferencias."
        },
        {
          title: "Innovar continuamente",
          description: "Desarrollar soluciones innovadoras basadas en tus comentarios."
        }
      ],
      feedbackThankYou: "Gracias por tomarte el tiempo de ayudarnos a mejorar! Tu participación es esencial para crear la mejor aplicación todo en uno para gestionar tus actividades diarias.",
      feedbackPlan: "Planificación y uso de financiamiento en Giddy Up",
      surveyData: {
          "title": "Cuestionario ¡Arreando!",
          "pages": [
            {
              "name": "informacion_personal",
              "elements": [
                {
                  "type": "comment",
                  "name": "nombre",
                  "title": "¿Cuál es tu nombre?",
                  "id": "q1"
                },
                {
                  "type": "comment",
                  "name": "correo_electronico",
                  "title": "¿Cuál es tu correo electrónico?",
                  "id": "q2"
                },
                {
                  "type": "comment",
                  "name": "celular",
                  "title": "¿Cuál es tu número de celular?",
                  "id": "q3"
                }
              ]
            },
            {
              "name": "informacion_demografica",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "edad",
                  "title": "¿Cuál es tu edad?",
                  "id": "q4",
                  "choices": [
                    { "value": "1", "text": "Menor de 18" },
                    { "value": "2", "text": "18-24" },
                    { "value": "3", "text": "25-34" },
                    { "value": "4", "text": "35-44" },
                    { "value": "5", "text": "45-54" },
                    { "value": "6", "text": "55-64" },
                    { "value": "7", "text": "65 y más" }
                  ]
                },
                {
                  "type": "radiogroup",
                  "name": "genero",
                  "title": "¿Cuál es tu género?",
                  "id": "q5",
                  "choices": [
                    { "value": "1", "text": "Hombre" },
                    { "value": "2", "text": "Mujer" },
                    { "value": "3", "text": "No binario" },
                    { "value": "4", "text": "Prefiero no decirlo" },
                    { "value": "5", "text": "Otro (por favor, especificar)" }
                  ]
                },
                {
                  "type": "text",
                  "name": "pais_residencia",
                  "title": "¿En qué país resides?",
                  "id": "q6"
                },
                {
                  "type": "radiogroup",
                  "name": "ocupacion",
                  "title": "¿Cuál es tu ocupación actual?",
                  "id": "q7",
                  "choices": [
                    { "value": "1", "text": "Estudiante" },
                    { "value": "2", "text": "Empleado a tiempo completo" },
                    { "value": "3", "text": "Empleado a tiempo parcial" },
                    { "value": "4", "text": "Autónomo" },
                    { "value": "5", "text": "Desempleado" },
                    { "value": "6", "text": "Jubilado" },
                    { "value": "7", "text": "Otro (por favor, especificar)" }
                  ]
                }
              ]
            },
            {
              "name": "uso_aplicaciones_moviles",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "horas_aplicaciones_moviles",
                  "title": "En promedio, ¿cuántas horas al día pasas utilizando aplicaciones móviles?",
                  "id": "q8",
                  "choices": [
                    { "value": "1", "text": "Muy pocas horas" },
                    { "value": "2", "text": "1-2 horas" },
                    { "value": "3", "text": "3-4 horas" },
                    { "value": "4", "text": "5-6 horas" },
                    { "value": "5", "text": "Más de 6 horas" }
                  ]
                },
                {
                  "type": "radiogroup",
                  "name": "tipos_aplicaciones",
                  "title": "¿Qué tipos de aplicaciones móviles utilizas con más frecuencia? (Selecciona todas las que apliquen)",
                  "id": "q9",
                  "choices": [
                    { "value": "1", "text": "Redes sociales" },
                    { "value": "2", "text": "Compras" },
                    { "value": "3", "text": "Entretenimiento" },
                    { "value": "4", "text": "Viajes" },
                    { "value": "5", "text": "Productividad" },
                    { "value": "6", "text": "Salud y estado físico" },
                    { "value": "7", "text": "Educación" },
                    { "value": "8", "text": "Otro" }
                  ]
                },
                {
                  "type": "radiogroup",
                  "name": "uso_aplicaciones_separadas",
                  "title": "¿Actualmente usas aplicaciones separadas para gestionar diferentes actividades (por ejemplo, redes sociales, compras, entretenimiento)?",
                  "id": "q10",
                  "choices": [
                    { "value": "1", "text": "Sí, exclusivamente" },
                    { "value": "2", "text": "Sí, a veces" },
                    { "value": "3", "text": "No, uso aplicaciones que combinan múltiples actividades" },
                    { "value": "4", "text": "No, prefiero aplicaciones separadas" }
                  ]
                }
              ]
            },
            {
              "name": "concepto_aplicacion_arreando",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "atractivo_concepto",
                  "title": "Basado en la descripción proporcionada, ¿qué tan atractivo te parece el concepto de la aplicación ¡Arreando!?",
                  "id": "q11",
                  "choices": [
                    { "value": "1", "text": "Muy atractivo" },
                    { "value": "2", "text": "Algo atractivo" },
                    { "value": "3", "text": "Neutral" },
                    { "value": "4", "text": "Poco atractivo" },
                    { "value": "5", "text": "Nada atractivo" }
                  ]
                },
                {
                  "type": "radiogroup",
                  "name": "caracteristicas_interesantes",
                  "title": "¿Qué características del concepto de la aplicación ¡Arreando! te resultan más interesantes? (Selecciona todas las que apliquen)",
                  "id": "q12",
                  "choices": [
                    { "value": "1", "text": "Plataforma social" },
                    { "value": "2", "text": "Servicio de dinero" },
                    { "value": "3", "text": "Servicios de transporte" },
                    { "value": "4", "text": "Mercado" },
                    { "value": "5", "text": "Videos cortos" },
                    { "value": "6", "text": "Videos largos" },
                    { "value": "7", "text": "Streaming de música" },
                    { "value": "8", "text": "Streaming de películas" },
                    { "value": "9", "text": "Servicios de citas" },
                    { "value": "10", "text": "Navegador web" },
                    { "value": "11", "text": "Servicios de reuniones en equipo" },
                    { "value": "12", "text": "Servicios de streaming" },
                    { "value": "13", "text": "Servicios de venta de boletos" }
                  ]
                },
                {
                  "type": "comment",
                  "name": "caracteristicas_innecesarias",
                  "title": "¿Hay características del concepto de la aplicación ¡Arreando! que consideras innecesarias o menos atractivas? En caso afirmativo, por favor especifica.",
                  "id": "q13"
                }
              ]
            },
            {
              "name": "experiencia_usuario_comodidad",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "importancia_multiservicio",
                  "title": "¿Qué tan importante es para ti la idea de acceder a múltiples servicios y características desde una sola aplicación?",
                  "id": "q14",
                  "choices": [
                    { "value": "1", "text": "Muy importante" },
                    { "value": "2", "text": "Algo importante" },
                    { "value": "3", "text": "Neutral" },
                    { "value": "4", "text": "Poco importante" },
                    { "value": "5", "text": "Nada importante" }
                  ]
                },
                {
                  "type": "radiogroup",
                  "name": "incomodidad_cambiar_aplicaciones",
                  "title": "¿Actualmente encuentras incómodo cambiar entre diferentes aplicaciones para diversas actividades?",
                  "id": "q15",
                  "choices": [
                    { "value": "1", "text": "Muy incómodo" },
                    { "value": "2", "text": "Algo incómodo" },
                    { "value": "3", "text": "Neutral" },
                    { "value": "4", "text": "Poco incómodo" },
                    { "value": "5", "text": "Nada incómodo" }
                  ]
                },
                {
                  "type": "radiogroup",
                  "name": "integracion_aplicacion",
                  "title": "¿Serías más propenso a usar la aplicación ¡Arreando! si ofreciera una integración perfecta y una experiencia unificada para diferentes servicios?",
                  "id": "q16",
                  "choices": [
                    { "value": "1", "text": "Muy probable" },
                    { "value": "2", "text": "Probable" },
                    { "value": "3", "text": "Neutral" },
                    { "value": "4", "text": "Improbable" },
                    { "value": "5", "text": "Muy improbable" }
                  ]
                }
              ]
            },
            {
              "name": "monetizacion_suscripciones",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "opinion_monetizacion",
                  "title": "¿Cómo te sientes acerca de los métodos propuestos de generación de ingresos, como la capa gratuita con publicidad, las suscripciones premium y las comisiones por compras?",
                  "id": "q17",
                  "choices": [
                    { "value": "1", "text": "Muy positivo" },
                    { "value": "2", "text": "Positivo" },
                    { "value": "3", "text": "Neutral" },
                    { "value": "4", "text": "Negativo" },
                    { "value": "5", "text": "Muy negativo" }
                  ]
                },
                {
                  "type": "radiogroup",
                  "name": "suscripcion_premium",
                  "title": "¿Estarías dispuesto a pagar por una suscripción premium para acceder a características mejoradas y una experiencia sin anuncios dentro de la aplicación?",
                  "id": "q18",
                  "choices": [
                    { "value": "1", "text": "Definitivamente sí" },
                    { "value": "2", "text": "Probablemente sí" },
                    { "value": "3", "text": "Neutral" },
                    { "value": "4", "text": "Probablemente no" },
                    { "value": "5", "text": "Definitivamente no" }
                  ]
                }
              ]
            },
            {
              "name": "expansion_caracteristicas_futuras",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "atractivo_futuras_caracteristicas",
                  "title": "¿Te resultan atractivas las futuras características planificadas (integración de mapas, traductor, almacenamiento en la nube, etc.)?",
                  "id": "q19",
                  "choices": [
                    { "value": "1", "text": "Muy atractivas" },
                    { "value": "2", "text": "Algo atractivas" },
                    { "value": "3", "text": "Neutral" },
                    { "value": "4", "text": "Poco atractivas" },
                    { "value": "5", "text": "Nada atractivas" }
                  ]
                },
                {
                  "type": "radiogroup",
                  "name": "contenido_localizado",
                  "title": "¿Qué tan probable sería que utilices ¡Arreando! si incorporara contenido y servicios localizados adaptados a tu región?",
                  "id": "q20",
                  "choices": [
                    { "value": "1", "text": "Muy probable" },
                    { "value": "2", "text": "Probable" },
                    { "value": "3", "text": "Neutral" },
                    { "value": "4", "text": "Improbable" },
                    { "value": "5", "text": "Muy improbable" }
                  ]
                }
              ]
            },
            {
              "name": "interes_general_comentarios",
              "elements": [
                {
                  "type": "comment",
                  "name": "comentarios_adicionales",
                  "title": "Por favor, comparte cualquier pensamiento adicional, sugerencia o inquietud que tengas sobre el concepto de la aplicación ¡Arreando!",
                  "id": "q21"
                },
                {
                  "type": "radiogroup",
                  "name": "probabilidad_uso_aplicacion",
                  "title": "En una escala del 1 al 5, ¿qué tan probable es que uses la aplicación ¡Arreando! basándote en la información proporcionada?",
                  "id": "q22",
                  "choices": [
                    { "value": "1", "text": "Poco probable" },
                    { "value": "2", "text": "Algo poco probable" },
                    { "value": "3", "text": "Neutral" },
                    { "value": "4", "text": "Algo probable" },
                    { "value": "5", "text": "Muy probable" }
                  ]
                }
              ]
            }
          ]
        
      },carouselItems: [
        {
            "title": "Nuestros Objetivos",
            "content": [
              {
                "title": "Mejorar la Experiencia de Usuario",
                "description": "Una experiencia intuitiva y eficiente."
              },
              {
                "title": "Integración Sin Fisuras",
                "description": "Accede a redes sociales, transporte, compras y entretenimiento en un solo lugar."
              },
              {
                "title": "Innovación Continua",
                "description": "Constantemente incorporamos nuevas funciones."
              },
              {
                "title": "Simplificar la Gestión Diaria",
                "description": "Una plataforma única para todas tus actividades diarias."
              }
            ]
          },
          {
            "title": "Necesidades Abordadas",
            "content": [
              {
                "title": "Conveniencia y Eficiencia",
                "description": "Olvídate de cambiar entre múltiples aplicaciones."
              },
              {
                "title": "Conectividad",
                "description": "Mantente conectado con tus seres queridos y servicios esenciales."
              },
              {
                "title": "Entretenimiento y Comercio",
                "description": "Acceso instantáneo a contenido y compras."
              },
              {
                "title": "Ahorro de Tiempo",
                "description": "Realiza tareas cotidianas rápidamente."
              }
            ]
          },
          {
            "title": "Planes a Corto Plazo",
            "content": [
              {
                "title": "Lanzamiento de la Aplicación",
                "description": "Disponible en Apple App Store, Google Play Store y App Gallery."
              },
              {
                "title": "Marketing y Publicidad",
                "description": "Estrategias robustas para aumentar la visibilidad."
              },
              {
                "title": "Desarrollo y Mejora Continua",
                "description": "Actualizaciones regulares basadas en la retroalimentación de los usuarios."
              },
              {
                "title": "Formación de Alianzas",
                "description": "Colaboraciones estratégicas con proveedores de servicios y contenido."
              }
            ]
          },
          {
            "title": "Planes a Largo Plazo",
            "content": [
              {
                "title": "Crecimiento Internacional",
                "description": "Adaptación a mercados globales."
              },
              {
                "title": "Expansión de Servicios",
                "description": "Nuevas funciones como mapas, traductores y mini-juegos."
              },
              {
                "title": "Mejorar la Experiencia de Usuario",
                "description": "Innovación constante y soluciones personalizadas."
              },
              {
                "title": "Diversificación de Ingresos",
                "description": "Suscripciones premium y colaboraciones con marcas."
              }
          ]
        }
      ],
      Need: "Necesidades Abordadas",
      Ours: "Nuestras Metas",
      ShortTerms: "Planes a Corto Plazo",
      projectPlanningTitle: "Planificación del Proyecto",
  useOfFinancingTitle: "Uso del Financiamiento",
  investButtonText: "INVERTIR AHORA",
  projectPlanning: {
  researchAndDesign: {
  title: "Investigación y Diseño",
  description: "Definición de las funcionalidades clave y diseño de la interfaz."
    },
   InitialDevelopment: {
      title: "Desarrollo Inicial",
      description: "Construcción de la aplicación con funciones esenciales."
    },
    testingAndImprovements: {
      title: "Pruebas y Mejoras",
      description: "Refinamiento basado en pruebas alfa y beta."
    },
    launchAndMarketing: {
      title: "Lanzamiento y Marketing",
      description: "Estrategias para el lanzamiento y promoción en las tiendas de aplicaciones."
    }
  },
  useOfFinancing: {
    technologicalDevelopment: {
      title: "Desarrollo Tecnológico",
      description: "Contratación de desarrolladores y adquisición de infraestructura."
    },
    marketingAndAdvertising: {
      title: "Marketing y Publicidad",
      description: "Campañas para aumentar la visibilidad y atraer usuarios."
    },
    operationsAndPersonnel: {
      title: "Operaciones y Personal",
      description: "Compensación para el equipo y gastos operativos."
    },
    licensesAndContent: {
      title: "Licencias y Contenido",
      description: "Estrategias para el lanzamiento y promoción en las tiendas de aplicaciones."
    },
    transparencyAndCommunication: {
      title: "Transparencia y Comunicación",
      description: "Mantendremos informados a nuestros patrocinadores con actualizaciones regulares a través de boletines, redes sociales y nuestro blog del proyecto."
    },
    supportDevelopment: {
      title: "Apoya el Desarrollo de Giddy Up",
      description: "Únete a nuestra campaña de crowdfunding para hacer realidad esta innovadora aplicación. Tu contribución será esencial para transformar la gestión de las actividades diarias."
    }
  },
  supportTitle: "Cómo Apoyar el",
  supportSubtitle: "Desarrollo de Giddy Up",
  supportIntro: "Tu apoyo es esencial para hacer de Giddy Up una realidad. Aunque la aplicación aún está en desarrollo, con tus contribuciones podemos avanzar rápidamente y lanzar una plataforma innovadora que revolucionará la gestión de las actividades diarias.",
  howToHelp: "Aquí te mostramos cómo puedes ayudar",
  support: {
    directDonations: {
      title: "Donaciones Directas",
      description: "Tu donación nos permitirá financiar el desarrollo y lanzamiento de Giddy Up. Cualquier cantidad, grande o pequeña, es valiosa y nos acerca más a nuestra meta.",
      buttonText: "INVIERTE AHORA"
    },
    crowdfunding: {
      title: "Participa en Nuestro Crowdfunding",
      description: "Hemos lanzado una campaña de crowdfunding para recaudar los fondos necesarios. Visita nuestra página en www.crowdfunding.com para obtener más detalles y contribuir. ¡Cada contribución cuenta!",
      buttonText: "INVIERTE AHORA"
    },
    feedback: {
      title: "Proporciona Retroalimentación",
      description: "Aunque aún estamos en la fase de desarrollo, nos encantaría conocer tu opinión sobre los bocetos y la visión de la aplicación. Participa en nuestro cuestionario y danos tu opinión.",
      buttonText: "INVIERTE AHORA"
    },
    shareCampaign: {
      title: "Comparte Nuestra Campaña",
      description: "Ayúdanos a llegar a más personas compartiendo nuestra campaña de crowdfunding en tus redes sociales, con amigos, familiares y colegas. Cuantas más personas conozcan nuestro proyecto, más cerca estaremos de alcanzar nuestra meta.",
      buttonText: "INVIERTE AHORA"
    }
},
  //---------------
  contactSection: {
    questionsTitle: "¿Tienes Preguntas?",
    questionsDescription: "Para los agentes de scouting, esta plataforma representa el camino más corto que podrías tener para encontrar a la",
    nameLabel: "Tu Nombre",
    namePlaceholder: "Nombre",
    emailLabel: "Correo Electrónico",
    emailPlaceholder: "Dirección de correo electrónico",
    messageLabel: "Mensaje",
    messagePlaceholder: "Escribe aquí...",
    sendButton: "Enviar Mensaje"
  },
  footer: {
    logoAlt: "Logo de la empresa",
    newsletterTitle: "Suscríbete a nuestro Boletín",
    newsletterDescription: "Mantente al día con las últimas noticias y promociones suscribiéndote a nuestro boletín. Prometemos no llenar tu bandeja de entrada de spam.",
    emailPlaceholder: "Introduce tu correo electrónico",
    subscribeButton: "Suscribirse",
    socialTitle: "Síguenos en las Redes Sociales",
    socialDescription: "Sigue nuestras cuentas en redes sociales para mantenerte actualizado con las últimas noticias y comparte nuestras publicaciones. Tu apoyo en las redes sociales es crucial para expandir nuestra comunidad.",
    socialIconsAlt: "Íconos de redes sociales"
  }
  }
  
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en', // Idioma inicial
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
