from rest_framework.decorators import api_view 
from rest_framework.response import Response 
from.models import Task
from .serializers import TaskSerializer

@api_view(['GET','POST'])
def task_list(request):
     if request.method == 'GET':
         task =Task.objects.all()
         serializer=TaskSerializer(Task,many=True)
         return Response(serializer.data)
     
     if request.method=='POST':
         serializer = TaskSerializer(data=request.data)
         if serializer.is_valid():
             serializer.save()
             return Response(serializer.data)
         
@api_view(['DELETE'])
def task_delete(request,id):
    task=Task.objects.get(id=id)
    task.delete
    return Response({"message":"Task Deleted"})
        