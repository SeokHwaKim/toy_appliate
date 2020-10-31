# -*- coding:utf-8 -*-

from flask import Flask, Response
from controller.main import MainController

class FlaskApp():
    app = None

    def __init__(self):
        self.app = Flask(__name__)
        self.register_controller(MainController, 'main', '/')


    def run(self):
        self.app.run(host='127.0.0.1', port='5000', debug=True)

    def register_controller(self, view, endpoint, url, pk=None, pk_type=None):
        view_func = view.as_view(endpoint)
        self.app.add_url_rule(url, view_func=view_func, methods=['GET',])
        self.app.add_url_rule(url, view_func=view_func, methods=['POST',])
        if pk is not None:
            self.app.add_url_rule('%s<%s:%s>' % (url, pk_type, pk), view_func=view_func, methods=['GET','PUT','DELETE'])


if __name__ == "__main__":
    flask = FlaskApp()
    flask.run()
