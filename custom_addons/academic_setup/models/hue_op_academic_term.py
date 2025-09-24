from odoo import models, fields, api


class HueAcademicTerm(models.Model):
    _inherit = 'op.academic.term'
    _description = 'Hue Academic Term'


    from_date = fields.Date(string='From Date')
    to_date = fields.Date(string='To Date')
    active_validation = fields.Boolean(string="Active Validation")
    active_run = fields.Boolean(string="Active Run")
    semester_id = fields.Many2one("hue.semester", string="Semester")
   #global_term_id = fields.Many2one(",string='Global Term')

