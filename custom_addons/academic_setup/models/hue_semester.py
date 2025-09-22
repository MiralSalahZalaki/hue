from odoo import models, fields


class HueSemester(models.Model):
    _name = 'hue.semester'
    _description = 'Hue Semester'

    name = fields.Char(string='Name', required=True)
    sequence = fields.Integer(string='Sequence', default=0)
    term_id=fields.Many2one('op.academic.term', string='Term', required=True)
    timetable_sds_current = fields.Boolean(string='Timetable SDS Current')
    enroll_semester=fields.Boolean(string='Enroll Semester')
    postgraduate=fields.Boolean(string='Postgraduate')
    run_semester_gpa = fields.Boolean(string='Run Semester GPA')
    open_registration=fields.Boolean(string='Open Registration')
    run_gpa_postgraduate=fields.Boolean(string='Run GPA Postgraduate')