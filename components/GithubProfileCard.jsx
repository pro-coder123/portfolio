import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col lg="8" className="order-lg-1">
							<p className="lead text-white mt-3">
								Wanna reach out to me? My inbox is open.
							</p>
							<div className="icon-shape shadow rounded text-info">
								<i className="fa fa-envelope-open mr-3"/> <a href="mailto: varun.mukundhan@gmail.com" className="text-info">varun.mukundhan@gmail.com</a> <br/>
							</div>
							<div className="icon-shape shadow rounded text-info">
								<i className="fa fa-solid fa-phone mr-3"/> +918939530620<br/>
							</div>
							<SocialLinks />
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
