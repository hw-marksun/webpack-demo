// Common JS 의 개별 모듈화 => es6 named export
// export const area = (r) => Math.PI * r * r;
// export const circumference = (r) => 2 * Math.PI * r;

exports.area = function(r) {
    return Math.PI * r * r;
};

exports.circumference = function (r) {
    return 2 * Math.PI * r;
};