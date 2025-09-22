{
    'name': 'Academic Setup',
    'version': '18.0.1.0.0',
    'category': 'Custom',
    'summary': 'Custom HUE Academic Setup',
    'description': """
        This module manages academic setup.
    """,
    'depends': ['base', 'openeducat_core'],
    'data': [
        'security/ir.model.access.csv',
        # hue openeducat department views
        'views/base_menu.xml',
        'views/hue_op_department.xml',
        # hue semester views
        'views/hue_semster_view.xml',

        'views/hue_op_academic_year_view.xml',
    ],
    'installable': True,
    'application': True,

    'icon': 'academic_setup/static/description/academic_setup_icon.png',

}
