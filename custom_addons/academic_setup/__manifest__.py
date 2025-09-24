{
    'name': 'Academic Setup',
    'version': '18.0.1.0.0',
    'category': 'Custom',
    'summary': 'Custom HUE Academic Setup',
    'description': """
        This module manages academic setup.
    """,
    'depends': ['base', 'openeducat_core','account','openeducat_exam'],
    'data': [
        'security/ir.model.access.csv',
        'views/base_menu.xml',

        # hue openeducat academic configuration views
        'views/hue_op_department_view.xml',
        'views/hue_semster_view.xml',

        # hue Registration configuration views
        'views/hue_certificate_view.xml',
        'views/hue_nationality_view.xml',
        'views/hue_city_view.xml',
        'views/hue_registration_block_view.xml',
        'views/hue_student_status_view.xml',

        # hue course grade equivalent views
        'views/hue_grades_view.xml',
        'views/hue_assessments_view.xml',
        'views/hue_course_grade_equivalent_view.xml',

        ######## Academic Configuration #####
         'views/hue_op_academic_year_view.xml',
         'views/hue_op_academic_term_view.xml',
         'views/hue_joining_years_view.xml',
         'views/hue_levels_view.xml',

        ############ Financial ###########
        'views/hue_installments_view.xml',
        #'views/hue_discounts_view.xml',



    ],
    'images': ['static/description/academic_setup_icon.png'],
    'installable': True,
    'application': True,
}
