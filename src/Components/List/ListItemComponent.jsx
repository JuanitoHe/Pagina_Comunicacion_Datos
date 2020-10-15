import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FileCopyIcon from '@material-ui/icons/FileCopy';
console.log("public ur",  process.env.PUBLIC_URL)
const descargarArchivo = (urlDelArchivo) => {
  console.log("-------->", process.env.PUBLIC_URL+urlDelArchivo)
  window.open(process.env.PUBLIC_URL+urlDelArchivo, '_blank')
}

export default function SimpleListItem(props) {
  const file = props.file
  return (
    <ListItem button onClick={()=>{descargarArchivo(file.url)}}>
      <ListItemIcon>
        <FileCopyIcon />
      </ListItemIcon>
      <ListItemText primary={file.name} />
    </ListItem>
  );
}
