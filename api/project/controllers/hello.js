module.exports = {
  index: async ctx => {
    console.log(ctx.state.user);
    ctx.send("Hellow");
  }
};
