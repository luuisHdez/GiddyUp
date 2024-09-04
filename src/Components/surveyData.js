const surveyData = [
  {
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
  }
];

export default surveyData;