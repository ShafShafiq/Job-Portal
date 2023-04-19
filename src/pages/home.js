import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { Box, Card, Container, Stack, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { jobLoadAction } from "../redux/actions/jobAction";
import { useParams } from "react-router-dom";
import CardElement from "../components/CardElement";
//import createPalette from "@mui/material/styles/createPalette";
const Home = ()=>{

    const{jobs , uniqueLocation ,pages , loading} = useSelector(state => state.loadJobs)
    const{palette} = useTheme();
    const dispatch = useDispatch();
    const{ keyword , loc} = useParams();

    const{page , setPage} = React.useState(1);
    const {cat , setCat} = React.useState('');


    useEffect(()=>{
        dispatch(jobLoadAction(page,keyword,cat,loc))
    },[page,keyword,cat,loc])
    return (
        <>
            <Box sx={{bgcolor: "#fafafa" , minHeight:"100vh"}}>
           
                <NavBar/>
                <Header/>

                <Container> 
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <Box sx={{flex:2,p:2}}>
                            <Card sx = {{minWidth: 150 , mb:3,my:3,p:2}}>
                                <Box sx = {{pb:2}}>
                                    <Typography component="h4" sx={{color: palette.secondary.main , fontWeight: 600}}>
                                        Filter using the Category
                                    </Typography>
                                </Box>
                            </Card>
                        </Box>
                        <Box sx={{flex:5,p:2}}>
                            {
                                jobs && jobs.map((job , i) =>(
                                  //  <h1>{job.title}</h1>
                                  <CardElement 
                                     key = {i}
                                     id = {job._id}
                                    jobTitle = {job.title}
                                    description = {job.description}
                                    category = {job.JobType? job.JobType.jobtypeName : "Not Specified"}
                                    location = {job.location}

                                  ></CardElement>
                                ))

                            }
                        </Box>
                    </Stack>
                 </Container>
            {/* <h1>Home</h1> */}

                </Box>
        </>
    )
}

export default Home;
