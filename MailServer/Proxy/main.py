import json
import functions_framework as fnf
from functions_framework import flask

class Processor:
    def __init__(self, request) -> None:
        self.request = request

    def process(self):
        data = json.loads(self.request.get_data())
        print(data)

@fnf.http
def proxy(request):

    if request.method == "GET":
        return flask.jsonify({"status": 200, "message": request.host })
    else:
        processor = Processor(request)
        processor.process()
        return flask.jsonify({"status":200})