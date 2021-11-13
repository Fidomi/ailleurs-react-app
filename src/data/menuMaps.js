import Image from '../assets/jessica-rockowitz-unsplash.jpg';
import Image2 from '../assets/christian-bowen-unsplash.jpg';
import Image3 from '../assets/pine-watt-unsplash.jpg';
import Logo from '../assets/family.png';
import Logo2 from '../assets/health-care.png';
import Logo3 from '../assets/environment.png';

const CARDS = [
    {
        name: 'Vie Quotidienne',
        imagePath: Image,
        logoPath: Logo,
        link: '/cartes/family'
    },
    {
        name: 'Santé et Sécurité',
        imagePath: Image2,
        logoPath: Logo2,
        link: '/cartes/security'
    },
    {
        name: 'Environnement',
        imagePath: Image3,
        logoPath: Logo3,
        link: '/cartes/environment'
    }
];

export default CARDS;
