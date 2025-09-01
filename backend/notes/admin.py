from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Note

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    pass

@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ("note_title", "user", "created_on", "last_update")
