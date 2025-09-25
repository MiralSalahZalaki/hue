from odoo import models,fields
class HueOpCourse(models.Model):
    _inherit = "op.course"
    _description = 'Hue Op Course'

    section = fields.Char('Section')
    credit_hours = fields.Integer('Credit Hours')
    core_hours = fields.Integer('Core Hours')
    faculty_id = fields.Many2one('op.department', 'Faculty')
    training_hours = fields.Integer('Training hours')
    horus_all_semesters = fields.Boolean('Horus All Semesters')
    control_email = fields.Char('Control Email')
    intern_year = fields.Boolean('Intern Year')
    postgraduate = fields.Boolean('Postgraduate')
    credit_hours = fields.Integer('Credit Hours',required=True)
    elective_hours = fields.Integer('Elective Hours')
    project_hours = fields.Integer('Project Hours')
    honors_hours = fields.Float('Honors Hours')
    faculty_ids = fields.Many2many('op.faculty', string='Faculties')
    sds_to_be_deleted = fields.Boolean('SDS to be deleted')
    tree_clo_acl_ids =fields.Char('Tree Clo Acl')
    enhancements = fields.Selection([('yes', 'Yes'), ('no', 'No')], string='Enhancements')
    gpa_fails_count=fields.Selection([('0', '0'), ('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6')], string='GPA Fails Count')
    course_results_publish_ids = fields.One2many('hue.course.result.publish', 'course_id', string='Course Results Publish')
    
    fr_percent = fields.Float('FR Percent')
    fr_grade = fields.Many2one('hue.grades', 'FR Grade')
    absence_grade = fields.Many2one('hue.grades', 'Absence Grade')
    pass_degree = fields.Float('Pass Degree')
    second_pass_degree = fields.Float('Second Pass Degree')
    deduction_grade_first = fields.Many2one('hue.grades', 'Deduction Grade First')
    deduction_grade_second = fields.Many2one('hue.grades', 'Deduction Grade Second')





class HueCourseResultPublish(models.Model):    
    _name= 'hue.course.result.publish'
    _description = 'Hue Course Result Publish'

    course_id = fields.Many2one('op.course', string='Course')
    publish = fields.Selection([('open', 'Open'),('close', 'Close'), ('publish', 'Publish')], default='open', string='Publish') # Comment
    academic_year_id = fields.Many2one('op.academic.year', string='Academic Year')
    semester_id = fields.Many2one('hue.semester', string='Semester')




