const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const checkAuthenticated = require('../../utils/checkAuthenticated');

router.get('/', checkAuthenticated, async (req, res) => {
    const postData = await Post.findAll({include: [
      {
        model: Comment,
      },
      {
        model: User,
      }
    ]}).catch((err) => { 
      res.json(err);
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("posts", posts);
    });
//get a post specified by id along with its comments
router.get('/:id', checkAuthenticated, async (req, res) => {
  try{ 
      const postData = await Post.findByPk(req.params.id,
        {include: [
          {
              model: Comment,
          },
          {
              model: User,
          }
      ]}
      );
      if(!postData) {
          res.status(404).json({message: 'No post with this id!'});
          return;
      }
      const post = postData.get({ plain: true });
   //   res.render('post', post);
    } catch (err) {
        res.status(500).json(err);
    };     
});
//create a new post
router.post('/', checkAuthenticated, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
   //   user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;