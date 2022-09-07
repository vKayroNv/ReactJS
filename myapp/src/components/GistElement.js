import { Avatar, Link } from "@mui/material";

export default function GistElement(props) {
  const { id, owner, files } = props.gist;
  
  const getData = (url) => {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);

      var data = xhr.responseText.split('\n');

      for (var i = 0; i < 5; i++) {
        if (data[i] && data[i].length > 150) {
          data[i] = data[i].slice(0, 150) + "...";
        }
      }

      if (data.length > 4)
        return [...data.slice(0, 4), "..."];
      else
        return data;
    }
    catch (err) {
      return ["Загрузка не удалась", `Error: ${err.message}`];
    }
  }

  return(
    <div className="gist-row" key={id}>
        <div className="gist-row-header">
          <Avatar src={owner.avatar_url}/>
          <Link underline="none" target="_blank" rel="noreferrer" href={owner.html_url}>{owner.login}</Link>
        </div>
        {
          Object.values(files).map((file, index) => (
            <div className="gist-row-content" key={index}>
              <div className="gist-row-content-filename">
                <a target="_blank" rel="noreferrer" href={file.raw_url}>
                  {file.filename} ({file.size} bytes)
                </a>
              </div>
              <div className="gist-row-content-code" >
                { getData(file.raw_url).map((obj, index)=>(<p key={index}>{obj}</p>)) }
              </div>
            </div>
          ))
        }
      </div>
  )
}