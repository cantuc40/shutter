# Generated by Django 4.0.1 on 2022-01-16 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Camera',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('company', models.CharField(max_length=200)),
                ('format', models.CharField(max_length=200)),
                ('lens_mount', models.CharField(max_length=200)),
                ('price', models.DecimalField(decimal_places=2, max_digits=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Film',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('company', models.CharField(max_length=200)),
                ('format', models.CharField(max_length=200)),
                ('type', models.CharField(max_length=200)),
                ('iso', models.DecimalField(decimal_places=0, max_digits=1000)),
                ('exposures', models.DecimalField(decimal_places=0, max_digits=1000)),
                ('number_of_rolls', models.DecimalField(decimal_places=0, max_digits=10)),
                ('price', models.DecimalField(decimal_places=2, max_digits=1000)),
            ],
        ),
    ]
