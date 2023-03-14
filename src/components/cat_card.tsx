import cat1 from '../assets/images/cat1.jpg';
import cat2 from '../assets/images/cat2.jpg';
import cat3 from '../assets/images/cat3.jpg';
import cat4 from '../assets/images/cat4.jpg';
import cat5 from '../assets/images/cat5.jpg';
import cat6 from '../assets/images/cat6.jpg';
import cat7 from '../assets/images/cat7.jpg';
import cat8 from '../assets/images/cat8.jpg';
import cat9 from '../assets/images/cat9.jpg';
import cat10 from '../assets/images/cat10.jpg';
import cat11 from '../assets/images/cat11.jpg';
import cat12 from '../assets/images/cat12.jpg';
import CatImage from "./cat_image";

interface CatCardProps {
    name: string,
    species: string,
    favFoods: Array<string>,
    birthYear: number,
    catIndex: number
}

const images = [
	{
		image: cat1,
		altText: 'Black and white cat in the dark',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'amblin',
		attributionUrl: 'https://www.flickr.com/people/amblin/'
	},
	{
		image: cat2,
		altText: 'Skinny ginger cat',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'ivva',
		attributionUrl: 'https://www.flickr.com/people/ivva/'
	},
	{
		image: cat3,
		altText: 'Tabby cat in the dark',
		licenceType: 'CC BY-ND 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
		attributionName: 'Rachele Pettarelli Ph',
		attributionUrl: 'https://www.flickr.com/people/rachephotos/'
	},
	{
		image: cat4,
		altText: 'Top part of a cat\'s face, upside down',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'renarl',
		attributionUrl: 'https://www.flickr.com/people/renarl/'
	},
	{
		image: cat5,
		altText: 'Plump ginger cat',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'x-oph',
		attributionUrl: 'https://www.flickr.com/people/x-oph/'
	},
	{
		image: cat6,
		altText: 'Grey cat, held by the neck, looking shocked',
		licenceType: 'CC BY-ND 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
		attributionName: 'arrathoonlaa@att.net',
		attributionUrl: 'https://www.flickr.com/people/21851382@N04/'
	},
	{
		image: cat7,
		altText: 'Scruffy grey kitten',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'pavlovskyy',
		attributionUrl: 'https://www.flickr.com/people/pavlovskyy/'
	},
	{
		image: cat8,
		altText: 'Fairly fat ginger and white cat',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'AleGranholm',
		attributionUrl: 'https://www.flickr.com/people/darthale/'
	},
	{
		image: cat9,
		altText: 'White cat with make up, maybe',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'Sardonic G',
		attributionUrl: 'https://www.flickr.com/people/24039825@N06/'
	},
	{
		image: cat10,
		altText: 'Young tabby cat, stretching',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'www.metaphoricalplatypus.com',
		attributionUrl: 'https://www.flickr.com/people/29638108@N06/'
	},
	{
		image: cat11,
		altText: 'Tubby, orangey cat, lying on its back',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'abraham.williams',
		attributionUrl: 'https://www.flickr.com/people/4braham/'
	},
	{
		image: cat12,
		altText: 'Persian cat, giving a hard stare',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'x-oph',
		attributionUrl: 'https://www.flickr.com/people/x-oph/'
	}
];

const CatCard : React.FC<CatCardProps> = ({name, species, favFoods,
    birthYear, catIndex}) =>  {
    return(
        <div className="card">
            <h3 className="card__text card__header">{name}</h3>
            <p className="card__text">{species}</p>
            <p className="card__text">{favFoods}</p>
            <p className="card__text">{birthYear}</p>
            { catIndex < images.length &&
            <CatImage  
			    imageSrc={images[catIndex].image}
			    altText={images[catIndex].altText}
			    licenceType={images[catIndex].licenceType}
			    licenceUrl={images[catIndex].licenceUrl}
			    attributionName={images[catIndex].attributionName}
			    attributionUrl={images[catIndex].attributionUrl} />
            }
            </div>
    )
}

export default CatCard;