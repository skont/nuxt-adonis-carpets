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
                path: '/messages/edititem'
            },
            {
                divider: true
            },
            {
                title: 'Jumbo Registration',
                path: '/messages/jumboregistration'
            }
        ]
    }
]

export const site =
{
    title: 'GM ESE',
}