/**
 * calcurate
 * @typedef {Object}
 * @method calculateUploadTime - 게시물이 업로드 된 시간을 계산한다.
 *    @param {number} 게시물이 업로드된 시간
 *    @return {string} 게시물 업로드 시간과 현재 시간의 차이를 계산
 */
export const calcurate = {
  calculateUploadTime(date) {
    const SEC = 1000;
    const MIN = SEC * 60;
    const HOUR = MIN * 60;
    const DAY = HOUR * 24;
    const WEEK = DAY * 7;
    const MON = DAY * 30;
    const YEAR = DAY * 365;

    const cur = Date.now() - new Date(date);
    const seconds = `${parseInt(cur / SEC)}초 전`;
    const minutes =
      Number(cur / MIN) >= 1 ? `${parseInt(cur / MIN)}분 전` : false;
    const hours =
      Number(cur / HOUR) >= 1 ? `${parseInt(cur / HOUR)}시간 전` : false;
    const days = Number(cur / DAY) >= 1 ? `${parseInt(cur / DAY)}일 전` : false;
    const weeks =
      Number(cur / WEEK) >= 1 ? `${parseInt(cur / WEEK)}주 전` : false;
    const months =
      Number(cur / MON) >= 1 ? `${parseInt(cur / MON)}달 전` : false;
    const years =
      Number(cur / YEAR) >= 1 ? `${parseInt(cur / YEAR)}년 전` : false;

    return years || months || weeks || days || hours || minutes || seconds;
  },
};
