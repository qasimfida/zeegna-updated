const formatSize = (s) => {
  let size;
  if (s >= 1024 * 1024 * 1024) {
    // Greater than or equal to 1 GB
    size = `${(s / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  } else if (s >= 1024 * 1024) {
    // Greater than or equal to 1 MB
    size = `${(s / (1024 * 1024)).toFixed(2)} MB`;
  } else if (s > 1024 * 100) {
    // Greater than 100 KB
    size = `${(s / 1024).toFixed(2)} KB`;
  } else {
    size = `${s} bytes`;
  }
  return size;
};

export default formatSize;