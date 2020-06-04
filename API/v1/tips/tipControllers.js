const Tip = require('./tipsModel');

module.exports = {
    getAll: (req, res, next) => {
        console.log('getAll');
    },
    getTip: (req, res, next) => {
        console.log('getTip');
    },
    getTipByCategory: (req, res, next) => {
        console.log('getTipByCategory');
    },
    getTipByHash: (req, res, next) => {
        console.log('getTipByHash');
    },
    addTip: (req, res, next) => {
        console.log('addTip');
    },
    updateTip: (req, res, next) => {
        console.log('updateTip');
    },
    deleteTip: (req, res, next) => {
        console.log('deleteTip');
    }
}