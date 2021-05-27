export const headingOptions = [
    {   
        id: 1,
        name: "Normal",
        block_name: 'unstyled',
        class_name: 'heading_normal'
    },
    {
        id: 2,
        name: "H1",
        block_name: 'heading-one',
        class_name: 'heading_h1',
    },
    {
        id: 3,
        name: "H2",
        block_name: 'heading-two',
        class_name: 'heading_h2',
    },
    {
        id: 4,
        name: "H3",
        block_name: 'heading-three',
        class_name: 'heading_h3',
    },
    {
        id: 5,
        name: "H4",
        block_name: 'heading-four',
        class_name: 'heading_h4',
    },
    {
        id: 6,
        name: "H5",
        block_name: 'heading-five',
        class_name: 'heading_h5',
    },
    {
        id: 7,
        name: "H6",
        block_name: 'heading-six',
        class_name: 'heading_h6',
    }
]

const FontSizeData = []

for (let i = 8; i <= 72; i+=2){
    FontSizeData.push(
        {
            id: `f${i}`,
            name: `${i}px`,
            block_name: `size_${i}`,
            class_name: `fontsize_${i}`
        }
    )
}

const alignIcons = [
    {
        id: `icon_${1}`,
        name: <i class="fa fa-align-left" aria-hidden="true" />,
        block_name: 'align-left',
        class_name: 'align_left',
    },
    {
        id: `icon_${2}`,
        name: <i class="fa fa-align-center" aria-hidden="true" />,
        block_name: 'align-center',
        class_name: 'align_center',
    },    {
        id: `icon_${3}`,
        name: <i class="fa fa-align-right" aria-hidden="true" />,
        block_name: 'align-right',
        class_name: 'align_right',
    }
]
export { FontSizeData, alignIcons }
