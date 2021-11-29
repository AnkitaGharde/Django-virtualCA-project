from django.shortcuts import render,redirect
from VirtualCA_app.models import candidate,Contact

from django.core.mail import send_mail
from django.contrib import messages
from django.contrib.auth import login
# Create your views here.
def home(request):
    return render(request,'VirtualCA_app/Home.html')


def signup(request):

    if request.method=="POST":
        Firstname=request.POST['Firstname']
        Lastname=request.POST['Lastname']
        email = request.POST['email']

        mobile = request.POST['mobile']
        password = request.POST['password']
        candidate(Firstname=Firstname,Lastname=Lastname,email=email,mobile=mobile,password=password).save()



        messages.success(request,'The new user' +request.POST['Firstname']+"is  saved Successfully.... ")
        return render(request,'VirtualCA_app/signup_login/login.html')
    else:
        return render(request,'VirtualCA_app/signup_login/signup.html')


def login(request):
    if request.method=="POST":
        try:
            Userdetails=candidate.objects.get(email=request.POST['email'],password=request.POST['password'])
            print("Firstname=",Userdetails)
            request.session['email']=Userdetails.email
            return render(request,'VirtualCA_app/Home.html')
        except candidate.DoesNotExist as e:
             messages.success(request,'Firstname/ password Invalid..')


    return render(request,'VirtualCA_app/signup_login/login.html')





def about(request):
    return render(request,'VirtualCA_app/about.html')




def contact(request):
    if  request.method=="POST":
        Your_Name=request.POST.get('Your_Name')
        Your_Email=request.POST.get('Your_Email')
        Phone=request.POST.get('Phone')
        Your_Message=request.POST.get('Your_Message')
        Contact(Your_Name=Your_Name,Your_Email=Your_Email,Phone=Phone,Your_Message=Your_Message).save()

        return render(request, 'VirtualCA_app/Home.html')
    else:
        return render(request, 'VirtualCA_app/contact.html')



def gst(request):
    return render(request,'VirtualCA_app/GST/gst_form.html')