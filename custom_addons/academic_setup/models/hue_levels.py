from odoo import models, fields, api


class HueLevels(models.Model):
    _name = 'hue.levels'
    _description = ' Hue levels'

    name = fields.Char(string="Name")