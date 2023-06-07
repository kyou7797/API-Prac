import Grid from '@mui/material/Grid';
import React, { Component } from 'react'
import Slot1 from './Slot1';

const month = ["Jan", "Feb", "Mar", "Api", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

export class Card extends Component {
    render() {
        return (
            <>
                <Grid container columns={12} sx={{bgcolor:"#EC4332", pb: 1.5, pt: 1.5}}>
                    <Grid item md={2} sx={{color:"white", m: 0.75,  textAlign: 'right'}}>
                        <h3>Kuro</h3>
                    </Grid>
                    <Grid item md={2}></Grid>
                    <Slot1 parentToChild={"Today"} />
                    <Slot1 parentToChild={"Planing"} />
                    <Slot1 parentToChild={"Events"} />
                </Grid>
                <Grid container spacing={1} columns={12}>
                    {month.map(e => <Slot1 parentToChild={e} key={e}/>)}
                </Grid>
            </>
        )
    }
}

export default Card;