from django.urls import path
from blogposts.api.views import BlogpostViewSet, DevelopmentBlogpostViewSet, BooksBlogpostViewSet, InternetBlogpostViewSet, ThoughtsBlogpostViewSet, ArtBlogpostViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# register all posts url in api
router.register(r'all', BlogpostViewSet, base_name='all')
# register development posts url in api
router.register(r'development', DevelopmentBlogpostViewSet,
                base_name='development')
# register books posts url in api
router.register(r'books', BooksBlogpostViewSet,
                base_name='books')
# register internet posts url in api
router.register(r'internet', InternetBlogpostViewSet,
                base_name='internet')
# register thoughts posts url in api
router.register(r'thoughts', ThoughtsBlogpostViewSet,
                base_name='thoughts')
# register art posts url in api
router.register(r'art', ArtBlogpostViewSet,
                base_name='art')
urlpatterns = router.urls
