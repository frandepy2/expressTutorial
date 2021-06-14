module.exports = (app,passport)=>{
    app.get('/', (req,res)=>{
        res.render('index');
    });

    app.get('/login',(req,res)=>{
        res.render('login',{
            message : req.flash('loginMessage')
        });
    })

    app.post('/login',(req,res)=>{
        console.log("peticion post");
    });

    app.get('/signup',(req,res)=>{
        res.render('singup',{
            message : req.flash('singupmessage')
        });
    })

    app.post('/signup',(req,res)=>{
        console.log("peticion de registro");
    })

}