export function constructMessage(vals){

	const removeEmptyOrNull = (obj) => {
		Object.keys(obj).forEach(k =>
		  (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
		  (!obj[k] && obj[k] !== undefined) && delete obj[k]
		);
		return obj;
	  };

   return(
    {
        'EditItem': {
            'Edits': {
                'Edit':
                {
                    'Item':removeEmptyOrNull(vals)
                },
                'ChangeReason': 'TI'
            }
        }
    }
    )
}