# Generated by Django 4.0.1 on 2022-03-04 07:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='sample.jpg', null=True, upload_to=''),
        ),
    ]
