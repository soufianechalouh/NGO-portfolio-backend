from rest_framework import viewsets, permissions
from .models import Project
from .serializers import ProjectSerializer


class ProjectsAPI(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permissions = [
        permissions.AllowAny
    ]
    serializer_class = ProjectSerializer

