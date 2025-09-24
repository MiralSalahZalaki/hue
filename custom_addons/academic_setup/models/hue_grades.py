from odoo import models, fields, api


class HueGrades(models.Model):
    _name = 'hue.grades'
    _description = ' Hue Grades'

    name = fields.Char(string='Name')
    pass_grade = fields.Boolean(string='Pass Grade')
    add_to_gpa = fields.Boolean(string='Add To Gpa')
    theoretical_fail = fields.Boolean(string='Theoretical Fail')
    absent_grade = fields.Boolean(string='Absent Grade')
    sequence = fields.Integer(string='Sequence')


