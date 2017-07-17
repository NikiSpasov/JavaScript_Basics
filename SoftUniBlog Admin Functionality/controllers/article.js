const Article = require('mongoose').model('Article');

function validateArticle(articleArgs, req) {
    let errorMsg = '';
    if(!req.isAuthenticated()){
        errorMsg = 'You should be logged in to oprate with articles!'
    } else if (!articleArgs.title){
        errorMsg = 'Invalid title!';
    } else if (!articleArgs.content){
        errorMsg = 'Invalid content!';
    }

    return errorMsg;
}

module.exports = {
    createGet: (req, res) => {
        res.render('article/create');
    },

    createPost: (req, res) => {

        let articleArgs = req.body;

        let errorMsg = validateArticle(articleArgs, req);

        if (errorMsg) {
            res.render('article/create', {error: errorMsg});
            return;
        }

        articleArgs.author = req.user.id;
        Article.create(articleArgs).then(article => {
            req.user.articles.push(article.id);
            req.user.save(err => {
                if (err) {
                    res.redirect('/', {error: err.message});
                } else {
                    res.redirect('/');
                }
            })
        })
    },


    details: (req, res) => {
        let id = req.params.id;

        Article.findById(id).populate('author').then(article => {
            if(!req.user) {
                res.render('article/details', { article: article, isUserAuthorized: false});
                return;
            }
            req.user.isInRole('Admin').then(isAdmin => {
                let isUserAuthorized = isAdmin || req.user.isAuthor(article);

                res.render('article/details', { article: article, isUserAuthorized:isUserAuthorized});
            });

        })
    },

    editGet: (req, res) => {
        let id = req.params.id;

        if (!req.isAuthenticated()) {
            let returnUrl = `/article/edit/${id}`;
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        Article.findById(id).then(article => {
            req.user.isInRole('Admin').then(isAdmin => {
                if (!isAdmin && !req.user.isAuthor(article)) {
                    res.redirect('/');
                    return;
                }
                res.render('article/edit', article)
            })
        })
    },

    editPost: (req, res) => {
        let id = req.param.id;
        let articleArgs = req.body;
        let errorMsg = validateArticle(articleArgs, req);

        if(!articleArgs.title){
            errorMsg = 'Article title cannot be empty';
        } else if (!articleArgs.content){
            errorMsg = 'Article content cannot be empty';
        }

        if(errorMsg) {
            res.render('article/edit', {error: errorMsg});
        } else{
            Article.update({_id: id}, {$set: {
                title: articleArgs.title,
                content: articleArgs.content
            }}).then(updateStatus => {
                res.redirect(`/article/details/${id}`)
            });
        }
    },

    deleteGet: (req, res) => {
        let id = req.params.id;
         if(!req.isAuthenticated()){
             let returnUrl = `article/delete/${id}`;
             req.session.returnUrl = returnUrl;

             res.redirect('/user/login');
         }



        Article.findById(id).then(article => {
            req.user.isInRole('Admin').then(isAdmin => {
                if(!isAdmin && !req.user.isAuthor(article)){
                    res.redirect('/');
                    return;
                }
                res.render('article/delete', article)

            });

        });

    },

    deletePost: (req, res) => {
        let id = req.params.id;
        Article.findByIdAndRemove(id).then(article => {
            let index = req.user.articles.indexOf(article.id);
            req.user.articles.splice(index, 1);
            req.user.save(err => {
                if (err) {
                    res.redirect('/', {error: err.message});
                } else {
                    res.redirect('/')
                }
            })
        })

    }
};