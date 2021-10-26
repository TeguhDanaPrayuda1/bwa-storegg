module.exports = {
  index: async (req, res) => {
    try {
      res.render('index', {
        title: 'Teguh Dana Prayuda',
      }); // render ke index folder views
    } catch (err) {
      console.log(err);
    }
  },
};
