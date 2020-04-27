const error404 = (req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
}

const sendError = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  })
}

module.exports = {error404, sendError}
