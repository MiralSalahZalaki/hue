from odoo import models, fields


class HueCertificate(models.Model):
    _name = 'hue.certificate'
    _description = 'Hue Certificates'

    name = fields.Char(string='Name')
    d_id = fields.Char(string='External ID')
    certificate_active = fields.Boolean(string='Certificate Active')
    certificate_type = fields.Selection([('مصرية', 'مصرية'), ('عربية', 'عربية') , ('أجنبية', 'أجنبية')], string='Certificate Type')
    enroll_code = fields.Char(string='Enroll Code')