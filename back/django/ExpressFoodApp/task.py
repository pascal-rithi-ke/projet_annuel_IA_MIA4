from django.utils import timezone
from background_task import background

import pymongo
from bson.objectid import ObjectId
from dotenv import load_dotenv
import os

# Load env variables
load_dotenv()

user = os.getenv("MONGO_USER")
password = os.getenv("MONGO_PASSWORD")
host = os.getenv("MONGO_HOST")
db_name = os.getenv('MONGO_DTB_NAME')

db_collect_cmd = os.getenv('MONGO_DTB_COLLECT_CMD')
db_collect_livreurs = os.getenv('MONGO_DTB_COLLECT_LIVREURS')

# Connection to MngoDB
uri = f'mongodb+srv://{user}:{password}@{host}/'

@background(schedule=10)  # Planifiez la tâche pour 20 minutes plus tard
def update_order_and_driver_status(order_id, driver_id):
    #Récupérez la commande et le livreur correspondants
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    orders = db[db_collect_cmd]
    drivers = db[db_collect_livreurs]
    
    order = orders.find_one({'_id': ObjectId(order_id)})
    driver = drivers.find_one({'_id': ObjectId(driver_id)})
    
    # Mettre à jour le statut de la commande et du livreur
    order['status'] = 'Livrée'
    driver['availability'] = True
    
    # Mettre à jour la base de données
    orders.update_one({'_id': ObjectId(order_id)}, {'$set': order})
    drivers.update_one({'_id': ObjectId(driver_id)}, {'$set': driver})