import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";
import styled from "styled-components";
import MapInput from "../components/Inputs/GoogleMapInput";
import MapDestination from "../components/Inputs/GoogleMapDestination";
import Grid from "@material-ui/core/Grid";

const ImgStyle = styled.img`
	width: 20rem;
	margin-top: 10rem;
`;

const HomeDiv = styled.div`
	margin-top: 10rem;

	text-align: -webkit-center;
`;

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function Home() {
	const classes = useStyles();
	const [value, setValue] = React.useState("Controlled");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<Grid container spacing={3}>
			<Grid item sm={12}>
				<HomeDiv>
					<div>
						<h1>Request A Luxury Car Service</h1>
					</div>
					<form className={classes.root} noValidate autoComplete="off">
						<div>
							<MapInput />
						</div>
						<div>
							<MapDestination />
						</div>
						<Button
							style={{
								background: "black",
								color: "white",
								margin: "1.5rem 0.5rem",
							}}
						>
							Request Now
						</Button>{" "}
						<Button
							style={{
								background: "grey",
								color: "white",
								margin: "1.5rem 0.5rem",
							}}
						>
							Request Later
						</Button>
					</form>
				</HomeDiv>
			</Grid>
		</Grid>
	);
}