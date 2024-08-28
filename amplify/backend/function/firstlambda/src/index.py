import json

def handler(event, context):
    print('received event:')
    print(event)
    
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps('Hello from your new Amplify Python lambda!')
    }

# Simulación de prueba local
if __name__ == "__main__":
    # Simula un evento como lo haría AWS Lambda
    sample_event = {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
    }
    result = handler(sample_event, None)
    print(result)
