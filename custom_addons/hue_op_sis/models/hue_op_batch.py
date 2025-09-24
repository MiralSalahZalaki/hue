from odoo import models, fields, api


class HueBatch(models.Model):
    _inherit = 'op.batch'
    _description = ' Hue Batches'


    academic_year = fields.Many2one("op.academic.year", string = "Academic Year")
    semester = fields.Many2one("hue.semester", string= "Semester")
    default_week_start = fields.Date(string = "Default week start")
    default_week_end = fields.Date(string = "Default week end")
    tree_clo_acl_ids = fields.Char(string = "Tree Clo Acl")
    control_allowed = fields.Boolean(string="Allowed For Control")
    allow_registration_invoicing = fields.Boolean(string="Allow Registration Invoicing")
    intern_batch = fields.Boolean(string=" Intern Batch")
    subject_registration_ids = fields.One2many("op.subject.registration", "batch_id", string= "Subject Registrations")

class SubjectRegistrations(models.Model):
    _inherit = 'op.subject.registration'

    lecture_hours = fields.Float("Lect.Hrs") 
    practical_hours = fields.Float("Pract.Hrs")
    section_hours = fields.Float("Sec.Hrs")
    selection_count = fields.Integer("Sections/group")
    practical_count = fields.Integer("Practical/group")
    group_count = fields.Integer("Groups")
    subject_levels = fields.Many2one("op.subject.registration", string = "Levels")
    subject_id = fields.Many2one("op.subject.registration", string="Subject")










