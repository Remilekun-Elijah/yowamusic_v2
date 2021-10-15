const songs = {
    newTracks: [{
        id: 0,
        title: '1. Emotions',
        artist: 'Yowa',
        url: '../audios/Yowa - emotions.mp3',
        buyLink: "https://music.apple.com/ng/album/emotions-single/1586895794",
        listenLink: "https://fanlink.to/Yowaemotions"
    }],
    albums: [{
        name: 'First Of Her Kind EP',
        year: '2020',
        tracks: [{
                id: 1,
                title: '1. Party',
                artist: 'Yowa',
                url: '../audios/Yowa Party.mp3'
            },
            {
                id: 2,
                title: '2. Down On Me',
                artist: 'Yowa',
                url: '../audios/Yowa down on me.mp3'
            },
            {
                id: 3,
                title: '3. No Stop',
                artist: 'Yowa',
                url: '../audios/yowa no stop.mp3'
            },
            {
                id: 4,
                title: '4. Whenever You Call',
                artist: 'Yowa',
                url: '../audios/Yowa whenever.mp3'
            },
            {
                id: 5,
                title: '5. Ire',
                artist: 'Yowa',
                url: '../audios/Yowa Ire.mp3'
            }
        ],
        listenLink: 'https://ampl.ink/2LM9z',
        buyLink: 'https://music.apple.com/ng/album/first-of-her-kind-ep/1544262179',
        coverFront: '../images/public/fohkep.jpg',
        coverBack: '../images/public/fohkep_bc.jpg'
    }, ],
    others: [{
            id: 6,
            title: '1. Control (freestyle)',
            artist: 'Yowa',
            url: '../audios/Yowa - control.mp3'
        },
        {
            id: 7,
            title: '2. Loving is harder (cover)',
            artist: 'Yowa',
            url: '../audios/Yowa - loving is harder (cover).mp3'
        },
        {
            id: 8,
            title: '3. Don\'t go (freestyle)',
            artist: 'Yowa',
            url: '../audios/Yowa dont go.mp3'
        },
        {
            id: 9,
            title: '4. Early momo (cover)',
            artist: 'Yowa',
            url: '../audios/Yowa - early momo (cover).mp3'
        },
        {
            id: 10,
            title: '5. Remedy (freestyle)',
            artist: 'Yowa',
            url: '../audios/Yowa - remedy.mp3'
        },
        {
            id: 11,
            title: '6. Sinner (cover)',
            artist: 'Yowa',
            url: '../audios/Yowa - sinner (cover).mp3'
        },
        {
            id: 12,
            title: '7. Higher (freestyle)',
            artist: 'Yowa',
            url: '../audios/Yowa - higher.mp3'
        },
        {
            id: 13,
            title: '8. Again (cover)',
            artist: 'Yowa',
            url: '../audios/Yowa again (cover).mp3'
        }
    ]
};
songs.newTracks.forEach(track => {
    const html = `
<div class="jp-player-init">
                                <div class="jp-jplayer"></div>
                                <div class="jp-audio jp-audio-${track.id}" role="application" aria-label="media player">
                                    <ul class="jp-player-list">
                                        <li class="jp-player-list-item" data-jp-title="${track.title}" data-jp-artist="" data-jp-mp3="${track.url}"></li>
                                    </ul>
                                    <div class="jp-interface">
                                        <div class="jp-button jp-controls">
                                            <button class="jp-btn jp-play" role="button" tabindex="0">play</button>
                                        </div>
                                        <div class="jp-playlist d-flex">
                                            <ul>
                                                <li> </li>
                                            </ul>
                                            <a href="${track.url}" class="ml-4 text-black" download>
                                                <strong class=" fa fa-download" style='font-size:20px'></strong></a>
                                        </div>
                                        <div class="jp-time-rail">
                                            <div class="jp-progress">
                                                <div class="jp-seek-bar">
                                                    <div class="jp-play-bar"></div>
                                                </div>
                                                <div class="jp-time-wrapper">
                                                    <div class="jp-duration"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jp-no-solution"><span>Update Required</span> To play the media you will need to either update your browser to a recent version or update your<a href="http://get.adobe.com/flashplayer/" target="_blank"> Flash plugin</a>.</div>
                                </div>
                            </div>

<div class="group-md group-middle"><a class="button button-gray-800 button-zakaria" href="${track.listenLink}">Listen Now <i class="text-warning fa fa-external-link "> </i></a><a class="button button-default-outline button-zakaria" href="${track.buyLink}">Buy on Itunes <span class="mdi mdi-apple px-0 mx-0" style="font-size:25px;"></span></a></div>
`;

    $('#newTracks').append(html);
});

songs.albums.forEach(album => {

    const html = `
<h2 class="product-beth-title" style="display: inline-block;"><a href="${album.listenLink}">${album.name}</a>
                            <div class="display-inline product-beth-badge text-right">${album.year}</div>
   </h2>`;
    $('#albums').append(html);

    album.tracks.forEach(track => {
        const html = `
<div class="player-list">
                            <div class="jp-player-init">
                                <div class="jp-jplayer"></div>
                                <div class="jp-audio jp-audio-${track.id}" role="application" aria-label="media player">
                                    <ul class="jp-player-list">
                                        <li class="jp-player-list-item" data-jp-title="${track.title}" data-jp-artist="" data-jp-mp3="${track.url}"></li>
                                    </ul>
                                    <div class="jp-interface">
                                        <div class="jp-button jp-controls">
                                            <button class="jp-btn jp-play" role="button" tabindex="0">play</button>
                                        </div>
                                        <div class="jp-playlist d-flex">
                                            <ul>
                                                <li> </li>
                                            </ul>
                                            <a href="${track.url}" class="ml-4 text-black" download>
                                                <strong class=" fa fa-download" style='font-size:20px'></strong></a>
                                        </div>
                                        <div class="jp-time-rail">
                                            <div class="jp-progress">
                                                <div class="jp-seek-bar">
                                                    <div class="jp-play-bar"></div>
                                                </div>
                                                <div class="jp-time-wrapper">
                                                    <div class="jp-duration"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jp-no-solution"><span>Update Required</span> To play the media you will need to either update your browser to a recent version or update your<a href="http://get.adobe.com/flashplayer/" target="_blank"> Flash plugin</a>.</div>
                                </div>
                            </div>
                            </div>
`;
        $('#albums').append(html);

    });
    const html2 = `
<div class="group-md group-middle"><a class="button button-gray-800 button-zakaria" href="${album.listenLink}">Listen Now <i class="text-warning fa fa-external-link "> </i></a><a class="button button-default-outline button-zakaria" href="${album.buyLink}">Buy on Itunes <span class="mdi mdi-apple px-0 mx-0" style="font-size:25px;"></span></a></div>
  `;
    $('#albums').append(html2);
});

songs.others.forEach(track => {
    const html = `
<div class="jp-player-init">
                                <div class="jp-jplayer"></div>
                                <div class="jp-audio jp-audio-${track.id}" role="application" aria-label="media player">
                                    <ul class="jp-player-list">
                                        <li class="jp-player-list-item" data-jp-title="${track.title}" data-jp-artist="" data-jp-mp3="${track.url}"></li>
                                    </ul>
                                    <div class="jp-interface">
                                        <div class="jp-button jp-controls">
                                            <button class="jp-btn jp-play" role="button" tabindex="0">play</button>
                                        </div>
                                        <div class="jp-playlist d-flex">
                                            <ul>
                                                <li> </li>
                                            </ul>
                                            <a href="${track.url}" class="ml-4 text-black" download>
                                                <strong class=" fa fa-download" style='font-size:20px'></strong></a>
                                        </div>
                                        <div class="jp-time-rail">
                                            <div class="jp-progress">
                                                <div class="jp-seek-bar">
                                                    <div class="jp-play-bar"></div>
                                                </div>
                                                <div class="jp-time-wrapper">
                                                    <div class="jp-duration"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jp-no-solution"><span>Update Required</span> To play the media you will need to either update your browser to a recent version or update your<a href="http://get.adobe.com/flashplayer/" target="_blank"> Flash plugin</a>.</div>
                                </div>
                            </div>
</div>
`;

    $('#otherSongs').append(html);

});