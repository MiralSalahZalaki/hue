from odoo import models, fields, api


class HueInstallments(models.Model):
    _name = 'hue.installments'
    _description = ' Hue Installments'

    name = fields.Char(string='Name')
    installments = fields.Integer(string='Installments')
    one_time = fields.Boolean(string='One Time')
    extra_inv = fields.Boolean(string='Extra Inv')
    foreign_nationality = fields.Boolean(string='Foreign Nationality')
    special_case = fields.Boolean(string='Special Case')
    currency = fields.Many2one("res.currency", string='Currency')








