const router = require('express').Router();
const Post = require('../../db/schemas/post');
const {
  userProfileProvider,
  userAllFollowers,
  userAllFollowings,
  followOtherUser,
  unfollowOtherUser,
  userAllPosts,
  UserFeed,
  suggestToFollow,
} = require('./usersController');

router.get('/', (req, res) => {
  // console.log(chalk.red(req.user));
  res.send(req.user);
});

router.get('/feed', async (req, res) => {
  try {
    const feed = await UserFeed();
    res.send(feed);
  } catch (error) {
    res.send(error);
  }
});

router.get('/suggestions', async (req, res) => {
  try {
    const suggestions = await suggestToFollow();
    res.send(suggestions);
  } catch (e) {
    res.send(e);
  }
});

router.get('/followers', userAllFollowers);

router.get('/followings', userAllFollowings);

router.get('/:id', userProfileProvider);

router.get('/:id/follow', followOtherUser);

router.get('/:id/unfollow', unfollowOtherUser);

router.get('/profile', (req, res) => {
  res.send(userAllPosts(Post));
});

// router.post('/:id/following', valiteFollow);

module.exports = router;
