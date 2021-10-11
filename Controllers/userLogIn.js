const userUtil = require('../helper/helper');

module.exports = {
    login:  (req, res) => {
        try {
            const checkEmail = userUtil.userNormalizator(req.body);
            res.json(checkEmail);
        } catch (e) {
            res.json(e.message);
        }
    },
};
