import { integer, relationship, select, text } from "@keystone-next/fields";
import { list } from '@keystone-next/keystone/schema'
import { ProductImage } from "./ProductImage";

export const Product = list({
    fields: {
        name: text({ isRequired: true }),
        description: text({
            ui: {
                displayMode: 'textarea'
            }
        }),
        status: select({
            options: [
                { label: 'Draft', value: 'DRAFT' },
                { label: 'Available', value: 'AVAILABLE' },
                { label: 'UnAvailable', value: 'UNAVAILABLE' }
            ],
            defaultValue: 'DRAFT'
        }),
        price: integer(),
        photo: relationship({
            ref: 'ProductImage.product',
            ui: {
                displayMode: 'cards',
                cardFields: ['image', 'altText'],
                inlineEdit: { fields: ['image', 'altText'] },
            }
        })
    }
})