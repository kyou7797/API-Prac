import { Grid, Box, Typography } from '@mui/material'
import React, { Component } from 'react'

export class Slot1 extends Component {
  render() {
    return (
        <Grid item md={1} sx={{ p: 0.75, textAlign: 'center'}}>
            <Typography variant="h7" color={this.props.color}>{this.props.parentToChild}</Typography>
        </Grid>
    )
  }
}

export default Slot1