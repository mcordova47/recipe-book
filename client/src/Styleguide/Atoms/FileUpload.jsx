import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import exifOrient from 'exif-orient'
import exif from 'exif-js'

const useStyles = makeStyles(() => ({
  input: {
    display: 'none',
  },
}))

// TODO: Show progress indicator while re-orienting image
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
          onChange={uploadImage(onChange)}
        />
        <label htmlFor={id}>
          {button}
        </label>
    </>
  )
}

const uploadImage = cb => e => {
  const file = e.target.files && e.target.files[0]
  exif.getData(
    file,
    () => {
      const reader = new FileReader()
      reader.onload = e => exifOrient(
        e.target.result,
        file.exifdata.Orientation || 1,
        (err, canvas) => {
          if (err) {
            console.error(err)
          }
          cb(canvas.toDataURL())
        }
      )
      reader.readAsDataURL(file)
    }
  )
}
