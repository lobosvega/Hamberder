const express = require["express"];
const router = express.Router();

router.get("/", function (req,res) {
    res.json({
        message: 'hello world'
    }); 
});

module.export = router;

