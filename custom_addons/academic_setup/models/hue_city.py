from odoo import models,fields

class HueCities(models.Model):
    _name = "hue.city"
    _description = "Hue Cities"

    name = fields.Char(string="Name", required=True)
    en_name = fields.Char(string="English Name")
    d_id =fields.Char(string="External ID")