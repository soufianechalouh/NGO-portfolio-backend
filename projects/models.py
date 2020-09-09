from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=200)
    description = RichTextUploadingField()
    start_date = models.DateField()
    thumbnail = models.ImageField(upload_to='thumbnails', null=True, blank=True)


class ProjectImage(models.Model):
    img = models.ImageField(upload_to='images')
    upload_date = models.DateField(auto_now_add=True)
