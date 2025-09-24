from odoo import models, fields


class HueRegistrationBlock(models.Model):
    _name = 'hue.registration.block'
    _description = 'Hue Registration Block'

    name = fields.Char(string='Name')