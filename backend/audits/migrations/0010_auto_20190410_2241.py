# Generated by Django 2.1.7 on 2019-04-10 20:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("audits", "0009_auto_20190410_2108")]

    operations = [
        migrations.AddField(
            model_name="auditresults",
            name="script_step_name",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="auditresults",
            name="script_step_number",
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
