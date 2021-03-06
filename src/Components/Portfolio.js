/** @format */

import React, { Component } from "react";
import "./Portfolio.css"

class Portfolio extends Component {
	render() {
		if (this.props.data) {
			var projects = this.props.data.projects.map(function (projects) {
				var projectImage = projects.image;
				return (
					<div key={projects.title} className="columns portfolio-item">
						<div className="item-wrap">
							<a
								href={projects.url}
								target="_blank"
								title={projects.title}
								rel="noopener noreferrer">
                <img alt={projects.title} src={projectImage} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>{projects.title}</h5>
										<p>{projects.category}</p>
									</div>
								</div>
								<div className="link-icon">
									<i className="fa fa-link"></i>
								</div>
							</a>
						</div>
						<br />
						<a className="repo-link" target="_blank" href={projects.repo} rel="noopener noreferrer">
							View Project Repo
						</a>
					</div>
				);
			});
		}

		return (
			<section id="portfolio">
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Check Out Some of My Projects.</h1>

						<div
							id="portfolio-wrapper"
							className="bgrid-quarters s-bgrid-thirds cf">
							{projects}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;
