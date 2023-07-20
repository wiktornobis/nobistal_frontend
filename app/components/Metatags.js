

export const MetaTags = ({title, description, image, imageUrl, keywords, robots, canonicalLink, hrefLang, href}) => {
  return(
      <>
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
          <meta name="keywords" content={keywords} />
        </>
      )}
       {image && (
        <>
          <meta property="og:title" content={image} />
          <meta name="og:url" content={imageUrl} />
            {/*ma kierować do url strony gdzie jest zdjęcie*/}
        </>
      )}
       <meta name="robots" content={robots} />
       <link rel="alternate" hrefLang={hrefLang} href={href} />
       {canonicalLink && (
          <link rel="canonical" href={canonicalLink} />
       )}
     </>
  )
}