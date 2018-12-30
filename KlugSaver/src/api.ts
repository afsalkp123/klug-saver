import axios from 'axios';
import { Buffer } from 'buffer';

export const postExpense = (data: any) => axios({
  method: 'post',
  url: 'https://9so0o0nevi.execute-api.ap-southeast-1.amazonaws.com/prod/expense',
  data
});

export const getExpenses = ({ from }: any) => axios({
  method: 'get',
  url: `https://9so0o0nevi.execute-api.ap-southeast-1.amazonaws.com/prod/expense`,
  params: {
    from
  }
});

export const removeExpense = (id: string) => axios({
  method: 'delete',
  url: `https://9so0o0nevi.execute-api.ap-southeast-1.amazonaws.com/prod/expense/${id}`
});

const DOWNLOAD_URL = 'https://content.dropboxapi.com/2/files/download';
const UPLOAD_URL = 'https://content.dropboxapi.com/2/files/upload';

export function getArchiveContents(filePath: string, token: string) {
  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Dropbox-API-Arg': JSON.stringify({
        path: filePath
      })
    }
  };
  return fetch(DOWNLOAD_URL, fetchOptions).then(res => res.text());
}

export function putArchiveContents(filePath: string, textContents: any, token: string) {
  const buff = new Buffer(textContents, 'utf8');
  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/octet-stream',
      'Dropbox-API-Arg': JSON.stringify({
        path: filePath,
        mode: 'overwrite'
      })
    },
    body: buff
  };
  return fetch(UPLOAD_URL, fetchOptions);
}
