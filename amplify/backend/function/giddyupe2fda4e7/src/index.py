import json
import boto3
import os

# Crear un cliente de DynamoDB
dynamodb = boto3.resource('dynamodb')
table_name = 'encuesta'
table = dynamodb.Table(table_name)

def handler(event, context):
    try:
        # Parsear el cuerpo de la solicitud
        body = json.loads(event['body'])
        id_encuesta = body.get('id_encuesta')

        # Validar que 'id_encuesta' esté presente
        if not id_encuesta:
            return {
                'statusCode': 400,
                'headers': {
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
                },
                'body': json.dumps('Falta el dato: id_encuesta es requerido.')
            }

        # Crear el objeto que se insertará en DynamoDB
        item = {
            'id_encuesta': 1,
            'correo_electronico': body.get('correo_electronico'),
            'nombre': body.get('nombre'),
            'celular': body.get('celular'),
            'edad': body.get('edad'),
            'genero': body.get('genero'),
            'pais_residencia': body.get('pais_residencia'),
            'ocupacion': body.get('ocupacion'),
            'uso_aplicaciones_separadas': body.get('uso_aplicaciones_separadas'),
            'tipos_aplicaciones': body.get('tipos_aplicaciones'),
            'horas_aplicaciones_moviles': body.get('horas_aplicaciones_moviles'),
            'caracteristicas_interesantes': body.get('caracteristicas_interesantes'),
            'caracteristicas_innecesarias': body.get('caracteristicas_innecesarias'),
            'atractivo_concepto': body.get('atractivo_concepto'),
            'incomodidad_cambiar_aplicaciones': body.get('incomodidad_cambiar_aplicaciones'),
            'integracion_aplicacion': body.get('integracion_aplicacion'),
            'importancia_multiservicio': body.get('importancia_multiservicio'),
            'suscripcion_premium': body.get('suscripcion_premium'),
            'opinion_monetizacion': body.get('opinion_monetizacion'),
            'contenido_localizado': body.get('contenido_localizado'),
            'atractivo_futuras_caracteristicas': body.get('atractivo_futuras_caracteristicas'),
            'comentarios_adicionales': body.get('comentarios_adicionales'),
            'probabilidad_uso_aplicacion': body.get('probabilidad_uso_aplicacion')
        }

        # Insertar el objeto en DynamoDB
        table.put_item(Item=item)

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('Elemento insertado correctamente.')
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps(f'Error al insertar el elemento: {str(e)}')
        }
