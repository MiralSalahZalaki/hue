from odoo import models, fields


class HueNationalities(models.Model):
    _name = 'hue.nationality'
    _description = 'Hue Nationalities'

    name = fields.Char(string='Name')
    en_name = fields.Char(string='English Name')
    d_id = fields.Char(string='External ID')
    foreign_nationality = fields.Boolean(string='Foreign Nationality')