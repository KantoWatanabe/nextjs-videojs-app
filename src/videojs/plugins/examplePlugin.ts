// @ts-nocheck
// 以下参考にtypescriptでpluginを追加してみたが、検査エラーでできず。。
// @ts-nocheckかjsにするしかない？
// https://stackblitz.com/edit/typescript-videojs-plugin?file=index.ts
import videojs, { VideoJsPlayer } from 'video.js';
//import Player from 'video.js/dist/types/player';


const VjsPlugin = videojs.getPlugin('plugin');

export class ExamplePlugin extends VjsPlugin {

    constructor(player: VideoJsPlayer, options?: any) {
        super(player, options);

        if (options?.customClass) {
            player.addClass(options.customClass);
        }

        player.on('playing', function () {
            console.log('playback began!');
        });
    }
}
videojs.registerPlugin('examplePlugin', ExamplePlugin);

// 変化なし
/*declare module 'video.js' {
  export interface VideoJsPlayer {
    examplePlugin: (options?: any) => ExamplePlugin;
  }
}*/