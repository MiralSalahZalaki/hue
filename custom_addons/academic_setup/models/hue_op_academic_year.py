from odoo import models, fields, api


class AcademicYear(models.Model):
    _inherit = 'op.academic.year'
    _description = 'Academic Year'

    year = fields.Selection(
        [(str(y), str(y)) for y in range(2010, 2027)],
        string="Year",
    )
    run_semester_gpa = fields.Boolean(string='Run Semester GPA')
    timetable_current = fields.Boolean(string='Timetable Current')
    sequence = fields.Integer(string='Sequence')
    year_code = fields.Integer(string='Year Code')
    invoice_date = fields.Date(string='Invoice Date')
    # join_yare = fields.Many2one(string='Join Yare')
    # term_ids = fields.one2many(string='Terms')









