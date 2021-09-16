import { memoize } from './memoize';

export const getAverageColorOfImage = memoize(imgElement => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');
  const averageColor = {
    r: 0,
    g: 0,
    b: 0,
  };

  if (!context) {
    return averageColor;
  }

  const width = (canvas.width =
    imgElement.naturalWidth || imgElement.offsetWidth || imgElement.width);
  const height = (canvas.height =
    imgElement.naturalHeight || imgElement.offsetHeight || imgElement.height);

  //* 캔버스의 크기를 줄여서 성능 향상
  canvas.width = width / 8;
  canvas.height = height / 8;

  context.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

  //* 줄어든 캔버스의 너비 높이의 데이터를 가져온다.
  const imageData = context.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  ).data;
  const length = imageData.length;

  //* rgba -> 4픽셀이므로 4픽셀식 증가시키는데 근접 픽셀의 색상은 비슷하므로 비교 픽셀 크기를 증가시킨다.
  for (let i = 0; i < length; i += 40) {
    averageColor.r += imageData[i];
    averageColor.g += imageData[i + 1];
    averageColor.b += imageData[i + 2];
  }

  const count = length / 40;
  averageColor.r = ~~(averageColor.r / count); // ~~ => convert to int
  averageColor.g = ~~(averageColor.g / count);
  averageColor.b = ~~(averageColor.b / count);

  return averageColor;
});
