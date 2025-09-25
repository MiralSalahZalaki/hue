{
    'name': 'HUE SIS Customization',
    'version': '18.0.1.0.0',
    'category': 'Education',
    'summary': 'Custom HUE SIS OpenEduCat',
    'description': """
        This module customize SIS module of OpenEduCat
    """,
    'depends': ['base', 'openeducat_core','account','openeducat_exam', 'academic_setup'],
    'data': [
        'security/ir.model.access.csv',

        # Configuration
        'views/hue_op_course.xml',
        'views/hue_op_batch.xml',

    ],
    'installable': True,
    'application': True,
}
