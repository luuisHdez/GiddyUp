import json
import boto3
import uuid
import openpyxl
from openpyxl import Workbook
from io import BytesIO
import base64 

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('encuesta')

def handler(event, context):
    method = event['httpMethod']
    params = event.get('queryStringParameters', {}) or {}
    excel = params.get('excel') == 'true'
    
    if method == 'POST':
        return handle_post(event)
    elif method == 'GET':
        return handle_get(excel)
    else:
        return response(405, 'Método no permitido.')

def handle_post(event):
    body = json.loads(event['body'])
    
    # Obtener el correo electrónico usando 'q2' como identificador
    correo_electronico = body.get('q2', {}).get('answer')
    
    if not correo_electronico:
        return response(400, 'Falta el dato: correo_electronico es requerido.')
    
    # Crear el objeto para insertar en DynamoDB usando los 'id' como claves
    item = {
        key: {
            'answer': value.get('answer', ''),
            'text': value.get('text', ''),
            'title': value.get('title', ''),
            'type': value.get('type', '')
        } for key, value in body.items()
    }
    
    # Generar un ID único para la encuesta
    item['id_encuesta'] = str(uuid.uuid4())
    
    # Insertar el objeto en DynamoDB
    table.put_item(Item=item)
    
    return response(200, 'Elemento insertado correctamente.')

def handle_get(excel):
    items = table.scan().get('Items', [])

    # Verificar si se obtuvieron los ítems correctamente
    print(f"Items obtenidos de DynamoDB: {items}")

    if excel:
        # Crea un nuevo archivo Excel
        wb = Workbook()
        ws = wb.active
        ws.title = "Items"
        
        if items:
            print(items, "Item actual después de obtener datos")

            # Crear encabezados dinámicos desde los títulos de las preguntas, manteniendo el orden
            headers = []
            for item in items:
                print(item, "Item actual")
                for key, value in item.items():
                    print(key, value, "Clave y valor actuales")
                    if isinstance(value, dict) and 'title' in value and value['title'] not in headers:
                        headers.append(value['title'])
            print(headers, "Encabezados generados")
            ws.append(headers)  # Escribir los encabezados en el archivo Excel
            
            # Escribir los datos de los ítems (answers)
            for item in items:
                row = []
                for header in headers:
                    # Buscar la respuesta correspondiente para cada título
                    found = False
                    for key, value in item.items():
                        if isinstance(value, dict) and value.get('title') == header:
                            row.append(value.get('text', ''))
                            found = True
                            break
                    if not found:
                        row.append('')  # Si no se encuentra una respuesta, agregar vacío
                
                # Imprimir la fila para verificar su contenido
                print(f"Fila añadida al Excel: {row}")
                ws.append(row)

            # Guardar el archivo en un stream de bytes
            file_stream = BytesIO()
            wb.save(file_stream)
            file_stream.seek(0)

            # Verificar el tamaño del archivo generado
            print(f"Tamaño del archivo generado: {len(file_stream.getvalue())} bytes")

            # Codificar el archivo a base64
            encoded_file = base64.b64encode(file_stream.getvalue()).decode('utf-8')
            print(f"Tamaño del archivo codificado en Base64: {len(encoded_file)}")

            
            # Devolver el archivo Excel como una respuesta binaria codificada en base64
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'Content-Disposition': 'attachment; filename="items.xlsx"',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': encoded_file,
                'isBase64Encoded': True
            }
    
    # Si no se requiere Excel, devolver los items como JSON
    return response(200, items)


def response(status, body):
    return {
        'statusCode': status,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(body)
    }