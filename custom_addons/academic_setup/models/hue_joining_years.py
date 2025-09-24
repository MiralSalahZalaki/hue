from odoo import models, fields, api


class HueJoiningYears(models.Model):
    _name = 'hue.joining.years'
    _description = ' Hue Joining Years'


    d_id = fields.Char(string="External ID")
    name = fields.Char(string="Name")
    active = fields.Boolean(string="Active")
