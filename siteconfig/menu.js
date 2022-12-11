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
                path: '/forms/edititem'
            },
            {
                divider: true
            },
            {
                title: 'Jumbo Registration',
                path: '/forms/jumboregistration'
            }
        ]
    }
]

export const site =
{
    title: 'GM ESE',
}