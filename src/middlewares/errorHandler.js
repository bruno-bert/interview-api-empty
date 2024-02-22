class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
    }
  }
  
  const errorHandler = (err, req, res, next) => {
    console.error(err);
    if (err instanceof ValidationError) {
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: 'Internal server error.' });
  };
  
  module.exports = errorHandler;
  