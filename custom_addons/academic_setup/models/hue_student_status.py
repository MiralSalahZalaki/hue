from odoo import models, fields


class HueStudentStatus(models.Model):
    _name = 'hue.student.status'
    _description = 'Hue Student Status'

    name = fields.Char(string='Name')
    en_name = fields.Char(string='English Name')
    d_id = fields.Char(string='External ID')
    active_invoice = fields.Boolean(string='Active Invoice')
