import React from 'react';
import Container from 'react-bootstrap/Container';
import Parallax from 'react-rellax'
import Intro from './Intro';
import Header from './Header';
import Footer from './Footer';
import SocialMedia from './SocialMedia';
import TechnologySection from './TechnologySection';
import WorkSection from './WorkSection';

const projects = [
    {
        key: 'web',
        title: 'Web',
        items: [
            {
                title: 'vijoa',
                image: '/images/projects/web/vijoa.jpg',
                link: 'https://vijoa.de/',
                description: 'Created a multilingual and multidomain web site to present the video product of the vijoa based on [Wordpress](https://wordpress.org/). It\'s running in AWS with Docker in a Rancher environment to be scalable and high available.'
            },
            {
                title: 'interim Group',
                image: '/images/projects/web/interim-group.jpg',
                link: 'https://interim-group.de/',
                description: 'Created a multilingual and multidomain web site to present the concept of the interim Group based on [Wordpress](https://wordpress.org/). It\'s running in AWS with Docker in a Rancher environment to be scalable and high available.'
            },
            {
                title: 'SimpliOffice',
                image: '/images/projects/web/simplioffice.jpg',
                link: 'https://simplioffice.com/',
                description: 'Created a multilingual and multidomain web site to present the concept, locations and pricing of the coworking spaces / incubation centers of SimpliOffice based on [Wordpress](https://wordpress.org). See also [simplioffice.de](https://simplioffice.de/), [simplioffice.ru](https://simplioffice.ru/) and [simplioffice.cn](https://simplioffice.cn/). Addtionally to the website has a booking system developed in a micro service environment. That\'s why it\'s running in AWS with Docker in a Rancher environment to be scalable and high available already.'
            },
            {
                title: 'Work in arts',
                image: '/images/projects/web/work-in-arts.jpg',
                link: 'http://work-in-arts.com/',
                description: 'Your job Board in the arts business based on [Wordpress](https://wordpress.org/).'
            },
            {
                title: 'wirkaufens',
                image: '/images/projects/web/wirkaufens.jpg',
                link: 'https://wirkaufens.de',
                description: 'Maintained old backoffice application and shop system and created a microservice architecture for new services.'
            },
            {
                title: 'asgoodasnew',
                image: '/images/projects/web/asgoodasnew.jpg',
                link: 'https://asgoodasnew.de',
                description: 'Created a microservice architecture to manage business channels and connect them with the backoffice for operations and shop system.'
            },
            {
                title: 'Artbutler - Art world solutions',
                image: '/images/projects/web/artbutler.jpg',
                link: 'https://www.artbutler.com',
                description: 'Created a multilingual and multidomain web site to present Artbutler and to support their customers (galleries, artists and collectors) based on [Wordpress](https://wordpress.org). See also [artbutler.com](https://www.artbutler.com/) and [support.artbutler.com](https://support.artbutler.com/).'
            },
            {
                title: 'Plutschow | Felchlin',
                image: '/images/projects/web/plutschowfelchlin.jpg',
                link: 'http://www.plutschowfelchlin.com/',
                description: 'Created a frontend for an existing backend based on the [PHP](https://www.php.net) framework [Symfony 1](https://symfony.com/legacy).'
            },
            {
                title: 'Purple Dog Holidays',
                image: '/images/projects/web/purpledogholidays.jpg',
                link: 'http://www.purpledogholidays.co.uk/',
                description: 'Creating of a fully responsive website based on [Wordpress](https://wordpress.org/).'
            },
            {
                title: 'Tradewise',
                image: '/images/projects/web/tradewise.jpg',
                link: 'http://www.tradewise.biz/',
                description: 'Creating of a fully responsive website based on [Wordpress](https://wordpress.org/).'
            },
            {
                title: 'Circle Culture Gallery',
                image: '/images/projects/web/circleculture.jpg',
                link: 'https://circleculture-gallery.com',
                description: 'Fixed bugs in an existing frontend and backend based on the [PHP](https://www.php.net) framework [Symfony 1](https://symfony.com/legacy).'
            },
            {
                title: 'Gallery Isabelle van den Eynde',
                image: '/images/projects/web/ivde.jpg',
                link: 'https://www.ivde.net',
                description: 'Added new features to an existing frontend based on the [PHP](https://www.php.net) framework [Symfony 1](https://symfony.com/legacy).'
            },
            {
                title: 'Galerie Rupert Pfab',
                image: '/images/projects/web/galerie-pfab.jpg',
                link: 'https://www.galerie-pfab.com/',
                description: 'Added features to an existing frontend and fixed bugs of the backend based on the [PHP](https://www.php.net) framework [Symfony 1](https://symfony.com/legacy).'
            },
            {
                title: 'Galerie Kai Dikhas',
                image: '/images/projects/web/kaidikhas.jpg',
                link: 'https://www.kaidikhas.de/',
                description: 'Adding new features to an existing frontend based on the [PHP](https://www.php.net) framework [Symfony 1](https://symfony.com/legacy).'
            },
            {
                title: 'Galerie Thomas Zander',
                image: '/images/projects/web/galeriezander.jpg',
                link: 'https://www.galeriezander.com/',
                description: 'Adding new features to an existing frontend based on the [PHP](https://www.php.net) framework [Symfony 1](https://symfony.com/legacy).'
            },
            {
                title: 'Jessicas Recipe Bag',
                image: '/images/projects/web/jessicasrecipebag.jpg',
                link: 'http://www.jessicasrecipebag.co.uk/',
                description: 'Development with [Wordpress](https://wordpress.org/) for the frontend and a backend based on the [PHP](https://www.php.net) framework [Symfony 2](https://symfony.com).'
            },
            {
                title: 'Contemporary Fine Arts',
                image: '/images/projects/web/cfa-berlin.jpg',
                link: 'https://cfa-berlin.de',
                description: 'Adding new features like a responsive view for the slideshow and refactoring and reworking of the frontend based on the [PHP](https://www.php.net) framework [Symfony 1](https://symfony.com/legacy).'
            },
            {
                title: 'Linas Matkasse',
                image: '/images/projects/web/linasmatkasse.jpg',
                link: 'https://www.linasmatkasse.se',
                description: 'Development with [Wordpress](https://wordpress.org/) for the frontend and a backend based on the [PHP](https://www.php.net) framework [Symfony 2](https://symfony.com).'
            },
            {
                title: 'Galerie Font Welters',
                image: '/images/projects/web/fonswelters.jpg',
                link: 'https://www.fonswelters.nl/',
                description: 'Refactoring and reworking of the frontend based on the [PHP](https://www.php.net) framework [Symfony 1](https://symfony.com/legacy).'
            },
            {
                title: 'CocoaCode',
                image: '/images/projects/web/cocoacode.jpg',
                link: 'http://www.cocoaco.de/',
                description: 'Our own website has been made using [Drupal](https://www.drupal.org). It\'s a very powerful, flexible and easy to extend content management system.'
            },
            {
                title: 'Galerie Sherin Najjar',
                image: '/images/projects/web/sherinnajjar.jpg',
                link: 'http://www.sherinnajjar.com/',
                description: 'Refactoring and reworking of the frontend based on the [PHP](https://www.php.net) framework [Symfony 1](https://symfony.com/legacy).'
            },
            {
                title: 'Unsere Schlemmertüte',
                image: '/images/projects/web/schlemmertuete.jpg',
                link: 'http://www.schlemmertuete.de/',
                description: 'Development with [Wordpress](https://wordpress.org/) for the frontend and a backend based on the [PHP](https://www.php.net) framework [Symfony 2](https://symfony.com).'
            },
            {
                title: 'Máren Rehfeld',
                image: '/images/projects/web/maren-rehfeld.jpg',
                link: 'http://maren-rehfeld.de/',
                description: 'Creation of a custom theme, installation and configuration of the open source CMS [Joomla](https://www.joomla.org).'
            },
            {
                title: 'Ministerium für Umwelt, Gesundheit und Verbraucherschutz',
                image: '/images/projects/web/mugv.jpg',
                link: 'http://mugv.brandenburg.de/',
                description: 'Implementation of a survey platform and an analysis tool with [Typo3](https://typo3.org)'
            },
            {
                title: 'iPhone App Generator',
                image: '/images/projects/web/iphone-app-generator.jpg',
                link: 'http://iphone-app-generator.com/',
                description: 'Graphical implementation of a simple landing page.'
            },
            {
                title: 'Kosmetikschule Berlin',
                image: '/images/projects/web/kosmetikschule-berlin.jpg',
                link: 'https://www.kosmetikschule-berlin.de',
                description: 'Set up of the content management system [Typo3](https://typo3.org) and grafical implementation.'
            },
            {
                title: 'Bayerischer Landes-Sportverband e.V.',
                image: '/images/projects/web/blsv.jpg',
                link: 'https://www.blsv.de',
                description: 'Set up and implementation of plugins for a content management system with [Typo3](https://typo3.org) and grafical implementation.'
            },
            {
                title: 'Weißhuhn & Weißhuhn Kommunikationsmanagement GmbH',
                image: '/images/projects/web/weisshuhn.jpg',
                link: 'http://www.weisshuhn.de/',
                description: 'Set up of the content management system [Typo3](https://typo3.org) and grafical implementation.'
            },
            {
                title: 'Sack Mediengruppe GmbH & Co. KG',
                image: '/images/projects/web/sack-mediengruppe.jpg',
                link: 'https://www.sack-mediengruppe.de',
                description: 'Implementation of an online shop based on a self made CMS, a B2C shop, a B2B shop with a [SAP](https://www.sap.com/) bindings and a library administration tool with [PHP](https://www.php.net).'
            },
            {
                title: 'KISS - Kundeninformations- und Servicesystem',
                image: '/images/projects/web/kiss.jpg',
                link: 'http://kissdemo.weisshuhn.de',
                description: 'Implementation of a customer communication and ticket system with [PHP](https://www.php.net).'
            },
            {
                title: 'zapf umzüge',
                image: '/images/projects/web/zapf.jpg',
                link: 'https://www.zapf.de',
                description: 'Set up of the content management system [Typo3](https://typo3.org) and graphical implementation.'
            },
            {
                title: 'GEMA – Gesellschaft für musikalische Aufführungs- und mechanische Vervielfältigungsrechte',
                image: '/images/projects/web/gema.jpg',
                link: 'https://www.gema.de',
                description: 'Project management and implementation for a website with over 4000 pages and hundreds of forms and tariffs.'
            },
        ]
    },
    {
        key: 'mobile',
        title: 'Mobile',
        items: [
            {
                title: 'Find my nextbike',
                image: '/images/projects/mobile/nextbike.jpg',
                client: 'made by us',
                link: 'https://itunes.apple.com/app/id530463118',
                description: 'With this app you can rent more than 10.000 bicycles available around the clock in 11 countries worldwide. You will be able to locate bikes nearby and you can rent them instantly. With the integrated bar code scanner you will be able to rent bikes with a QR-Code even faster. In addition you are able to get information, register, reset your PIN, invite friends and redeem vouchers.'
            },
            {
                title: 'zapf service',
                image: '/images/projects/mobile/zapf.jpg',
                client: 'frag zapf GmbH',
                link: 'https://itunes.apple.com/app/id385730709',
                description: 'Let you plan your movement. You can list your whole stuff like furnitures and devices. It calculates the volume in cubic meters and the needed boxes and other equipments. And you can get an individual offer for this movement by [zapf umzüge](http://zapf.de/).'
            },
            {
                title: 'KÜS - Sicherheit mit Sympathie und Sachverstand',
                image: '/images/projects/mobile/kues.jpg',
                client: 'KÜS',
                link: 'https://itunes.apple.com/app/id427180500',
                description: 'Read news regarding cars, calculate your german particulate matter badge and find the next partner of [KÜS](http://www.kues.de/)'
            },
            {
                title: 'iBerlin',
                image: '/images/projects/mobile/iberlin.jpg',
                client: 'Berlin Partner GmbH',
                link: 'https://itunes.apple.com/app/id357475290',
                description: 'Find the place to be in Berlin which are recommended by [Berlin Partner](http://www.berlin-partner.de/)'
            },
            {
                title: 'Unsere Schlemmertüte',
                image: '/images/projects/mobile/schlemmertuete.jpg',
                client: 'Carolinas Food Services GmbH',
                link: 'https://itunes.apple.com/app/id54464694',
                description: 'Shows the recipes of the delivered menus and how to cook them for the delivery service on [www.schlemmertuete.de](http://www.schlemmertuete.de/)'
            },
            {
                title: 'AcuApp Premium',
                image: '/images/projects/mobile/acuapp.jpg',
                client: 'Maitri Hillebrecht',
                link: 'https://itunes.apple.com/app/id45074540',
                description: 'Health on demand! This is the solution for 555 illnesses, from acne to allergies, burnout syndrome, depressions, lovesickness, impotence, migraine, tinnitus up to toothaches which you can easily treat with acupressure yourselves. Easy, low-cost and without any harmful secondary effects.'
            },
            {
                title: 'iRedmine',
                image: '/images/projects/mobile/iredmine.jpg',
                client: 'Weißhuhn & Weißhuhn Komm. GmbH',
                description: 'Redmine - the famous project management tool - brought to your mobile device by iRedmine. With iRedmine you can browse your projects, view issues and even create new issues on the go. iRedmine can handle multiple accounts supporting a variety of installation options such as HTTPS, HTTP authentication, custom ports and path installations.',
                link: 'https://itunes.apple.com/app/id32709270'
            },
        ]
    },
    {
        key: 'desktop',
        title: 'Desktop',
        items: [
            {
                title: 'Barbara',
                image: '/images/projects/desktop/barbara.jpg',
                client: 'made by us',
                description: 'This is my first project to learn developing with Objective-C. Therefore I\'ve build a cocktail mixer application. Enter your ingredients and see which cocktails you can offer your guests.'
            },
        ]
    }
];
const technologies = [
    {title: 'Boostrap', regular: '/images/technologies/bootstrap@1x.png', retina: '/images/technologies/bootstrap@2x.png'},
    {title: 'jQuery', regular: '/images/technologies/jquery@1x.png', retina: '/images/technologies/jquery@2x.png'},
    {title: 'NodeJS', regular: '/images/technologies/nodejs@1x.png', retina: '/images/technologies/nodejs@2x.png'},
    {title: 'Angular', regular: '/images/technologies/angular@1x.png', retina: '/images/technologies/angular@2x.png'},
    {title: 'ReactJS', regular: '/images/technologies/reactjs@1x.png', retina: '/images/technologies/reactjs@2x.png'},
    {title: 'Symfony', regular: '/images/technologies/symfony@1x.png', retina: '/images/technologies/symfony@2x.png'},
    {
        title: 'Wordpress',
        regular: '/images/technologies/wordpress@1x.png',
        retina: '/images/technologies/wordpress@2x.png'
    },
    {title: 'PHP', regular: '/images/technologies/php@1x.png', retina: '/images/technologies/php@2x.png'},
    {title: 'MongoDB', regular: '/images/technologies/mongodb@1x.png', retina: '/images/technologies/mongodb@2x.png'},
    {title: 'MySQL', regular: '/images/technologies/mysql@1x.png', retina: '/images/technologies/mysql@2x.png'},
    {
        title: 'PostgreSQL',
        regular: '/images/technologies/postgresql@1x.png',
        retina: '/images/technologies/postgresql@2x.png'
    },
    {
        title: 'elasticsearch',
        regular: '/images/technologies/elasticsearch@1x.png',
        retina: '/images/technologies/elasticsearch@2x.png'
    },
    {
        title: 'RabbitMQ',
        regular: '/images/technologies/rabbitmq@1x.png',
        retina: '/images/technologies/rabbitmq@2x.png'
    },
    {title: 'python', regular: '/images/technologies/python@1x.png', retina: '/images/technologies/python@2x.png'},
    {title: 'Docker', regular: '/images/technologies/docker@1x.png', retina: '/images/technologies/docker@2x.png'},
    {
        title: 'Amazon Web Services',
        regular: '/images/technologies/aws@1x.png',
        retina: '/images/technologies/aws@2x.png'
    },
    {title: 'Rancher', regular: '/images/technologies/rancher@1x.png', retina: '/images/technologies/rancher@2x.png'}
];
const media = [
    'https://www.linkedin.com/in/thomas-stägemann-30616242/',
    'https://www.xing.com/profile/Thomas_Staegemann',
    'https://github.com/staegi',
    'https://www.facebook.com/tomcat2111',
    'https://www.youtube.com/user/tomcat2111',
    'https://www.twitter.com/tomcat2111',
    'https://www.pinterest.de/staegi',
    'mailto:thomas@staegemann.info',
];

function App() {
    return (
        <div>
            <Container>
                <a name="home"/>
                <Header/>
                <SocialMedia media={media}/>
                <Parallax speed={6}>
                    <Intro/>
                </Parallax>
                <Parallax speed={4}>
                    <TechnologySection technologies={technologies}/>
                </Parallax>
                <Parallax speed={2}>
                    <WorkSection projects={projects}/>
                </Parallax>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
