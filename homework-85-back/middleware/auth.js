const auth = (req, res, next) => {

    const token = req.get('Authorization');
    if (!token) {
        return res.status(401).send({error: "Token not provided!"});
    }

  next();
};