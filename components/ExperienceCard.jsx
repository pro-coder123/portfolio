import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Col,
} from "reactstrap";

import { Fade } from "react-reveal";

const ExperienceCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade left duration={2000}>
				<Card
					style={{ flex: 1 }}
					className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
				>
					<CardBody className="">
						<img
							src={data.companylogo}
							style={{
								objectFit: "cover",
								left: 0,
								right: 0,
								top: "7rem",
								marginLeft: "auto",
								marginRight: "auto",
								width: "8rem",
								height: "8rem",
								borderRadius: "50%",
							}}
							className="shadow mb-3"
							alt={data.companylogo}
						/>
						<CardTitle tag="h4" className="mb-2">
							{data.company}
						</CardTitle>
						<CardTitle tag="h5" className="mb-4">
							<a href={data.link} target="_blank" rel="noopener" className="link-primary">{data.link_desc}</a>
						</CardTitle>
						<CardSubtitle tag="h5" className="mb-2">
							{data.role}
						</CardSubtitle>
						<CardSubtitle>{data.date}</CardSubtitle>
						<CardText
							tag="div"
							className="description my-3 text-left"
						>
							{data.desc}
							<br/><br/>
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
										return <div key={desc}><li>{desc}</li><br/></div>;
									  })
									: null}
							</ul>
						</CardText>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ExperienceCard;
