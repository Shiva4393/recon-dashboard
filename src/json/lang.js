
const header = {
    users: {
        label: 'Users',
        icon: 'person_outline',
        children: {

        }
    },
    admin: {
        label: 'Admin',
        icon: 'person_outline',
        children: {

        }
    }
}

const Admin = {
    list: [
        {
            id: 1, label: 'Accounting', catagories: [
                { id: 11, label: 'Cost Codes', link: 'cost-codes' },
                { id: 12, label: 'Markups', link: 'markups' },
                { id: 13, label: 'Misc - Expensis', link: 'misc-expensis' }
            ]
        },
        {
            id: 2, label: 'Company', catagories: [
                { id: 21, label: 'Business Rules', link: '' },
                { id: 22, label: 'Catagories', link: '' },
                { id: 23, label: 'Company Codes', link: '' },
                { id: 24, label: 'Departments', link: '' },
                { id: 25, label: 'Designations', link: '' },
                { id: 26, label: 'Distribution Types', link: '' },
                { id: 27, label: 'File Categories', link: '' },
                { id: 28, label: 'Forms', link: '' },
                { id: 29, label: 'Generic Forms', link: '' },
                { id: 210, label: 'Groups', link: '' },
                { id: 211, label: 'Products', link: '' },
                { id: 212, label: 'Services', link: '' },
                { id: 213, label: 'Specifications', link: '' },
                { id: 214, label: 'Vendor Types', link: '' }
            ]
        },
        {
            id: 3, label: 'Workflow', catagories: [
                { id: 31, label: 'Task Types', link: '' },
                { id: 32, label: 'Taks Statuses', link: '' },
                { id: 33, label: 'Task Workflows', link: '' },
                { id: 34, label: 'Project Types', link: '' },
                { id: 35, label: 'Project Statuses', link: '' },
                { id: 36, label: 'Project Workflows', link: '' }
            ]
        },
        {
            id: 4, label: 'Schedule', catagories: [
                { id: 41, label: 'Milestones', link: '' },
                { id: 42, label: 'Schedule Templates', link: '' },
                { id: 43, label: 'Tasks', link: '' },
                { id: 44, label: 'Vendor Templates', link: '' }
            ]
        },
        {
            id: 5, label: 'Vendors', catagories: [
                { id: 51, label: 'Capabilities', link: '' },
                { id: 52, label: 'Capability Category', link: '' },
                { id: 53, label: 'Equipment Category', link: '' },
                { id: 54, label: 'Equipment Specs', link: '' }
            ]
        }
    ]
}

export {
    header,
    Admin
};