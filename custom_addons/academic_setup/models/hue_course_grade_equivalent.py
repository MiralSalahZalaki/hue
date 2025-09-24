from odoo import models, fields


class HueCourseGradeEquivalent(models.Model):
    _inherit = "op.grade.configuration"

    course_id = fields.Many2one('op.course', string='Course')