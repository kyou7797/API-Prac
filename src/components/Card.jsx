import Grid from '@mui/material/Grid';
import React, { Component } from 'react'
import Slot1 from './Slot1';

const month = ["Jan", "Feb", "Mar", "Api", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

export class Card extends Component {
    render() {
        return (
            <>
                <Grid container columns={12} style={{ background: "#EC4332", paddingTop: "12px", paddingBottom: "12px", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} direction="row"
                    alignItems="center">
                    <Grid item md={2} sx={{ color: "white", m: 0.75, textAlign: 'right' }}>
                        <h2>Kuro</h2>
                    </Grid>
                    <Grid item md={2}></Grid>
                    <Slot1 parentToChild={"Today"} color={"white"} />
                    <Slot1 parentToChild={"Planing"} color={"white"} />
                    <Slot1 parentToChild={"Events"} color={"white"} />
                </Grid>
                <Grid container spacing={1} columns={14} sx={{ mt: 6, p: 2, mb: 0.5 }} direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item md={1.75} sx={{ color: "black", textAlign: 'center' }}>
                        <h2>2023</h2>
                    </Grid>
                    {month.map(e => <Slot1 parentToChild={e} key={e} color={"black"} />)}
                </Grid>
                <hr
                    style={{
                        background: '#CBD4E1',
                        border: 'none',
                        height: '1.5px',
                      }}
                />
            </>
        )
    }
}

export default Card;