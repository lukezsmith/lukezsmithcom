from django.urls import path
from blogposts.api.views import BlogpostViewSet, DevelopmentBlogpostViewSet, BooksBlogpostViewSet, InternetBlogpostViewSet, ThoughtsBlogpostViewSet, ArtBlogpostViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# register all posts url in api
router.register(r'all', BlogpostViewSet, basename='all')
# register development posts url in api
router.register(r'development', DevelopmentBlogpostViewSet,
                basename='development')
# register books posts url in api
router.register(r'books', BooksBlogpostViewSet,
                basename='books')
# register internet posts url in api
router.register(r'internet', InternetBlogpostViewSet,
                basename='internet')
# register thoughts posts url in api
router.register(r'thoughts', ThoughtsBlogpostViewSet,
                basename='thoughts')
# register art posts url in api
router.register(r'art', ArtBlogpostViewSet,
                basename='art')
urlpatterns = router.urls
