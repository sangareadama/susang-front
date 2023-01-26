import { INavbarData } from "./helper";

export const navbarDataAdmin:INavbarData[]=[
    {
        routeLink:'dashboard',
        icon:'fal fa-home',
        label:'Dashboard'
    },
    {
        routeLink: 'utilisateur',
        icon: 'fal fa-user',
        label: 'Utilisateur',
        items:[
            {
                routeLink: 'utilisateur/liste',
                label:'Liste',
                
            },
            {
                routeLink: 'utilisateur/roles',
                label:'Roles',
                
            },
        ]
    },
    {
        routeLink: 'dataListe',
        icon: 'fal fa-list',
        label: 'Data Liste',
        items:[   
            {  
                routeLink: 'dataListe/newsletter',
                label:'Newsletters',
                
            },
            {
                routeLink: 'dataListe/nosContact',
                label:'Nos Contact',
                
            },
        ]
    },


    // {
    //     routeLink: 'products',
    //     icon: 'fal fa-box-open',
    //     label: 'Products',
    //     items:[
    //         {
    //             routeLink: 'products/level1',
    //             label:'liste produit1',
    //             items:[
    //                 {
    //                     routeLink: 'products/level3_1',
    //                     label:'produit1.1'
    //                 },
    //                 {
    //                     routeLink: 'products/level3_2',
    //                     label:'produit1.2'
    //                 },
    //             ]
    //         },
    //         {
    //             routeLink: 'products/Level2',
    //             label:'produit2',
    //             items:[
    //                 {
    //                     routeLink: 'products/Level2..1',
    //                     label:'produit2..1'
    //                 },
    //             ]
    //         },
    //         {
    //             routeLink: 'products/Level3',
    //             label:'produit3'
    //         }
    //     ]
    // },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics'
    },
    // {
    //     routeLink: 'coupens',
    //     icon: 'fal fa-tags',
    //     label: 'Coupens',
    //     items:[
    //         {
    //             routeLink: '/coupens/create',
    //             label:'Coupens1',
    //             items:[
    //                 {
    //                     routeLink: 'products/Level1..1',
    //                     label:'produit1..2'
    //                 },
    //                 {
    //                     routeLink: 'products/Level1..2',
    //                     label:'produit1..2'
    //                 },
    //             ]
    //         },
    //         {
    //             routeLink: 'coupens/liste',
    //             label:'Coupens2',
    //             // items:[
    //             //     {
    //             //         routeLink: 'products/Level1..1',
    //             //         label:'liste produit1..2'
    //             //     },
    //             //     {
    //             //         routeLink: 'products/Level1..2',
    //             //         label:'liste produit1..2'
    //             //     },
    //             // ]
    //         }
    //     ]
    // },
    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages',
        items:[
            {
                routeLink: 'pages/accueil',
                label:'Accueil',
            },
            {
                routeLink: 'pages/presentations',
                label:'presentation',
            },
            {
                routeLink: 'pages/clients',
                label:'client',
               
            },
            {
                routeLink: 'pages/atouts',
                label:'atous',
               
            }, 
            {
                routeLink: 'pages/contacts',
                label:'contact',
            },
            {
                routeLink: 'pages/services',
                label:'service',
               
            },
            
                
        ]
    },
    // {
    //     routeLink: 'media',
    //     icon: 'fal fa-camera',
    //     label: 'Media',
    //     items:[
    //         {  
    //             routeLink: 'media/essai',
    //             label:'essai',
                
    //         },
           
    //     ]
    // },
    // {
    //     routeLink: 'settings',
    //     icon: 'fal fa-cog',
    //     label: 'Settings',
    //     items:[
    //         {
    //             routeLink: 'settings/profile',
    //             label:'Profile'
    //         },
    //         { 
    //             routeLink: 'settings/customize',
    //             label:'Customize'
    //         },
    //     ]
    // },
];
 
   

export const navbarDataManger:INavbarData[]=[
    {
        routeLink:'dashboard',
        icon:'fal fa-home',
        label:'Dashboard'  
    },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics'
    },
    {
        routeLink: 'dataListe',
        icon: 'fal fa-list',
        label: 'Data Liste',
        items:[
            {  
                routeLink: 'dataListe/newsletter',
                label:'Newsletters',
                
            },
            {
                routeLink: 'dataListe/nosContact',
                label:'Nos Contact',
                
            },
        ]
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages',
        items:[
            {
                routeLink: 'pages/accueil',
                label:'Accueil',
            },
            {
                routeLink: 'pages/presentations',
                label:'presentation',
            },
            {
                routeLink: 'pages/clients',
                label:'client',
               
            },
            {
                routeLink: 'pages/atouts',
                label:'atous',
               
            }, 
            {
                routeLink: 'pages/contacts',
                label:'contact',
            },
            {
                routeLink: 'pages/services',
                label:'service',
               
            },
            
                
        ]
    },
    // {
    //     routeLink: 'products',
    //     icon: 'fal fa-box-open',
    //     label: 'Products',
    //     items:[
    //         {
    //             routeLink: 'products/level1',
    //             label:'liste produit1',
    //             items:[
    //                 {
    //                     routeLink: 'products/level3_1',
    //                     label:'produit1.1'
    //                 },
    //                 {
    //                     routeLink: 'products/level3_2',
    //                     label:'produit1.2'
    //                 },
    //             ]
    //         },
    //         {
    //             routeLink: 'products/Level2',
    //             label:'produit2',
    //             items:[
    //                 {
    //                     routeLink: 'products/Level2..1',
    //                     label:'produit2..1'
    //                 },
    //             ]
    //         },
    //         {
    //             routeLink: 'products/Level3',
    //             label:'produit3'
    //         }
    //     ]
    // },
    // {
    //     routeLink: 'coupens',
    //     icon: 'fal fa-tags',
    //     label: 'Coupens',
    //     items:[
    //         {
    //             routeLink: '/coupens/create',
    //             label:'Coupens1',
    //             items:[
    //                 {
    //                     routeLink: 'products/Level1..1',
    //                     label:'produit1..2'
    //                 },
    //                 {
    //                     routeLink: 'products/Level1..2',
    //                     label:'produit1..2'
    //                 },
    //             ]
    //         },
    //         {
    //             routeLink: 'coupens/liste',
    //             label:'Coupens2',
    //             // items:[
    //             //     {
    //             //         routeLink: 'products/Level1..1',
    //             //         label:'liste produit1..2'
    //             //     },
    //             //     {
    //             //         routeLink: 'products/Level1..2',
    //             //         label:'liste produit1..2'
    //             //     },
    //             // ]
    //         }
    //     ]
    // },
    // {
    //     routeLink: 'pages',
    //     icon: 'fal fa-file',
    //     label: 'Pages',
    //     items:[
    //         {
    //             routeLink: 'pages/accueil',
    //             label:'Accueil',
    //         },
    //         {
    //             routeLink: 'pages/presentations',
    //             label:'presentation',
    //         },
    //         {
    //             routeLink: 'pages/clients',
    //             label:'client',
               
    //         },
    //         {
    //             routeLink: 'pages/atouts',
    //             label:'atous',
               
    //         }, 
    //         {
    //             routeLink: 'pages/contacts',
    //             label:'contact',
    //         },
    //         {
    //             routeLink: 'pages/services',
    //             label:'service',
               
    //         },
            
                
    //     ]
    // },



    // {
    //     routeLink: 'media',
    //     icon: 'fal fa-camera',
    //     label: 'Media'
    // },
    // {
    //     routeLink: 'settings',
    //     icon: 'fal fa-cog',
    //     label: 'Settings',
    //     items:[
    //         {
    //             routeLink: 'settings/profile',
    //             label:'Profile'
    //         },
    //         { 
    //             routeLink: 'settings/customize',
    //             label:'Customize'
    //         },
    //     ]
    // },
];