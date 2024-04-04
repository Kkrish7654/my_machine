from django.http import JsonResponse
from django.views import View
import json


class ViewModel(View):
    def get_user_details(request):
        data = {
            'name': 'krish vishwakarma',
            'age': 19,
            'designation': 'software engineer'
        }
        return JsonResponse(data)

    def post(req):
        try:
            # data = json.loads(req.body)
            # print(data)
            return JsonResponse({"message":"true"})
        except:
            return JsonResponse({"message": "failed"})
