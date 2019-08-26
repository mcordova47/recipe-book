import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  input: {
    display: 'none',
  },
}))

export const FileUpload = ({ id, button, multiple, accept, capture, onChange }) => {
  const classes = useStyles()
  return (
    <>
      <input
          accept={accept}
          className={classes.input}
          id={id}
          multiple={multiple}
          type="file"
          capture={capture}
          onChange={e => {
            console.log(e)
            const reader = new FileReader()
            reader.onload = e => {
              console.log(e)
              onChange(e.target.result)
            }
            const file = e.target.files && e.target.files[0]
            console.log(file)
            if (file) {
              reader.readAsDataURL(file)
            }
          }}
        />
        <label htmlFor={id}>
          {button}
        </label>
    </>
  )
}
