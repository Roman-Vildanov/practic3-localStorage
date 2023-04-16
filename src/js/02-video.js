    import Player from '@vimeo/player';
    import throttle from 'lodash.throttle';
    import '../css/common.css';

    const TIME_KEY = 'videoplayer-current-time';
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    const handlePlay = data => {
        const stingifyData = JSON.stringify(data);
        localStorage.setItem(TIME_KEY, stingifyData)
    }    

    player.on('play', throttle(handlePlay, 1000));

    const pausePlay = () => {
        if(JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
            return
        }
        const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
        if(paused) {
            player.setCurrentTime(paused).then((seconds) => {}).catch((error) => {
                switch (error.name) {
                    case 'error':                        
                        break;                
                    default:
                        break;
                }
            });
        };
    };

    pausePlay();
