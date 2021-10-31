module.exports = {
  index: async (req, res) => {
    try {
      res.render('index'); // render ke index folder views
    } catch (err) {
      console.log(err);
    }
  },
};
