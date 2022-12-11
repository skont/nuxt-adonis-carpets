export function constructMessage(msgtype, vals) {
    //console.log(msgtype);
    const removeEmptyOrNull = (obj) => {
        Object.keys(obj).forEach(k =>
            (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
            (!obj[k] && obj[k] !== undefined) && delete obj[k] ||
            (!obj[k] && obj[k] == undefined) && delete obj[k]
        );
        return obj;
    };

    let msg=''
    
    if (msgtype === 'edititem') {
        msg =
        {
            'EditItem': {
                'Edits': {
                    'Edit':
                    {
                        'Item': {
                            'ItemID': vals.ItemID,
                            'Warehouse': vals.Warehouse,
                            'Location': vals.Location
                        }
                    },
                    'ChangeReason': vals.ChangeReason
                }
            }
        }

    }

    if (msgtype === 'jumboregistration') {
        msg =
        {
            'JumboRegistration': {
                'Jumbo': {
                    'JumboID': vals.JumboID
                }
            }
        }
    }

    return (
        removeEmptyOrNull(msg)
    )
}