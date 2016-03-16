import React from 'react';

class Dashboard extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        let data = this.props.data;
        return (
            <div className="container">
                <div className="row-fluid" style={{padding-top: 2.5 + 'em'}}>
                    <div className="col-lg-8">
                        <div className="flip">
					       <div className="card">
						      <div className="face front">
						          <div className="panel panel-default">
								      <div className="panel-heading" style={{text-align: 'center'}}>
                                          <h4>{this.props.title}</h4> 
										      <span className="fa fa-phone dash-span"></span>
											  <span className="fa fa-check dash-span"></span>
										      <span className="fa fa-map-marker dash-span"></span>
											      <div className="panel-body" style={{height: 25 + 'em'}}>
												      <div className="row-fluid" style={{height: 100 + '%'}}>
													      <div className="col-lg-6" style={{height: 100 + '%'}}></div>
																textarea(style='width: 100%; height: 100%; border-size: 1em; resize: none;') It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

															.col-lg-6(style='height: 100%; padding-right: 0;')
																.row-fluid(style='text-align: center; padding-bottom: 3em;')
																	span.fa.fa-anchor(style='font-size:2em; padding-right: 0.25em;padding-left:0.25em;')
																	span.fa.fa-bank(style='font-size:2em; padding-right: 0.25em;padding-left:0.25em;')
																	span.fa.fa-bus(style='font-size:2em; padding-right: 0.25em;padding-left:0.25em;')
																	span.fa.fa-compass(style='font-size:2em; padding-right: 0.25em;padding-left:0.25em;')
																.row-fluid
																	.col-lg-6(style='padding-right: 0; padding-left: 0;')
																		p(style='font-size: 1.2em; text-align: center;') Expected Time of Arrival: 15 min
																		p(style='height: 80%; font-weight: bold; font-size: 4em; text-align: center;') 15
																	.col-lg-6(style='padding-right: 0; padding-left: 0;')
																		p(style='font-size: 1.2em; text-align: center;') Total expected manpower
																		p(style='height: 80%; font-weight: bold; font-size: 4em; text-align: center;') 150
																.row-fluid
																.row(style='padding-top: 35%; padding-left: 20%;')
																	input.slider(type='text', name='somename', data-provide='slider', data-slider-ticks='[1, 2, 3, 4]', data-slider-ticks-labels='["arising", "rekindling", "urgent", "critical"]', data-slider-min='1', data-slider-max='4', data-slider-step='1', data-slider-value='3', data-slider-tooltip='hide')
											.face.back
													.panel.panel-default
															.panel-heading(style='text-align: center;')
																	h4 mappie
																	.a.fa.fa-undo
															#map-container.map-content
																	script(src='http://maps.google.com/maps/api/js?v=3.exp')
																	script(src='/javascripts/map.js')

					.col-lg-4
						.panel.panel-default.card
							.panel-heading(style='height: 6.2em; text-align: center;')
								h4(style='margin-top: 1.25em;') Arrival Contacts
							.panel-body(style='height: 25em;')
                <Header title={data.title}></Header>
                <Description content={data.note}></Description>
                <ProgressBar current={data.available_manpower} max={data.required_manpower}></ProgressBar>
                <Footer location={data.location_name} skills={data.general_requirements}></Footer>
            </div>
        );
    }
}

export default Dashboard;