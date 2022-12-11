export function constructMessage(msgtype, vals) {
    //console.log(msgtype);
    const removeEmptyOrNull = (obj) => {
        Object.keys(obj).forEach(k =>
            (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
            (!obj[k] && obj[k] !== undefined) && delete obj[k]
        );
        return obj;
    };

    if (msgtype === 'edititem') {
        return (
            {
                'EditItem': {
                    'Edits': {
                        'Edit':
                        {
                            'Item': removeEmptyOrNull(vals)
                        },
                        'ChangeReason': 'TI'
                    }
                }
            }
        )
    }

    if (msgtype === 'jumboregistration') {
        return (
            {
                'JumboRegistration': {
                    'Jumbo': removeEmptyOrNull(vals)
                }
            }
        )
    }
}