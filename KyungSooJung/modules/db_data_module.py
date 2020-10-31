# -*- coding:utf-8 -*-

from module.dbHandler import Database

class DataHandler():
    dbHandler = None
    def __init__(self, type):
        self.dbHandler = Database()

    def getAll(self, param=''):

        sql = "SELECT * from table" #db_table name
        row = self.dbHandler.executeAll(sql)

        return row[0]['cnt']

