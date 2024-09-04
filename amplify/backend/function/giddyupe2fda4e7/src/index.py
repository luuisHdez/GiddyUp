import json, boto3, uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('encuesta')

def handler(event, context):
    method = event['httpMethod']
    return handle_post(event) if method == 'POST' else handle_get() if method == 'GET' else response(405, 'Método no permitido.')

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


def handle_get():
    items = table.scan().get('Items', [])
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
