import Grid from '@mui/material/Grid';
import React, { Component } from 'react'
import Slot1 from './Slot1';
import Typography from '@mui/material/Typography';
import pic from '../img/red-hong-20180727.jpg'


const month = ["Jan", "Feb", "Mar", "Api", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

export class Card extends Component {
    render() {
        return (
            <>
                <Grid container columns={11} style={{ background: "#EC4332", paddingTop: "12px", paddingBottom: "12px", borderTopLeftRadius: "12px", borderTopRightRadius: "12px", height: "11%" }} direction="row"
                    alignItems="center">
                    <Grid item md={2} sx={{ color: "white", p: 0.75, textAlign: 'right' }}>
                        <Typography variant="h6" color="white">Kuro</Typography>
                    </Grid>
                    <Grid item md={2}></Grid>
                    <Slot1 parentToChild={"Today"} color={"white"} />
                    <Slot1 parentToChild={"Planing"} color={"white"} />
                    <Slot1 parentToChild={"Events"} color={"white"} />
                </Grid>
                <Grid container spacing={1} columns={14} sx={{ pb: 2, pt: 5.5, height: "14%", borderBottom: 1, borderColor: "#CBD4E1" }} direction="row"
                    justifyContent="center"
                    alignItems="center" >
                    <Grid item md={1.75} sx={{ color: "black", textAlign: 'center' }}>
                        <Typography variant="h6" color="black">2023</Typography>
                    </Grid>
                    {month.map(e => <Slot1 parentToChild={e} key={e} color={"black"} />)}
                </Grid>
                <Grid container columns={12} direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "11%", borderBottom: 1, borderColor: "#CBD4E1" }}>
                    <Grid md={6} sx={{ textAlign: 'center', borderRight: 1, height: "100%", borderColor: "#CBD4E1" }} container direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Typography variant="h5" color="#EC4332" display="inline" sx={{ mr: 0.5 }}>June,</Typography>
                        <Typography variant="h6" color="initial" display="inline">2023</Typography>
                    </Grid>
                    <Grid md={6} sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" color="#4DE1E8" display="inline" sx={{ mr: 0.5 }}>Saturday,</Typography>
                        <Typography variant="h5" color="initial" display="inline" sx={{ mr: 0.2 }}>5</Typography>
                        <Typography variant="h6" color="initial" display="inline">th</Typography>
                    </Grid>
                </Grid>
                <Grid container columns={12} direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "65%" }}>
                    <Grid md={6} sx={{ textAlign: 'center', borderRight: 1, height: "100%", borderColor: "#CBD4E1" }} container direction="row"
                        justifyContent="center"
                        alignItems="center">
                        Calendar
                    </Grid>
                    <Grid md={6} sx={{ textAlign: 'center' }}>
                        List
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default Card;