from django.contrib.sitemaps import Sitemap
from blogposts.models import Blogpost

class BlogpostSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.5

    def items(self):
        return Blogpost.objects.filter(is_visible=True)

    def lastmod(self, obj):
        return obj.published_date