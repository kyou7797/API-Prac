import Grid from '@mui/material/Grid';
import React, { Component } from 'react'
import Slot1 from './Slot1';
import Typography from '@mui/material/Typography';



const month = ["Jan", "Feb", "Mar", "Api", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

export class Card extends Component {
    render() {
        return (
            <>
                <Grid container columns={11} style={{ background: "#EC4332", paddingTop: "12px", paddingBottom: "12px", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} direction="row"
                    alignItems="center">
                    <Grid item md={2} sx={{ color: "white", m: 0.75, textAlign: 'right' }}>
                        <Typography variant="h5" color="white">Kuro</Typography>
                    </Grid>
                    <Grid item md={2}></Grid>
                    <Slot1 parentToChild={"Today"} color={"white"} />
                    <Slot1 parentToChild={"Planing"} color={"white"} />
                    <Slot1 parentToChild={"Events"} color={"white"} />
                </Grid>
                <Grid container spacing={1} columns={14} sx={{ mt: 2.5, pb: 2, pt: 2, mb: 0.5 }} direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item md={1.75} sx={{ color: "black", textAlign: 'center' }}>
                        <Typography variant="h5" color="black">2023</Typography>
                    </Grid>
                    {month.map(e => <Slot1 parentToChild={e} key={e} color={"black"} />)}
                </Grid>
                <div style={{ flex: 1, backgroundColor: "#CBD4E1", height: "1px" }} />
                <Grid container columns={12} direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid md={6} sx={{ textAlign: 'center', borderRight: 1, pb: 2.5, pt: 3, borderColor: "#CBD4E1" }}>
                        <Typography variant="h4" color="#EC4332" display="inline" sx={{ mr: 0.5 }}>June,</Typography>
                        <Typography variant="h5" color="initial" display="inline">2023</Typography>
                    </Grid>
                    <Grid md={6} sx={{ textAlign: 'center', pb: 2.5, pt: 3 }}>
                        <Typography variant="h4" color="#4DE1E8" display="inline" sx={{ mr: 0.5 }}>Saturday,</Typography>
                        <Typography variant="h4" color="initial" display="inline" sx={{ mr: 0.2 }}>5</Typography>
                        <Typography variant="h6" color="initial" display="inline">th</Typography>
                    </Grid>
                </Grid>
                <div style={{ flex: 1, backgroundColor: "#CBD4E1", height: "1px" }} />
            </>
        )
    }
}

export default Card;