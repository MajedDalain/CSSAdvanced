import imagemin from 'imagemin';
import webp from 'imagemin-webp';

const outputFolder = './imgs/originalImages/webp'
const produceWebP = async () => {
  await imagemin(['./imgs/originalImages/*.png'], {
    destination: outputFolder,
    plugins: [
      webp({
        lossless: true
      })
    ]
  })
  console.log('PNGs processed')
  await imagemin(['./imgs/originalImages/*.{jpg,jpeg}'], {
    destination: outputFolder,
    plugins: [
      webp({
        quality: 10
      })
    ]
  })
  console.log('JPGs and JPEGs processed')
}
produceWebP()