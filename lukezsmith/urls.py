"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.views.generic import TemplateView
from django.urls import path, include, re_path
from django.contrib import admin
from django.contrib.sitemaps import GenericSitemap
from django.contrib.sitemaps.views import sitemap
from blogposts.models import Blogpost

blog_info_dict = {
    'queryset': Blogpost.objects.all()
}

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin-site/login/', admin.site.urls),
    path('api-site/blogposts/', include('blogposts.api.urls')),
    path('api-site/books/', include('books.api.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('sitemap.xml', sitemap, {'sitemaps': {'blogpost': GenericSitemap(blog_info_dict, priority=0.6)}},
     name='django.contrib.sitemaps.views.sitemap'),
    path('robots.txt',TemplateView.as_view(template_name="robots.txt", content_type="text/plain")),
    re_path('.*', TemplateView.as_view(template_name="index.html")),
]



