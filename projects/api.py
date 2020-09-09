from rest_framework import viewsets, permissions
from .models import Project
from .serializers import ProjectSerializer


class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permissions = [
        permissions.AllowAny
    ]
    serializer_class = ProjectSerializer

