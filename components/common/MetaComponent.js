import Head from 'next/head'
const MetaComponent = ({ title, name, description, url }) => {

    return (
        <Head>
            <meta name="robots" content="all" />
            <meta property="og:site_name" content="CoreCare" />
            <meta property="og:url" content={url}/>
            <link rel="canonical" href={url} />
            <meta property="og:type" content= "website" />
            <link rel="image_src" href="" />
            <meta property="og:image" itemprop="image primaryImageOfPage" content="/android-chrome-512x512.png" />
            <meta name="robots" content="follow" />
            <meta name="author" content="John Doe" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={name}></meta>
            <meta name="description" content={description} />
            <meta name="twitter:domain" content="corecare.in"/>
            <meta name="twitter:site" content="@Corecare" />
            <meta name="twitter:creator" content="@Corecare" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" key="symantic"/>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB" crossorigin="anonymous" key="fontawesome"/>
            <meta name="twitter:title" property="og:title" itemprop="name" content={title} />
            <meta name="twitter:description" property="og:description" itemprop="description" content={description} />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest"></link>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}

export default MetaComponent