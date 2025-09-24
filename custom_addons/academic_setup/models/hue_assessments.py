from odoo import models, fields, api


class HueAssessments(models.Model):
    _name = 'hue.assessments'
    _description = ' Hue Assessments'

    name = fields.Char(string='Name')
    control_field = fields.Selection([
        ('quiz', 'Quiz'),
        ('exam', 'Exam'),
        ('assignment', 'Assignment'),
    ], string="Control Field")
