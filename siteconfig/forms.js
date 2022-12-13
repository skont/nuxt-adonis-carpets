export const EditITem = {
    row1: {
        ItemID: {
            type: "text",
            label: "External ID",
            required: true,
            columnclass: "col-3",
            placeholder: "Enter External ID"
        },
        Warehouse: {
            type: "text",
            label: "Warehouse",
            required: true,
            min: 3,
            columnclass: "col-3",
            placeholder: "Enter Warehouse"
        },
    },
    row2: {
        Location: {
            type: "text",
            label: "Location",
            required: false,
            columnclass: "col-3",
            placeholder: "Enter Location"
        },
        ChangeReason: {
            type: "select",
            label: "Change Reason",
            required: true,
            columnclass: "col-3",
            placeholder: "Enter Changereason",
            options: [
                {
                    label: "Technical Issues",
                    value: "TI"
                },
                {
                    label: "Quality Control",
                    value: "QA"
                },
                {
                    label: "Operator Mistake",
                    value: "OM"
                }
            ]
        },
    }
}

export const JumboRegistration = {
    row1: {
        ItemID: {
            type: "text",
            label: "External ID",
            required: true,
            columnclass: "col-3",
            placeholder: "Enter External ID"
        },
    },
    row2: {

        Length: {
            type: "text",
            label: "Length",
            required: true,
            columnclass: "col-3",
            placeholder: "Enter item length"
        },
        Width: {
            type: "text",
            label: "Width",
            required: true,
            columnclass: "col-3",
            placeholder: "Enter item width"
        },
        WeightKG: {
            type: "text",
            label: "Weight (kg)",
            required: true,
            columnclass: "col-3",
            placeholder: "Enter item weight"
        },
    }
}