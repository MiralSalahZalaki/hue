from odoo import models, fields, api


class HueAcademicYear(models.Model):
    _inherit = 'op.academic.year'
    _description = ' Hue Academic Year'

    year = fields.Selection(
        [(str(y), str(y)) for y in range(2010, 2027)],
        string="Year",
    )
    run_semester_gpa = fields.Boolean(string='Run Semester GPA')
    timetable_current = fields.Boolean(string='Timetable Current')
    sequence = fields.Integer(string='Sequence')
    year_code = fields.Integer(string='Year Code')
    invoice_date = fields.Date(string='Invoice Date')
    join_year = fields.Many2one('hue.joining.years',string='Join Yare')









