export const mainmenu = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Ping',
        path: '/ping',
    },
    {
        title: 'Messages',
        id: '1',
        submenu: [
            {
                title: 'Edit Item',
                path: '/edititem'
            },
            {
                divider: true
            },
            {
                title: 'Sub2',
                path: '/'
            }
        ]
    }
]

export const site =
{
    title: 'GM ESE',
}