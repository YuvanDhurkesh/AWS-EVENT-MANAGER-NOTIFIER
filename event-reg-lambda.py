import json
import boto3

s3 = boto3.client('s3')
sns = boto3.client('sns')

BUCKET_NAME = 'YOUR_BUCKET_NAME'
FILE_NAME = 'events.json'

TOPIC_ARN = 'YOUR_SNS_TOPIC_ARN'


def lambda_handler(event, context):

    try:

        body = json.loads(event['body'])

        title = body['title']
        date = body['date']
        description = body['description']

        new_event = {
            "title": title,
            "date": date,
            "description": description
        }

        # Read existing events

        try:

            response = s3.get_object(
                Bucket=BUCKET_NAME,
                Key=FILE_NAME
            )

            content = response['Body'].read().decode('utf-8')

            events = json.loads(content)

        except:

            events = []

        # Append new event

        events.append(new_event)

        # Save updated events list

        s3.put_object(
            Bucket=BUCKET_NAME,
            Key=FILE_NAME,
            Body=json.dumps(events),
            ContentType='application/json'
        )

        # Send SNS Notification

        sns.publish(
            TopicArn=TOPIC_ARN,
            Subject='New Event Announcement',
            Message=f'''
New Event Created

Title: {title}

Date: {date}

Description:
{description}
'''
        )

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'message': 'Event created successfully'
            })
        }

    except Exception as e:

        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': str(e)
            })
        }
