const surveyData = [
    {
        "title": "Cuestionario ¡Arreando!",
        "pages": [
          {
            "name": "informacion_demografica",
            "elements": [
              {
                "type": "radiogroup",
                "name": "edad",
                "title": "¿Cuál es tu edad?",
                "choices": [
                  { "value": "a", "text": "Menor de 18" },
                  { "value": "b", "text": "18-24" },
                  { "value": "c", "text": "25-34" },
                  { "value": "d", "text": "35-44" },
                  { "value": "e", "text": "45-54" },
                  { "value": "f", "text": "55-64" },
                  { "value": "g", "text": "65 y más" }
                ]
              },
              {
                "type": "radiogroup",
                "name": "genero",
                "title": "¿Cuál es tu género?",
                "choices": [
                  { "value": "a", "text": "Hombre" },
                  { "value": "b", "text": "Mujer" },
                  { "value": "c", "text": "No binario" },
                  { "value": "d", "text": "Prefiero no decirlo" },
                  { "value": "e", "text": "Otro (por favor, especificar)" }
                ]
              },
              {
                "type": "text",
                "name": "pais_residencia",
                "title": "¿En qué país resides?"
              },
              {
                "type": "radiogroup",
                "name": "ocupacion",
                "title": "¿Cuál es tu ocupación actual?",
                "choices": [
                  { "value": "a", "text": "Estudiante" },
                  { "value": "b", "text": "Empleado a tiempo completo" },
                  { "value": "c", "text": "Empleado a tiempo parcial" },
                  { "value": "d", "text": "Autónomo" },
                  { "value": "e", "text": "Desempleado" },
                  { "value": "f", "text": "Jubilado" },
                  { "value": "g", "text": "Otro (por favor, especificar)" }
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
                "choices": [
                  { "value": "1", "text": "Muy pocas horas" },
                  { "value": "2", "text": "1-2 horas" },
                  { "value": "3", "text": "3-4 horas" },
                  { "value": "4", "text": "5-6 horas" },
                  { "value": "5", "text": "Más de 6 horas" }
                ]
              },
              {
                "type": "checkbox",
                "name": "tipos_aplicaciones",
                "title": "¿Qué tipos de aplicaciones móviles utilizas con más frecuencia? (Selecciona todas las que apliquen)",
                "choices": [
                  { "value": "a", "text": "Redes sociales" },
                  { "value": "b", "text": "Compras" },
                  { "value": "c", "text": "Entretenimiento" },
                  { "value": "d", "text": "Viajes" },
                  { "value": "e", "text": "Productividad" },
                  { "value": "f", "text": "Salud y estado físico" },
                  { "value": "g", "text": "Educación" },
                  { "value": "h", "text": "Otro (por favor, especificar)" }
                ]
              },
              {
                "type": "radiogroup",
                "name": "uso_aplicaciones_separadas",
                "title": "¿Actualmente usas aplicaciones separadas para gestionar diferentes actividades (por ejemplo, redes sociales, compras, entretenimiento)?",
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
                "choices": [
                  { "value": "1", "text": "Muy atractivo" },
                  { "value": "2", "text": "Algo atractivo" },
                  { "value": "3", "text": "Neutral" },
                  { "value": "4", "text": "Poco atractivo" },
                  { "value": "5", "text": "Nada atractivo" }
                ]
              },
              {
                "type": "checkbox",
                "name": "caracteristicas_interesantes",
                "title": "¿Qué características del concepto de la aplicación ¡Arreando! te resultan más interesantes? (Selecciona todas las que apliquen)",
                "choices": [
                  { "value": "a", "text": "Plataforma social" },
                  { "value": "b", "text": "Servicio de dinero" },
                  { "value": "c", "text": "Servicios de transporte" },
                  { "value": "d", "text": "Mercado" },
                  { "value": "e", "text": "Videos cortos" },
                  { "value": "f", "text": "Videos largos" },
                  { "value": "g", "text": "Streaming de música" },
                  { "value": "h", "text": "Streaming de películas" },
                  { "value": "i", "text": "Servicios de citas" },
                  { "value": "j", "text": "Navegador web" },
                  { "value": "k", "text": "Servicios de reuniones en equipo" },
                  { "value": "l", "text": "Servicios de streaming" },
                  { "value": "m", "text": "Servicios de venta de boletos" }
                ]
              },
              {
                "type": "comment",
                "name": "caracteristicas_innecesarias",
                "title": "¿Hay características del concepto de la aplicación ¡Arreando! que consideras innecesarias o menos atractivas? En caso afirmativo, por favor especifica."
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
                "title": "Por favor, comparte cualquier pensamiento adicional, sugerencia o inquietud que tengas sobre el concepto de la aplicación ¡Arreando!"
              },
              {
                "type": "radiogroup",
                "name": "probabilidad_uso_aplicacion",
                "title": "En una escala del 1 al 5, ¿qué tan probable es que uses la aplicación ¡Arreando! basándote en la información proporcionada?",
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
  ]

  export default surveyData;