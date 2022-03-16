const post = require('../model/post')

exports.getposts = (req , res) => {
    res.json({
        posts: [{title: "First post"} , {title : "Second post"}]
    });
};

exports.createpost = (req , res) => {
    const post1 = new post(req.body)
    console.log("Creating post : " , req.body);
    post1.save((err , result) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        res.status(200).json({
            post1:result
        });
    });
    /*post1.save().then(result =>{
          res.status(200).json({
              post1 : result
          });
    });*/
};










/*const address = (req , res) =>{
    res.json({
        posts: [{ title: "First" }, { title: "second" }],
        name: [{ title : "p1"} , { title : "p2"}],
        value: [{value : 90} , {value : 80}]

    });
};

/*const address2 = (req , res) =>{
    res.json({
        posts: [{ title: "1st"} , { title: "2nd"}],
        marks: [{ mark: 90} , { mark: 98}]
    });
};*/

/*module.exports = {
    address 
}*/