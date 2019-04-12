module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hos geldin **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};
