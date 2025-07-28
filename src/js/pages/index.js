import '../../styles/index.scss';
import '../../styles/pages/index.scss';
import InfiniteGrid from '../components/infinite-grid';

export default class Index {
  constructor() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();

    this.sources = [
      { src: 'image-1.jpg', caption: 'Mucem <br>12 x 16 inch C type hand print  <br>2021' },
      { src: 'image-2.jpg', caption: 'Metro by night<br>12 x 16 inch C type hand print<br>2023' },
      { src: 'image-3.jpg', caption: 'Marseille vue de nuit <br>12 x 16 inch C type hand print <br>2021' },
      { src: 'image-4.jpg', caption: 'Notre Dame de la garde <br>12 x 16 inch C type hand print  <br>2022' },
      { src: 'image-5.jpg', caption: 'mediteranean sea<br>12 x 16 inch C type hand print <br>2023' },
      { src: 'image-6.jpg', caption: 'Architecture  <br>12 x 16 inch C type hand print <br>2022' },
      { src: 'image-7.jpg', caption: 'La major <br>12 x 16 inch C type hand print <br>2025' },
      { src: 'image-8.jpg', caption: 'Departure <br>12 x 16 inch C type hand print <br>2022' },
      { src: 'image-9.jpg', caption: 'Plage des catalans <br>12 x 16 inch C type hand print <br>2024' },
    ];
    this.data = [
      { x: 71, y: 58, w: 400, h: 270 },
      { x: 211, y: 255, w: 540, h: 360 },
      { x: 631, y: 158, w: 400, h: 270 },
      { x: 1191, y: 245, w: 260, h: 195 },
      { x: 351, y: 687, w: 260, h: 290 },
      { x: 751, y: 824, w: 205, h: 154 },
      { x: 911, y: 540, w: 260, h: 350 },
      { x: 1051, y: 803, w: 400, h: 300 },
      { x: 71, y: 922, w: 350, h: 260 },
    ]
    new InfiniteGrid({
      el: document.querySelector('#images'),
      sources: this.sources,
      data: this.data,
      originalSize: { w: 1522, h: 1238 },
    })
  }
  resize() {
    document.documentElement.style.setProperty('--rvw', `${document.documentElement.clientWidth / 100}px`);
  }
}
window.addEventListener('load', () => {
  new Index();
});