import { Loading } from './loading';
import data from './data.json';
const { data: resources } = data;
const opts = {
  resources,
  onStart: total => {
    console.log(`${total} resources.`);
  },
  onProgress: (current, total) => {
    console.log(current);
    document.body.innerHTML = `${current}/${total}`;
  },
  onComplate: total => {
    console.log(`${total} complate.`);
  }
};

new Loading(opts).init();
