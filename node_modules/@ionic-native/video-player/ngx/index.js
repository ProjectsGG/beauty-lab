var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var VideoPlayer = /** @class */ (function (_super) {
    __extends(VideoPlayer, _super);
    function VideoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoPlayer.prototype.play = function (fileUrl, options) { return cordova(this, "play", {}, arguments); };
    VideoPlayer.prototype.close = function () { return cordova(this, "close", { "sync": true }, arguments); };
    VideoPlayer.pluginName = "VideoPlayer";
    VideoPlayer.plugin = "https://github.com/moust/cordova-plugin-videoplayer.git";
    VideoPlayer.pluginRef = "VideoPlayer";
    VideoPlayer.repo = "https://github.com/moust/cordova-plugin-videoplayer";
    VideoPlayer.platforms = ["Android"];
    VideoPlayer = __decorate([
        Injectable()
    ], VideoPlayer);
    return VideoPlayer;
}(IonicNativePlugin));
export { VideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ZpZGVvLXBsYXllci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFvRHZDLCtCQUFpQjs7OztJQVFoRCwwQkFBSSxhQUFDLE9BQWUsRUFBRSxPQUFzQjtJQVE1QywyQkFBSzs7Ozs7O0lBaEJNLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkFyRHhCO0VBcURpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHRoZSB2aWRlbyBwbGF5YmFjayB1c2luZyB0aGUgYHBsYXlgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZXQgdGhlIGluaXRpYWwgdm9sdW1lIG9mIHRoZSB2aWRlbyBwbGF5YmFjaywgd2hlcmUgMC4wIGlzIDAlIHZvbHVtZSBhbmQgMS4wIGlzIDEwMCUuXG4gICAqIEZvciBleGFtcGxlOiBmb3IgYSB2b2x1bWUgb2YgMzAlIHNldCB0aGUgdmFsdWUgdG8gMC4zLlxuICAgKi9cbiAgdm9sdW1lPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlcmUgYXJlIHR3byBvcHRpb25zIGZvciB0aGUgc2NhbGluZyBtb2RlLiBTQ0FMRV9UT19GSVQgd2hpY2ggaXMgZGVmYXVsdCBhbmQgU0NBTEVfVE9fRklUX1dJVEhfQ1JPUFBJTkcuXG4gICAqIFRoZXNlIHN0cmluZ3MgYXJlIHRoZSBvbmx5IG9uZXMgd2hpY2ggY2FuIGJlIHBhc3NlZCBhcyBvcHRpb24uXG4gICAqL1xuICBzY2FsaW5nTW9kZT86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBWaWRlbyBQbGF5ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQSBDb3Jkb3ZhIHBsdWdpbiB0aGF0IHNpbXBseSBhbGxvd3MgeW91IHRvIGltbWVkaWF0ZWx5IHBsYXkgYSB2aWRlbyBpbiBmdWxsc2NyZWVuIG1vZGUuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb20ubW91c3QuY29yZG92YS52aWRlb3BsYXllcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtWaWRlb1BsYXllciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL21vdXN0L2NvcmRvdmEtcGx1Z2luLXZpZGVvcGxheWVyKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFZpZGVvUGxheWVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS92aWRlby1wbGF5ZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZGVvUGxheWVyOiBWaWRlb1BsYXllcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gUGxheWluZyBhIHZpZGVvLlxuICogdGhpcy52aWRlb1BsYXllci5wbGF5KCdmaWxlOi8vL2FuZHJvaWRfYXNzZXQvd3d3L21vdmllLm1wNCcpLnRoZW4oKCkgPT4ge1xuICogIGNvbnNvbGUubG9nKCd2aWRlbyBjb21wbGV0ZWQnKTtcbiAqIH0pLmNhdGNoKGVyciA9PiB7XG4gKiAgY29uc29sZS5sb2coZXJyKTtcbiAqIH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFZpZGVvT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1ZpZGVvUGxheWVyJyxcbiAgcGx1Z2luOiAnaHR0cHM6Ly9naXRodWIuY29tL21vdXN0L2NvcmRvdmEtcGx1Z2luLXZpZGVvcGxheWVyLmdpdCcsXG4gIHBsdWdpblJlZjogJ1ZpZGVvUGxheWVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tb3VzdC9jb3Jkb3ZhLXBsdWdpbi12aWRlb3BsYXllcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlkZW9QbGF5ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBQbGF5cyB0aGUgdmlkZW8gZnJvbSB0aGUgcGFzc2VkIHVybC5cbiAgICogQHBhcmFtIGZpbGVVcmwge3N0cmluZ30gRmlsZSB1cmwgdG8gdGhlIHZpZGVvLlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7VmlkZW9PcHRpb25zP30gT3B0aW9uYWwgdmlkZW8gcGxheWJhY2sgc2V0dGluZ3MuIFNlZSBvcHRpb25zIGFib3ZlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBwcm9taXNlIHdoZW4gdGhlIHZpZGVvIHdhcyBwbGF5ZWQgc3VjY2Vzc2Z1bGx5LlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwbGF5KGZpbGVVcmw6IHN0cmluZywgb3B0aW9ucz86IFZpZGVvT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHRoZSB2aWRlbyBwbGF5YmFjayBpbW1lZGlhdGx5LlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IHZvaWQge31cbn1cbiJdfQ==