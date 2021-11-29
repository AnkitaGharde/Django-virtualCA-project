from django.db import models
from phone_field import PhoneField

# Create your models here.

class candidate(models.Model):
    Firstname=models.CharField(max_length=50)
    Lastname=models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    mobile = PhoneField(blank=True, help_text='Contact phone number')
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.Firstname




class Contact(models.Model):
    Your_Name=models.CharField(max_length=200)
    Your_Email = models.EmailField(max_length=100)
    Phone = PhoneField(blank=True, help_text='Contact phone number')
    Your_Message=models.TextField()

    def __str__(self):
        return self.Your_Name


