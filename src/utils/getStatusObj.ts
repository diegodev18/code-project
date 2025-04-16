export default (
  id: string,
  status: number,
  file: string,
  lang: string,
  uuid: string,
) => {
  const obj = JSON.stringify({
    id_project: id,
    status: status,
    file: file,
    lang: lang,
    uuid: uuid,
  });
  return obj;
};
