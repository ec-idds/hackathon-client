class MusicManager {
    constructor() {
        this.rooms = {
            'JYC':      'project_music/JYC.mp3',
            'Wilkens':  'project_music/Wilkens.mp3',
            'StJulies': 'project_music/Dorm.mp3',
            'Library':  'project_music/Library.mp3',
            'Quad':     'project_music/Quad.mp3',
            'Lobby':    'project_music/Lobby.mp3'
        }
        for (const room of Object.keys(this.rooms)) {
            this[room] = loadSound(this.rooms[room])
        }
    }

    stopAll() {
        for (const room of Object.keys(this.rooms)) {
            this[room].stop();
        }
    }
}
