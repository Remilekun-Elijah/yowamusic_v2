const uuid = require('uuid').v4;
module.exports = {
    newTracks: [{
            id: 0,
            title: '1. Emotions',
            artist: 'Yowa',
            url: '../audios/Yowa - emotions.mp3',
            buyLink: "https://music.apple.com/ng/album/emotions-single/1586895794",
            listenLink: "https://fanlink.to/Yowaemotions"
        },
        {
            id: 1,
            title: '2. Beat for Emotions Cover ',
            artist: 'Yowa',
            url: '../audios/Yowa - Emotions Cover instrumental.mp3',
            buyLink: "",
            listenLink: ""
        }
    ],

    albums: [{
        name: 'First Of Her Kind EP',
        year: '2020',
        tracks: [{
                id: 2,
                title: '1. Party',
                artist: 'Yowa',
                url: '../audios/Yowa Party.mp3'
            },
            {
                id: 3,
                title: '2. Down On Me',
                artist: 'Yowa',
                url: '../audios/Yowa down on me.mp3'
            },
            {
                id: 4,
                title: '3. No Stop',
                artist: 'Yowa',
                url: '../audios/yowa no stop.mp3'
            },
            {
                id: 5,
                title: '4. Whenever You Call',
                artist: 'Yowa',
                url: '../audios/Yowa whenever.mp3'
            },
            {
                id: 6,
                title: '5. Ire',
                artist: 'Yowa',
                url: '../audios/Yowa Ire.mp3'
            }
        ],
        listenLink: 'https://ampl.ink/2LM9z',
        buyLink: 'https://music.apple.com/ng/album/first-of-her-kind-ep/1544262179',
        coverFront: '../images/public/fohkep.jpg',
        coverBack: '../images/public/fohkep_bc.jpg'
    }],
    others: [{
            id: 7,
            title: '1. Control (freestyle)',
            artist: 'Yowa',
            url: '../audios/Yowa - control.mp3'
        },
        {
            id: 8,
            title: '2. Loving is harder (cover)',
            artist: 'Yowa',
            url: '../audios/Yowa - loving is harder (cover).mp3'
        },
        {
            id: 9,
            title: '3. Don\'t go (freestyle)',
            artist: 'Yowa',
            url: '../audios/Yowa dont go.mp3'
        },
        {
            id: 10,
            title: '4. Early momo (cover)',
            artist: 'Yowa',
            url: '../audios/Yowa - early momo (cover).mp3'
        },
        {
            id: 11,
            title: '5. Remedy (freestyle)',
            artist: 'Yowa',
            url: '../audios/Yowa - remedy.mp3'
        },
        {
            id: 12,
            title: '6. Sinner (cover)',
            artist: 'Yowa',
            url: '../audios/Yowa - sinner (cover).mp3'
        },
        {
            id: 13,
            title: '7. Higher (freestyle)',
            artist: 'Yowa',
            url: '../audios/Yowa - higher.mp3'
        },
        {
            id: 14,
            title: '8. Again (cover)',
            artist: 'Yowa',
            url: '../audios/Yowa again (cover).mp3'
        }
    ]
};