module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-px2rem')({
            'baseDpr': 2,
            'threeVersion': false,
            'remVersion': true,
            'remUnit': 75,
            'remPrecision': 8
        })
    ]
}