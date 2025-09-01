from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Note


@admin.register(User)
class CustomUserAdmin(BaseUserAdmin):
    ordering = ("user_email",)
    list_display = ("user_email", "user_name", "is_staff", "is_active")

    fieldsets = (
        (None, {"fields": ("user_email", "password")}),
        ("Personal Info", {"fields": ("user_name",)}),
        ("Permissions", {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("user_email", "user_name", "password1", "password2", "is_staff", "is_active"),
        }),
    )

    search_fields = ("user_email", "user_name")


@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ("note_title", "user", "created_on", "last_update")
