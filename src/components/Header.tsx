import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

//COLORS
// blue "primary"
// purple "secondary"
//green and red "success" "error"
const Header = () => {
  return (
    <div className='flex justify-between m-4'>
        <h1>Umusare</h1>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="secondary">
            Log In
          </Button>
          <Button variant="outlined" color="secondary">
            Sign Up
          </Button>
        </Stack>
    </div>
  )
}

export default Header
