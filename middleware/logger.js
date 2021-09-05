//@desc Log request to console

const logger = (req, res, next) => {
  console.log(`${req.method}`);
};
