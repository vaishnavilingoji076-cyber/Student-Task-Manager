from django.urls import path # type: ignore
from .views import task_list,task_delete

urlpatterns = [
    path('Task/',task_list),
    path('delete/<int:id>/',task_delete),
]
