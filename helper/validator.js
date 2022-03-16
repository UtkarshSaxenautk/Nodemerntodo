exports.createpostvalidator = (req , res , next) =>{
    req.check("title" , "Write a title").nonEmpty();
    req.check("title" , "Title must between char 5 to 150").isLength({
        min : 4,
        max : 150
    });
    req.check("body" , "Write a body").nonEmpty();
    req.check("body" , "Body must between char 5 to 150").isLength({
        min : 4,
        max : 2000
    });
    const errors = req.validationErrors()
    if(errors) {
        const firstError = errors.map((error) => err.msg)[0]
        return res.status(400).json({ error: firstError})
    }
    next();
};