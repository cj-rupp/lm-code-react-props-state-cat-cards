import { Fragment } from 'react';
interface CatImageProps {
    imageSrc: string,
    altText: string,
    licenceType: string,
    licenceUrl: string,
    attributionName?: string,
    attributionUrl?: string
}

const CatImage: React.FC<CatImageProps> = ({ imageSrc, altText, licenceType,
    licenceUrl, attributionName, attributionUrl }) => (
    <>
        <img className='card__image' src={imageSrc} alt={altText} />
        <p className='card__text__small'>
            Image licenced under <a href={licenceUrl}>{licenceType}</a>
            {attributionName && (
                <>
                    &nbsp;by <a href={attributionUrl}>{attributionName}</a>
                </>
            )}
        </p>
    </>
)

export default CatImage;