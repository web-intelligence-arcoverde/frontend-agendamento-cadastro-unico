import CircularProgress from '@material-ui/core/CircularProgress'

const Loading = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <CircularProgress />
    </div>
  )
}

export default Loading
