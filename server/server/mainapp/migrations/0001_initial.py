# Generated by Django 5.0.6 on 2024-08-11 21:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Client",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("names", models.CharField(default="", max_length=30)),
                ("last_names", models.CharField(default="", max_length=30)),
                ("birth_date", models.DateField()),
                ("user_name", models.CharField(max_length=50, unique=True)),
                ("email", models.CharField(max_length=254, unique=True)),
                ("password", models.CharField(max_length=50)),
                ("created_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "db_table": "customers",
            },
        ),
        migrations.CreateModel(
            name="Item",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=30)),
                (
                    "kind",
                    models.CharField(
                        choices=[
                            ("PEANUTS", "Cacahuate"),
                            ("CHOCOLATE", "Chocolate"),
                            ("GUMMIES", "Gomitas"),
                            ("SNACK", "Botana"),
                        ],
                        default="GUMMIES",
                        max_length=10,
                    ),
                ),
                ("description", models.TextField()),
                (
                    "brand",
                    models.CharField(
                        choices=[
                            ("AICHOLOTL", "aicholotl"),
                            ("VERO", "Vero"),
                            ("DE_LA_ROSA", "De la Rosa"),
                        ],
                        default="CANDIXOLOTL",
                        max_length=15,
                    ),
                ),
                (
                    "unit_grammage",
                    models.DecimalField(decimal_places=3, default=0.0, max_digits=6),
                ),
                (
                    "image",
                    models.ImageField(blank=True, null=True, upload_to="products/"),
                ),
                (
                    "price",
                    models.DecimalField(decimal_places=2, default=0.0, max_digits=4),
                ),
                ("units", models.IntegerField()),
                ("serie", models.CharField(default="fb94", max_length=4, unique=True)),
                ("created_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "db_table": "products",
            },
        ),
    ]
