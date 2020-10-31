# -*- coding: utf-8 -*-
#indent: 1 tab -> 4 sp

from flask.views import MethodView
from flask import render_template, request

from modules.example_module import Example
from modules.db_connect_module import Database

class MainController(MethodView):
    template_name = None
    url = None
    example_handler = None
    example_insert  = None

    def __init__(self):
        self.url='/'
        self.template_name='main.html'
        self.example_handler = Example()
        self.example_insert  = Database()

    def get(self):
        print('This reuqest is HTTP GET method')
        return render_template(self.template_name)


    def post(self):
        test_value_1 = request.form['example_form_value_1']
        test_value_2 = request.form['example_form_value_2']
        sum_result = self.example_handler.sum(test_value_1, test_value_2)

        data_result = self.example_insert.insert_data(sum_result)

        return render_template(self.template_name,
                example_result = data_result)
