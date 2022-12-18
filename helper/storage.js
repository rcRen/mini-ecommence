export default {
  get: (key) => {
    // console.info(global);
    let data = null;
    if (global.window != undefined && window.localStorage != undefined) {
      data = localStorage.getItem(key);
    }

    return data ? JSON.parse(data) : null;
  },
  set: (key, value) => {
    const data = typeof value === 'object' ? JSON.stringify(value) : value;

    localStorage.setItem(key, data);
  },
};
