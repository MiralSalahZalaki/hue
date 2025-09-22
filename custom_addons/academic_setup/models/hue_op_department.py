from odoo import models, fields

class HueOpDepartment(models.Model):
    _inherit = 'op.department'
    _description = 'HUE Op Department'

    name_ar = fields.Char(string='Name (Arabic)')
    # faculty_create_ou =fields.Many2one('op.faculty', string='Faculty Create OU')
    identifier = fields.Integer(string='Identifier')
    ldap_dn= fields.Char(string='LDAP DN')
    check_questionnaire = fields.Boolean(string='Check Questionnaire')
    intern_year = fields.Boolean(string='Intern Year')
    # jornal_id = fields.Many2one('account.journal', string='Jornal')
