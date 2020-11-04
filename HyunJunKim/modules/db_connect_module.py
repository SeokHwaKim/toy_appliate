# -*- coding: utf-8 -*-
import pymongo

from pymongo import MongoClient

class Database():

    def __init__(self):
        print('Exmaple database init')

    def insert_data(self, value):

        ip = 'localhost'
        port = 27017

        connection = pymongo.MongoClient(ip, port)

        print(connection.list_database_names())

        database = connection.get_database('test')

        print(database.list_collection_names())

        collection = database.get_collection('result')

        collection.insert_one({"result":value})

        data_result = collection.find()

        #collection.drop()

        list = []

        for i in data_result:
            list.append(i.pop('result'))

        return list
