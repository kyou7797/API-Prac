import { Grid } from '@mui/material'
import React, { Component } from 'react'

export class Slot1 extends Component {
  render() {
    return (
        <Grid item md={1} sx={{color:this.props.color, p: 0.75, textAlign: 'center'}}>
            <h3 sx={{fontWeight: 'light'}}>{this.props.parentToChild}</h3>
        </Grid>
    )
  }
}

export default Slot1