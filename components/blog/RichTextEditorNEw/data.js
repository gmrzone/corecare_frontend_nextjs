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
        block_name: 'header-one',
        class_name: 'heading_h1',
    },
    {
        id: 3,
        name: "H2",
        block_name: 'header-two',
        class_name: 'heading_h2',
    },
    {
        id: 4,
        name: "H3",
        block_name: 'header-three',
        class_name: 'heading_h3',
    },
    {
        id: 5,
        name: "H4",
        block_name: 'header-four',
        class_name: 'heading_h4',
    },
    {
        id: 6,
        name: "H5",
        block_name: 'header-five',
        class_name: 'heading_h5',
    },
    {
        id: 7,
        name: "H6",
        block_name: 'header-six',
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
            class_name: 'font_size',
        }
    )
}

const alignIcons = [
    {
        id: `icon_${1}`,
        name: <i className="fa fa-align-left" aria-hidden="true" />,
        block_name: 'AlignLeft',
        class_name: 'align_left',
    },
    {
        id: `icon_${2}`,
        name: <i className="fa fa-align-center" aria-hidden="true" />,
        block_name: 'AlignCenter',
        class_name: 'align_center',
    },    {
        id: `icon_${3}`,
        name: <i className="fa fa-align-right" aria-hidden="true" />,
        block_name: 'AlignRight',
        class_name: 'align_right',
    }
]

const styleMap = {
    'BOLD': {
        color: '#000000',
        fontWeight: 'bold',
    },
    'BLACK': {
        color: "black"
    },
    'CRIMSON': {
        color: 'crimson'
    },
    'CADETBLUE': {
        color: 'cadetblue'
    },
    'BLUE': {
        color: 'blue'
    },
    'GREY': {
        color: 'grey'
    },
    'GREEN': {
        color: 'green'
    },
    'ORCHID': {
        color: 'orchid'
    },
    "PINK": {
        color: 'pink'
    },
    'BROWN': {
        color: 'brown'
    },
    'NAVY': {
        color: 'navy'
    },
    'PURPLE': {
        color: 'purple'
    },
    'DARKTURQUOISE' : {
        color: 'darkturquoise'
    }
}
export { FontSizeData, alignIcons, styleMap }
