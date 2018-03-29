import 'whatwg-fetch';

class Loading {
  constructor(options) {
    this.options = options;
  }

  async init() {
    const { resources, onStart, onProgress, onComplate } = this.options;
    let current = 0;
    let flag = true;
    onStart(resources.length);
    for (var i = 0; i < resources.length; i++) {
      flag = await fetch(resources[i])
        .then(res => {
          if (res.status === 200) {
            current++;
            onProgress(
              current,
              // Math.round(current * 100 / resources.length),
              resources.length
            );
          } else {
            console.error(res.status);
            return false;
          }
        })
        .catch(err => {
          console.error(err);
          return false;
        });
    }
    // if (flag) {
    onComplate(resources.length);
    // } else {
    // return false;
    // }
  }
}

export { Loading };
