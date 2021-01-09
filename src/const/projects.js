const projects = [
    {
        key: 'web',
        title: 'Web',
        items: [
            {
                title: 'Praxis Dr. Lindner',
                image: '/images/projects/web/praxis-lindner.jpg',
                link: 'https://praxis-lindner.berlin/',
                description: 'Created a multilingual and multidomain web site to present the doctor\'s surgery based on [Wordpress](https://wordpress.org/).'
            },
            {
                title: 'Warehouse+',
                image: '/images/projects/web/warehouseplus.jpg',
                link: 'https://warehouseplus.de/',
                description: 'Created a web site to present the product based on [Wordpress](https://wordpress.org/). This web site and the product stacks are running in [AWS](https://aws.amazon.com/) with [Docker](https://www.docker.com) in a [Rancher](https://rancher.com) environment to be scalable and high available. Each customer has it\'s own stack with an API bysed on [Symfony 3](https://symfony.com), a [ReactJS](https://reactjs.org) frontend, a [MySQL](https://www.mysql.com/) database and a Let\'s encrypt container to generate certificates for the customer subdomain automatically. Besides there a serveral other services running e.g. [RabbitMQ](https://www.rabbitmq.com) as message queue and [Elasticsearch](https://www.elastic.co/) as search engine.'
            },
            {
                title: 'Brandilla',
                image: '/images/projects/web/brandilla.jpg',
                link: 'https://brandilla.de/',
                description: 'Created a multilingual and multidomain web site to present the marketing product based on [Wordpress](https://wordpress.org/). Addtionally we have developed a backoffice application to manage all point of sales, marketing campaigns and so on. This is based of a [Symfony 3](https://symfony.com) API, an [AngularJS](https://angularjs.org) frontend, a [MySQL](https://www.mysql.com/) database, an [Elasticsearch](https://www.elastic.co/) search engine and a [RabbitMQ](https://www.rabbitmq.com) message queue for exports.'
            },
            {
                title: 'vijoa',
                image: '/images/projects/web/vijoa.jpg',
                link: 'https://vijoa.de/',
                description: 'Created a multilingual and multidomain web site to present the video product of the vijoa based on [Wordpress](https://wordpress.org/).'
            },
            {
                title: 'interim Group',
                image: '/images/projects/web/interim-group.jpg',
                link: 'https://interim-group.de/',
                description: 'Created a multilingual and multidomain web site to present the concept of the interim Group based on [Wordpress](https://wordpress.org/). Together with a [GraphQL](https://graphql.org) API for a new developed [job portal](https://jobportal.interim-group.de) and several other microservices it\'s running in AWS with Docker in a Rancher environment to be scalable and high available.'
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
                title: 'Warehouse+',
                image: '/images/projects/mobile/warehouseplus.jpg',
                client: 'WHplus GmbH',
                link: 'https://apps.apple.com/app/id1492116892',
                description: 'This app belongs to the web platform of [Warehouse+](https://warehouseplus.de/). With it you can stock in articles by barcodes, documenting damages and assign is to a warehouse place.'
            },
            {
                title: 'Find my nextbike',
                image: '/images/projects/mobile/nextbike.jpg',
                client: 'made by me',
                link: 'https://apps.apple.com/app/id530463118',
                description: 'With this app you can rent more than 10.000 bicycles available around the clock in 11 countries worldwide. You will be able to locate bikes nearby and you can rent them instantly. With the integrated bar code scanner you will be able to rent bikes with a QR-Code even faster. In addition you are able to get information, register, reset your PIN, invite friends and redeem vouchers.'
            },
            {
                title: 'zapf service',
                image: '/images/projects/mobile/zapf.jpg',
                client: 'frag zapf GmbH',
                link: 'https://apps.apple.com/app/id385730709',
                description: 'Let you plan your movement. You can list your whole stuff like furnitures and devices. It calculates the volume in cubic meters and the needed boxes and other equipments. And you can get an individual offer for this movement by [zapf umzüge](http://zapf.de/).'
            },
            {
                title: 'KÜS - Sicherheit mit Sympathie und Sachverstand',
                image: '/images/projects/mobile/kues.jpg',
                client: 'KÜS',
                link: 'https://apps.apple.com/app/id427180500',
                description: 'Read news regarding cars, calculate your german particulate matter badge and find the next partner of [KÜS](http://www.kues.de/)'
            },
            {
                title: 'iBerlin',
                image: '/images/projects/mobile/iberlin.jpg',
                client: 'Berlin Partner GmbH',
                link: 'https://apps.apple.com/app/id357475290',
                description: 'Find the place to be in Berlin which are recommended by [Berlin Partner](http://www.berlin-partner.de/)'
            },
            {
                title: 'Unsere Schlemmertüte',
                image: '/images/projects/mobile/schlemmertuete.jpg',
                client: 'Carolinas Food Services GmbH',
                link: 'https://apps.apple.com/app/id54464694',
                description: 'Shows the recipes of the delivered menus and how to cook them for the delivery service on [www.schlemmertuete.de](http://www.schlemmertuete.de/)'
            },
            {
                title: 'AcuApp Premium',
                image: '/images/projects/mobile/acuapp.jpg',
                client: 'Maitri Hillebrecht',
                link: 'https://apps.apple.com/app/id45074540',
                description: 'Health on demand! This is the solution for 555 illnesses, from acne to allergies, burnout syndrome, depressions, lovesickness, impotence, migraine, tinnitus up to toothaches which you can easily treat with acupressure yourselves. Easy, low-cost and without any harmful secondary effects.'
            },
            {
                title: 'iRedmine',
                image: '/images/projects/mobile/iredmine.jpg',
                client: 'Weißhuhn & Weißhuhn Komm. GmbH',
                description: 'Redmine - the famous project management tool - brought to your mobile device by iRedmine. With iRedmine you can browse your projects, view issues and even create new issues on the go. iRedmine can handle multiple accounts supporting a variety of installation options such as HTTPS, HTTP authentication, custom ports and path installations.',
                link: 'https://apps.apple.com/app/id32709270'
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
    },
];

export default projects;