import request from 'request';

var requestRoot = '';

export default httpUtil = {
  fetchNotes() {
    request
      .get(requestRoot + '/notes')
      .on('response', function (response) {
        if (response.statusCode == 200) {
          var json = response.json();
          typeof successCallback === 'function' && successCallback(json);
        }
        else {
          typeof failCallback === 'function' && failCallback(json.errMsg || '加载失败，请刷新重新加载');
        }
      })
      .on('error', function () {
        typeof failCallback === 'function' && failCallback(json.errMsg || '加载失败，请刷新重新加载');
      });
  },

  updateNotes(notes, successCallback, failCallback) {
    request
      .post(requestRoot + '/notes')
      .on('response', function (response) {
        if (response.statusCode == 200) {
          var json = response.json();
          typeof successCallback === 'function' && successCallback(json);
        }
        else {
          typeof failCallback === 'function' && failCallback(json.errMsg || '同步失败，请稍后再试');
        }
      })
      .on('error', function () {
        typeof failCallback === 'function' && failCallback('同步失败，请稍后再试');
      });
  },
};