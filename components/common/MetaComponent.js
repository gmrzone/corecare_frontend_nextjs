import Head from 'next/head'
const MetaComponent = ({ title, name, description="Corecare is the best cleaning and maintanence services in Mumbai. Navimumbai and Pune. Login to get Exciting offers.", url }) => {

    return (
        <Head>

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />



            <meta name="robots" content="all" />
            <meta property="og:site_name" content="CoreCare" />
            <meta property="og:url" content={url}/>
            <link rel="canonical" href={url} />
            <meta property="og:type" content= "website" />
            <link rel="image_src" href="" />
            <meta property="og:image" itemProp="image primaryImageOfPage" content="/android-chrome-512x512.png" />
            <meta name="robots" content="follow" />
            <meta name="author" content="Afzal Saiyed" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={name}></meta>
            <meta name="description" content={description} />
            <meta name="twitter:domain" content="corecare.in"/>
            <meta name="twitter:site" content="@Corecare" />
            <meta name="twitter:creator" content="@Corecare" />
            <meta name="twitter:title" property="og:title" itemProp="name" content={title} />
            <meta name="twitter:description" property="og:description" itemProp="description" content={description} />
          


            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}

export default MetaComponent