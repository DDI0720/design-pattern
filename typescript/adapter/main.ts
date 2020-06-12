import { MediaPlayer } from './media-player';
import { MP3 } from './mp3';
import { MP4 } from './mp4';
import { MKV } from './mkv';
import { FormatAdapter } from './formatAdapter';
class Main {
    public static main(): void {
        let player: MediaPlayer = new MP3();
        player.play('music.mp3');

        player = new FormatAdapter(new MP4());
        player.play('movie.mp4');

        player = new FormatAdapter(new MKV());
        player.play('file.mkv');
    }
}

Main.main();